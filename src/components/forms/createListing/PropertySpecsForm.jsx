import SectionWrapper from "../../SectionWrapper";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const PropertySpecsForm = ({ formState, onUpdate }) => {
  const specsData = formState.specsData || [];
  const [showDropdownIndex, setShowDropdownIndex] = useState(null);

  const handleChange = (index, key, value) => {
    const updated = [...specsData];
    updated[index] = { ...updated[index], [key]: value };
    onUpdate("specsData", updated);
  };

  const addRow = () =>
    onUpdate("specsData", [...specsData, { key: "", value: "" }]);

  const removeRow = (i) =>
    onUpdate(
      "specsData",
      specsData.filter((_, idx) => idx !== i)
    );

  const predefinedSpecs = ["Zoning", "Road Access", "Utilities", "HOA Fees"];

  return (
    <SectionWrapper title="Property Specs">
      {specsData.map((item, idx) => (
        <div key={idx} className="mb-2 flex gap-4 items-center">
          <div className="w-1/2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left"
                >
                  {item.key || "Select Spec Type"}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full">
                {predefinedSpecs.map((spec) => (
                  <DropdownMenuItem
                    key={spec}
                    onClick={() => handleChange(idx, "key", spec)}
                  >
                    {spec}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <input
            type="text"
            className="border p-2 w-1/2"
            placeholder="Value"
            value={item.value || ""}
            onChange={(e) => handleChange(idx, "value", e.target.value)}
          />
          <button
            className="text-red-600 font-black text-lg"
            onClick={() => removeRow(idx)}
          >
            ✕
          </button>
        </div>
      ))}
      <button
        className="text-green-600 hover:text-green-700 !mt-5 !mb-1 rounded-md py-2 px-4 border-2 border-[#181818] flex justify-center items-center shadow-lg hover:shadow-md transition-all duration-[350ms] hover:translate-y-1"
        onClick={addRow}
      >
        <span className="font-semibold text-[30px] relative -top-[2px]">+</span> <span className="font-semibold text-[20px]">ADD NEW SPEC</span>
      </button>
    </SectionWrapper>
  );
};

export default PropertySpecsForm;
