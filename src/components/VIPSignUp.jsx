import { useRef } from "react";
import React, { useState } from "react";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import mountainBackImage from "../../public/mountain-back.jpg";

export default function VIPSignup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmittedSuccessfully, setHasSubmittedSuccessfully] =
    useState(false);

  const submitTimeout = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return; // Prevent double submits during debounce delay

    setIsSubmitting(true);
    setHasSubmittedSuccessfully(false);

    submitTimeout.current = setTimeout(async () => {
      try {
        const res = await fetch("/api/subscribe", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, name }),
        });

        const result = await res.json();

        if (!res.ok) {
          console.error("Error:", result);
          if (result.code === "duplicate_parameter") {
            alert("You're already on the VIP list. Check your email.");
          } else {
            alert(result.message || "Failed to subscribe.");
          }
          return;
        }

        setHasSubmittedSuccessfully(true);
        setName("");
        setEmail("");
        console.log("Success:", result);
      } catch (err) {
        console.error("Unexpected Error:", err);
        alert("Something went wrong on our end. Try again later.");
      } finally {
        setIsSubmitting(false);
      }
    }, 500); // ⏳ 500ms DEBOUNCE TIME
  };

  return (
    <section
      className="relative bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${mountainBackImage})` }}
    >
      <div className="pt-[25px] pb-[35px] w-full">
        <div className="max-w-[940px] h-full max-h-[153px] mx-auto text-center text-white">
          <h3 className="text-2xl leading-[1.25] font-bold mt-[20px] mb-[10px] font-pt-serif tracking-[0px] h-[30px]">
            Receive Updates on New Properties by Joining Our VIP List
          </h3>

          {hasSubmittedSuccessfully ? (
            <div className="text-left bg-[#c1ffb0] rounded-[3px] mt-[15px] px-[30px] py-[20px]">
              <div className="vip-list-intro text-[#0a7d00] text-center mt-[15px] mb-[15px] font-pt-sans text-[18px] font-bold ">
                Thank you!
                <br />
                Your submission has been received!
              </div>
            </div>
          ) : (
            <div className="text-center">
              <form
                onSubmit={handleSubmit}
                className="inline-flex items-center gap-[16px] pl-[47px] pr-[30px] py-[20px] bg-[#445255] border-4 border-[#445255] w-full max-w-[700px] h-full max-h-[78px] mb-[15px]"
              >
                <input
                  type="text"
                  placeholder="Name"
                  maxLength="256"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="font-semibold h-[38px] px-3 py-[10px] text-[#333] bg-white border border-[#ccc] rounded-[3px] text-[0.875rem] leading-[1.42857] font-pt-sans w-[223.99px] tracking-[-0.4px]"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="font-semibold h-[38px] px-3 py-[10px] text-[#333] bg-white border border-[#ccc] rounded-[3px] text-[0.875rem] leading-[1.42857] font-pt-sans w-[223.99px] tracking-[-0.4px]"
                />
                <div className="group relative">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`inline-flex items-center justify-center gap-2 
                      border-4 text-white uppercase tracking-[1px] font-montserrat font-bold 
                      text-[1.1rem] leading-[20px] rounded-none px-4 h-[2.2rem] 
                      ${
                        isSubmitting
                          ? "bg-[#444] border-gray-300 cursor-not-allowed"
                          : "bg-[#231f20] hover:bg-transparent hover:border-cyan-300 hover:text-[#F5F5F5]"
                      } 
                      transition-all duration-300`}
                  >
                    {isSubmitting ? (
                      <FontAwesomeIcon
                        icon={faSpinner}
                        spin
                        className="text-[#f5f5f5] text-[1.145rem]"
                      />
                    ) : (
                      "Submit"
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
