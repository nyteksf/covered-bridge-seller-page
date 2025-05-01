import React, { useState } from "react";

const PriceFilter = ({ themeMode, SidebarBlock, formatNumberWithCommas }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(30000000);

  const clearPrice = () => {
    setMinPrice(0);
    setMaxPrice(30000000);
  };

  const parseFormattedNumber = (str) => {
    if (!str) return 0;
    return parseFloat(str.replace(/,/g, ""));
  };

  return (
    <div>
      {console.log(themeMode)}
      <SidebarBlock themeMode={themeMode} title="Price" onClear={clearPrice}>
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={formatNumberWithCommas(minPrice)}
            onChange={(e) => {
              const parsed = parseFormattedNumber(e.target.value);
              setMinPrice(
                parsed >= 0 && parsed <= 30000000 ? parsed : 30000000
              );
            }}
            placeholder="0"
            className={`w-full border font-lato placeholder:font-lato text-white px-3 py-2 -tracking-[0.55px] ${
              themeMode === "dark-mode"
                ? "bg-[#1a1a1a] border-gray-600"
                : "bg-[#f5f5f5] border-gray-300 !text-gray-800"
            }`}
          />
          <span
            className={`font-semibold text-[20px] ${
              themeMode === "dark-mode" ? "text-gray-400" : "text-gray-800"
            }`}
          >
            -
          </span>
          <input
            type="text"
            value={formatNumberWithCommas(maxPrice)}
            onChange={(e) => {
              const parsed = parseFormattedNumber(e.target.value);
              setMaxPrice(
                parsed >= 0 && parsed <= 30000000 ? parsed : 30000000
              );
            }}
            placeholder="30,000,000"
            className={`w-full border font-lato placeholder:font-lato text-white px-3 py-2 -tracking-[0.55px] ${
              themeMode === "dark-mode"
                ? "bg-[#1a1a1a] border-gray-600"
                : "bg-[#f5f5f5] !text-[#181818] border-gray-300"
            }`}
          />
        </div>
      </SidebarBlock>
      {minPrice !== "" &&
        maxPrice !== "" &&
        parseFloat(minPrice) > parseFloat(maxPrice) && (
          <div className="text-red-600 text-xs mt-2 -tracking-[0.5]">
            Minimum price cannot exceed maximum.
          </div>
        )}
    </div>
  );
};

export default PriceFilter;
