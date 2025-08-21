import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { toast } from "sonner";

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
    if (isSubmitting || !email) return;

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
          body: JSON.stringify({ email, name }),
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
        setName("");
        setEmail("");
        toast.success("You're officially in!", {
          description: "Welcome to the VIP Buyer List.",
        });
      } catch (err) {
        console.error("Unexpected Error:", err);
        toast.error("Unexpected error. Try again later.");
      } finally {
        setIsSubmitting(false);
      }
    }, 500);
  };

  return (
    <section
      className="relative bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${mountainBackImage})` }}
    >
      <div className="px-[32px] sm:px-0 pt-[25px] pb-[35px] w-full">
        <div className="max-w-[940px] min-h-0 h-auto md:h-full md:max-h-[153px] mx-auto text-center text-white">
          <h3 className="text-2xl leading-[1.25] font-bold mt-[20px] mb-[16px] sm:mb-[10px] font-pt-serif tracking-[0px] block w-full !max-w-none max-w-[700px] mx-auto">
            Receive Updates on New Properties by Joining Our VIP List
          </h3>

          {hasSubmittedSuccessfully ? (
            <div className="text-left bg-[#c1ffb0] rounded-[3px] mt-[15px] px-[30px] py-[20px]">
              <div className="vip-list-intro text-[#0a7d00] text-center mt-[15px] mb-[15px] font-pt-sans text-[18px] font-bold tracking-[0.25px]">
                Thank you!
                <br />
                Your submission has been received!
              </div>
            </div>
          ) : (
            <div className="text-center">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-[16px] py-[20px] px-[30px] sm:px-[47px] bg-[#445255] border-4 border-[#445255] w-full max-w-[700px] mx-auto h-auto sm:h-full sm:max-h-[78px] mb-[15px]"
              >
                <input
                  type="text"
                  placeholder="Name"
                  maxLength="256"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="font-semibold h-[38px] px-3 py-[10px] text-[#333] bg-white border border-[#ccc] rounded-[3px] text-[0.875rem] leading-[1.42857] font-pt-sans w-full sm:w-[223.99px] flex-1 min-w-0 tracking-[-0.4px]"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="font-semibold h-[38px] px-3 py-[10px] text-[#333] bg-white border border-[#ccc] rounded-[3px] text-[0.875rem] leading-[1.42857] font-pt-sans w-full sm:w-[223.99px] flex-1 sm:flex-none min-w-0 tracking-[-0.4px]"
                />
                <div className="group relative w-full sm:w-auto">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`inline-flex items-center justify-center gap-2 
                      border-4 text-white uppercase tracking-[1px] font-montserrat font-bold 
                      text-[1.1rem] leading-[20px] rounded-none px-4 h-[2.2rem]
                      w-full sm:w-auto shrink-0 
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
                        className="text-[#f5f5f5] text-[1.145rem] shrink-0"
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
