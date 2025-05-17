import React from "react";

import { Button } from "../components/ui/button";
import ShareDropdown from "@/components/ShareDropdown";

const LandInfoSidebar = () => {
  return (
    <aside className="space-y-6 font-lato w-full mt-4">
      {/* Contact Card */}
      <div className="bg-white border border-[#c4c4c4] rounded-[4px] p-4 shadow-sm">
        <h4 className="text-[18px] font-bold leading-6 text-[#333] mb-4 text-center">
          Question About This Property?
          <span className="block mt-2 h-[1px] w-[60%] relative mx-auto bg-[rgba(51,51,51,0.11)]" />
        </h4>
        <Button
          className="
            tracking-[1px] uppercase px-6 pt-2 pb-[5px] w-full
            text-[15px] font-black font-montserrat
            text-white bg-[#131313] rounded-none
            shadow-[0_3px_0_0_#131313]
            hover:shadow-[0_3px_0_0_#22d3ee]
            transition-all duration-300 hover:text-gray-200
          "
        >
          Contact
        </Button>
      </div>

      {/* Share Button */}
      <div className="w-full flex justify-center">
        <ShareDropdown url={window.location.href} />
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-3 bg-white p-4 rounded-[4px] shadow-sm border border-[#c4c4c4]">
        <Button
          className="
            px-6 pt-3 pb-[9px] font-montserrat text-[15px] font-black
            tracking-[1px] uppercase cursor-pointer bg-[#131313] 
            text-white rounded-none
            shadow-[0_3px_0_0_#131313]
            hover:shadow-[0_3px_0_0_#22d3ee]
            transition-all duration-300 hover:text-gray-200
          "
        >
          Sell Property
        </Button>
        <Button
          className="
            px-6 pt-3 pb-[9px] font-montserrat text-[15px] font-black
            tracking-[1px] uppercase cursor-pointer bg-[#131313] 
            text-white rounded-none
            shadow-[0_3px_0_0_#131313]
            hover:shadow-[0_3px_0_0_#22d3ee]
            transition-all duration-300 hover:text-gray-200
          "
        >
          Return Home
        </Button>
      </div>
    </aside>
  );
};

export default LandInfoSidebar;
