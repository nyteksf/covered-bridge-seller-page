// src/utils/runDuplicate.js

import { duplicateProperty } from "./duplicateProperty.js";

// Define the source property ID, new state prefix, and county name
const sourceId = "ok_carbon_00038";
const statePrefix = "tx";
const countyName = "Carbon"; // <-- Make sure this matches PTBContent.countyName

// Run the duplication process
(async () => {
  try {
    const newId = await duplicateProperty(sourceId, statePrefix, countyName);
    console.log(`✅ Created new property: ${newId}`);
  } catch (err) {
    console.error("❌ Duplication failed:", err);
  }
})();
