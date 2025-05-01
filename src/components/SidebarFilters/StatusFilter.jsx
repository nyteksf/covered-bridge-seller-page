import React, { useState } from "react";

const StatusFilter = ({ themeMode }) => {
  const [selectedStatuses, setSelectedStatuses] = useState([]);

  const handleToggleStatus = (status) => {
    setSelectedStatuses(
      (prevSelected) =>
        prevSelected.includes(status)
          ? prevSelected.filter((s) => s !== status) // remove if selected
          : [...prevSelected, status] // add if not selected
    );
  };

  return (
    <>
      <div>
        <div className="flex justify-between items-center mb-[1.5rem]">
          <h3
            className={`text-[24px] font-semibold leading-[30px] tracking-[-1px] ${
              themeMode === "dark-mode" ? "text-[#f5f5f5]" : "text-[#181818]"
            } `}
          >
            Status
            <span className="block mt-[5px] h-[2px] w-[80%] bg-[#007e7e]" />
          </h3>
          <div className="w-[24px]" />
        </div>
        <div className="flex flex-wrap justify-center gap-2 w-full">
          {["available", "pending", "sold"].map((status) => (
            <button
              key={status}
              onClick={() => handleToggleStatus(status)}
              className={`flex-1 text-[0.95rem] border px-3 py-2 rounded font-semibold uppercase outline-none hover:outline-none active:outline-none
        ${
          selectedStatuses.includes(status)
            ? `transition-all duration-350 ${
                themeMode === "dark-mode"
                  ? "border-white text-cyan-300"
                  : "text-gray-100 border-gray-200 opacity-85 border bg-[#181818]"
              }`
            : `transition-all duration-350 hover:text-gray-600 ${
                themeMode === "dark-mode"
                  ? "border-gray-300 bg-[#181818] text-[#f5f5f5]"
                  : "bg-[#f5f5f5] text-black border-[#dbd5d7] hover:bg-[white] hover:border-gray-300 hover:text-cyan-300"
              }`
        }
      `}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      <div
        className={`w-[calc(100%+1.25rem)] calc(1rem * calc(1 - var(--tw-space-y-reverse))); -ml-[0.66rem] border-t mb-8 ${
          themeMode === "dark-mode" ? "border-[#3f3f3f]" : "border-[#dae4d8]"
        }`}
      />
    </>
  );
};

export default StatusFilter;
