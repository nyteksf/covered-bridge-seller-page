import React from "react";
import disclaimerIco from "/disclaimer-ico.svg";

const Disclaimer = () => {
  return (
    <div
      className="
        flex items-center justify-center gap-4
        mt-2 py-[8px] px-[16px]
        bg-[#445255] text-white mb-1
        max-w-[850px] mx-auto
      "
    >
      <img
        src={disclaimerIco}
        className="invert w-[22px] h-[20px] shrink-0"
        alt="Disclaimer Icon"
      />
      <div className="text-[14px] -tracking-[0.1px] leading-[1.4] font-lato border-l-[2px] border-[#f5f5f5] pl-3">
        <span className="font-semibold underline">Disclaimer:</span> The information
        provided is believed to be accurate and representative. It is subject to
        verification and no liability for error or omissions is assumed. There
        are no warranties, expressed or implied, as to the information herein
        contained, and it is recommended that all Buyers perform their own due
        diligence, consult professionals, and make an independent inspection of
        the property.
      </div>
    </div>
  );
};

export default Disclaimer;
