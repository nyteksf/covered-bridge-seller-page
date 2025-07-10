const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore();

async function cloneDoc(sourcePath, targetPath) {
  const sourceDoc = await db.doc(sourcePath).get();
  if (!sourceDoc.exists) {
    console.error("Source document does not exist.");
    return;
  }

  const data = sourceDoc.data();
  await db.doc(targetPath).set(data);
  console.log(`Cloned ${sourcePath} → ${targetPath}`);
}

cloneDoc("properties/ok_carbon_00038", "properties/tx_lampasas_00001");
