import React from "react";
import clsx from "clsx";

const KeyValueSection = ({ title, items = [], className = "" }) => {
  const rows = Array.isArray(items) ? items : Object.entries(items);

  return (
    <section className={clsx("mb-1", className)}>
      <div className="w-full max-w-[616px] mx-auto pl-4">
        <h3 className="font-montserrat font-bold text-lg mb-3 tracking-[0.1px]">
          {title}
        </h3>

        {rows.map(({ key, value }, i) => {
          const isHTML = value && typeof value === "object" && value.isJSX;

          return (
            <div
              key={key}
              className={clsx(
                "flex flex-wrap md:flex-nowrap items-center -tracking-[0.1px] mb-[6px] w-full",
                i % 2 ? "bg-[#f7f7f7]" : "bg-white"
              )}
            >
              <span className="w-full md:w-[40%] pr-2 font-semibold text-[#333] pl-1">
                {key}:
              </span>

              {isHTML ? (
                <span
                  className="w-full md:w-[60%] text-[#3e3e3e]"
                  dangerouslySetInnerHTML={{ __html: value.html }}
                />
              ) : (
                <span className="w-full md:w-[60%] text-[#3e3e3e]">{value}</span>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default KeyValueSection;
