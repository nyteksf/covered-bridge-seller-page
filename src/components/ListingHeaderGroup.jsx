import { useRef, useEffect, useState } from "react";

const ListingHeaderGroup = ({ activeTab, setActiveTab, youTubeUrl }) => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const imagesRef = useRef(null);
  const mapRef = useRef(null);

  const [x, setX] = useState(0);
  const [width, setWidth] = useState(0);

  const tabs = [
    ...(youTubeUrl && youTubeUrl !== "none"
      ? [{ label: "Video", ref: videoRef }]
      : []),
    { label: "Images", ref: imagesRef },
    { label: "Map", ref: mapRef },
  ];

  useEffect(() => {
    const active = tabs.find((tab) => tab.label === activeTab)?.ref.current;
    const container = containerRef.current;

    if (active && container) {
      const containerBox = container.getBoundingClientRect();
      const tabBox = active.getBoundingClientRect();
      setX(tabBox.left - containerBox.left);
      setWidth(tabBox.width);
    }
  }, [activeTab]);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 text-center">
      <div
        ref={containerRef}
        className="relative flex justify-center flex-wrap gap-4 text-sm text-[#1a1a1a] uppercase tracking-wide my-2 font-lato font-bold"
      >
        {/* Morphing background tab selector */}
        <div
          className="absolute top-0 left-0 h-full z-0 bg-[#2a3031] transition-all duration-300 ease-in-out border-b-[3px] border-b-cyan-400"
          style={{
            transform: `translateX(${x}px)`,
            width: `${width}px`,
          }}
        />

        {/* Tabs with refs */}
        {tabs.map(({ label, ref }) => (
          <a
            key={label}
            ref={ref}
            href={`#${label.toLowerCase()}`}
            onClick={(e) => {
              e.preventDefault();
              setActiveTab(label);
            }}
            className={`relative z-0 inline-block align-top text-left cursor-pointer px-[30px] py-[9px] max-w-full no-underline transition-all duration-200 ease-in-out ${
              activeTab === label
                ? "text-white"
                : "hover:text-[#027979] text-[#1a1a1a]"
            }`}
          >
            {label}
          </a>
        ))}

        {/* Static Details tab (no animation, normal anchor) */}
        <a
          href="#property-specs"
          className="relative z-0 inline-block align-top text-left cursor-pointer px-[30px] py-[9px] max-w-full no-underline transition-all duration-200 ease-in-out hover:text-[#027979] text-[#1a1a1a]"
        >
          Details
        </a>
      </div>
    </div>
  );
};

export default ListingHeaderGroup;
