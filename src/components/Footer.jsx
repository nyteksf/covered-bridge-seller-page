import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCcVisa,
  faCcMastercard,
  faCcAmex,
  faCcDiscover,
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import smallLogo from "../../public/logo-sm-2-invert.png";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#445255] text-white px-8 pb-6 text-sm font-montserrat">
        <div className="mx-auto">
          <div className="bg-[#e6e6e663] w-full h-[1px] ml-[2px] mr-[3px]" />
          {/* Footer Columns */}
          <div className="flex flex-wrap justify-between gap-8 pt-[25px]">
            {/* Column 1: 2 items */}
            <div className="flex flex-col space-y-2">
              <ul className="space-y-1">
                <li className="py-[10px] h-[40px]">
                  <a
                    href="#"
                    className="hover:text-cyan-300 font-semibold transition"
                  >
                    Properties
                  </a>
                </li>
                <li className="py-[10px] h-[40px]">
                  <a
                    href="#"
                    className="hover:text-cyan-300 font-semibold transition"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Columns 2 to 4: 3 items each */}
            <div className="flex flex-col space-y-2">
              <ul className="space-y-1">
                <li className="py-[10px] h-[40px]">
                  <a
                    href="#"
                    className="hover:text-cyan-300 font-semibold transition"
                  >
                    VIP List
                  </a>
                </li>
                <li className="py-[10px] h-[40px]">
                  <a
                    href="#"
                    className="hover:text-cyan-300 font-semibold transition"
                  >
                    About
                  </a>
                </li>
                <li className="py-[10px] h-[40px]">
                  <a
                    href="#"
                    className="hover:text-cyan-300 font-semibold transition"
                  >
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col space-y-2">
              <ul className="space-y-1">
                <li className="py-[10px] h-[40px]">
                  <a
                    href="#"
                    className="hover:text-cyan-300 font-semibold transition"
                  >
                    Contact
                  </a>
                </li>
                <li className="py-[10px] h-[40px]">
                  <a
                    href="#"
                    className="hover:text-cyan-300 font-semibold transition"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li className="py-[10px] h-[40px]">
                  <a
                    href="#"
                    className="hover:text-cyan-300 font-semibold transition"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col space-y-2">
              <ul className="space-y-1">
                <li className="pt-[13px] pb-[11px]">
                  <img
                    src={smallLogo}
                    className="w-full max-w-[160px] h-auto opacity-100 hover:opacity-90 cursor-default transition-all duration-350"
                  />
                </li>

                <li className="pt-[3.5px] pb-[8px] ">
                  <ul className="flex ">
                    <li className="x">
                      <FontAwesomeIcon
                        className="flex flex-row opacity-60 w-[32px] h-auto transition-opacity duration-200 mr-2 hover:opacity-100"
                        icon={faCcVisa}
                      />
                    </li>
                    <li className="x">
                      <FontAwesomeIcon
                        className="flex flex-row opacity-60 h-auto w-[32px] transition-opacity duration-200 mr-2 hover:opacity-100"
                        icon={faCcMastercard}
                      />
                    </li>
                    <li className="x">
                      <FontAwesomeIcon
                        className="flex flex-row opacity-60 h-auto w-[32px] transition-opacity duration-200 mr-2 hover:opacity-100"
                        icon={faCcAmex}
                      />
                    </li>
                    <li className="x">
                      <FontAwesomeIcon
                        className="flex flex-row opacity-60 h-auto w-[32px] transition-opacity duration-200 mr-2 hover:opacity-100"
                        icon={faCcDiscover}
                      />
                    </li>
                  </ul>
                </li>
                <li className="pt-[10px] pb-[10px] flex flex-row">
                  <div className="text-[#fff9] mr-[0.5rem] mb-0 font-pt-sans text-[10px] leading-[16px] flex items-center justify-center">
                    Follow Us
                  </div>
                  <ul className="flex">
                    <li className="mr-[0.2rem]">
                      <div className="w-[26px] h-[26px] rounded-full border border-white/50 flex items-center justify-center cursor-pointer hover:opacity-100 hover:bg-[#1877f2] transition-all duration-300 opacity-70">
                        <FontAwesomeIcon icon={faFacebook} />
                      </div>
                    </li>
                    <li className="mr-[0.2rem]">
                      <div className="w-[26px] h-[26px] rounded-full border border-white/50 flex items-center justify-center cursor-pointer hover:opacity-100 hover:bg-[#26a7de] transition-all duration-300 opacity-70">
                        <FontAwesomeIcon icon={faTwitter} />
                      </div>
                    </li>
                    <li className="mr-[0.2rem]">
                      <div className="w-[26px] h-[26px] rounded-full border border-white/50 flex items-center justify-center cursor-pointer hover:opacity-100 x hover:bg-[#fbad50] transition-all duration-300 opacity-70">
                        <FontAwesomeIcon icon={faInstagram} />
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="relative top-[-3.3rem] mt-10 text-gray-400">
            <p className="leading-snug text-white font-pt-sans opacity-95 mb-[0.05rem] font-semibold -tracking-[0.125px] text-[14px]">
              We are not licensed real estate brokers.
            </p>
            <p className="leading-snug font-pt-sans text-white opacity-95 font-semibold -tracking-[0.125px] text-[14px]">
              All properties are sold by Covered Bridge Properties LLC as owner.
            </p>
            <p className="font-pt-sans text-[10px] -tracking-[0.125px]">
              © {new Date().getFullYear()}{" "}
              <span className="text-[20px] leading-none relative top-[2px]">
                •
              </span>{" "}
              All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
