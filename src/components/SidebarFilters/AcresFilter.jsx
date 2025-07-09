import React from "react";

const AcresFilter = ({
  themeMode,
  SidebarBlock,
  searchParams,
  setSearchParams,
  formatNumberWithCommas,
}) => {
  const minAcres = searchParams.get("minAcres") || "";
  const maxAcres = searchParams.get("maxAcres") || "";

  const onlyAllowValidNumbers = (str) => {
    return /^[0-9]*\.?[0-9]*$/.test(str);
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

  const handleAcreageInput = (e, key) => {
    let raw = e.target.value.replace(/,/g, "");

    if (!onlyAllowValidNumbers(raw)) return;

    if (raw.trim() === "") {
      updateParam(key, "");
      return;
    }

    let num = parseFloat(raw);

    if (isNaN(num) || num < 0) {
      updateParam(key, "0");
    } else {
      updateParam(key, Math.min(num, 15000).toString());
    }
  };

  const clearAcres = () => {
    const next = new URLSearchParams(searchParams);
    next.delete("minAcres");
    next.delete("maxAcres");
    setSearchParams(next);
  };

  const parsedMin = parseFloat(minAcres || 0);
  const parsedMax = parseFloat(maxAcres || 0);

  return (
    <div>
      <SidebarBlock themeMode={themeMode} title="Acres" onClear={clearAcres}>
        <div className="flex items-center gap-2">
          <input
            type="text"
            inputMode="decimal"
            value={minAcres !== "" ? formatNumberWithCommas(minAcres) : ""}
            onChange={(e) => handleAcreageInput(e, "minAcres")}
            placeholder="0"
            className={`w-full font-lato placeholder:font-lato ${
              themeMode === "dark-mode"
                ? "bg-[#1a1a1a] border-gray-600 text-white"
                : "bg-[#f5f5f5] border-gray-300 text-gray-800"
            } border px-3 py-2 -tracking-[0.55px]`}
          />
          <span
            className={`${
              themeMode === "dark-mode" ? "text-gray-400" : "text-gray-800"
            } font-semibold text-[20px]`}
          >
            -
          </span>
          <input
            type="text"
            inputMode="decimal"
            value={maxAcres !== "" ? formatNumberWithCommas(maxAcres) : ""}
            onChange={(e) => handleAcreageInput(e, "maxAcres")}
            placeholder="15,000"
            className={`w-full font-lato placeholder:font-lato ${
              themeMode === "dark-mode"
                ? "bg-[#1a1a1a] border-gray-600 text-white"
                : "bg-[#f5f5f5] border-gray-300 text-gray-800"
            } border px-3 py-2 -tracking-[0.55px]`}
          />
        </div>
      </SidebarBlock>

      {minAcres !== "" &&
        maxAcres !== "" &&
        parsedMin > parsedMax && (
          <div className="text-red-600 text-xs mt-2 -tracking-[0.5]">
            Minimum acres cannot exceed maximum.
          </div>
        )}
    </div>
  );
};

export default AcresFilter;
