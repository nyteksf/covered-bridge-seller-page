import { toast } from "sonner";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import phoneIco from "../../public/phone.svg";
import logoMain from "../../public/logo-main-700.png";
import smartPhoneIco from "../../public/phone-chat-white.svg";

export default function TopNav() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmittedSuccessfully, setHasSubmittedSuccessfully] =
    useState(false);

  const submitTimeout = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setHasSubmittedSuccessfully(false);

    submitTimeout.current = setTimeout(async () => {
      try {
        const baseUrl =
          window.location.hostname === "localhost"
            ? "https://covered-bridge-seller-page-msas6wsgt-nyteklas-projects.vercel.app"
            : "";

        const res = await fetch(`${baseUrl}/api/subscribe`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, name: "VIP Buyer" }),
        });

        const result = await res.json();

        if (!res.ok) {
          console.error("Error:", result);
          if (result.code === "duplicate_parameter") {
            alert("You're already on the VIP list. Please check your email.");
          } else {
            alert(result.message || "Failed to subscribe.");
          }

          toast.error("Something went wrong", {
            description: "Feel free to try again in a bit.",
          });

          return;
        }

        setHasSubmittedSuccessfully(true);
        setEmail("");
        toast.success("VIP Access Is Granted!", {
          description:
            "You now have exclusive, early access to premium land drops.",
        });
      } catch (err) {
        console.error("Unexpected Error:", err);
        alert(
          "We couldn't add you to our VIP Buyer List. Feel free to try again later."
        );
      } finally {
        setIsSubmitting(false);
      }
    }, 500); // 500ms debounce
  };

  return (
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

        {/* Phone */}
        <div className="group flex items-center text-[#f5f5f5] text-[1.2rem] font-bold tracking-wider -ml-[20px] gap-[0.9rem]">
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
        <div className="flex gap-x-[2.5rem] -ml-[6px] -mr-[15px] items-center">
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
        <div className="flex items-center gap-4">
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
  );
}
