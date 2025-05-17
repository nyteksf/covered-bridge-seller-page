import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ImageGallery({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fullscreenOpen, setFullscreenOpen] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Debug logging to help identify issues
  useEffect(() => {
    console.log("ImageGallery received images:", images);
    console.log("Images type:", Array.isArray(images) ? "Array" : typeof images);
    console.log("Images length:", images?.length);
    
    // Check if images are actually valid URLs
    if (Array.isArray(images) && images.length > 0) {
      console.log("First image URL:", images[0]);
      setImagesLoaded(true);
    } else {
      console.warn("No valid images array provided to ImageGallery");
    }
  }, [images]);

  // Handle thumbnail click to update the main viewer
  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
  };

  // Navigation for the embedded viewer
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Fullscreen navigation (with stopPropagation to prevent closing the modal)
  const handleFullscreenPrev = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleFullscreenNext = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  
  // Guard clause - if no images, show a placeholder
  if (!Array.isArray(images) || images.length === 0) {
    return (
      <div className="gallery-container">
        <div className="main-image-viewer relative mb-4 bg-gray-100 rounded-lg overflow-hidden">
          <div className="aspect-video flex items-center justify-center">
            <div className="text-gray-500">No images available</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="gallery-container">
      {/* Main Image Viewer */}
      <div className="main-image-viewer relative mb-4 bg-gray-100 rounded-lg overflow-hidden">
        <div className="aspect-video flex items-center justify-center">
          <img
            src={images[activeIndex]}
            alt={`Image ${activeIndex + 1}`}
            className="max-w-full max-h-full object-contain cursor-pointer"
            onClick={() => setFullscreenOpen(true)} // Open fullscreen on click
            onError={(e) => {
              console.error("Image failed to load:", images[activeIndex]);
              e.target.src = "/api/placeholder/800/600"; // Fallback to placeholder
              e.target.alt = "Image failed to load";
            }}
          />
        </div>

        {/* Only show navigation if we have more than one image */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 text-gray-800 z-10 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 text-gray-800 z-10 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </>
        )}

        {/* Image Counter and Fullscreen button */}
        <div className="absolute bottom-2 right-2 flex items-center">
          <div className="bg-black bg-opacity-60 text-white px-2 py-1 rounded-l text-sm">
            {activeIndex + 1} / {images.length}
          </div>
          <button
            onClick={() => setFullscreenOpen(true)}
            className="bg-black bg-opacity-60 text-white px-2 py-1 rounded-r hover:bg-opacity-80"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Thumbnail Carousel - Only show if we have more than one image */}
      {images.length > 1 && (
        <Swiper
          spaceBetween={10}
          slidesPerView={5}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          className="rounded-lg thumbnail-carousel"
          breakpoints={{
            // Mobile
            320: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
            // Tablet
            640: {
              slidesPerView: 4,
              spaceBetween: 8,
            },
            // Desktop
            1024: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
          }}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div
                className={`cursor-pointer aspect-square overflow-hidden rounded border-2 transition-all ${
                  activeIndex === index ? "border-cyan-600 opacity-90" : "border-transparent opacity-100"
                }`}
                onClick={() => handleThumbnailClick(index)}
              >
                <img
                  src={src}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover hover:opacity-90 duration-250 ease scale-100 transition-all"
                  onError={(e) => {
                    console.error("Thumbnail failed to load:", src);
                    e.target.src = "/api/placeholder/150/150"; // Fallback to placeholder
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Fullscreen Modal */}
      {fullscreenOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50"
          onClick={() => setFullscreenOpen(false)}
        >
          {/* Close button */}
          <button
            onClick={() => setFullscreenOpen(false)}
            className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-white/20 z-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {images.length > 1 && (
            <>
              {/* Previous button */}
              <button
                onClick={handleFullscreenPrev}
                className="absolute left-5 text-white text-4xl z-50 hover:bg-white/20 p-4 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Next button */}
              <button
                onClick={handleFullscreenNext}
                className="absolute right-5 text-white text-4xl z-50 hover:bg-white/20 p-4 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </>
          )}

          {/* Main fullscreen image */}
          <img
            src={images[activeIndex]}
            alt={`Full ${activeIndex}`}
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
            onError={(e) => {
              console.error("Fullscreen image failed to load:", images[activeIndex]);
              e.target.src = "/api/placeholder/800/600"; // Fallback to placeholder
            }}
          />

          {/* Image counter in fullscreen mode */}
          <div className="absolute bottom-8 text-white px-4 py-2 bg-black/50 rounded text-lg">
            {activeIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  );
}