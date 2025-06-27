import { useRef, useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable, deleteObject } from "firebase/storage";
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { db, storage } from "@/firebase";
import { toast } from "sonner";

const MAX_FILE_SIZE_MB = 2;
const ALLOWED_TYPES = ["image/jpeg", "image/png"];

const ImageUploadSection = ({ propertyId, sectionId, images = [], onImagesChange }) => {
  const fileInputRef = useRef();
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!ALLOWED_TYPES.includes(file.type)) {
      toast.error("Invalid file type. Only JPG and PNG allowed.");
      return;
    }

    if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      toast.error(`File too large. Max ${MAX_FILE_SIZE_MB}MB allowed.`);
      return;
    }

    const filename = `${propertyId}_${sectionId}_${Date.now()}.${file.name.split(".").pop()}`;
    const storageRef = ref(storage, `propertyImages/${filename}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    setUploading(true);
    setUploadProgress(0);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      (error) => {
        console.error("Upload failed:", error);
        toast.error("Upload failed. Try again.");
        setUploading(false);
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        const imageEntry = {
          url: downloadURL,
          filename,
          section: sectionId,
          uploadedAt: new Date().toISOString(),
        };

        try {
          await updateDoc(doc(db, "properties", propertyId), {
            imagesMeta: arrayUnion(imageEntry),
          });
          onImagesChange([...images, imageEntry]);
          toast.success("Image uploaded successfully");
        } catch (err) {
          console.error("Error saving image metadata:", err);
          toast.error("Failed to update database.");
        } finally {
          setUploading(false);
        }
      }
    );
  };

  const handleDelete = async (image) => {
    const storageRef = ref(storage, `propertyImages/${image.filename}`);
    try {
      await deleteObject(storageRef);
      await updateDoc(doc(db, "properties", propertyId), {
        imagesMeta: arrayRemove(image),
      });
      onImagesChange(images.filter((img) => img.filename !== image.filename));
      toast.success("Image deleted");
    } catch (err) {
      console.error("Error deleting image:", err);
      toast.error("Delete failed");
    }
  };

  return (
    <div className="border p-4 rounded-md bg-white shadow-sm">
      <h3 className="text-lg font-bold mb-2">{sectionId} Images</h3>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        className="hidden"
        onChange={handleUpload}
      />
      <button
        className="mb-4 bg-[#007e7e] text-white px-4 py-2 rounded hover:bg-[#00cccc]"
        onClick={() => fileInputRef.current.click()}
        disabled={uploading}
      >
        {uploading ? `Uploading... ${Math.round(uploadProgress)}%` : "Upload Image"}
      </button>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images
          .filter((img) => img.section === sectionId)
          .map((img, idx) => (
            <div key={img.filename} className="relative">
              <img
                src={img.url}
                alt={`img-${idx}`}
                className="w-full h-auto rounded border shadow"
              />
              <button
                className="absolute top-1 right-1 bg-red-600 text-white rounded-full w-6 h-6 text-sm"
                onClick={() => handleDelete(img)}
                title="Delete"
              >
                ×
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ImageUploadSection;
