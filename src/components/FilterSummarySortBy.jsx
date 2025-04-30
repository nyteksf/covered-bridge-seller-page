import React from "react";

const FilterSummarySortBy = ({ themeMode }) => {
  return (
    /* Filters Summary + Sort Dropdown */
    <div className="flex flex-wrap items-center justify-between w-full mt-[1.3rem] gap-4">
      <div className="flex items-center gap-2 flex-wrap text-sm">
        <span
          className={`font-semibold ${
            themeMode === "dark-mode" ? "text-white" : "text-[#8f8f8f]"
          }`}
        >
          Filtering by:
        </span>
        <div
          className={`${
            themeMode === "dark-mode"
              ? "bg-[#333] border-[#3f3f3f] text-white"
              : "bg-[#f5f5f5] border-[#dae4d8] text-[#181818]"
          } border rounded px-2 pt-[1px] relative top-[0.5px] pb-[2px] flex items-center -tracking-[0.2px] gap-1`}
        >
          Country: U.S.A.
          <button className={`duration-150 transition-all text-xs ml-1 ${ themeMode === "dark-mode" ? "text-[#007e7e] hover:text-cyan-200" : "text-[#333]"} `}>
            ✕
          </button>
        </div>
      </div>

      {/* Result count + sort */}
      <div className="relative">
        <select
          className={`${
            themeMode === "dark-mode"
              ? "bg-[#1a1a1a] text-[#f5f5f5] border-[#3f3f3f]"
              : "bg-[#f5f5f5] text-[#181818]"
          } border pr-10 text-sm appearance-none   
            flex flex-row justify-start 
            items-center 
            min-w-[10rem] 
            px-[4rem] 
            py-[0.5rem] 
            pl-[1.1rem]
            rounded-[4px] 
            align-top 
            text-left 
            whitespace-nowrap 
            mx-auto 
            no-underline
            cursor-pointer
            relative
            font-pt-sans
            -tracking-[0.25px]
        "`}
        >
          <option>Sort by</option>
          <option
            value="acres-large-small"
            className={`flex 
      flex-row 
      justify-start 
      items-center 
      w-full 
      h-full 
      max-w-full 
      mb-0 
      px-[2rem] 
      py-[1rem] 
      pl-[1.5rem] 
      border-b  
      border-r 
      bg-transparent 
      ${
        themeMode === "dark-mode"
          ? "border-r-[#e6e6e6] border-b-[#e6e6e6] text-[#f5f5f5]"
          : "text=[#181818] border-r-[#3f3f3f] border-b-[#3f3f3f]"
      }
      font-bold 
      cursor-pointer 
      no-underline 
      transition-all 
      duration-200`}
          >
            Acres (Large)
          </option>
          <option
            value="acres-small-large"
            className={`flex 
      flex-row 
      justify-start 
      items-center 
      w-full 
      h-full 
      max-w-full 
      mb-0 
      px-[2rem] 
      py-[1rem] 
      pl-[1.5rem] 
      border-b 
      border-r 
      bg-transparent 
      font-bold 
      cursor-pointer 
      no-underline 
      transition-all 
      duration-200
      ${
        themeMode === "dark-mode"
          ? "border-r-[#e6e6e6] border-b-[#e6e6e6] text-[#f5f5f5]"
          : "text=[#181818] border-r-[#3f3f3f] border-b-[#3f3f3f]"
      }
      `}
          >
            Acres (Small)
          </option>
          <option
            value="price-high-low"
            className={`flex 
      flex-row 
      justify-start 
      items-center 
      w-full 
      h-full 
      max-w-full 
      mb-0 
      px-[2rem] 
      py-[1rem] 
      pl-[1.5rem] 
      bg-transparent 
      font-bold 
      cursor-pointer 
      no-underline 
      transition-all 
      duration-200
      border-b 
      border-r 
      ${
        themeMode === "dark-mode"
          ? "border-r-[#e6e6e6] border-b-[#e6e6e6] text-[#f5f5f5]"
          : "text=[#181818] border-r-[#3f3f3f] border-b-[#3f3f3f]"
      }
      `}
          >
            Price (High)
          </option>
          <option
            value="price-low-high"
            className={`flex 
      flex-row 
      justify-start 
      items-center 
      w-full 
      h-full 
      max-w-full 
      mb-0 
      px-[2rem] 
      py-[1rem] 
      pl-[1.5rem] 
      border-b
      border-r 
      bg-transparent 
      font-bold 
      cursor-pointer 
      no-underline 
      transition-all 
      duration-200
      ${
        themeMode === "dark-mode"
          ? "border-r-[#e6e6e6] border-b-[#e6e6e6] text-[#f5f5f5]"
          : "text=[#181818] border-r-[#3f3f3f] border-b-[#3f3f3f]"
      }
      `}
          >
            Price (Low)
          </option>
        </select>
        {/* Custom caret icon */}
        <svg
          className={`pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 ${
            themeMode === "dark-mode" ? "text-white" : "text-[#181818]"
          } w-[26px] h-auto pt-[0.3rem]`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 12a1 1 0 01-.707-.293l-3-3a1 1 0 011.414-1.414L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3A1 1 0 0110 12z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default FilterSummarySortBy;
