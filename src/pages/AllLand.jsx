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

export default function AllLand() {
  const pageIsLoading = usePageLoad();
  const [themeMode, setThemeMode] = useState("light-mode");

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
              <SidebarFilters themeMode={themeMode} />

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
                  {Array.from({ length: 10 }).map((_, index) => (
                    <PropertyCard key={index} themeMode={themeMode} />
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
