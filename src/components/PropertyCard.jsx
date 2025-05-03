import React from "react";

import PurchaseTypeBtn from "./PurchaseTypeBtn";
import PropertyStatusPill from "./PropertyStatusPill";

const PropertyCard = ({ index, data, formatNumberWithCommas, themeMode }) => {
  console.log("data: ", data);
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
          src={`${data.image}`}
          alt={`Property ${index} + 1}`}
          loading="lazy"
          className="object-cover rounded-[6px] inline-block align-middle border-0 max-w-full w-full h-[175px] px-0"
        />
        <PropertyStatusPill statusTitle={data.status} />
      </div>

      {/* Content Block */}
      <div className="flex flex-col justify-between h-full pt-[12px] pb-[15px]">
        {/* A. Pills */}
        <div className="relative px-[12px] z-0">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 flex-grow overflow-hidden">
              {/* State */}
              <div
                className={`flex-shrink-0 font-lato text-[16px] font-normal text-center rounded-[4px] px-[6px] py-[8px] h-[36px] flex items-center justify-center ${
                  themeMode === "dark-mode"
                    ? "bg-[#333] text-[#f5f5f5]"
                    : "bg-[#f1f7f3] text-[#333]"
                }`}
                title={data.state}
              >
                <span className="block whitespace-nowrap">
                  {data.state}
                </span>
              </div>

              {/* Acres */}
              <div
                className={`flex-shrink-0 font-lato text-[16px] font-normal text-center rounded-[4px] px-[6px] py-[8px] h-[36px] flex items-center justify-center ${
                  themeMode === "dark-mode"
                    ? "bg-[#333] text-[#f5f5f5]"
                    : "bg-[#f1f7f3] text-[#333]"
                }`}
                title={`${data.acres} Acres`}
              >
                <span className="block whitespace-nowrap">
                  {data.acres} Acres
                </span>
              </div>

              {/* County - Will truncate naturally */}
              <div 
                className={`min-w-0 flex-grow font-lato text-[16px] font-normal text-center rounded-[4px] px-[6px] py-[8px] h-[36px] flex items-center justify-center ${
                  themeMode === "dark-mode"
                    ? "bg-[#333] text-[#f5f5f5]"
                    : "bg-[#f1f7f3] text-[#333]"
                }`}
                title={data.county}
              >
                <span className="truncate block w-full overflow-hidden">
                  {data.county}
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="flex-shrink-0 text-right">
              <h2
                className={`text-2xl font-lato font-bold tracking-[0.4px] ${
                  themeMode === "dark-mode" ? "text-white" : "text-[#333]"
                }`}
                title={`$${formatNumberWithCommas(data.price)}`}
              >
                ${formatNumberWithCommas(data.price)}
              </h2>
            </div>
          </div>
        </div>

        {/* B. Divider */}
        <div
          className={`w-full border-b ${
            themeMode === "dark-mode" ? "border-[#3f3f3f]" : "border-[#dae4d8]"
          } mt-4 mb-[0.86rem]`}
        />

        {/* C. Footer */}
        <div className="px-[12px] flex justify-between mt-[1px] items-center w-full h-[30px]">
          <p
            className={`font-lato text-[16px] font-bold ${
              themeMode === "dark-mode" ? "text-gray-400" : "text-[#181818]"
            } `}
          >
            {data.id}
          </p>
          <div className="flex gap-x-1.5">
            {data.isBuyNow ? <PurchaseTypeBtn title="Buy Now" /> : ""}
            {data.isOwnerFinanced ? <PurchaseTypeBtn title="Owner Finance" /> : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;