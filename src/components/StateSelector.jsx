import React from "react";
import { Link } from "react-router-dom";

export default function StateSelector() {
  const availableStates = ["North Carolina", "Georgia", "Tennessee", "Oklahoma"];

  const stateAbbreviations = {
    Alabama: "AL",
    Alaska: "AK",
    Arizona: "AZ",
    Arkansas: "AR",
    California: "CA",
    Canada: "CAN", // fallback
    Colorado: "CO",
    Connecticut: "CT",
    Florida: "FL",
    Georgia: "GA",
    Hawaii: "HI",
    Idaho: "ID",
    Illinois: "IL",
    Kansas: "KS",
    Louisiana: "LA",
    Maine: "ME",
    Massachusetts: "MA",
    Michigan: "MI",
    Mississippi: "MS",
    Missouri: "MO",
    Montana: "MT",
    Nevada: "NV",
    "New Mexico": "NM",
    "New York": "NY",
    "North Carolina": "NC",
    Oklahoma: "OK",
    Oregon: "OR",
    "South Carolina": "SC",
    Tennessee: "TN",
    Texas: "TX",
    Utah: "UT",
    Virginia: "VA",
    Washington: "WA",
    "West Virginia": "WV",
    Wyoming: "WY",
  };

  const allStateAbbrevs = Object.keys(stateAbbreviations);

  const allStates = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Canada",
    "Colorado",
    "Connecticut",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Kansas",
    "Louisiana",
    "Maine",
    "Massachusetts",
    "Michigan",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nevada",
    "New Mexico",
    "New York",
    "North Carolina",
    "Oklahoma",
    "Oregon",
    "South Carolina",
    "Tennessee",
    "Texas",
    "Utah",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wyoming",
  ];

  return (
    <section className="bg-[#445255] pt-[17px] pr-[35px] pb-[29px] pl-[35px] text-white">
      <div className="mx-auto">
        <h3 className="text-[16px] font-bold mb-[12px] -tracking-[0.65px] h-[20px] font-pt-sans">
          Search Land for Sale by State:
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-4 gap-x-[1.85rem]">
          {allStates.map((state) => {
            const abbrev = stateAbbreviations[state];

            const isAvailable = availableStates.includes(state);

            return (
              <span
                key={state}
                className={`text-base py-[10px] font-semibold transition-colors duration-300 font-pt-sans h-[40px] -tracking-[0.6px] ${
                  isAvailable
                    ? "text-white hover:text-cyan-300 cursor-pointer"
                    : "text-gray-500 cursor-not-allowed opacity-50"
                }`}
              >
                {isAvailable ? (
                  <Link
                    to={`/state/${state.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {state}
                  </Link>
                ) : (
                  <>{state}</>
                )}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
