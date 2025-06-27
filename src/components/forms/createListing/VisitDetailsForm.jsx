import SectionWrapper from "../../SectionWrapper";

const VisitDetailsForm = ({ formState, onUpdate }) => {
  const details = formState.propertyVisitDetails || [];

  const handleChange = (index, field, value) => {
    const updated = [...details];
    updated[index] = { ...updated[index], [field]: value };
    onUpdate("propertyVisitDetails", updated);
  };

  const addRow = () =>
    onUpdate("propertyVisitDetails", [...details, { text: null, url: null }]);
  const removeRow = (index) =>
    onUpdate(
      "propertyVisitDetails",
      details.filter((_, i) => i !== index)
    );

  return (
    <SectionWrapper title="Property Visit Details">
      {details.map((d, i) => (
        <div key={i} className="mb-2 flex gap-4 items-center">
          <input
            className="border p-2 w-1/2"
            placeholder="Text"
            value={d.text || ""}
            onChange={(e) => handleChange(i, "text", e.target.value)}
          />
          <input
            className="border p-2 w-1/2"
            placeholder="URL"
            value={d.url || ""}
            onChange={(e) => handleChange(i, "url", e.target.value)}
          />
          <button onClick={() => removeRow(i)} className="text-red-500 font-black">
            ✕
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={addRow}
        className="mb-1 mt-4 px-4 py-2 font-semibold bg-[#0000] text-green-600 border-2 border-[#181818] rounded-md hover:text-green-700 shadow-md hover:translate-y-[2px] hover:border-l-1 hover:border-b-1 hover:border-r-1 transition-all duration-[350ms] hover:shadow-sm"
      >
        <div className="relative -top-[3px]">
          <span className="text-[30px]">+</span>{" "}
          <span className="text-[20px] relative -top-[2px]">ADD VISIT DETAIL</span>
        </div>
      </button>
    </SectionWrapper>
  );
};

export default VisitDetailsForm;
