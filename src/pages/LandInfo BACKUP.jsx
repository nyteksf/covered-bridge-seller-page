import { db } from "../../firebase";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";

import Footer from "../components/Footer";
import TopNav from "../components/TopNav";
import MapEmbed from "../components/MapEmbed";
import VIPSignup from "../components/VIPSignUp";
import LoadingState from "./LoadingState";
import ButtonToTop from "../components/ButtonToTop";
import TitleBanner from "../components/TitleBanner";
import SecondaryNav from "../components/SecondaryNav";
import YouTubeEmbed from "../components/YouTubeEmbed";
import ImageGallery from "../components/ImageGallery";
import PropertyBlurb from "../components/PropertyBlurb";
import PropertySpecs from "../components/PropertySpecs";
import StateSelector from "../components/StateSelector";
import ContactMeModal from "../components/ContactMeModal";
import PageTitleBlock from "../components/PageTitleBlock";
import LandInfoSidebar from "../components/LandInfoSidebar";
import YouTubeSkeleton from "../components/YouTubeSkeleton";
import HorizontalDivider from "../components/HorizontalDivider";
import StickySecondaryNav from "../components/StickySecondaryNav";
import ListingHeaderGroup from "../components/ListingHeaderGroup";
import MoreStateProperties from "../components/MoreStateProperties";
import PropertyDescription from "../components/PropertyDescription";

import "../components/contact-me-modal.css";
import "swiper/swiper-bundle.css";
import "../components/button-to-top.css";

