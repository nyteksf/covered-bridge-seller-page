import React, { useState } from "react";

import Footer from "../components/Footer";
import LoadingState from "./LoadingState";
import TopNav from "../components/TopNav";
import SearchBar from "../components/Searchbar";
import PropertyCard from "../components/PropertyCard";
import SecondaryNav from "../components/SecondaryNav";
import StateSelector from "../components/StateSelector";
import StickySecondaryNav from "../components/StickySecondaryNav";
import FilterSummarySortBy from "../components/FilterSummarySortBy";
import SidebarFilters from "../components/SidebarFilters/SidebarFilters";

import { usePageLoad } from "../hooks/usePageLoad";
import { usePropertyList } from "../hooks/usePropertyList";

export default function AllLand() {
  const { data: properties, loading, error } = usePropertyList();

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(30000000);
  const [minAcres, setMinAcres] = useState(0);
  const [maxAcres, setMaxAcres] = useState(15000);
  const [selectedStatuses, setSelectedStatuses] = useState([]);
  const [buyNowToggled, setBuyNowToggled] = useState(false);
  const [ownerFinanceToggled, setOwnerFinanceToggled] = useState(false);
  const [selectedStates, setSelectedStates] = useState([]);

  const pageIsLoading = usePageLoad();
  const [themeMode, setThemeMode] = useState("light-mode");

  const formatNumberWithCommas = (num) => {
    if (num === null || num === undefined) return "";
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <>
      {pageIsLoading ? (
        <LoadingState />
      ) : (
        <>
          <TopNav />
          <SecondaryNav
            showThemes="true"
            themeMode={themeMode}
            setThemeMode={setThemeMode}
          />
          <StickySecondaryNav />
          <div
            className={`${
              themeMode === "dark-mode" ? "bg-[#1f1f1f]" : "bg-white"
            }`}
          >
            <section className="text-white md:pl-4 md:pr-4 py-2.5 pb-[10px] mb-[3rem] flex flex-col lg:flex-row gap-4">
              {/* SIDEBAR */}
              <SidebarFilters
                themeMode={themeMode}
                buyNowToggled={buyNowToggled}
                setBuyNowToggled={setBuyNowToggled}
                ownerFinanceToggled={ownerFinanceToggled}
                setOwnerFinanceToggled={setOwnerFinanceToggled}
                minPrice={minPrice}
                setMinPrice={setMinPrice}
                maxPrice={maxPrice}
                setMaxPrice={setMaxPrice}
                minAcres={minAcres}
                setMinAcres={setMinAcres}
                maxAcres={maxAcres}
                setMaxAcres={setMaxAcres}
                selectedStatuses={selectedStatuses}
                setSelectedStatuses={setSelectedStatuses}
                selectedStates={selectedStates}
                setSelectedStates={setSelectedStates}
                formatNumberWithCommas={formatNumberWithCommas}
              />

              {/* === RIGHT COLUMN === */}
              <div className="flex-1 flex flex-col relative">
                <SearchBar themeMode={themeMode} />
                <div>
                  <FilterSummarySortBy themeMode={themeMode} />
                  <span className="text-sm text-left text-gray-400 relative -top-1 mr-auto">
                    <span className="text-[#149f49]">729</span> results
                  </span>
                </div>

                {/* PROPERTY CARDS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 mt-3.5 gap-6">
                  {properties.map((property) => (
                    <PropertyCard
                      key={property.id}
                      data={property}
                      themeMode={themeMode}
                      formatNumberWithCommas={formatNumberWithCommas}
                    />
                  ))}
                </div>
              </div>
            </section>
            <StateSelector />
            <Footer />
          </div>
        </>
      )}
    </>
  );
}
