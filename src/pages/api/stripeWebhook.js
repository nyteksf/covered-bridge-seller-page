import Stripe from "stripe";
import admin from "firebase-admin";
import { buffer } from "micro";

export const config = {
  api: {
    bodyParser: false,
  },
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

if (!admin.apps.length) {
  const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}
const db = admin.firestore();

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

export default async function handler(req, res) {
  const buf = await buffer(req);
  const sig = req.headers["stripe-signature"];

  let event;
  try {
    event = stripe.webhooks.constructEvent(buf, sig, endpointSecret);
  } catch (err) {
    console.error("Webhook error:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const { propertyId } = session.metadata;

    try {
      await db.collection("properties").doc(propertyId).update({
        isPurchased: true,
        purchaseTimestamp: new Date().toISOString(),
      });
      console.log(`Property ${propertyId} marked as purchased.`);
    } catch (err) {
      console.error("Firestore update error:", err);
    }
  }

  res.status(200).end();
}
