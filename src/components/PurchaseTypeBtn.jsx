import React from "react";

const PurchaseTypeBtn = ({ title }) => {
  return (
    <div className="text-white bg-[#149f49] border border-black rounded-[8px] px-[8px] py-[4px] uppercase text-[12px] font-bold font-lato">
      {title}
    </div>
  );
};

export default PurchaseTypeBtn;
