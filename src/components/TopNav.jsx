import { toast } from "sonner";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import phoneIco from "../../public/phone.svg";
import logoMain from "../../public/logo-main-700.png";
import smartPhoneIco from "../../public/phone-chat-white.svg";

export default function TopNav() {
  const [email, setEmail] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmittedSuccessfully, setHasSubmittedSuccessfully] =
    useState(false);

  const submitTimeout = useRef(null);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    // lock/unlock body scroll on mobile menu
    const body = document.body;
    if (menuOpen) body.classList.add("overflow-hidden");
    else body.classList.remove("overflow-hidden");

    // close on Escape
    const onKey = (e) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting || !email) return;

    setIsSubmitting(true);
    setHasSubmittedSuccessfully(false);

    try {
      const baseUrl =
        window.location.hostname === "localhost"
          ? "https://covered-bridge-seller-page-msas6wsgt-nyteklas-projects.vercel.app"
          : "";

      const res = await fetch(`${baseUrl}/api/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name: "VIP Buyer" }),
      });

      let result;
      try {
        const text = await res.text();
        result = text ? JSON.parse(text) : {};
      } catch (err) {
        console.warn("Non-JSON response from API");
        result = { message: "Unexpected response from server." };
      }

      if (!res.ok) {
        console.error("Brevo Error Response:", result);

        if (result.code === "duplicate_parameter") {
          toast.info("You're already on the VIP list!", {
            description: "Check your inbox for updates soon.",
          });
        } else {
          toast.error(result.message || "Something went wrong", {
            description: "Feel free to try again later.",
          });
        }
        return;
      }

      setHasSubmittedSuccessfully(true);
      setEmail("");
      toast.success("VIP Access Is Granted!", {
        description: "You now have early access to exclusive land drops.",
      });
    } catch (err) {
      console.error("Unexpected Error:", err);
      toast.error("Unable to subscribe at this time.", {
        description: "Please try again later or contact us.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="bg-[#131313] w-full my-[-0.25rem] py-[4px] relative z-[20]">
        {/* Outer Wrapper */}
        <div className="flex items-center justify-between w-full mx-auto h-full max-h-[60px] py-0 relative gap-x-6 max-w-[1220px] pl-4 pr-[2.10rem]">
          {/* === LEFT SECTION === */}
          {/* Logo */}
          <Link to="/">
            <img
              src={logoMain}
              alt="Logo"
              className="w-[188px] h-auto object-contain"
            />
          </Link>

          {/* MOBILE: phone + hamburger (ADD) */}
          <div className="md:hidden ml-auto flex items-center gap-3">
            <a
              href="tel:866-610-5263"
              className="p-2 px-2.5 -m-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              aria-label="Call Covered Bridge Properties"
            >
              <img src={smartPhoneIco} alt="" className="w-5 h-5" />
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              className="p-2 -m-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d={
                    menuOpen
                      ? "M6 6 L18 18 M18 6 L6 18"
                      : "M3 6 H21 M3 12 H21 M3 18 H21"
                  }
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </button>
          </div>

          {/* Phone */}
          <div className="group hidden md:flex items-center text-[#f5f5f5] text-[1.2rem] font-bold tracking-wider -ml-[20px] gap-[0.9rem]">
            <a
              href="tel:866-610-5263"
              className="hover:opacity-[1] transition-all duration-250 uppercase text-[1.25rem] opacity-[0.85] tracking-[1.3px] leading-none font-montserrat flex items-center mr-[0px]"
            >
              <img
                src={phoneIco}
                alt="Phone"
                className="w-[20px] h-[20px] group-hover:opacity-100 mr-[2px]"
              />
              <img
                src={smartPhoneIco}
                alt="Smartphone"
                className="w-[18px] h-[18px] mr-[0.2rem]"
              />
              <span className="ml-[2px]">866-610-5263</span>
            </a>
          </div>

          {/* === MIDDLE SECTION === */}
          <div className="hidden md:flex gap-x-[2.5rem] -ml-[6px] -mr-[15px] items-center">
            <Link to="/land-for-sale?country=U.S.A.">
              <button
                className="border-4 border-cyan-200 bg-[#231f20] text-white hover:border-white hover:text-cyan-200 transition-all duration-150 
                tracking-[1px] font-montserrat font-bold text-[1.1rem] inline-block cursor-pointer text-center uppercase flex-none leading-[20px] 
                rounded-none px-[0.5rem] h-[35.2px]
              "
              >
                BUY
              </button>
            </Link>
            <a
              href="https://www.selltocoveredbridge.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <button
                className="border-4 border-cyan-200 bg-[#231f20] text-white hover:border-white hover:text-cyan-200 transition-all duration-150 tracking-[1px] font-montserrat font-bold text-[1.1rem]
            inline-block cursor-pointer text-center uppercase flex-none leading-[20px] rounded-none px-[0.5rem] h-[35.2px]
          "
              >
                SELL
              </button>
            </a>
          </div>

          {/* === RIGHT SECTION === */}
          <div className="hidden md:flex items-center gap-4">
            <span className="text-white font-montserrat text-[1rem] font-bold whitespace-nowrap -mr-[1px]">
              Join Our FREE VIP LIST
            </span>

            <form className="flex items-center gap-[0.85rem]">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="bg-white placeholder-[#242424] focus:outline-none text-[#000000bf] text-center tracking-[1px] w-[200px] h-[35.2px] font-montserrat text-[1rem] rounded-none font-semibold py-[8px] px-[12px]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="group relative">
                <button
                  className={`transition-all duration-150 border-4 border-white text-white tracking-[1px] uppercase bg-[#231f20] font-montserrat text-[1.1rem] font-bold group-hover:animate-jiggle group-hover:delay-[425ms] hover:border-cyan-200 hover:text-white hover:bg-transparent 
                inline-block cursor-pointer text-center flex-none h-[2.2rem] leading-[20px] rounded-none pt-[0.15rem] pb-[0.15rem] px-[0.5rem] ${
                  isSubmitting
                    ? "bg-[#444] border-gray-300 cursor-not-allowed"
                    : "bg-[#231f20] hover:bg-transparent hover:border-cyan-300 hover:text-[#F5F5F5]"
                } 
                      transition-all duration-300`}
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <FontAwesomeIcon
                      icon={faSpinner}
                      spin
                      className="text-[#f5f5f5] text-[1.145rem]"
                    />
                  ) : hasSubmittedSuccessfully ? (
                    "THANKS"
                  ) : (
                    "SUBMIT"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Mobile Nav (overlay) */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-hidden={!menuOpen}
        className={`md:hidden fixed inset-0 z-[15] 
    ${
      menuOpen
        ? "opacity-100 pointer-events-auto"
        : "opacity-0 pointer-events-none"
    } 
    transition-opacity duration-200`}
      >
        {/* Backdrop – click to close */}
        <button
          type="button"
          className="absolute inset-0 bg-black/50"
          onClick={closeMenu}
          aria-label="Close menu"
        />

        {/* Sliding panel (sits under the 60px header) */}
        <div
          className={`absolute left-0 right-0 top-[60px]
      bg-[#131313] border-t border-white/10
      transform transition-transform duration-300 ease-out
      ${menuOpen ? "translate-y-0" : "-translate-y-3"}`}
        >
          <nav className="px-5 py-10">
            <ul className="space-y-2">
              <li>
                <Link
                  to="/land-for-sale?country=U.S.A."
                  onClick={closeMenu}
                  className="block w-full text-white font-montserrat font-bold tracking-[1px] uppercase py-3 border-2 border-cyan-200 hover:border-white text-center"
                >
                  Buy Property
                </Link>
              </li>
              <li>
                <a
                  href="https://www.selltocoveredbridge.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="block w-full text-white font-montserrat font-bold tracking-[1px] uppercase py-3 border-2 border-cyan-200 hover:border-white text-center"
                >
                  Sell Property
                </a>
              </li>
              <li>
                <Link
                  to="/our-guarantee"
                  onClick={closeMenu}
                  className="block w-full text-white font-montserrat font-bold tracking-[1px] uppercase py-3 border-2 border-cyan-200 hover:border-white text-center"
                >
                  Our Guarantee
                </Link>
              </li>

              {/* Secondary links */}
              <li>
                <Link
                  to="/available"
                  onClick={closeMenu}
                  className="block py-3 text-white/90 text-center"
                >
                  Available
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  onClick={closeMenu}
                  className="block py-3 text-white/90 text-center"
                >
                  F.A.Q.
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  onClick={closeMenu}
                  className="block py-3 text-white/90 text-center"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="block py-3 text-white/90 text-center"
                >
                  Contact
                </Link>
              </li>
            </ul>

            <div className="mt-5 text-center">
              <a
                href="tel:866-610-5263"
                onClick={closeMenu}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 border-2 border-white text-white font-montserrat font-bold uppercase tracking-[1px]"
              >
                Call: 866-610-LAND <i>(5263)</i>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
