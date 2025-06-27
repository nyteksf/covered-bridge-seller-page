import SectionWrapper from "../../SectionWrapper";

const BasicInfoForm = ({ formState, onUpdate, isSubmitting }) => (
  <SectionWrapper title="Basic Info">
    <div className="mb-6">
      <h5 className="font-semibold text-[#333] mb-2 mt-2 text-lg">
        <span className="text-red-400">Warning!</span> <span className="text-black">How To Use This Listing
        Generator:</span>
      </h5>
      <p className="text-[#333] max-w-2xl">
        You must generate a propertyId in order for the new listing to be taken
        up by the system and used. To do so, simply select your desired state
        from the dropdown list, and next use autocomplete to finish entering the
        county name inside the adjacent input to avoid potential typos.
      </p>
    </div>

    <hr className="my-4 border-gray-300" />

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-4">
      <div className="col-span-1">
        <label className="block font-semibold text-[#333] mb-1">
          Covered Bridge ID
        </label>
        <input
          type="text"
          className="border p-2 w-full bg-gray-100 text-gray-600 cursor-not-allowed"
          placeholder="Auto-generated from state + county, below..."
          value={formState.propertyId || ""}
          disabled
        />
      </div>

      <div className="col-span-1">
        <label className="block font-semibold text-[#333] mb-1">
          YouTube Video URL
        </label>
        <input
          type="text"
          className="border p-2 w-full"
          placeholder="https://www.youtube.com/watch?v=8v2GkejlRZw"
          value={formState.youTubeUrl || ""}
          onChange={(e) => onUpdate("youTubeUrl", e.target.value)}
        />
      </div>

      <div className="col-span-3">
        <label className="block font-semibold text-[#333] mb-1">
          Listing Title
        </label>
        <input
          type="text"
          className="border p-2 w-full"
          placeholder="e.g. 10 Acres Near..."
          value={formState.title || ""}
          onChange={(e) => onUpdate("title", e.target.value)}
        />
      </div>
    </div>
  </SectionWrapper>
);

export default BasicInfoForm;
