import React from "react";

const PropertyCard = ({ themeMode, index }) => {
    
  return (
    <div
      key={index}
      className={`flex flex-col shadow-[0_4px_12px_rgba(0,0,0,0.06)] justify-between h-full rounded-[6px] border ${
        themeMode === "dark-mode"
          ? "border-[#3f3f3f]"
          : "border-[#dae4d8] bg-gradient-to-b from-[#f5f5f5] to-[#ffffff]"
      }  overflow-hidden shadow-[0_2px_8px_#0000000a] pt-[12px] hover:scale-105 hover:translate-y-[-8px] transition-all duration-200 cursor-pointer`}
    >
      {/* Image */}
      <div className="relative px-[12px]">
        <img
          src={`https://picsum.photos/seed/land${index}/600/400`}
          alt={`Property ${index + 1}`}
          loading="lazy"
          className="object-cover rounded-[6px] inline-block align-middle border-0 max-w-full w-full h-[175px] px-0"
        />
        <span
          className="absolute text-[#1f1f1f] text-xs font-bold px-2 flex 
                            items-center 
                            gap-x-2 
                            bg-[#f1f7f3] 
                            rounded-[16px] 
                            left-[4%] 
                            top-[6%]
                            h-[28px]
                            py-[2px]
                            shadow-[2px_0_5px_2px_#0003]"
        >
          <div className="bg-[#05c85d] rounded-full w-[12px] h-[12px]"></div>
          <span className="uppercase font-lato text-[12px] font-bold">
            AVAILABLE
          </span>
        </span>
      </div>

      {/* Content Block */}
      <div className="flex flex-col justify-between h-full pt-[12px] pb-[15px]">
        {/* A. Pills */}
        <div className="flex justify-between items-center -mb-[6px] -mt-[1px] ">
          <div className="flex px-[12px] gap-x-2">
            <span
              className={`font-lato text-[16px] font-normal text-center rounded-[4px] flex-none items-center px-[6px] py-[8px] flex h-[36px] -top-[1px] ${
                themeMode === "dark-mode" ? "bg-[#333] text-[#f5f5f5]" : "bg-[#f1f7f3] text-[#333]"
              } `}
            >
              State
            </span>
            <span className={`font-lato text-[16px] font-normal text-center rounded-[4px] flex-none items-center px-[6px] py-[8px] flex h-[36px] -top-[1px] ${
                themeMode === "dark-mode" ? "bg-[#333] text-[#f5f5f5]" : "bg-[#f1f7f3] text-[#333]"
              } `}>
              10 Acres
            </span>
            <span className={`font-lato text-[16px] font-normal text-center rounded-[4px] flex-none items-center px-[6px] py-[8px] flex h-[36px] relative -top-[1px] ${
                themeMode === "dark-mode" ? "bg-[#333] text-[#f5f5f5]" : "bg-[#f1f7f3] text-[#333]"
              } `}>
              County
            </span>
          </div>

          <h2
            className={`text-2xl font-lato font-bold p-[5px] mb-[1%] justify-end border-none px-[17px] tracking-[0.4px] ${
              themeMode === "dark-mode" ? "text-white" : "text-[#333]"
            }`}
          >
            $99,000
          </h2>
        </div>

        {/* B. Divider */}
        <div
          className={`w-full border-b ${
            themeMode === "dark-mode" ? "border-[#3f3f3f]" : "border-[#dae4d8]"
          } mt-4 mb-[0.86rem]`}
        />

        {/* C. Footer */}
        <div className="px-[12px] flex justify-between mt-[1px] items-center w-full h-[30px]">
          <p className={`font-lato text-[16px] font-bold ${ themeMode === "dark-mode" ? "text-gray-400" : "text-[#181818]"} `}>
            [Property ID]
          </p>
          <div className="flex gap-x-1.5">
            <div className="text-white bg-[#149f49] border border-black rounded-[8px] px-[8px] py-[4px] uppercase text-[12px] font-bold font-lato">
              Buy Now
            </div>
            <div className="text-white bg-[#149f49] border border-black rounded-[8px] px-[8px] py-[4px] uppercase text-[12px] font-bold font-lato">
              Owner Finance
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
