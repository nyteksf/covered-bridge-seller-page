import { useState, useEffect } from "react";
import SectionWrapper from "../../SectionWrapper";

const DescriptionSectionForm = ({ formState, onUpdate }) => {
  const [descriptionPairs, setDescriptionPairs] = useState([]);

  useEffect(() => {
    if (
      formState.descriptionPairs &&
      Array.isArray(formState.descriptionPairs)
    ) {
      setDescriptionPairs(formState.descriptionPairs);
    }
  }, [formState.descriptionPairs]);

  const handlePairChange = (index, key, value) => {
    const updated = [...descriptionPairs];
    updated[index] = { ...updated[index], [key]: value };
    setDescriptionPairs(updated);
    onUpdate("descriptionPairs", updated);
  };

  const handleAddPair = () => {
    const updated = [...descriptionPairs, { title: "", body: "" }];
    setDescriptionPairs(updated);
    onUpdate("descriptionPairs", updated);
  };

  const handleRemovePair = (index) => {
    const updated = descriptionPairs.filter((_, i) => i !== index);
    setDescriptionPairs(updated);
    onUpdate("descriptionPairs", updated);
  };

  return (
    <section className="mb-8">
      <SectionWrapper title="Description Sections">
        <div className="space-y-6">
          {descriptionPairs.map((pair, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded shadow-sm">
              <label className="block font-bold text-sm mb-1 text-[#333]">Title</label>
              <input
                type="text"
                className="w-full p-2 mb-2 border rounded"
                value={pair.title}
                placeholder="Enter section title"
                onChange={(e) =>
                  handlePairChange(index, "title", e.target.value)
                }
              />
              <label className="block font-bold text-sm mb-1 text-[#333]">Body</label>
              <textarea
                rows="4"
                className="w-full p-2 border rounded"
                value={pair.body}
                placeholder="Enter section body"
                onChange={(e) =>
                  handlePairChange(index, "body", e.target.value)
                }
              />
              <button
                type="button"
                onClick={() => handleRemovePair(index)}
                className="mt-2 text-red-600 hover:underline text-sm"
              >
                Remove Section
              </button>
            </div>
          ))}
          <button
            type="button"
            className="text-green-600 hover:text-green-700 mt-4 !mb-1 rounded-md py-2 px-4 border-2 border-[#181818] flex justify-center items-center shadow-lg hover:shadow-md transition-all duration-[350ms] hover:translate-y-1"
            onClick={handleAddPair}
          >
            <span className="font-semibold text-[30px] relative -top-[2px]">
              +
            </span>{" "}
            <span className="font-semibold text-[20px]">
              ADD DESCRIPTION SECTION
            </span>
          </button>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default DescriptionSectionForm;
