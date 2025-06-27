import SectionWrapper from "../../SectionWrapper";

const PropertyStatusForm = ({ formState, onUpdate }) => {
  const handleChange = (e) => {
    onUpdate("propertyStatus", e.target.value);
  };

  return (
    <section className="scroll-mt-[93px] border-b mb-3 border-[#c4c4c4]">
      <SectionWrapper title="Property Status">
        <div className="max-w-lg">
          <label
            htmlFor="propertyStatus"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Status
          </label>
          <select
            id="propertyStatus"
            name="propertyStatus"
            value={formState.propertyStatus || "available"}
            onChange={handleChange}
            className="block w-full mt-1 !border-red-500 rounded-md shadow-sm focus:ring-[#007e7e] focus:border-[#007e7e] text-[#333]"
          >
            <option value="available">Available</option>
            <option value="pending">Pending</option>
            <option value="sold">Sold</option>
          </select>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default PropertyStatusForm;
