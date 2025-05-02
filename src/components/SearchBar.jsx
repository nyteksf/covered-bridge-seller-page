import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ themeMode }) => {
  return (
    <div className="relative w-full max-w-full">
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className={`absolute left-4 top-[50%] -translate-y-[59%] pointer-events-none w-[17px] font-normal h-[17px] ml-[2px] mr-2 ${
          themeMode === "dark-mode" ? "text-[#f5f5f5]" : "text-[#333]"
        }`}
      />
      <input
        type="text"
        placeholder="Search here..."
        className={`
                font-pt-sans
                block 
                w-full 
                h-[38px] 
                min-h-[4.4rem] 
                leading-[1.42857] 
                align-middle  
                rounded-tl-[4px] 
                rounded-tr-[4px] 
                rounded-bl-[4px] 
                rounded-br-[4px] 
                mb-0 
                px-[2rem] 
                pt-[1.21rem]
                pb-[1.5rem] 
                pl-[3.05rem]
                text-[16px]
                -tracking-[0.15px]
                ${
                  themeMode === "dark-mode"
                    ? "bg-[rgb(44,44,44)] text-[#f5f5f5] placeholder-[#f9f9f9]"
                    : "bg-[#f5f5f5] text-[#181818] placeholder-[#181818] border border-[#dae4d8]"
                }
              `}
      />
    </div>
  );
};

export default SearchBar;
