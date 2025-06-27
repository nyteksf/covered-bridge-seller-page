import { useEffect, useRef, useState } from "react";

import SectionWrapper from "../../SectionWrapper";
import countyMap from "../../../data/countyAutocompleteMap.json";

import { calculateFinancingBreakdown } from "../../../../utils/FinancePaymentCalc";

const PageTitleBlockForm = ({ formState, onUpdate, generateIncrementalId }) => {
  const countyInputRef = useRef(null);

  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredCounties, setFilteredCounties] = useState([]);

  const states = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];

  const stateAbbreviations = {
    alabama: "AL",
    alaska: "AK",
    arizona: "AZ",
    arkansas: "AR",
    california: "CA",
    colorado: "CO",
    connecticut: "CT",
    delaware: "DE",
    florida: "FL",
    georgia: "GA",
    hawaii: "HI",
    idaho: "ID",
    illinois: "IL",
    indiana: "IN",
    iowa: "IA",
    kansas: "KS",
    kentucky: "KY",
    louisiana: "LA",
    maine: "ME",
    maryland: "MD",
    massachusetts: "MA",
    michigan: "MI",
    minnesota: "MN",
    mississippi: "MS",
    missouri: "MO",
    montana: "MT",
    nebraska: "NE",
    nevada: "NV",
    "new hampshire": "NH",
    "new jersey": "NJ",
    "new mexico": "NM",
    "new york": "NY",
    "north carolina": "NC",
    "north dakota": "ND",
    ohio: "OH",
    oklahoma: "OK",
    oregon: "OR",
    pennsylvania: "PA",
    "rhode island": "RI",
    "south carolina": "SC",
    "south dakota": "SD",
    tennessee: "TN",
    texas: "TX",
    utah: "UT",
    vermont: "VT",
    virginia: "VA",
    washington: "WA",
    "west virginia": "WV",
    wisconsin: "WI",
    wyoming: "WY",
  };

  const terms = [6, 12, 24, 36, 48, 60];

  const PTBContent = formState?.PTBContent || {};
  const totalPrice = parseFloat(PTBContent.totalPrice || 0);
  const term = parseInt(PTBContent.term || 36);
  const depositRatio = 0.13;
  const monthlyTerm = term;

  const {
    deposit: calculatedDeposit,
    monthly: calculatedMonthly,
    warnings,
  } = calculateFinancingBreakdown({
    totalPrice,
    term,
    useAmortized: PTBContent.useAmortized || false,
    apr: PTBContent.apr || 12, // default if none set yet
  });

  const updateField = (key, value) => {
    const updated = {
      ...PTBContent,
      [key]: value,
    };

    if (key === "totalPrice" || key === "term") {
      const totalPrice = parseFloat(
        key === "totalPrice" ? value : PTBContent.totalPrice
      );
      const term = parseInt(key === "term" ? value : PTBContent.term);

      const { deposit, monthly } = calculateFinancingBreakdown({
        totalPrice,
        term,
      });

      updated.depositPrice = deposit;
      updated.monthlyPrice = monthly;
    }

    onUpdate("PTBContent", updated);
  };

  useEffect(() => {
    const state = PTBContent.stateName?.toLowerCase();
    const counties = countyMap[state] || [];
    setFilteredCounties(counties);
    setShowSuggestions(false);
  }, [PTBContent.stateName]);

  useEffect(() => {
    const updateId = async () => {
      if (!PTBContent.stateName || !PTBContent.countyName) return;

      const newId = await generateIncrementalId(
        PTBContent.stateName.toLowerCase(),
        PTBContent.countyName
      );

      const currentId = formState.propertyId;

      if (currentId && !currentId.startsWith("TEMP_") && currentId === newId)
        return;

      onUpdate("propertyId", newId);
    };

    updateId();
  }, [PTBContent.stateName, PTBContent.countyName]);

  return (
    <section className="mb-6">
      <SectionWrapper title="Page Title Block Section">
        <div className="grid grid-cols-1 text-[#333] sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className="block font-semibold">State</label>
            <select
              className="w-full border px-1.5 py-2"
              value={PTBContent.stateName || ""}
              onChange={(e) => updateField("stateName", e.target.value)}
            >
              <option value="">Select State</option>
              {states.map((state) => (
                <option key={state} value={state.toLowerCase()}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          <div className="relative">
            <label className="block font-semibold">County</label>
            <input
              ref={countyInputRef}
              type="text"
              className="w-full border p-2"
              placeholder="Add county name (DO NOT incl. word 'county')"
              value={PTBContent.countyName || ""}
              onBlur={() => {
                setTimeout(() => setShowSuggestions(false), 150);
                if (PTBContent.countyName) {
                  const clean = PTBContent.countyName
                    .split(" ")
                    .map(
                      (w) =>
                        w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
                    )
                    .join(" ");
                  updateField("countyName", clean);
                }
              }}
              onChange={(e) => {
                const value = e.target.value;
                updateField("countyName", value);
                const matches = filteredCounties.filter((c) =>
                  c.toLowerCase().startsWith(value.toLowerCase())
                );
                setFilteredCounties(matches);
                setShowSuggestions(true);
              }}
            />

            {showSuggestions && filteredCounties.length > 0 && (
              <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 shadow-md max-h-48 overflow-auto">
                {filteredCounties.map((county, idx) => (
                  <li
                    key={idx}
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                    onMouseDown={(e) => {
                      e.preventDefault(); // Ensures blur doesn't beat it
                      updateField("countyName", county);
                      setShowSuggestions(false);
                    }}
                  >
                    {county}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div>
            <label className="block font-semibold">Acreage</label>
            <input
              type="number"
              className="w-full border p-2"
              placeholder="Add acreage amount (i.e., as plain number)"
              value={PTBContent.acreAmount || ""}
              onChange={(e) =>
                updateField("acreAmount", Number(e.target.value))
              }
            />
          </div>

          <div className="relative">
            <label className="block font-semibold">Total Price ($)</label>
            <span className="absolute left-3 top-[32.5px] text-gray-500 pointer-events-none">
              $
            </span>
            <input
              type="text"
              inputMode="numeric"
              pattern="\d*"
              value={PTBContent.totalPrice || ""}
              className="w-full border p-2 pl-7"
              placeholder="Add total price (i.e., as plain number)"
              onChange={(e) =>
                updateField("totalPrice", e.target.value.replace(/[^0-9]/g, ""))
              }
            />
          </div>

          <div>
            <label className="block font-semibold">Term (months)</label>
            <select
              className="w-full border p-2"
              value={PTBContent.term || 36}
              onChange={(e) => updateField("term", parseInt(e.target.value))}
            >
              {terms.map((termOption) => (
                <option key={termOption} value={termOption}>
                  {termOption} months
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-semibold">
              Auto-Calculate Payments?
            </label>
            <select
              className="w-full border p-2"
              value={PTBContent.useAmortized ? "amortized" : "flat"}
              onChange={(e) =>
                updateField("useAmortized", e.target.value === "amortized")
              }
            >
              <option value="flat">Flat (no interest)</option>
              <option value="amortized">Amortized (with interest)</option>
            </select>
          </div>

          {PTBContent.useAmortized && (
            <div className="relative">
              <label className="block font-semibold">APR (%)</label>
              <input
                type="number"
                min="1"
                max="99"
                step="0.1"
                className="w-full border p-2"
                placeholder="e.g. 12"
                value={PTBContent.apr || ""}
                onChange={(e) => updateField("apr", parseFloat(e.target.value))}
              />
              <span className="absolute right-3 top-[32.5px] text-gray-500 pointer-events-none">
                %
              </span>
            </div>
          )}

          <div className="relative">
            <label className="block font-semibold">Deposit Price ($)</label>
            <span className="absolute left-3 top-[32.5px] text-gray-500 pointer-events-none">
              $
            </span>
            <input
              type="number"
              className="w-full border p-2 pl-7 bg-gray-100"
              value={calculatedDeposit}
              disabled
            />
          </div>

          <div className="relative">
            <label className="block font-semibold">Monthly Payment ($)</label>
            <span className="absolute left-3 top-[33.1px] text-gray-500 pointer-events-none">
              $
            </span>
            <input
              type="number"
              className="w-full border p-2 pl-7 bg-gray-100"
              value={calculatedMonthly}
              disabled
            />
          </div>

          <div>
            <label className="block font-semibold">Buy Now Available?</label>
            <select
              className="w-full border p-2"
              value={PTBContent.canBuyNow ? "yes" : "no"}
              onChange={(e) =>
                updateField("canBuyNow", e.target.value === "yes")
              }
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold">Owner Financing?</label>
            <select
              className="w-full border p-2"
              value={PTBContent.canOwnerFinance ? "yes" : "no"}
              onChange={(e) =>
                updateField("canOwnerFinance", e.target.value === "yes")
              }
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default PageTitleBlockForm;
