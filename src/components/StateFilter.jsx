import React, { useState } from "react";

const availableStates = ["North Carolina", "Tennessee", "Georgia", "Oklahoma"];

const allStates = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Kansas",
  "Louisiana",
  "Maine",
  "Massachusetts",
  "Michigan",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nevada",
  "New Mexico",
  "New York",
  "North Carolina",
  "Oklahoma",
  "Oregon",
  "South Carolina",
  "Tennessee",
  "Texas",
  "Utah",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wyoming",
];

export default function StateFilter({ themeMode }) {
  const [selectedStates, setSelectedStates] = useState([]);

  const handleToggleState = (state) => {
    setSelectedStates(
      (prevSelected) =>
        prevSelected.includes(state)
          ? prevSelected.filter((s) => s !== state) // remove if selected
          : [...prevSelected, state] // add if not selected
    );
  };

  const clearSelection = () => {
    setSelectedStates([]);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-[1.58rem]">
        <h3
          className={`text-[24px] font-semibold leading-[30px] tracking-[-0.45px] ${
            themeMode === "dark-mode" ? "text-[#f5f5f5]" : "text-[#181818]"
          }`}
        >
          State
          <span className="block mt-[5px] h-[2px] w-[80%] bg-[#007e7e]" />
        </h3>
        <button
          onClick={clearSelection}
          className="text-xs font-bold border-b pb-[2px] transition-all duration-200 hover:no-underline focus:outline-none tracking-[-0.1px] border-[#3f3f3f] text-[#6e6e6e] hover:text-[#006969]"
        >
          Clear
        </button>
      </div>
      <div className="grid grid-cols-2 gap-x-3 gap-y-2">
        {allStates.map((state) => {
          const isAvailable = availableStates.includes(state);
          const stateId = `checkbox-${state
            .toLowerCase()
            .replace(/\s+/g, "-")}`;
          return (
            <label
              key={state}
              htmlFor={stateId}
              onClick={() => {
                if (isAvailable) handleToggleState(state);
              }}
              className={`flex duration-150 transition-all items-center justify-start px-3 py-[10px] h-[40px] border rounded text-sm font-semibold tracking-[-0.95px] 
    ${
      isAvailable
        ? themeMode === "dark-mode"
          ? "border-[#3f3f3f] border text-white bg-[#1f1f1f] hover:border-[#f5f5f5] hover:text-cyan-300 cursor-pointer"
          : "border-[#444] border !text-white !bg-[#333] opacity-85 cursor-pointer hover:opacity-80"
        : "bg-[#0000] text-gray-300 cursor-not-allowed border"
    }
    ${selectedStates.includes(state) ? "!border-white !text-cyan-300" : "text-[#181818]"}
  `}
            >
              <input
                type="checkbox"
                id={stateId}
                name="state"
                disabled={!isAvailable}
                checked={selectedStates.includes(state)}
                onChange={() => handleToggleState(state)}
                className="mr-2 accent-cyan-300 w-[14px] h-[14px]"
              />
              {state}
            </label>
          );
        })}
      </div>
    </div>
  );
}
