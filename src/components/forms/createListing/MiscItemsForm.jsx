import { useEffect } from "react";

import SectionWrapper from "../../SectionWrapper";

const MiscItemsForm = ({ formState, onUpdate }) => {
  const items =
    (formState.miscItems?.length ?? 0) > 0
      ? formState.miscItems
      : [{ text: "", type: "", url: "" }];

  if (formState.miscItems?.length === 0) {
    onUpdate("miscItems", items); // seed with one blank item
  }

  useEffect(() => {
    // Only initialize if miscItems is empty
    if (!formState?.miscItems || formState.miscItems.length === 0) {
      onUpdate("miscItems", [{ text: "", type: "", url: "" }]);
    }
  }, [formState?.miscItems, onUpdate]);

  const handleChange = (index, field, value) => {
    const updated = [...items];
    updated[index] = { ...updated[index], [field]: value };
    console.log("handleChange firing", index, field, value);

    onUpdate("miscItems", updated);
  };

  const addRow = () => {
    console.log(items);
    onUpdate("miscItems", [...items, { text: null, type: null, url: null }]);
  };

  const removeRow = (index) =>
    onUpdate(
      "miscItems",
      items.filter((_, i) => i !== index)
    );

  return (
    <SectionWrapper title="Miscellaneous Items">
      {items.map((m, i) => {
        console.log("rendering input row", m);
        <div key={i} className="mb-2 flex gap-4 items-center">
          <input
            className="border p-2 w-1/2 text-[#333]"
            placeholder={`Misc item info`}
            value={typeof m === "object" ? m.text || "" : m || ""}
            onChange={(e) => handleChange(i, "text", e.target.value)}
          />
          {typeof m === "object" && (
            <>
              <input
                className="border p-2 none w-1/4"
                placeholder="Misc item TYPE (optional)"
                value={m.type || ""}
                onChange={(e) => handleChange(i, "type", e.target.value)}
              />
              <input
                className="border p-2 w-1/4"
                placeholder="Add URL (Mandatory if using TYPE)"
                value={m.url || ""}
                onChange={(e) => handleChange(i, "url", e.target.value)}
              />
            </>
          )}
          <button
            onClick={() => removeRow(i)}
            className="text-red-500 font-black"
          >
            ✕
          </button>
        </div>;
      })}
      <button
        type="button"
        onClick={addRow}
        className="mb-1 mt-4 px-4 py-2 font-semibold bg-[#0000] text-green-600 border-2 border-[#181818] rounded-md hover:text-green-700 shadow-md hover:translate-y-[2px] hover:border-l-1 hover:border-b-1 hover:border-r-1 transition-all duration-[350ms] hover:shadow-sm"
      >
        <div className="relative -top-[3px]">
          <span className="text-[30px]">+</span>{" "}
          <span className="text-[20px] relative -top-[2px]">ADD MISC ITEM</span>
        </div>
      </button>
    </SectionWrapper>
  );
};
export default MiscItemsForm;
