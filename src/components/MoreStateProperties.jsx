import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";

import MorePropertyCard from "./MorePropertyCard";
import FlatHorizontalDivider from "./FlatHorizontalDivider";

const MoreStateProperties = ({ stateName, excludeId }) => {
  const [moreProperties, setMoreProperties] = useState([]);

  useEffect(() => {
    const fetchMoreProperties = async () => {
      if (!stateName) return;

      try {
        const q = query(
          collection(db, "properties"),
          where("stateName", "==", stateName), // ✅ DYNAMIC
          where("propertyStatus", "==", "available")
        );

        const querySnapshot = await getDocs(q);
        const results = [];

        querySnapshot.forEach((docSnap) => {
          if (docSnap.id !== excludeId) {
            results.push({ id: docSnap.id, ...docSnap.data() });
          }
        });

        const shuffled = results.sort(() => 0.5 - Math.random()); // ✅ now results has data
        setMoreProperties(shuffled.slice(0, 9));

        console.log("Fetched more properties:", results);
      } catch (err) {
        console.error("Failed to fetch state properties:", err);
      }
    };

    fetchMoreProperties();
  }, [stateName, excludeId]);

  const capitalizeFirst = (str = "") =>
    str.charAt(0).toUpperCase() + str.slice(1);

  if (!moreProperties.length) return null;

  const rows = [];
  for (let i = 0; i < moreProperties.length; i += 3) {
    rows.push(moreProperties.slice(i, i + 3));
  }

  return (
    <section>
      <h2 className="font-montserrat font-bold text-[31px] leading-[34px] text-[#333]">
        More {capitalizeFirst(stateName)} Properties
        <span className="block bg-[#007e7e] w-[150px] h-[2px] mt-[5px] mb-[20px]" />
      </h2>

      {rows.map((row, rowIndex) => (
        <div key={rowIndex}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-2 px-3 py-4">
            {row.map((property) => (
              <MorePropertyCard key={property.id} property={property} />
            ))}
          </div>

          {rowIndex !== rows.length - 1 && <FlatHorizontalDivider />}
        </div>
      ))}
    </section>
  );
};

export default MoreStateProperties;
