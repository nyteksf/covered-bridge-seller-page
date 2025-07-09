import React from "react";

const PurchaseOptionsFilter = ({
  themeMode,
  buyNowToggled,
  setBuyNowToggled,
  ownerFinanceToggled,
  setOwnerFinanceToggled,
}) => {
  const handleTogglePurchaseOption = (label) => {
    if (label === "BUY NOW") {
      setBuyNowToggled((prev) => !prev);
      console.log("BUY NOW:", !buyNowToggled);
    } else {
      setOwnerFinanceToggled((prev) => !prev);
      console.log("OWNER FINANCING:", !ownerFinanceToggled);
    }
  };

  return (
    <>
      <div>
        <div className="flex justify-between items-center mb-[1.7rem]">
          <h3
            className={`text-[24px] font-semibold leading-[30px] tracking-[-1px] ${
              themeMode === "dark-mode" ? "text-[#f5f5f5]" : "text-[#181818]"
            }`}
          >
            Purchase Options
            <span className="block mt-[5px] h-[2px] w-[80%] bg-[#007e7e]" />
          </h3>
          <div className="w-[24px]" />
        </div>

        <div className="space-y-4 w-full">
          {[
            { label: "BUY NOW", value: buyNowToggled },
            { label: "OWNER FINANCING", value: ownerFinanceToggled },
          ].map(({ label, value }) => (
            <div key={label} className="flex justify-between items-center">
              <span
                className={`text-sm font-semibold ${
                  themeMode === "dark-mode"
                    ? "text-[#f5f5f5]"
                    : "text-[#181818]"
                }`}
              >
                {label}:
              </span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  onClick={() => handleTogglePurchaseOption(label)}
                  type="checkbox"
                  checked={value}
                  readOnly
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-[#007e7e] transition-all" />
                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5" />
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="w-[calc(100%+1.25rem)] -ml-[0.66rem] mt-[18px] border-t border-[#3f3f3f] mb-8" />
    </>
  );
};

export default PurchaseOptionsFilter;
