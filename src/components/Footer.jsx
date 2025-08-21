import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ContactMeModal from "./ContactMeModal";
import VIPListModal from "../pages/VIPListModal";
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

import "./contact-me-modal.css";

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVIPModalOpen, setIsVIPModalOpen] = useState(false);
  const [isModalAnimating, setIsModalAnimating] = useState(false);

  const launchVIPListModal = () => {
    setIsVIPModalOpen(true);
  };

  return (
    <>
      {isVIPModalOpen && (
        <VIPListModal
          isOpen={isVIPModalOpen}
          onClose={() => setIsVIPModalOpen(false)}
        />
      )}
      {(isModalOpen || isModalAnimating) && (
        <ContactMeModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          isModalAnimating={isModalAnimating}
          setIsModalAnimating={setIsModalAnimating}
        />
      )}
      <footer className="bg-[#445255] text-white px-8 pb-6 text-sm font-montserrat">
        <div className="mx-auto">
          <div className="bg-[#e6e6e663] w-full h-[1px] ml-[2px] mr-[3px]" />
          {/* Footer Columns */}
          <div className="flex flex-wrap justify-between gap-8 pt-[25px]">
            {/* Column 1: 2 items */}
            <div className="flex flex-col space-y-2">
              <ul className="space-y-1">
                <li className="py-[10px] h-[40px]">
                  <Link
                    to="/land-for-sale?country=U.S.A."
                    className="hover:text-cyan-300 font-semibold transition"
                  >
                    Properties
                  </Link>
                </li>
                <li className="py-[10px] h-[40px]">
                  <Link
                    to="/faq"
                    className="hover:text-cyan-300 font-semibold transition"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Columns 2 to 4: 3 items each */}
            <div className="flex flex-col space-y-2">
              <ul className="space-y-1">
                <li className="py-[10px] h-[40px]">
                  <button
                    onClick={launchVIPListModal}
                    className="hover:text-cyan-300 font-semibold transition"
                  >
                    VIP List
                  </button>
                </li>
                <li className="py-[10px] h-[40px]">
                  <Link
                    to="/about"
                    className="hover:text-cyan-300 font-semibold transition"
                  >
                    About
                  </Link>
                </li>
                <li className="py-[10px] h-[40px]">
                  <Link
                    to="/guarantee"
                    className="hover:text-cyan-300 font-semibold transition"
                  >
                    Our Guarantee
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col space-y-2">
              <ul className="space-y-1">
                <li className="py-[10px] h-[40px]">
                  <button
                    className="hover:text-cyan-300 font-semibold transition"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsModalOpen(true);
                    }}
                  >
                    Contact
                  </button>
                </li>
                <li className="py-[10px] h-[40px]">
                  <Link
                    to="/terms"
                    className="hover:text-cyan-300 font-semibold transition"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li className="py-[10px] h-[40px]">
                  <Link
                    to="/privacy"
                    className="hover:text-cyan-300 font-semibold transition"
                  >
                    Privacy Policy
                  </Link>
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
                      <a
                        href="https://www.facebook.com/profile.php?id=61577295317770"
                        target="_blank"
                      >
                        <div className="w-[26px] h-[26px] rounded-full border border-white/50 flex items-center justify-center cursor-pointer hover:opacity-100 hover:bg-[#1877f2] transition-all duration-300 opacity-70">
                          <FontAwesomeIcon icon={faFacebook} />
                        </div>
                      </a>
                    </li>
                    <li className="mr-[0.2rem]">
                      <a href="https://x.com/BridgeLandCo/" target="_blank">
                        <div className="w-[26px] h-[26px] rounded-full border border-white/50 flex items-center justify-center cursor-pointer hover:opacity-100 hover:bg-[#26a7de] transition-all duration-300 opacity-70">
                          <FontAwesomeIcon icon={faTwitter} />
                        </div>
                      </a>
                    </li>
                    <li className="mr-[0.2rem]">
                      <div className="w-[26px] h-[26px] rounded-full border border-white/50 flex items-center justify-center cursor-not-allowed hover:opacity-100 x hover:bg-[#fbad50] transition-all duration-300 opacity-70">
                        <FontAwesomeIcon icon={faInstagram} />
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="relative top-[-3.3rem] sm:mt-10 mt-[64px] text-gray-400">
            <p className="leading-snug text-white font-pt-sans opacity-95 mb-[0.05rem] font-semibold -tracking-[0.125px] text-[14px]">
              We are not licensed real estate brokers.
            </p>
            <p className="leading-snug font-pt-sans text-white opacity-95 font-semibold -tracking-[0.125px] text-[14px]">
              All properties are sold by Covered Bridge Properties
              <sup>™</sup> as owner.
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
