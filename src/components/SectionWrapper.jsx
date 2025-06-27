import { useState } from "react";

const SectionWrapper = ({ title, children }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="my-8 p-4 rounded bg-[#f9fafbe2] border border-gray-300 shadow-md">
      <div className="flex justify-between items-center mb-4">

        <h2 className="font-montserrat text-[31px] leading-[34px] font-bold text-[#333] m-0">
          {title}
          <span className="block bg-[#007e7e] w-[70%] h-[2px] mt-[5px] mb-[1.25rem]" />
        </h2>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-sm text-cyan-700 underline"
        >
          {collapsed ? "Expand" : "Collapse"}
        </button>
      </div>
      {!collapsed && children}
    </div>
  );
};

export default SectionWrapper;
