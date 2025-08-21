import { useMemo, useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";

import Footer from "../components/Footer";
import LoadingState from "./LoadingState";
import TopNav from "../components/TopNav";
import SearchBar from "../components/SearchBar";
import PropertyCard from "../components/PropertyCard";
import SecondaryNav from "../components/SecondaryNav";
import StateSelector from "../components/StateSelector";
import StickySecondaryNav from "../components/StickySecondaryNav";
import FilterSummarySortBy from "../components/FilterSummarySortBy";
import SidebarFilters from "../components/SidebarFilters/SidebarFilters";

import { usePageLoad } from "../hooks/usePageLoad";
import { usePropertyList } from "../hooks/usePropertyList";
import { useActiveFilters } from "../hooks/useActiveFilters";

import "../components/button-to-top.css";

export default function AllLand() {
  const [searchQuery, setSearchQuery] = useState("");
  const { data: properties, loading } = usePropertyList();
  const [themeMode, setThemeMode] = useState("light-mode");

  const { stateSlug } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const minPrice = parseInt(searchParams.get("minPrice")) || 0;
  const maxPrice = parseInt(searchParams.get("maxPrice")) || 30000000;
  const minAcres = parseInt(searchParams.get("minAcres")) || 0;
  const maxAcres = parseInt(searchParams.get("maxAcres")) || 15000;

  const selectedStatuses = searchParams.getAll("status");
  const [selectedStates, setSelectedStates] = useState(
    searchParams.getAll("state")
  );

  const [sortBy, setSortBy] = useState(searchParams.get("sort") || "");

  const [buyNowToggled, setBuyNowToggled] = useState(false);
  const [ownerFinanceToggled, setOwnerFinanceToggled] = useState(false);

  const pageIsLoading = usePageLoad();

  const normalizeString = (str) =>
    typeof str === "string" ? str.trim().toLowerCase() : "";

  const formatNumberWithCommas = (num) => {
    if (num === null || num === undefined) return "";
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const activeFilters = {
    buyNowToggled: searchParams.get("buyNow") === "true",
    ownerFinanceToggled: searchParams.get("ownerFinance") === "true",
    selectedStatuses,
    selectedStates,
    minPrice,
    maxPrice,
    minAcres,
    maxAcres,
  };

  const filteredProperties = useMemo(() => {
    return properties.filter((p) => {
      if (p.hidden === true) return false;

      const price = Number(p.price) || 0;
      const acres = Number(p.acres) || 0;

      if (!p.price || !p.acres) {
        console.warn(
          `Property ${
            p.id || p.title || "(unknown title)"
          } is missing key data:`,
          { price: p.price, acres: p.acres }
        );
      }

      const query = normalizeString(searchQuery);

      const matchesSearch =
        query.length === 0 ||
        Object.values(p)
          .flatMap((val) => {
            if (typeof val === "string" || typeof val === "number")
              return [val];
            if (typeof val === "object" && val !== null)
              return Object.values(val);
            return [];
          })
          .some((val) => normalizeString(String(val)).includes(query));

      const status = normalizeString(p.status);
      const state = normalizeString(p.state);

      const matchesPrice = price >= minPrice && price <= maxPrice;
      const matchesAcres = acres >= minAcres && acres <= maxAcres;
      const matchesStatus =
        selectedStatuses.length === 0 || selectedStatuses.includes(status);
      const matchesState =
        selectedStates.length === 0 ||
        selectedStates.map(normalizeString).includes(normalizeString(state));

      const isBuyNow =
        p.isBuyNow ??
        p.PTBContent?.canBuyNow ??
        p.PTBContent?.buyNowAvailable ??
        false;

      const isOwnerFinanced =
        p.isOwnerFinanced ?? p.PTBContent?.canOwnerFinance ?? false;

      const matchesBuyNow = !buyNowToggled || isBuyNow === true;
      const matchesOwnerFinance =
        !ownerFinanceToggled || isOwnerFinanced === true;

      return (
        matchesPrice &&
        matchesAcres &&
        matchesStatus &&
        matchesState &&
        matchesBuyNow &&
        matchesOwnerFinance &&
        matchesSearch
      );
    });
  }, [
    properties,
    minPrice,
    maxPrice,
    minAcres,
    maxAcres,
    selectedStatuses,
    selectedStates,
    buyNowToggled,
    ownerFinanceToggled,
    searchQuery,
  ]);

  useEffect(() => {
    const normalizedSlug = stateSlug?.toLowerCase();
    const isSlugControlled =
      normalizedSlug &&
      ["ok", "tx", "fl", "oklahoma", "texas", "florida"].includes(
        normalizedSlug
      );

    if (!isSlugControlled) {
      const newParams = new URLSearchParams(searchParams);
      newParams.delete("state");
      selectedStates.forEach((state) => {
        newParams.append("state", normalizeString(state));
      });
      setSearchParams(newParams, { replace: true });
    }
  }, [selectedStates, stateSlug]);

  // memoised ordering
  const sortedProperties = useMemo(() => {
    const list = [...filteredProperties];
    switch (sortBy) {
      case "price-asc":
        return list.sort((a, b) => a.price - b.price);
      case "price-desc":
        return list.sort((a, b) => b.price - a.price);
      case "acres-asc":
        return list.sort((a, b) => a.acres - b.acres);
      case "acres-desc":
        return list.sort((a, b) => b.acres - a.acres);
      default:
        return list;
    }
  }, [filteredProperties, sortBy]);

  function toSmallSlug(str) {
    return str.toLowerCase().replace(/_/g, "-");
  }

  useEffect(() => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete("state");
    selectedStates.forEach((state) => {
      newParams.append("state", normalizeString(state));
    });
    setSearchParams(newParams, { replace: true }); // avoids pushing new history state
  }, [selectedStates]);

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
                searchParams={searchParams}
                setSearchParams={setSearchParams}
                formatNumberWithCommas={formatNumberWithCommas}
                selectedStatuses={selectedStatuses}
                selectedStates={selectedStates}
                setSelectedStates={setSelectedStates}
                ownerFinanceToggled={ownerFinanceToggled}
                setOwnerFinanceToggled={setOwnerFinanceToggled}
                buyNowToggled={buyNowToggled}
                setBuyNowToggled={setBuyNowToggled}
              />

              {/* === RIGHT COLUMN === */}
              <div className="flex-1 flex flex-col relative">
                <SearchBar
                  themeMode={themeMode}
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                />
                <div>
                  <FilterSummarySortBy
                    themeMode={themeMode}
                    activeFilters={activeFilters}
                    sortBy={sortBy}
                    setSortBy={setSortBy}
                  />
                  <span className="text-sm px-3 sm:px-0 text-left text-gray-400 relative -top-1 mr-auto">
                    <span className="text-[#149f49]">
                      {sortedProperties.length}
                    </span>{" "}
                    result{sortedProperties.length !== 1 ? "s" : ""}
                  </span>
                </div>

                {/* PROPERTY CARDS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 mt-[0.74rem] gap-6">
                  {sortedProperties.map((property) => (
                    <Link to={`/listing/${property.id}/`} key={property.id}>
                      <PropertyCard
                        data={property}
                        themeMode={themeMode}
                        formatNumberWithCommas={formatNumberWithCommas}
                      />
                    </Link>
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
