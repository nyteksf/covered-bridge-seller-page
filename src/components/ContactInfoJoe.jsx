import BasicListSection from "./BasicListSection";

const ContactInfoJoe = ({
  showBullets = null /* ← NEW prop (null = default bullets) */,
}) => {
  const title = "Contact Information";
  const className = "text-[#333] py-0";
  const contactInfo = [
    <>
      For Questions or to Purchase this Property, please Call or Text <strong>Joe</strong> at:
      <a
        href="tel:307-395-0929"
        className="text-[#007e7e] hover:text-[#0cc] ml-1"
      >
        {" "}
        <strong>307-395-0929</strong>
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
      <strong>OK_Carbon_00038</strong>
    </>,
    <>
      Property to Sell? Visit:{" "}
      <a
        href="https://www.selltocoveredbridge.com"
        rel="noopener noreferrer"
        target="_blank"
        className="text-[#007e7e] hover:text-[#0cc] ml-1"
      >
        <strong>https://SellToCoveredBridge.com</strong>
      </a>
    </>,
    <>
      To Speak with Covered Bridge, Call or Text Anytime at:{" "}
      <strong>866-8-BRIDGE</strong>
      <a
        href="tel:866-852-6346"
        className="text-[#007e7e] hover:text-[#0cc] ml-1"
      >
        {" "}
        <strong>(866-852-6346)</strong>
      </a>
    </>,
  ];

  return (
    <BasicListSection title={title} items={contactInfo} className={className} />
  );
};

export default ContactInfoJoe;