const LandInfo = () => {
  const navigate = useNavigate();
  let { propertyId } = useParams();
  const imagesPreloaded = useRef(false);

  const [assetCount, setAssetCount] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [propertyData, setPropertyData] = useState(null);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [videoLoadError, setVideoLoadError] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isContactModalAnimating, setIsContactModalAnimating] = useState(false);
  const [videoUrl, setVideoUrl] = useState(
    "https://www.youtube.com/watch?v=H5W65j5i2JI"
  );

  // Add state to track active tab
  const [activeTab, setActiveTab] = useState("Video");

  /* TEMP DEMO DATA */
  const listingTitle = propertyData?.title;

  const stateName = "oklahoma";

  useEffect(() => {
    if (activeTab === "Video") {
      setVideoLoadError(false);
      setVideoLoaded(false); // force skeleton to show again
    }
  }, [activeTab]);

  const totalAssets = (propertyData?.imageUrls?.length || 0) + 1;

  useEffect(() => {
    if (imagesPreloaded.current || !propertyData?.imageUrls?.length) return;
    console.log("Starting to preload", propertyData.imageUrls.length, "images");

    // Mark as true to prevent this from running again
    imagesPreloaded.current = true;

    let imagesLoaded = 0;
    const totalImages = propertyData.imageUrls.length;

    propertyData.imageUrls.forEach((src, index) => {
      const img = new Image();

      const mark = () => {
        imagesLoaded++;
        console.log(`Image ${index + 1}/${totalImages} loaded (${src})`);

        // Only increment assetCount once all images are loaded
        if (imagesLoaded === totalImages) {
          console.log("All images preloaded");
          setAssetCount(totalImages + 1); // +1 for the video asset
        }
      };

      img.onload = mark;
      img.onerror = () => {
        console.error(`Failed to load image: ${src}`);
        mark(); // Still count errors as "loaded" to avoid blocking
      };

      img.src = src;
    });
  }, [propertyData?.imageUrls]);

  useEffect(() => {
    if (assetCount === totalAssets) setIsPageLoaded(true);
  }, [assetCount, totalAssets]);

  const handleVideoReady = () => {
    console.log("YOUTUBE VIDEO STATUS: READY"); // <— add this
    setAssetCount((c) => c + 1);
    setVideoLoaded(true);
  };

  const formatNumberWithCommas = (num) => {
    if (num === null || num === undefined) return "";
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const prettyFormatPropertyId = (propertyId) => {
    const parts = propertyId.split("-");

    if (parts.length !== 3) return propertyId; // fallback in case it's malformed

    const [state, county, number] = parts;

    const formattedState = state.toUpperCase();
    const formattedCounty =
      county.charAt(0).toUpperCase() + county.slice(1).toLowerCase();
    const formattedNumber = number;

    return [formattedState, formattedCounty, formattedNumber].join("_");
  };

  const firebaseLookupFormatPropertyId = (propertyId) => {
    const parts = propertyId.split("-");

    if (parts.length !== 3) return propertyId; // fallback in case it's malformed

    const [state, county, number] = parts;

    const formattedState = state.toLowerCase();
    const formattedCounty = county.toLowerCase();
    const formattedNumber = number;

    return [formattedState, formattedCounty, formattedNumber].join("_");
  };

  const prettyFormattedPropertyId = prettyFormatPropertyId(propertyId);

  useEffect(() => {
    const loadData = async () => {
      if (!propertyId) return;
      const formattedId = firebaseLookupFormatPropertyId(propertyId);

      try {
        const docRef = doc(db, "properties", formattedId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          console.log("Firestore doc data:", data);

          // Check images specifically
          if (!data.imageUrls || !Array.isArray(data.imageUrls)) {
            console.log("data.imageUrls -> ", data.imageUrls);
            console.warn(
              "Property has no images or images is not an array:",
              data.imageUrls
            );

            // If images is missing or not an array, initialize it
            data.imageUrls = data.imageUrls || [];
          } else {
            console.log(
              "Images array loaded:",
              data.imageUrls.length,
              "images"
            );
          }

          setPropertyData({ id: docSnap.id, ...data });
        } else {
          console.warn("No property found with ID:", formattedId);
          navigate("/error404", { replace: true });
        }
      } catch (err) {
        console.error("Error loading property data:", err);
      }
    };

    loadData();
  }, [propertyId, navigate]);

  useEffect(() => {
    if (activeTab !== "Video") return;

    const timer = setTimeout(() => {
      if (!videoLoaded) {
        setVideoLoadError(true);
        // Optionally, log error or display message to user
      }
    }, 15000); // 10 seconds timeout

    return () => clearTimeout(timer);
  }, [activeTab, videoLoaded]);

  const formattedNearbyPoints =
    propertyData?.nearbyPoints?.map((point) => {
      let text = `${point.distance} ${point.unit} to ${point.title}`;
      if (point.population) {
        text += ` : Pop ${point.population.toLocaleString()}`;
      }
      if (point.link) {
        text += ` (more info: ${point.link})`;
      }
      return text;
    }) || [];

  return (
    <>
      {(isContactModalOpen || isContactModalAnimating) && (
        <ContactMeModal
          isModalOpen={isContactModalOpen}
          setIsModalOpen={setIsContactModalOpen}
          isModalAnimating={isContactModalAnimating}
          setIsModalAnimating={setIsContactModalAnimating}
        />
      )}
      {!isPageLoaded ? (
        <LoadingState />
      ) : (
        <>
          <TopNav />
          <SecondaryNav />
          <StickySecondaryNav />

          <main
            className="w-full bg-white"
            style={{ scrollBehavior: "smooth" }}
          >
            {/* Full-width title */}
            <TitleBanner listingTitle={listingTitle} />

            <div className="w-full max-w-7xl mx-auto px-4 pb-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Left Content Column */}
              <div className="md:col-span-2">
                <ListingHeaderGroup
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />

                {/* media block */}
                {activeTab === "Video" && (
                  <div className="relative w-full aspect-video">
                    {!videoLoaded && (
                      <div className="absolute inset-0 z-1">
                        <YouTubeSkeleton />
                      </div>
                    )}

                    {!videoLoadError ? (
                      <YouTubeEmbed
                        url={videoUrl}
                        onReady={handleVideoReady}
                        className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${
                          videoLoaded ? "opacity-100 z-2" : "opacity-0 z-0"
                        }`}
                      />
                    ) : (
                      <div className="error-message p-4 bg-red-100 text-red-700">
                        Video unavailable or restricted. Please try another
                        property.
                      </div>
                    )}
                  </div>
                )}

                {activeTab === "Images" && (
                  <>
                    {!propertyData?.imageUrls?.length ? (
                      <div className="relative aspect-video bg-gray-100 flex items-center justify-center flex-col border border-[#c4c4c427]">
                        <img
                          loading="lazy"
                          src="/public/img/error-indicator.svg"
                          title="Error!"
                          alt="Error Indicator Image"
                          className="w-[80px] h-auto"
                        />
                        <p className="text-[#333] font-pt-serif text-sm leading-5">
                          Error loading property images
                        </p>
                      </div>
                    ) : (
                      <ImageGallery
                        images={propertyData.imageUrls}
                        key={`gallery-${propertyData.id}`}
                      />
                    )}
                  </>
                )}

                {activeTab === "Map" && (
                  <MapEmbed lat={42.38713} lng={-106.772502} />
                )}

                {/* rest of page column */}
                {propertyData?.PTBContent && (
                  <PageTitleBlock
                    PTBContent={propertyData.PTBContent}
                    propertyId={prettyFormatPropertyId(propertyId)}
                    formatNumberWithCommas={formatNumberWithCommas}
                  />
                )}
                <HorizontalDivider />
                <PropertyBlurb
                  propertyId={propertyData.parcelId}
                  propertyBlurbContent={propertyData.PTBContent}
                  propertyStatus={propertyData.propertyStatus}
                />
                <PropertySpecs
                  specs={propertyData?.specsData}
                  propertyId={prettyFormattedPropertyId}
                />
                <PropertyDescription
                  pSections={propertyData.descriptionPairs}
                  miscItems={propertyData.miscItems}
                  propertySpecifications={propertyData.propertySpecifications}
                  nearbyPoints={propertyData.nearbyPoints}
                  PropertyVisitDetails={propertyData.propertyVisitDetails}
                  GPSCoords={propertyData.GPSCoords}
                />
                <MoreStateProperties stateName={stateName} />
              </div>

              {/* Sticky Sidebar (Right Content Column) */}
              <div className="md:col-span-1 relative">
                <div className="top-[70px] self-start z-10 h-fit">
                  <LandInfoSidebar
                    setIsContactModalOpen={setIsContactModalOpen}
                  />
                </div>
              </div>
            </div>
          </main>

          <VIPSignup />
          <StateSelector />
          <Footer />
        </>
      )}
    </>
  );
};

export default LandInfo;
