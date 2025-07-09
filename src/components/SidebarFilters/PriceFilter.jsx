import React from "react";

const PriceFilter = ({
  themeMode,
  SidebarBlock,
  searchParams,
  setSearchParams,
  formatNumberWithCommas,
}) => {
  const minPrice = searchParams.get("minPrice") || "";
  const maxPrice = searchParams.get("maxPrice") || "";

  const parseFormattedNumber = (str) => {
    if (!str) return "";
    return str.replace(/,/g, "");
  };

  const updateParam = (key, value) => {
    const next = new URLSearchParams(searchParams);
    if (value === "") {
      next.delete(key);
    } else {
      next.set(key, value);
    }
    setSearchParams(next);
  };

  const clearPrice = () => {
    const next = new URLSearchParams(searchParams);
    next.delete("minPrice");
    next.delete("maxPrice");
    setSearchParams(next);
  };

  const parsedMin = parseFloat(minPrice || 0);
  const parsedMax = parseFloat(maxPrice || 0);

  return (
    <div>
      <SidebarBlock themeMode={themeMode} title="Price" onClear={clearPrice}>
        <div className="flex items-center gap-2">
          <input
            type="text"
            inputMode="numeric"
            placeholder="0"
            value={formatNumberWithCommas(minPrice)}
            onChange={(e) =>
              updateParam("minPrice", parseFormattedNumber(e.target.value))
            }
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
            inputMode="numeric"
            placeholder="30,000,000"
            value={formatNumberWithCommas(maxPrice)}
            onChange={(e) =>
              updateParam("maxPrice", parseFormattedNumber(e.target.value))
            }
            className={`w-full border font-lato placeholder:font-lato text-white px-3 py-2 -tracking-[0.55px] ${
              themeMode === "dark-mode"
                ? "bg-[#1a1a1a] border-gray-600"
                : "bg-[#f5f5f5] !text-[#181818] border-gray-300"
            }`}
          />
        </div>
      </SidebarBlock>

      {minPrice !== "" && maxPrice !== "" && parsedMin > parsedMax && (
        <div className="text-red-600 text-xs mt-2 -tracking-[0.5]">
          Minimum price cannot exceed maximum.
        </div>
      )}
    </div>
  );
};

export default PriceFilter;
