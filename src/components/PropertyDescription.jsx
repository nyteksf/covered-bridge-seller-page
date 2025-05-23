import Disclaimer from "./Disclaimer";
import SectionBlock from "@/components/SectionBlock";
import BasicListSection from "@/components/BasicListSection";
import KeyValueSection from "@/components/PropertySpecKeyValues";
import PropertyVisitDetailsList from "./PropertyVisitDetailsList";
import RenderGPSCoords from "./RenderGPSCoords";
import ContactInfoJoe from "./ContactInfoJoe";

const PropertyDescription = ({
  pSections = [],
  miscItems,
  propertySpecifications,
  nearbyPoints,
  PropertyVisitDetails,
  GPSCoords,
}) => {
  const descriptionPairs = pSections;
  const specificationPairs = propertySpecifications ?? [];

  const formattedNearbyPoints =
    nearbyPoints?.map((point) => {
      const baseText =
        `${point.distance} ${point.unit} to ${point.title}` +
        (point.population ? `: Pop. ${point.population.toLocaleString()}` : "");

      if (point.link) {
        return {
          text: baseText,
          url: point.link,
          type: "link",
        };
      }

      return baseText; // plain string fallback
    }) || [];

  miscItems = miscItems ?? [];

  const sections = [
    /* 0 ─ Property description pairs */
    <div
      className="space-y-3 w-full max-w-[616px] mx-auto border-l-[4px] border-[#007e7e] pl-4"
      key="desc"
    >
      {descriptionPairs.map(({ title, body }) => (
        <div key={title}>
          <p className="font-bold text-black mb-1">{title}</p>
          <p className="whitespace-pre-line text-[#3e3e3e]">{body}</p>
        </div>
      ))}
    </div>,

    /* 1 ─ Misc block (with its own <h4>) */
    <BasicListSection
      key="misc"
      title="Misc. Information"
      items={miscItems}
      className="text-[#333] py-5"
      showBullets="showBullets"
    />,

    /* 2 ─ Key/Value specs */
    /* NEEDS TO PULL PropertyId FROM THE DB */
    <KeyValueSection
      key="specs"
      title="Property Specifications"
      items={specificationPairs}
      className="text-[#333] py-0"
    />,

    /* 3 ─ Nearby POI list */
    <BasicListSection
      key="poi"
      title="Nearby Points of Interest"
      items={formattedNearbyPoints}
      className="text-[#333] py-5"
      showBullets="showBullets"
    />,

    /* 4 - "To Schedule a Viewing" */
    <PropertyVisitDetailsList
      key="viewing"
      title="Visiting the Property"
      details={PropertyVisitDetails}
      className="text-[#333] py-0"
    />,

    /* 5 - "GPS Coordinates" */
    <RenderGPSCoords
      key="gps"
      title="GPS Coordinates (Approximate)"
      coords={GPSCoords}
      className="text-[#333] py-4"
    />,

    /* 6 - "Contact Info" */
    <ContactInfoJoe />,
  ];

  return (
    <section className="border-b border-[#c4c4c4] mb-[30px] pb-[15px]">
      <h2 className="font-montserrat font-bold text-[31px] leading-[34px] text-[#333]">
        Property Description
        <span className="block bg-[#007e7e] w-[150px] h-[2px] mt-[5px] mb-[20px]" />
      </h2>
      <h4 className="font-montserrat font-bold text-lg leading-[34px] w-[616px] mx-auto -tracking-[0.05px] text-black mb-3">
        General Details
      </h4>
      {/* iterate and wrap each piece in SectionBlock */}
      {sections.map((content, idx) => (
        <SectionBlock key={idx} index={idx}>
          {content}
        </SectionBlock>
      ))}
      <Disclaimer />
    </section>
  );
};

export default PropertyDescription;
