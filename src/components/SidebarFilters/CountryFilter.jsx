import React from "react";

import { usePageLoad } from "../../hooks/usePageLoad";

const CountryFilter = ({ themeMode }) => {
  const pageIsLoading = usePageLoad();
  return (
    <>
      <div>
        <div className="flex justify-between items-center mb-6">
          <h3
            className={`text-[24px] font-semibold leading-[30px] tracking-[-0.45px] ${
              themeMode === "dark-mode" ? "text-[#f5f5f5]" : "text-[#181818]"
            }`}
          >
            Country
            <span className="block mt-[4px] h-[2px] w-[80%] bg-[#007e7e]" />
          </h3>
        </div>
        <div className="w-[24px]" />
        <div className="rounded-br-[4px] rounded-bl-[4px] relative">
          <div className="flex flex-wrap gap-2 justify-between items-stretch">
            <button
              disabled={pageIsLoading}
              title="American Land"
              className={`
                        font-semibold text-[0.9rem] flex flex-row justify-center items-center gap-x-2 relative cursor-pointer rounded-md w-[48%] border mb-0 px-6 py-2 uppercase ${
                          themeMode === "dark-mode"
                            ? "border-black !bg-[#1f1f1f] text-cyan-300"
                            : "opacity-85 hover:opacity-80 text-gray-100 border-gray-200 border bg-[#181818]"
                        }
                    `}
            >
              <div
                className="
                    w-5 h-5 rounded-full border bg-white shadow-[inset_0_0_0_6px_#007e7e]
                    text-[#dfdfdf] shrink-0 flex items-center justify-center
                "
              />
              U.S.A.
            </button>
            <button
              disabled
              title="Coming soon"
              className={`
                font-semibold text-[0.85rem] border opacity-50
                flex flex-row justify-center items-center gap-x-2 relative cursor-not-allowed rounded-md w-[48%] mb-0 px-6 py-2 uppercase ${
                  themeMode === "dark-mode"
                    ? "border-[#3f3f3f] bg-[#2c2c2c] text-gray-500"
                    : "border-[#dae4d8] bg-[#0000] text-[gray]"
                }
                `}
            >
              <div
                title="Canadian Land"
                className={`
                    w-5 h-5 rounded-full border
                    shrink-0 flex items-center justify-center
                    ${
                      themeMode === "dark-mode"
                        ? "text-[#dfdfdf] border-gray-500 bg-transparent"
                        : "text-gray-500 border-[lightgray] bg-[#f5f5f5]"
                    }
                `}
              />
              Canada
            </button>
          </div>
        </div>
      </div>

      <div className="w-[calc(100%+1.25rem)] -ml-[0.66rem] mt-[18px] border-t border-[#3f3f3f] mb-8" />
    </>
  );
};

export default CountryFilter;
