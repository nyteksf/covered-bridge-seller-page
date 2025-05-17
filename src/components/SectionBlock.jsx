import React from "react";
import clsx from "clsx";

const SectionBlock = ({ index, children }) => (
  <div
    className={clsx(
      "px-6 py-1 rounded-md mb-5 text-[#333] -tracking-[0.5px]",
      index % 2 === 0 ? "bg-white" : "bg-sky-50",
      index === 0 && "pt-0"           // remove top-padding on only first block
    )}
  >
    {children}
  </div>
);

export default SectionBlock;
