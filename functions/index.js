const Stripe = require("stripe");
const admin = require("firebase-admin");
const functions = require("firebase-functions/v1");
const cors = require("cors")({ origin: true });

// CONFIG
const enableKlarna = false; // toggle to true only when Klarna is tested and supported

admin.initializeApp();
const db = admin.firestore();
const stripe = Stripe(functions.config().stripe.secret);

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

function toTitleCasedId(propertyId) {
  const [state, county, id] = propertyId.split("_");
  return `${state.toUpperCase()}_${capitalize(county)}_${id}`;
}

exports.createCheckoutSession = functions
  .region("us-central1")
  .runWith({ memory: "512MB", timeoutSeconds: 60 })
  .https.onRequest((req, res) => {
    cors(req, res, async () => {
      try {
        const { propertyId } = req.body;

        if (!propertyId) {
          return res.status(400).json({ error: "Missing propertyId." });
        }

        const propertyRef = db.collection("properties").doc(propertyId);
        const propertyDoc = await propertyRef.get();

        if (!propertyDoc.exists) {
          return res.status(404).json({ error: "Property not found." });
        }

        const propertyData = propertyDoc.data();
        const propertyStatus = propertyData?.propertyStatus;

        if (propertyStatus !== "available") {
          return res
            .status(403)
            .json({ error: "This property is not available for checkout." });
        }

        const depositPrice = propertyData?.PTBContent?.depositPrice;
        if (!depositPrice || typeof depositPrice !== "number") {
          return res
            .status(400)
            .json({ error: "Missing or invalid depositPrice." });
        }

        const sessionPayload = {
          mode: "payment",
          payment_method_types: enableKlarna ? ["card", "klarna"] : ["card"],
          billing_address_collection: "required",
          phone_number_collection: { enabled: true },
          line_items: [
            {
              price_data: {
                currency: "usd",
                product_data: {
                  name: `Land Deposit – ${toTitleCasedId(propertyId)}`,
                },
                unit_amount: depositPrice * 100,
              },
              quantity: 1,
            },
          ],
          metadata: {
            propertyId,
            source: "coveredBridge",
          },
          success_url: "https://coveredbridgeproperties.com/thank-you",
          cancel_url: "https://coveredbridgeproperties.com/cancelled",
        };

        if (enableKlarna) {
          sessionPayload.payment_method_options = {
            klarna: {
              preferred_locale: "en-US",
            },
          };
        }

        const session = await stripe.checkout.sessions.create(sessionPayload);
        res.status(200).json({ url: session.url });
      } catch (error) {
        console.error("Stripe session creation failed:", error.message, error);
        res.status(500).json({ error: "Failed to create checkout session" });
      }
    });
  });
