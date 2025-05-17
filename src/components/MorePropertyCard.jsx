import React from "react";

// Using the correct path based on your project structure
// Since the image is in public/img/property, we use the public path directly
const demoPropertyCard = "/img/property/small_property_card--more.jpeg";
const categories = ["State", "County", "$90,000", "Acres +/-"];

const MorePropertyCard = () => {
  // Fix 2: Add error handling for the image
  return (
    <a
      href="#"
      className="text-[#333] w-full max-w-full mt-[10px] mb-[30px] no-underline inline-block font-bold transition-all duration-200 focus:outline-none active:outline-none hover:outline-none"
    >
      <div className="flex flex-col items-center px-[10px] pt-[10px] pb-[5px] font-bold text-[14px] leading-[20px] font-lato">
        <img
          src={demoPropertyCard}
          alt="Property Preview"
          className="object-cover rounded-[2px] w-full h-[150px] align-middle max-w-full inline-block"
          onError={(e) => {
            console.error("Image failed to load:", e);
            e.target.src = "https://via.placeholder.com/150?text=Property";
          }}
        />
        <h4 className="text-center mt-[15px] mb-[12px] font-lato text-[18px] font-bold -tracking-[0.1px] leading-[24px]">
          13.8 Wooded Acres near the Cumberland River & Clarksville, TN
        </h4>
        <div className="flex flex-wrap justify-between w-[90%] mb-[8px] mx-auto">
          {categories.map((category) => {
            return (
              <div
                key={category}
                className="text-[#333] text-center border border-[#c4c4c480] rounded-[2px] justify-center items-center w-[48%] mb-[2%] p-[5px] font-lato text-[14px] font-bold leading-[20px] flex relative tracking-[0.1px]"
              >
                {category}
              </div>
            );
          })}
        </div>
        <div className="font-semibold -tracking-[0.1px]">
            TN_Stewart_00044
        </div>
      </div>
    </a>
  );
};

export default MorePropertyCard;
