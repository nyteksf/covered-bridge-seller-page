import Stripe from "stripe";
import admin from "firebase-admin";

// ---- INIT STRIPE ----
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// ---- INIT FIREBASE ----
if (!admin.apps.length) {
  const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}
const db = admin.firestore();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end("Method Not Allowed");
  }

  const { propertyId, slug } = req.body;

  if (!propertyId || !slug) {
    return res.status(400).json({ error: "Missing propertyId or slug" });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `Down Payment for ${propertyId}`,
              description: `Secure your property with a $499 deposit.`,
            },
            unit_amount: 49900,
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success?property=${propertyId}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/listing/${slug}`,
      metadata: {
        propertyId,
        slug,
      },
    });

    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error("Stripe session error:", err);
    return res.status(500).json({ error: "Failed to create checkout session" });
  }
}
