import { Link } from "react-router-dom";

const formatCurrency = (value) => {
  const number = parseFloat(value.toString().replace(/[^\d.-]/g, ""));
  return isNaN(number)
    ? "—"
    : number.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      });
};

const capitalizeWords = (str = "") =>
  str.replace(/\b\w/g, (char) => char.toUpperCase());

const formatPropertyId = (rawId = "") => {
  const [state, county, num] = rawId.split("_");
  if (!state || !county || !num) return rawId;
  const countyFormatted =
    county[0].toUpperCase() + county.slice(1).toLowerCase();
  return `${state.toUpperCase()}_${countyFormatted}_${num}`;
};

const MorePropertyCard = ({ property }) => {
  if (!property) return null;

  const {
    id,
    title,
    imageUrls = [],
    image,
    PTBContent = {},
    specsData = [],
    stateName,
    countyName,
    landPrice,
    acreAmount,
  } = property;

  const fallbackSpecs = Object.fromEntries(
    specsData.map((pair) => [pair.key.toLowerCase(), pair.value])
  );

  const displayTitle =
    title ||
    `${
      PTBContent.acreAmount || acreAmount || fallbackSpecs["parcel size"] || "—"
    } Acres in ${
      PTBContent.countyName || countyName || fallbackSpecs["county"] || "—"
    }, ${PTBContent.stateName || stateName || "—"}`;

  const displayPrice =
    PTBContent.landPrice || landPrice || fallbackSpecs["price"] || "—";

  const displayAcres =
    PTBContent.acreAmount || acreAmount || fallbackSpecs["parcel size"] || "—";

  const displayState = capitalizeWords(
    PTBContent.stateName || stateName || "—"
  );

  const displayCounty = capitalizeWords(
    PTBContent.countyName || countyName || fallbackSpecs["county"] || "—"
  );

  const displayImage = imageUrls?.[0] || image || "/img/fallback-land.jpg";

  return (
    <Link to={`/listing/${id}`}>
      <div className="w-full bg-white shadow-none hover:shadow-lg translate-y-0 hover:-translate-y-1 scale-100 hover:scale-105 transition-all duration-300">
        <img
          src={displayImage}
          alt={displayTitle}
          className="w-full h-[165px] object-cover"
        />
        <p className="font-semibold text-center text-[#333] leading-snug text-[18px] font-lato pt-[12px] pb-[13px]">
          {displayTitle}
        </p>
        <div className="grid grid-cols-2 text-sm font-medium text-center gap-x-3 gap-y-2 px-2">
          <div className="border p-1 text-[14px] font-semibold font-lato text-[#181818]">
            {displayState}
          </div>
          <div className="border p-1 text-[14px] font-semibold font-lato text-[#181818]">
            {displayCounty}
          </div>
          <div className="border p-1 text-[14px] font-semibold font-lato text-[#181818]">
            {formatCurrency(displayPrice)}
          </div>
          <div className="border p-1 text-[14px] font-semibold font-lato text-[#181818]">
            {displayAcres} Acres +/-
          </div>
        </div>
        <p className="text-center text-[14px] text-[#1a1a1a] font-lato font-semibold pt-2 pb-3 mt-1">
          {formatPropertyId(id)}
        </p>
      </div>
    </Link>
  );
};

export default MorePropertyCard;
