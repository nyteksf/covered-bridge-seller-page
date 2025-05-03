import { useMemo } from "react";

export function useActiveFilters({
  buyNowToggled,
  setBuyNowToggled,
  ownerFinanceToggled,
  setOwnerFinanceToggled,
  selectedStatuses,
  setSelectedStatuses,
  selectedStates,
  setSelectedStates,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  minAcres,
  setMinAcres,
  maxAcres,
  setMaxAcres,
  formatNumberWithCommas,
}) {
  return useMemo(() => {
    const pills = [];

    const capFirst = (str) =>
      str && str.length
        ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
        : str;

    if (buyNowToggled)
      pills.push({
        id: "buy-now",
        label: "Buy Now",
        onRemove: () => setBuyNowToggled(false),
      });

    if (ownerFinanceToggled)
      pills.push({
        id: "owner-finance",
        label: "Owner Finance",
        onRemove: () => setOwnerFinanceToggled(false),
      });

    selectedStatuses.forEach((s) =>
      pills.push({
        id: `status-${s}`,
        label: capFirst(s),
        onRemove: () =>
          setSelectedStatuses((prev) => prev.filter((x) => x !== s)),
      })
    );

    selectedStates.forEach((st) =>
      pills.push({
        id: `state-${st}`,
        label: st,
        onRemove: () =>
          setSelectedStates((prev) => prev.filter((x) => x !== st)),
      })
    );

    if (minPrice > 0 || maxPrice < 30_000_000)
      pills.push({
        id: "price-range",
        label: `$${formatNumberWithCommas(minPrice)}-$${formatNumberWithCommas(
          maxPrice
        )}`,
        onRemove: () => {
          setMinPrice(0);
          setMaxPrice(30_000_000);
        },
      });

    if (minAcres > 0 || maxAcres < 15_000)
      pills.push({
        id: "acre-range",
        label: `${minAcres}-${maxAcres} ac`,
        onRemove: () => {
          setMinAcres(0);
          setMaxAcres(15_000);
        },
      });

    return pills;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    buyNowToggled,
    ownerFinanceToggled,
    selectedStatuses,
    selectedStates,
    minPrice,
    maxPrice,
    minAcres,
    maxAcres,
  ]);
}
