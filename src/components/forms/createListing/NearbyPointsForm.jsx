import SectionWrapper from "../../SectionWrapper";

const NearbyPointsForm = ({ formState, onUpdate }) => {
  const points = formState.nearbyPoints || [];

  const handleChange = (index, field, value) => {
    const updated = [...points];
    updated[index] = { ...updated[index], [field]: value };
    onUpdate("nearbyPoints", updated);
  };

  const addRow = () =>
    onUpdate("nearbyPoints", [
      ...points,
      { title: null, location: null, distance: null, unit: null },
    ]);

  const removeRow = (index) =>
    onUpdate(
      "nearbyPoints",
      points.filter((_, i) => i !== index)
    );

  return (
    <SectionWrapper title="Nearby Points of Interest">
      {points.map((p, i) => (
        <div key={i} className="mb-6 p-4 border rounded bg-white relative">
          <div className="grid grid-cols-2 gap-4 mb-2">
            <input
              className="border p-2"
              placeholder="Title"
              value={p.title || ""}
              onChange={(e) => handleChange(i, "title", e.target.value)}
            />
            <input
              className="border p-2"
              placeholder="Location"
              value={p.location || ""}
              onChange={(e) => handleChange(i, "location", e.target.value)}
            />
            <input
              className="border p-2"
              placeholder="Distance"
              value={p.distance || ""}
              onChange={(e) => handleChange(i, "distance", e.target.value)}
            />
            <input
              className="border p-2"
              placeholder="Unit"
              value={p.unit || ""}
              onChange={(e) => handleChange(i, "unit", e.target.value)}
            />
          </div>

          <button
            onClick={() => removeRow(i)}
            className="absolute top-[50px] right-0 font-black text-red-600 text-lg"
            title="Remove"
          >
            ✕
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={addRow}
        className="mb-1 mt-0 px-4 py-2 font-semibold bg-[#0000] text-green-600 border-2 border-[#181818] rounded-md hover:text-green-700 shadow-md hover:translate-y-[2px] hover:border-l-1 hover:border-b-1 hover:border-r-1 transition-all duration-[350ms] hover:shadow-sm"
      >
        <div className="relative -top-[3px]">
          <span className="text-[30px]">+</span>{" "}
          <span className="text-[20px] relative -top-[2px]">ADD NEW POINT</span>
        </div>
      </button>
    </SectionWrapper>
  );
};

export default NearbyPointsForm;
