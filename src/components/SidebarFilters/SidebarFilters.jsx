import React, { useState } from "react";

import { usePageLoad } from "../../hooks/usePageLoad";

import StateFilter from "./StateFilter";
import AcresFilter from "./AcresFilter";
import PriceFilter from "./PriceFilter";
import ReturnToTop from "../ReturnToTop";
import StatusFilter from "./StatusFilter";
import CountryFilter from "./CountryFilter";
import SidebarBlock from "../../components/SidebarBlock";
import PurchaseOptionsFilter from "./PurchaseOptionsFilter";

const SidebarFilters = ({
  themeMode,
  searchParams,
  setSearchParams,
  formatNumberWithCommas,
  selectedStatuses,
  setSelectedStatuses,
  selectedStates,
  setSelectedStates,
  ownerFinanceToggled,
  setOwnerFinanceToggled,
  buyNowToggled,
  setBuyNowToggled,
}) => {
  const pageIsLoading = usePageLoad(); // DISABLE BUTTONS?

  return (
    <aside
      className={`w-full max-w-[324px] mx-auto sm:mx-0 py-4 px-4 sm:px-[0.65rem] rounded-[0.3rem] text-sm font-montserrat space-y-5 ${
        themeMode === "dark-mode"
          ? "bg-[#2c2c2c]"
          : "bg-[white] border border-[#dae4d8]"
      }`}
    >
      {/* PRICE FILTER */}
      <PriceFilter
        themeMode={themeMode}
        SidebarBlock={SidebarBlock}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        formatNumberWithCommas={formatNumberWithCommas}
      />

      {/* ACRES FILTER */}
      <AcresFilter
        themeMode={themeMode}
        SidebarBlock={SidebarBlock}
        formatNumberWithCommas={formatNumberWithCommas}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />

      {/* STATUS FILTER */}
      <StatusFilter
        themeMode={themeMode}
        selectedStatuses={selectedStatuses}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />

      {/* PURCHASE OPTION FILTER */}
      <PurchaseOptionsFilter
        themeMode={themeMode}
        ownerFinanceToggled={ownerFinanceToggled}
        setOwnerFinanceToggled={setOwnerFinanceToggled}
        buyNowToggled={buyNowToggled}
        setBuyNowToggled={setBuyNowToggled}
      />

      {/* COUNTRY FILTER */}
      <CountryFilter themeMode={themeMode} />

      {/* STATE FILTER */}
      <StateFilter
        themeMode={themeMode}
        selectedStates={selectedStates}
        setSelectedStates={setSelectedStates}
      />

      {/* HR-STYLE DIVIDER */}
      <div className="w-full ml-0 sm:w-[calc(100%+1.25rem)] sm:-ml-[0.66rem] border-t border-[#3f3f3f] mb-8" />

      {/* FINAL SECTION: Back to Top + CTA Buttons */}
      <ReturnToTop themeMode={themeMode} />
    </aside>
  );
};

export default SidebarFilters;
