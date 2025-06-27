import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase";

const stateAbbreviations = {
  alabama: "AL",
  alaska: "AK",
  arizona: "AZ",
  arkansas: "AR",
  california: "CA",
  colorado: "CO",
  connecticut: "CT",
  delaware: "DE",
  florida: "FL",
  georgia: "GA",
  hawaii: "HI",
  idaho: "ID",
  illinois: "IL",
  indiana: "IN",
  iowa: "IA",
  kansas: "KS",
  kentucky: "KY",
  louisiana: "LA",
  maine: "ME",
  maryland: "MD",
  massachusetts: "MA",
  michigan: "MI",
  minnesota: "MN",
  mississippi: "MS",
  missouri: "MO",
  montana: "MT",
  nebraska: "NE",
  nevada: "NV",
  "new hampshire": "NH",
  "new jersey": "NJ",
  "new mexico": "NM",
  "new york": "NY",
  "north carolina": "NC",
  "north dakota": "ND",
  ohio: "OH",
  oklahoma: "OK",
  oregon: "OR",
  pennsylvania: "PA",
  "rhode island": "RI",
  "south carolina": "SC",
  "south dakota": "SD",
  tennessee: "TN",
  texas: "TX",
  utah: "UT",
  vermont: "VT",
  virginia: "VA",
  washington: "WA",
  "west virginia": "WV",
  wisconsin: "WI",
  wyoming: "WY",
};

const generateIncrementalId = async (state, county) => {
  const stateSlug = state.toLowerCase();
  const stateAbbr = stateAbbreviations[stateSlug] || stateSlug.toUpperCase();
  const countyClean = county.replace(/\s+/g, "_");
  const prefix = `${stateAbbr}_${countyClean}_`;

  const counterDoc = doc(db, "counters", `${stateAbbr}_${countyClean}`);
  const counterSnap = await getDoc(counterDoc);

  let counterValue = 0;
  if (counterSnap.exists()) {
    const data = counterSnap.data();
    counterValue = data.value || 0;
  }

  const nextId = `${prefix}${String(counterValue + 1).padStart(5, "0")}`;
  return nextId;
};

export default generateIncrementalId;
