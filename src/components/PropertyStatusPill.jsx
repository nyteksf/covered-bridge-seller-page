import React from "react";

const PropertyStatusPill = ({ statusTitle }) => {
  let indicatorDotColor = "";
  console.log(statusTitle);

  switch (statusTitle) {
    case "AVAILABLE":
      indicatorDotColor = "#05c85d";
      break;

    case "PENDING":
      indicatorDotColor = "#f8b60d";
      break;

    case "SOLD":
      indicatorDotColor = "#0577c8";
      break;

    case "UPCOMING":
      indicatorDotColor = "#979797";
      break;

    default:
      indicatorDotColor = "#181818";
      break;
  }

  return (
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
      <div
        style={{ backgroundColor: indicatorDotColor }}
        className="rounded-full w-[12px] h-[12px]"
      ></div>
      <span className="uppercase font-lato text-[12px]">{statusTitle}</span>
    </span>
  );
};

export default PropertyStatusPill;
