import React from "react";

const availableStates = ["Florida", "Texas", "Oklahoma"];

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

export default function StateFilter({
  themeMode,
  selectedStates,
  setSelectedStates,
}) {
  console.log("🧪 StateFilter props received:", {
    selectedStates,
    setSelectedStates,
    typeOfSetter: typeof setSelectedStates,
  });

  const handleToggleState = (state) => {
    setSelectedStates((prevSelected) =>
      prevSelected.includes(state)
        ? prevSelected.filter((s) => s !== state)
        : [...prevSelected, state]
    );
  };

  const clearSelection = () => setSelectedStates([]);

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
          const isSelected = selectedStates.includes(state);

          return (
            <label
              key={state}
              htmlFor={stateId}
              className={`flex items-center justify-start px-3 py-[10px] h-[40px] border rounded text-sm font-semibold tracking-[-0.85px] transition-all duration-250
              ${
                isAvailable
                  ? themeMode === "dark-mode"
                    ? "border-[#3f3f3f] bg-[#3a3a3a] text-white hover:border-[#f5f5f5] hover:text-cyan-300 cursor-pointer"
                    : "bg-[#dbd5d7b9] text-black border-[lightgray] hover:bg-[#333] hover:border-[black] hover:text-gray-300 cursor-pointer"
                  : `opacity-50 cursor-not-allowed ${
                      themeMode === "dark-mode"
                        ? "border-[#3d3d3d] bg-transparent text-gray-500"
                        : "bg-transparent border-[lightgray] text-gray-500"
                    }`
              }
              ${
                isSelected
                  ? themeMode === "dark-mode"
                    ? "border-black bg-[#1f1f1f] hover:bg-[#181818] text-cyan-300"
                    : "border-cyan-200 bg-[#1f1f1f] text-white hover:bg-[#181818]"
                  : ""
              }`}
            >
              <input
                type="checkbox"
                id={stateId}
                name="state"
                disabled={!isAvailable}
                checked={isSelected}
                onChange={() => handleToggleState(state)}
                className="mr-2 accent-cyan-200 w-[14px] h-[14px]"
              />
              {state}
            </label>
          );
        })}
      </div>
    </div>
  );
}
