import React from "react";
import MorePropertyCard from "./MorePropertyCard";
import FlatHorizontalDivider from "./FlatHorizontalDivider";

const MoreStateProperties = ({ stateName }) => {
  const capitalizeFirst = (str = "") =>
    str.charAt(0).toUpperCase() + str.slice(1);

  const moreProperties = new Array(17).fill(null); // Replace with real data

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
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-0.5 gap-y-1 px-2 py-4
            `}
          >
            {row.map((_, colIndex) => (
              <MorePropertyCard key={`${rowIndex}-${colIndex}`} />
            ))}
          </div>

          <FlatHorizontalDivider />
        </div>
      ))}
    </section>
  );
};

export default MoreStateProperties;
