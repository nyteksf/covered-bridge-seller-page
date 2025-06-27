import { useState } from "react";

import ContactMeModal from "./ContactMeModal";

import "./contact-me-modal.css";

const StickySecondaryNav = () => {
  const [isNavModalOpen, setIsNavModalOpen] = useState(false);
  const [isNavModalAnimating, setIsNavModalAnimating] = useState(false);

  return (
    <>
      {(isNavModalOpen || isNavModalAnimating) && (
        <ContactMeModal
          isModalOpen={isNavModalOpen}
          setIsModalOpen={setIsNavModalOpen}
          isModalAnimating={isNavModalAnimating}
          setIsModalAnimating={setIsNavModalAnimating}
        />
      )}
      <nav
        className="
    fixed top-0 left-0 w-full h-[67.2px]
    z-[19] bg-[#1f1f1f] text-[#f5f5f5]
    flex gap-[3.5rem] pl-[5rem] border-b-[#333] border-b-[0.5px]
  "
      >
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
          <ul className="font-montserrat flex justify-between items-center w-full max-w-[1440px] mx-auto relative h-auto gap-[4.9rem]">
            <li className="text-left flex-col flex-none order-[-1] self-auto py-2 px-1">
              <a
                href="#"
                className="hover:text-cyan-200 opacity-100 text-white text-center tracking-[1px] uppercase cursor-pointer flex-shrink-0 justify-center items-center h-auto p-0 font-montserrat text-[1.1rem] font-bold transition-colors duration-250 block relative
              duration-150 no-underline mx-auto align-top
              "
              >
                Available
              </a>
            </li>
            <li className="text-left flex-col flex-none order-[-1] self-auto py-2 px-1">
              <a
                href="#"
                className="hover:text-cyan-200 opacity-100 text-white text-center tracking-[1px] uppercase cursor-pointer flex-shrink-0 justify-center items-center h-auto p-0 font-montserrat text-[1.1rem] font-bold transition-colors duration-250 block relative  
              duration-150 
              no-underline 
              mx-auto 
              align-top
              "
              >
                Sold
              </a>
            </li>
            <li className="text-left flex-col flex-none order-[-1] self-auto py-2 px-1">
              <a
                href="#"
                className="hover:text-cyan-200 opacity-100 text-white text-center tracking-[1px] uppercase cursor-pointer flex-shrink-0 justify-center items-center h-auto p-0 font-montserrat text-[1.1rem] font-bold transition-colors duration-250 block relative  
              duration-150 
              no-underline 
              mx-auto 
              align-top
              "
              >
                Testimonials
              </a>
            </li>
            <li className="text-left flex-col flex-none order-[-1] self-auto py-2 px-1">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIsNavModalOpen(true);
                }}
                className="hover:text-cyan-200 opacity-100 text-white text-center tracking-[1px] uppercase     cursor-pointer flex-shrink-0 justify-center items-center h-auto p-0 font-montserrat text-[1.1rem] font-bold transition-colors duration-250 block relative  
                duration-150 no-underline mx-auto align-top
                "
              >
                Contact
              </button>
            </li>
            <li className="text-left flex-col flex-none order-[-1] self-auto py-2 px-1">
              <a
                href="#"
                className="hover:text-cyan-200 hover:border-white opacity-100 hover:bg-transparent text-white text-center tracking-[1px] uppercase cursor-pointer flex-shrink-0 justify-center items-center h-auto p-0 font-montserrat text-[1.1rem] font-bold transition-colors duration-250 block relative border-4 border-cyan-200 bg-[#231f20] px-2 leading-[20px] duration-250 pt-[0.25rem] pl-[0.5rem] pr-[0.5rem] pb-[0.15rem]  
              duration-150 
              no-underline 
              mx-auto 
              align-top
              "
              >
                Featured Property
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default StickySecondaryNav;
