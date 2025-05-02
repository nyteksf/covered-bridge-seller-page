import React, { useState } from "react";

const AcresFilter = ({ themeMode, SidebarBlock, formatNumberWithCommas, minAcres, setMinAcres, maxAcres, setMaxAcres }) => {
  const clearAcres = () => {
    setMinAcres(0);
    setMaxAcres(15000);
  };
  
  const onlyAllowValidNumbers = (str) => {
    return /^[0-9]*\.?[0-9]*$/.test(str);
  };

  const handleAcreageInput = (e, setterFn) => {
    let raw = e.target.value.replace(/,/g, "");

    if (!onlyAllowValidNumbers(raw)) {
      return; // Ignore invalid keypresses
    }

    if (raw.trim() === "") {
      setterFn("");
      return;
    }

    let num = parseFloat(raw);

    if (isNaN(num) || num < 0) {
      setterFn(0);
      return;
    }

    setterFn(Math.min(num, 15000));
  };

  return (
    <div>
      <SidebarBlock themeMode={themeMode} title="Acres" onClear={clearAcres}>
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={minAcres !== "" ? formatNumberWithCommas(minAcres) : ""}
            onChange={(e) => handleAcreageInput(e, setMinAcres)}
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
            value={maxAcres !== "" ? formatNumberWithCommas(maxAcres) : ""}
            onChange={(e) => handleAcreageInput(e, setMaxAcres)}
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
        parseFloat(minAcres) > parseFloat(maxAcres) && (
          <div className="text-red-600 text-xs mt-2 -tracking-[0.5]">
            Minimum acres cannot exceed maximum.
          </div>
        )}
    </div>
  );
};

export default AcresFilter;
