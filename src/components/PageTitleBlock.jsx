import React from "react";

const PageTitleBlock = ({ PTBContent, propertyId, formatNumberWithCommas }) => {
  {
    /* propertyId, stateName, countyName, acreAmount, landPrice */
  }

  if (!PTBContent) return null;

  return (
    <>
      <div
        className="
        flex items-center justify-around
        w-full max-w-[1440px] h-auto
        mx-auto mb-0
        pt-[15px] pb-[15px]
        bg-transparent
      "
      >
        <div className="relative font-lato">
          <div>
            <h3
              className="capitalize
                    leading-[1.2]
                    mt-0 mb-0
                    font-lato text-[24px] 
                    font-bold text-[#555]
            "
            >
              Covered Bridge ID
            </h3>
            <p className="mt-0 mb-0 font-lato font-bold text-[16px] text-[#555]">
              {propertyId}
            </p>
          </div>
        </div>

        <div className="relative bg-[#c4c4c4] w-[1px] h-[40px]" />

        <div>
          <h3
            className="capitalize
                    leading-[1.2]
                    mt-0 mb-0
                    font-lato text-[24px] 
                    font-bold text-[#555]
            "
          >
            {PTBContent.stateName}
          </h3>
          <p className="mt-0 mb-0 font-lato font-bold text-[16px] text-[#555] capitalize">
            {PTBContent.countyName}
          </p>
        </div>

        <div className="relative bg-[#c4c4c4] w-[1px] h-[40px]" />

        <div>
          <h3
            className="capitalize
                mt-0 mb-0
                leading-[1.2]
                font-lato text-[24px] 
                font-bold text-[#555]
        "
          >
            {PTBContent.acreAmount}
          </h3>
          <p className="mt-0 mb-0 font-lato font-bold text-[16px] text-[#555]">
            Acres +/-
          </p>
        </div>

        <div className="relative bg-[#c4c4c4] w-[1px] h-[40px]" />

        <div>
          <h3
            className="capitalize
                mt-0 mb-0
                leading-[1.2]
                font-lato text-[24px] 
                font-bold text-[#555]
            "
          >
            ${formatNumberWithCommas(PTBContent.landPrice)}
          </h3>
          <p className="mt-0 mb-0 font-lato font-bold text-[16px] text-[#555]">
            USD
          </p>
        </div>
      </div>
    </>
  );
};

export default PageTitleBlock;
