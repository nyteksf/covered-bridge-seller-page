import React from "react";

const ReturnToTop = ({ themeMode }) => {
  return (
    <div
      className="
            border border-[#3f3f3f] bg-[#0000] rounded-[4px] flex flex-col mt-4 pt-1 px-0 sticky top-[80px] pb-[1.1rem]
            "
    >
      <div className="mt-2 pt-2 flex items-center justify-center">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`text-center text-sm font-bold bg-gray-600 hover:bg-[#f5f5f5] hover:text-gray-600 hover:border-gray-600 border
                        flex items-center gap-[4px] px-2 py-1 
                        cursor-pointer rounded-[4px] font-lato 
                        border-[#3f3f3f]
                        no-underline bg-transparent 
                        transition-all duration-200 focus:outline-none ${
                          themeMode === "dark-mode"
                            ? "text-white"
                            : "opacity-100 text-[#333] hover:!bg-[#3f3f3f] hover:text-white"
                        }`}
        >
          Back To Top{" "}
          <span
            className={`inline-block rounded-[4px] ml-[8px] px-[7px] py-[5px] font-fa-solid leading-[14px] font-bold relative ${
              themeMode === "dark-mode" ? "bg-[#1f1f1f]" : "bg-[#333]"
            }`}
          >
            <span
              className={`relative -top-[2px] font-bold ${
                themeMode === "dark-mode"
                  ? "text-[#f4f4f4] hover:bg-[#0000]"
                  : "text-[#f4f4f4] hover:bg-[#333]"
              }`}
            >
              ↑
            </span>
          </span>
        </button>
      </div>
      <div
        className="flex flex-row flex-wrap justify-between items-center 
                  bg-[#0000] rounded-[4px] 
                    px-[10px]"
      >
        <button
          onClick={() => {
            window.open("https://www.selltocoveredbridge.com/");
          }}
          className="bg-[#1f1f1f] border text-[#f5f5f5] font-bold py-3 uppercase tracking-wide transition-all hover:text-cyan-300 border-black text-center w-[48%] mt-[10px] mb-[10px] px-[4px] text-[16px] active:outline-none"
        >
          Sell Property
        </button>
        <button
          onClick={() => {
            window.location.href = "/land-for-sale?country=U.S.A.";
          }}
          className="bg-[#1f1f1f] border text-[#f5f5f5] font-bold py-3 uppercase tracking-wide hover:text-cyan-300 border-black transition-all text-center w-[48%] mt-[10px] mb-[10px] px-[4px] text-[16px] active:outline-none"
        >
          Buy Property
        </button>
      </div>
    </div>
  );
};

export default ReturnToTop;
