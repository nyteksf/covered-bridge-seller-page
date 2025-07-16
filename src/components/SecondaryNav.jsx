import { useState } from "react";
import { Link } from "react-router-dom";

import ContactMeModal from "./ContactMeModal";

import sunLight from "../../public/sun-light.svg";
import moonLight from "../../public/moon-light.png";

import "./contact-me-modal.css";

export default function SecondaryNav({
  showThemes = false,
  themeMode,
  setThemeMode,
}) {
  const [isNavbarModalOpen, setIsNavbarModalOpen] = useState(false);
  const [isNavbarModalAnimating, setIsNavbarModalAnimating] = useState(false);

  const handleThemeChangeToDark = () => {
    if (themeMode === "light-mode") {
      setThemeMode("dark-mode");
    }
  };

  const handleThemeChangeToLight = () => {
    if (themeMode === "dark-mode") {
      setThemeMode("light-mode");
    }
  };

  return (
    <>
      {(isNavbarModalOpen || isNavbarModalAnimating) && (
        <ContactMeModal
          isModalOpen={isNavbarModalOpen}
          setIsModalOpen={setIsNavbarModalOpen}
          isModalAnimating={isNavbarModalAnimating}
          setIsModalAnimating={setIsNavbarModalAnimating}
        />
      )}
      <nav className="w-full pl-[5rem] pr-[8.45rem] py-2 bg-[#2a3031] gap-x-[3.5rem] relative z-[20]">
        <div
          className="
          nav-link-wrapper
          text-left
          flex
          flex-col
          flex-none
          order-[-1]
          justify-center
          self-auto
          items-center
          pt-[0.05rem] pb-[0.1rem] pl-1 pr-[2.2rem]
          relative"
        >
          <ul className="font-montserrat flex justify-between items-center w-full max-w-[1440px] mx-auto    py-1 relative h-auto gap-[3.5rem]">
            <li>
              <Link
                to="/land-for-sale?country=U.S.A."
                className="hover:text-cyan-200 opacity-100 text-white text-center tracking-[1px] uppercase cursor-pointer flex-shrink-0 justify-center items-center h-auto p-0 font-montserrat text-[1.1rem] font-bold transition-colors duration-250 block relative"
              >
                Available
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className="hover:text-cyan-200 opacity-100 text-white text-center tracking-[1px] uppercase cursor-pointer flex-shrink-0 justify-center items-center h-auto p-0 font-montserrat text-[1.1rem] font-bold transition-colors duration-250 block relative"
              >
                F.A.Q.
              </Link>
            </li>
            <li>
              <Link
                to="/testimonials"
                className="hover:text-cyan-200 opacity-100 text-white text-center tracking-[1px] uppercase cursor-pointer flex-shrink-0 justify-center items-center h-auto p-0 font-montserrat text-[1.1rem] font-bold transition-colors duration-250 block relative"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIsNavbarModalOpen(true);
                }}
                className="hover:text-cyan-200 opacity-100 text-white text-center tracking-[1px] uppercase cursor-pointer flex-shrink-0 justify-center items-center h-auto p-0 font-montserrat text-[1.1rem] font-bold transition-colors duration-250 block relative"
              >
                Contact
              </button>
            </li>
            <li>
              <Link
                to="/guarantee"
                className="hover:text-cyan-200 hover:border-white opacity-100 hover:bg-transparent text-white text-center tracking-[1px] uppercase !cursor-pointer flex-shrink-0 justify-center items-center h-auto p-0 font-montserrat text-[1.1rem] font-bold transition-colors duration-250 block relative border-4 border-cyan-200 bg-[#231f20] px-2 leading-[20px] duration-250 pt-[0.25rem] pl-[0.5rem] pr-[0.5rem] pb-[0.15rem]"
              >
                OUR GUARANTEE
              </Link>
            </li>
            {showThemes ? (
              <li>
                <div className="group relative flex gap-x-2">
                  <img
                    src={sunLight}
                    className="opacity-80 hover:opacity-90 cursor-pointer transition-all duration-150 w-[22px]"
                    title="Light Mode"
                    onClick={handleThemeChangeToLight}
                  />
                  <img
                    src={moonLight}
                    className="opacity-80 hover:opacity-90 cursor-pointer transition-all duration-150 w-[22px]"
                    title="Dark Mode"
                    onClick={handleThemeChangeToDark}
                  />
                </div>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}
