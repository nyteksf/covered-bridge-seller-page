import React from "react";
import clsx from "clsx";

const PropertySpecs = ({ specs }) => {
  const entries = Array.isArray(specs) ? specs : [];

  const paddedEntries =
    entries.length % 2 !== 0 ? [...entries, { key: "", value: "" }] : entries;

  const half = Math.floor(paddedEntries.length / 2);
  const left = paddedEntries.slice(0, half);
  const right = paddedEntries.slice(half);

  const renderRow = (item, globalIndex) => (
    <div key={item.key + globalIndex} className="flex mb-[2px] h-full">
      {/* Label cell */}
      <div
        className="w-[40%] mr-[2px] px-[10px] py-[5px] bg-[#2a3031] text-white font-lato font-bold truncate min-h-[32px] flex items-center"
        title={item.key}
      >
        {item.key}
      </div>
      {/* Value cell with zebra based on total index */}
      <div
        className={clsx(
          "w-[60%] px-[10px] py-[5px] font-lato font-bold truncate min-h-[32px] flex items-center",
          globalIndex % 2 === 0
            ? "bg-[#eeeeee] text-[#2a3031]"
            : "bg-[#d7d7d7] text-[#2a3031]"
        )}
        title={item.value}
      >
        {item.value}
      </div>
    </div>
  );

  return (
    <section
      id="property-specs"
      className="scroll-mt-[93px] border-b border-[#c4c4c4] my-[24px] pb-[1.25rem]"
    >
      <h2 className="font-montserrat text-[31px] leading-[34px] font-bold text-[#333] m-0">
        Property Specs
        <span className="block bg-[#007e7e] w-[150px] h-[2px] mt-[5px] mb-[1.25rem]" />
      </h2>

      {paddedEntries.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[10px] text-[14px] gap-y-[2px]">
          {left.map((item, i) => (
            <React.Fragment key={item.key}>
              <div className="flex">
                <div
                  className="w-[40%] mr-[2px] px-[10px] py-[5px] bg-[#2a3031] text-[#f5f5f5] font-lato font-bold truncate min-h-[32px] flex items-center"
                  title={item.key}
                >
                  {item.key}
                </div>
                <div
                  className={clsx(
                    "w-[60%] px-[10px] py-[5px] font-lato font-bold truncate min-h-[32px] flex items-center",
                    i % 2 === 0
                      ? "bg-[#eeeeee] text-[#333]"
                      : "bg-[#d7d7d7] text-[#333]"
                  )}
                  title={item.value}
                >
                  {item.value}
                </div>
              </div>
              <div className="flex">
                <div
                  className="w-[40%] mr-[2px] px-[10px] py-[5px] bg-[#2a3031] text-white font-lato font-bold truncate min-h-[32px] flex items-center"
                  title={right[i]?.key}
                >
                  {right[i]?.key || ""}
                </div>
                <div
                  className={clsx(
                    "w-[60%] px-[10px] py-[5px] font-lato font-bold truncate min-h-[32px] flex items-center",
                    i % 2 === 0
                      ? "bg-[#eeeeee] text-[#333]"
                      : "bg-[#d7d7d7] text-[#333]"
                  )}
                  title={right[i]?.value}
                >
                  {right[i]?.value || ""}
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No specifications available</p>
      )}
    </section>
  );
};

export default PropertySpecs;
