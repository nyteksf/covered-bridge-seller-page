import { useState } from "react";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import SectionWrapper from "../../SectionWrapper";

const ImageUploadForm = ({ formState, onUpdate }) => {
  const [uploading, setUploading] = useState(false);
  const [uploadErrors, setUploadErrors] = useState([]);
  const [imagesMeta, setImagesMeta] = useState(formState.imagesMeta || []);
  const [uploadSection, setUploadSection] = useState("gallery"); // default tag
  const [fileInputs, setFileInputs] = useState([0]);
  const storage = getStorage();
  const propertyId = formState?.propertyId;

  const handleFileChange = async (e, inputIndex) => {
    const files = Array.from(e.target.files);
    if (!propertyId) {
      alert("Property ID is required before uploading images.");
      return;
    }

    setUploading(true);
    const newImagesMeta = [...imagesMeta];
    const newErrors = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const ext = file.name.split(".").pop();
      const imageName = `${propertyId}_${uploadSection}_${uuidv4()}.${ext}`;
      const storageRef = ref(storage, `images/${imageName}`);

      try {
        await uploadBytes(storageRef, file);
        const url = await getDownloadURL(storageRef);

        newImagesMeta.push({
          name: imageName,
          url,
          section: uploadSection,
        });
      } catch (error) {
        console.error("Upload failed:", imageName, error);
        newErrors.push(imageName);
      }
    }

    setImagesMeta(newImagesMeta);
    onUpdate("imagesMeta", newImagesMeta);
    setUploadErrors(newErrors);
    setUploading(false);
  };

  const handleDeleteImage = async (imageName) => {
    const storageRef = ref(storage, `images/${imageName}`);
    try {
      await deleteObject(storageRef);
      const updated = imagesMeta.filter((img) => img.name !== imageName);
      setImagesMeta(updated);
      onUpdate("imagesMeta", updated);
    } catch (err) {
      console.error("Error deleting image:", err);
    }
  };

  const addFileInput = () => {
    setFileInputs((prev) => [...prev, prev.length]);
  };

  return (
    <section className="mb-8">
      <SectionWrapper title="Property Photos">
        <label className="block mb-3 font-semibold text-[#333]">
          Choose Image Section Type:
        </label>
        <select
          className="mb-6 p-2 border text-[#333]"
          value={uploadSection}
          onChange={(e) => setUploadSection(e.target.value)}
        >
          <option className="text-[#333]" value="gallery">
            Gallery
          </option>
          <option className="text-[#333]" value="ptb">
            Page Title Block
          </option>
          <option className="text-[#333]" value="specs">
            Specs
          </option>
          <option className="text-[#333]" value="map">
            Map
          </option>
        </select>

        <div className="">
          {fileInputs.map((_, index) => (
            <input
              key={index}
              type="file"
              multiple
              onChange={(e) => handleFileChange(e, index)}
              disabled={uploading}
              className="mb-4 inline-block mr-0 text-[#333]"
            />
          ))}
        </div>
        <button
          type="button"
          onClick={addFileInput}
          className="mb-1 mt-2 px-4 py-2 font-semibold bg-[#0000] text-green-600 border-2 border-[#181818] rounded-md hover:text-green-700 shadow-md hover:translate-y-[2px] hover:border-l-1 hover:border-b-1 hover:border-r-1 transition-all duration-[350ms] hover:shadow-sm"
        >
          <div className="relative -top-[3px]">
            <span className="text-[30px]">+</span>{" "}
            <span className="text-[20px] relative -top-[2px]">
              ADD ANOTHER IMAGE
            </span>
          </div>
        </button>

        {uploadErrors.length > 0 && (
          <div className="text-red-600 mb-4">
            Failed to upload: {uploadErrors.join(", ")}
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {imagesMeta.map((img) => (
            <div
              key={img.name}
              className="relative border p-2 rounded bg-white text-[#333] shadow-sm"
            >
              <img
                src={img.url}
                alt={img.name}
                className="w-full h-auto object-cover rounded"
              />
              <div className="text-xs text-gray-600 mt-1">{img.section}</div>
              <button
                onClick={() => handleDeleteImage(img.name)}
                className="absolute top-1 right-1 bg-red-500 text-white text-xs px-2 py-1 rounded"
              >
                DELETE
              </button>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
};

export default ImageUploadForm;
