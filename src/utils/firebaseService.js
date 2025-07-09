import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  orderBy,
} from "firebase/firestore";

const db = getFirestore();

export const getPropertySummaries = async (filters = {}) => {
  let q = collection(db, "properties");

  // Apply filters
  if (filters.status) {
    q = query(q, where("status", "==", filters.status));
  }
  if (filters.minAcres) {
    q = query(q, where("acres", ">=", parseFloat(filters.minAcres)));
  }
  if (filters.maxAcres) {
    q = query(q, where("acres", "<=", parseFloat(filters.maxAcres)));
  }
  if (filters.maxPrice) {
    q = query(q, where("price", "<=", parseFloat(filters.maxPrice)));
  }

  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const getPropertyDetails = async (propertyId) => {
  const docRef = doc(db, "properties", propertyId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  }
  return null;
};
