import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { toast } from "sonner";

const VIPListModal = ({ isOpen, onClose }) => {
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
          body: JSON.stringify({
            email,
            name: "VIP Buyer",
          }),
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
          description:
            "You now have early access to exclusive land drops.",
        });
      } catch (err) {
        console.error("Unexpected Error:", err);
        toast.error("Unable to subscribe at this time.", {
          description: "Please try again later or contact us.",
        });
      } finally {
        setIsSubmitting(false);
      }
    }, 500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 max-w-[500px] w-[90%] rounded-lg shadow-xl border-l-[8px] border-cyan-400 relative">
        <button
          className="absolute top-3 right-4 text-xl text-gray-400 hover:text-gray-700 transition"
          onClick={onClose}
        >
          &times;
        </button>

        <div className="border-l-4 border-[brown]">
          <h2 className="text-center text-[#003e5c] font-bold text-2xl font-montserrat -tracking-[0.03px] mb-1">
            Join the VIP List
            <span className="block mt-[5px] h-[2px] w-[35%] bg-[#8f7e70] mx-auto" />
          </h2>
        </div>

        <p className="text-center text-gray-600 text-[0.95rem] mb-5 tracking-[0.025px] pt-1 pb-0">
          Be the first to know when our new properties drop.
          <br />
          No spam. No noise. Just real opportunities.
          <br />
          And receive a 5% discount, too!
        </p>

        {!hasSubmittedSuccessfully ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-4"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 text-[1rem] border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-cyan-300 tracking-[0.025px] text-[#181818]"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-2 font-bold uppercase tracking-[0.025px] rounded transition-all text-white ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-cyan-500 hover:bg-cyan-600"
              }`}
            >
              {isSubmitting ? (
                <FontAwesomeIcon icon={faSpinner} spin />
              ) : (
                "Get Early Access Now"
              )}
            </button>
          </form>
        ) : (
          <p className="text-center text-green-600 font-semibold text-lg">
            You're in. Keep an eye on your inbox!
          </p>
        )}

        <p className="text-center text-xs text-gray-400 mt-6 tracking-[0.03px]">
          Unsubscribe anytime. No pressure—just the updates that matter.
        </p>
      </div>
    </div>
  );
};

export default VIPListModal;
