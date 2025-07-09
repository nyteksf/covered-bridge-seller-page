import { useParams, Link } from "react-router-dom";
import TopNav from "../components/TopNav";
import SecondaryNav from "../components/SecondaryNav";
import StickySecondaryNav from "../components/StickySecondaryNav";
import PropertyCard from "../components/PropertyCard";
import Footer from "../components/Footer";
import { usePropertyList } from "../hooks/usePropertyList";

const STATE_NAMES = {
  tx: "Texas",
  ok: "Oklahoma",
  fl: "Florida",
};

const STATE_OPTIONS = Object.entries(STATE_NAMES);

export default function StateLandPage() {
  const { stateSlug } = useParams(); // e.g., 'texas'
  const { data: allProperties } = usePropertyList();
  console.log("allProperties -> ", allProperties);
  const normalizedSlug = stateSlug?.toLowerCase();
  const stateAbbr =
    normalizedSlug.length === 2
      ? normalizedSlug
      : {
          texas: "tx",
          oklahoma: "ok",
          florida: "fl",
        }[normalizedSlug];

  const stateLabel = STATE_NAMES[stateAbbr] || "Unknown State";

  const stateProperties = allProperties.filter((p) => {
    const rawState =
      p?.state?.toLowerCase() ||
      p?.stateName?.toLowerCase() ||
      p?.PTBContent?.stateName?.toLowerCase();

    const matchedAbbr = Object.entries(STATE_NAMES).find(
      ([abbr, fullName]) => fullName.toLowerCase() === rawState
    )?.[0];

    return matchedAbbr === stateAbbr;
  });

  console.log(
    "State Filter Match:",
    stateAbbr,
    "=>",
    stateProperties.map((p) => p.id)
  );

  const available = stateProperties.filter((p) => {
    const status = p?.status || p?.propertyStatus;
    return status?.toLowerCase() === "available";
  });

  const sold = stateProperties.filter((p) => {
    const status = p?.status || p?.propertyStatus;
    return status?.toLowerCase() === "sold";
  });

  return (
    <>
      <TopNav />
      <SecondaryNav />
      <StickySecondaryNav />

      <div className="mb-2 px-4 md:px-12 py-8">
        <div className="w-full max-w-[1075px] mx-auto flex items-center justify-between pt-8 pb-10">
          <h1 className="text-[42px] font-semibold font-pt-serif text-[#f5f5f5]">
            {stateLabel} Land for Sale
          </h1>
          <div className="flex-1 ml-6 bg-[#e6e6e663] h-[2px]" />
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-2 items-center">
            <label htmlFor="state-select">Filter By State -</label>
            <select
              id="state-select"
              className={`bg-[#1a1a1a] text-white border border-[#555] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00bfff] hover:bg-[#000000ee] hover:text-[#f5f5f5] duration-350 cursor-pointer transition duration-200`}
              onChange={(e) => {
                const val = e.target.value;
                if (val) window.location.href = `/state/${val}`;
              }}
              value={normalizedSlug}
            >
              {STATE_OPTIONS.map(([abbr, name]) => (
                <option
                  key={abbr}
                  value={abbr}
                  className="bg-[#1a1a1a] text-white"
                >
                  {name}
                </option>
              ))}
            </select>
          </div>

          <Link
            to="/land-for-sale?country=u.s.a."
            className="px-4 py-2 border border-[#555] bg-[#000000ee] text-white rounded hover:text-[#d8d8d8] transition-all duration-350 hover:bg-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#00bfff]"
          >
            All States
          </Link>
        </div>

        <section className="mb-10 border-b-[2px] pb-4 border-[#e6e6e663]">
          <h2 className="text-2xl font-medium mb-4">Available</h2>
          {available.length === 0 ? (
            <p>No properties currently available in {stateLabel}.</p>
          ) : (
            <div className="w-full max-w-[1075px] mx-auto pt-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {available.map((p) => (
                <Link key={p.id} to={`/listing/${p.id}/`}>
                  <PropertyCard data={p} themeMode="dark-mode" />
                </Link>
              ))}
            </div>
          )}
        </section>

        {sold.length >= 1 && (
          <section className="mb-10 border-b-[2px] pb-4 border-[#e6e6e663]">
            <h2 className="text-2xl font-medium mb-4">Sold</h2>
            <div className="grid grid-cols-1 pt-2 mx-auto w-full max-w-[1075px] sm:grid-cols-2 gap-6">
              {sold.map((p) => (
                <Link key={p.id} to={`/listing/${p.id}/`}>
                  <PropertyCard data={p} themeMode="dark-mode" />
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      <Footer />
    </>
  );
}
