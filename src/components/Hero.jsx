import React from "react";
import mapGraphic from "../../public/ripple-bg-optimized.svg";

export default function Hero() {
  return (
    <section className="relative text-white py-20 px-6 items-center justify-center overflow-hidden bg-[#141312] h-screen min-h-[600px] block">
      {/* Background Layer with explicit opacity */}
      <div
        className="absolute inset-0 w-full h-full opacity-100 bg-cover z-0"
        style={{ backgroundImage: `url(${mapGraphic})` }}
      />

      {/* Content */}
      <div className="absolute z-1 text-center max-w-2xl left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <a
            href="/land-for-sale?country=U.S.A."
            className="hover:text-cyan-200 hover:border-white border-4 border-cyan-200 px-6 pt-1.5 pb-[0.35rem] font-montserrat text-[22px] text-center mt-0 mb-0 uppercase cursor-pointer bg-[#131313] rounded-none flex-none transition-all duration-200 font-extrabold h-[52px] w-[251.1px] py-3 shadow-[0_0_4px_rgba(0,255,255,0.35)] hover:shadow-[0_0_6px_rgba(255,255,255,0.5)] -tracking-[0.0325px]"
          >
            Buy Property
          </a>
          <a
            href="https://www.selltocoveredbridge.com/"
            className="hover:text-cyan-200 hover:border-white border-4 border-cyan-200 px-6 pt-1.5 pb-[0.35rem] font-montserrat text-[22px] text-center mt-0 mb-0 uppercase cursor-pointer bg-[#131313] rounded-none flex-none transition-all duration-200 font-extrabold h-[52px] w-[251.1px] py-3 shadow-[0_0_4px_rgba(0,255,255,0.35)] hover:shadow-[0_0_6px_rgba(255,255,255,0.5)] -tracking-[0.0325px]"
          >
            Sell Property
          </a>
        </div>
      </div>
    </section>
  );
}
