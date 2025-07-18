import BasicListSection from "./BasicListSection";

const ContactInfoJoe = ({ propertyId }) => {
  const title = "Contact Information";
  const className = "text-[#333] py-0";

  const formatPropertyId = (rawId = "") => {
    const [state, county, num] = rawId.split("_");
    if (!state || !county || !num) return rawId;
    const countyFormatted =
      county[0].toUpperCase() + county.slice(1).toLowerCase();
    return `${state.toUpperCase()}_${countyFormatted}_${num}`;
  };

  const contactInfo = [
    <>
      For Questions or to Purchase this Property, please Call or Text{" "}
      <strong>Joe</strong> at:
      <a
        href="tel:407-289-1848"
        className="text-[#007e7e] hover:text-[#0cc] ml-1"
      >
        {" "}
        <strong>407-289-1848</strong>
      </a>
    </>,
    <>
      You may also email Joe directly at:{" "}
      <a
        href="mailto:joe@coveredbridge.properties"
        className="text-[#007e7e] hover:text-[#0cc] ml-1"
      >
        <strong>joe@coveredbridge.properties</strong>
      </a>
    </>,
    <>
      Please reference the Covered Bridge Property ID:{" "}
      <strong>{formatPropertyId(propertyId)}</strong>
    </>,
    <>
      Property to Sell? Visit:{" "}
      <a
        href="https://www.SELLToCOVEREDBRIDGE.com"
        rel="noopener noreferrer"
        target="_blank"
        className="text-[#007e7e] hover:text-[#0cc] ml-1"
      >
        <strong>https://SELLToCOVEREDBRIDGE.com</strong>
      </a>
    </>,
    <>
      To Speak with Covered Bridge, Call or Text Anytime at:{" "}
      <strong>866-610-LAND</strong>
      <a
        href="tel:866-610-5263"
        className="text-[#007e7e] hover:text-[#0cc] ml-1"
      >
        {" "}
        <strong>(866-610-5263)</strong>
      </a>
    </>,
  ];

  return (
    <BasicListSection title={title} items={contactInfo} className={className} />
  );
};

export default ContactInfoJoe;
