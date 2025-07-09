// src/utils/duplicateProperty.js
import { getDoc, setDoc, doc, collection, getDocs } from "firebase/firestore";
import { db } from "./firebase.js"; // Make sure this points to your correct db export

const generateNextPropertyId = async (statePrefix, countyName) => {
  const cleanCounty = countyName
    .toLowerCase()
    .replace(/\s+/g, "") // remove spaces
    .replace(/county$/, ""); // remove 'county' suffix

  const finalPrefix = `${statePrefix}_${cleanCounty}`;
  const colRef = collection(db, "properties");
  const snapshot = await getDocs(colRef);

  const ids = snapshot.docs
    .map((doc) => doc.id)
    .filter((id) => id.startsWith(finalPrefix))
    .map((id) => {
      const match = id.match(/^.+_(\d{5})$/);
      return match ? parseInt(match[1]) : null;
    })
    .filter((n) => n !== null);

  const max = ids.length > 0 ? Math.max(...ids) : 0;
  const nextNum = (max + 1).toString().padStart(5, "0");
  return `${finalPrefix}_${nextNum}`;
};

export const duplicateProperty = async (
  sourceId,
  statePrefix = "tx",
  countyName = "default"
) => {
  const sourceRef = doc(db, "properties", sourceId);
  const sourceSnap = await getDoc(sourceRef);

  if (!sourceSnap.exists()) {
    throw new Error(`Source document "${sourceId}" does not exist`);
  }

  const newId = await generateNextPropertyId(statePrefix, countyName);
  const newRef = doc(db, "properties", newId);

  const data = sourceSnap.data();
  await setDoc(newRef, data);

  console.log(`✅ Duplicated "${sourceId}" ➝ "${newId}"`);
  return newId;
};
