import { useState } from "react";
import { useParams } from "react-router-dom";

import { Button } from "./ui/button";
import VisaCardIcon from "../../public/img/VisaCard-light.svg";
import AmExCardIcon from "../../public/img/AmExCard-light.svg";
import checkmarkGreen from "../../public/img/checkmark_green.svg";
import MasterCardIcon from "../../public/img/MasterCard-light.svg";
import DiscoverCardIcon from "../../public/img/DiscoverCard-light.svg";

const PropertyBlurb = ({
  propertyId,
  propertyBlurbContent,
  propertyStatus,
}) => {
  {
    /* propertyId, canOwnerFinance: boolean, totalPrice: number, depositPrice: number, monthlyPayment: number, */
  }
  const { slug } = useParams();

  const [isSoldOut, setIsSoldOut] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  {
    /* THIS IS A DUMB PLACEHOLDER ONLY! FIX AFTER INTEGRATING STRIPE PAY */
  }

  function formatWithCommas(input) {
    const number = Number(input);
    if (isNaN(number)) return input;
    return number.toLocaleString("en-US");
  }

  const formatPropertyId = (propertyId) => {
    if (typeof propertyId !== "string") return "[Invalid ID]";
    const parts = propertyId.split("_");

    if (parts.length !== 3) return propertyId; // fallback if malformed

    const [state, county, number] = parts;

    const formattedState = state.toUpperCase();
    const formattedCounty = county.charAt(0).toUpperCase() + county.slice(1);
    const formattedNumber = number;

    return [formattedState, formattedCounty, formattedNumber].join("_");
  };

  const handleBuyNow = async () => {
    if (isCheckingOut || propertyStatus !== "available") return;

    setIsCheckingOut(true);

    try {
      const response = await fetch(
        "https://us-central1-covered-bridge-properties.cloudfunctions.net/createCheckoutSession",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            propertyId,
            slug: slug || "",
          }),
        }
      );

      const data = await response.json();
      if (data?.url) {
        window.location.href = data.url;
      } else {
        throw new Error("No URL returned from Stripe");
      }
    } catch (err) {
      console.error("Checkout failed:", err);
      setIsCheckingOut(false);
    }
  };

  return (
    <div className="block mb-6">
      {propertyBlurbContent?.canOwnerFinance ? (
        <>
          <div className="w-full flex flex-row justify-between items-center gap-6 bg-[#edf7f1] border border-[#e6e6e6] p-8 mb-6">
            {/* Left: Checkmark + Heading */}
            <div className="flex items-center gap-2 max-w-[40%]">
              <img
                src={checkmarkGreen}
                className="h-[24px] w-[24px] max-w-[100%] inline-block align-middle"
                alt="Checkmark"
              />
              <h3 className="mt-0 mb-0 font-lato text-[24px] font-bold text-[#333333] tracking-[0.05px] leading-[30px]">
                ${formatWithCommas(propertyBlurbContent?.depositPrice)} Deposit
                Secures This Property
              </h3>
            </div>

            {/* Center: Buy Now Button */}
            <div className="flex justify-center items-center max-w-[33%]">
              <Button
                className={`uppercase bg-[#0aa952] font-lato text-[14px] px-[15px] py-[9px] rounded-lg font-black tracking-[1.1px] min-h-[35px] hover:bg-[#099146] focus:bg-[#099146] disabled:bg-[#999999] 
                  shadow-md hover:shadow-sm hover:translate-y-[1px] text-white transition duration-150 ease-in-out max-w-full text-ellipsis overflow-hidden leading-[1.2] border-0 ${
                    isSoldOut || isCheckingOut
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                disabled={isCheckingOut || isSoldOut}
                onClick={handleBuyNow}
              >
                {isCheckingOut
                  ? "Processing..."
                  : isSoldOut
                  ? "Out of Stock"
                  : "Buy Now"}
                {/* SET THIS TO TRUE IN THE ONCLICK() */}
              </Button>
            </div>

            {/* Right: Cards + Caption */}
            <div className="flex flex-col items-center justify-center text-center max-w-[33%] gap-2 font-lato">
              <div className="flex justify-center gap-2">
                <img
                  src={MasterCardIcon}
                  className="border border-[#e6e6e6] rounded w-[48px] h-auto"
                  alt="MasterCard"
                />
                <img
                  src={VisaCardIcon}
                  className="border border-[#e6e6e6] rounded w-[48px] h-auto"
                  alt="Visa"
                />
                <img
                  src={DiscoverCardIcon}
                  className="border border-[#e6e6e6] rounded w-[48px] h-auto"
                  alt="Discover"
                />
                <img
                  src={AmExCardIcon}
                  className="border border-[#e6e6e6] rounded w-[48px] h-auto"
                  alt="AmEx"
                />
              </div>
              <div className="text-[#6c6c6c] tracking-[0.1px] capitalize text-[16px] font-normal">
                <strong>Guaranteed Safe & Secure Checkout</strong>
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}

      {propertyBlurbContent?.canOwnerFinance ? (
        <div className="w-full max-w-[616px] mx-auto tracking-[0.1px] border-l-[4px] border-[#007e7e] pl-4">
          <p className="text-[#555] text-sm leading-5 mb-[10px] font-lato -mt-[4px] w-full max-w-[650px]">
            <strong>
              Important: To Purchase this Property, Click the Green BUY NOW
              Button above, and by doing so, Place Your $
              {propertyBlurbContent?.depositPrice} Deposit. Know that you will
              receive an Instant Notification on your screen and by email once
              your ${propertyBlurbContent?.depositPrice} Deposit has been made
              successfully. The "BUY NOW" Button will also turn GRAY and be
              disabled, reading, <em>"OUT OF STOCK"</em> at that time.
            </strong>
          </p>

          <p className="text-[#555] text-sm leading-5 mb-[10px] font-lato mt-0">
            The remaining balance of $
            {formatWithCommas(
              propertyBlurbContent?.totalPrice -
                propertyBlurbContent?.depositPrice
            )}{" "}
            may be paid by Wire Transfer, Cashier’s Check, ACH Bank Draft,
            Credit Card and/or Debit Card. We also accept Gold, Silver,
            Platinum, Bitcoin, Ethereum and other Cryptocurrencies. You may also
            use any combination of these payment methods.
          </p>

          <p className="text-[#555] text-sm leading-5 mb-[10px] font-lato mt-0">
            Owner Financing is Available with a Down Payment of $
            {formatWithCommas(propertyBlurbContent?.depositPrice)} and Monthly
            Payments as low as $
            {formatWithCommas(propertyBlurbContent?.monthlyPrice)}.
          </p>

          <p className="text-[#555] text-sm leading-5 mb-[10px] font-lato mt-0">
            We make the whole process super simple and we can complete your
            purchase in as little as 1 day.
          </p>

          <p className="text-[#555] text-sm leading-5 mb-[10px] font-lato mt-0">
            Purchase Must Be Completed within 21 Calendar Days of the Date the
            Deposit is placed. A partial refund of $250 may be requested within
            5 Calendar Days from the date of the deposit. After the 5th Calendar
            Day, all cancelled purchases will not be eligible for a refund.
          </p>

          <p className="text-[#555] text-sm leading-5 mb-[10px] font-lato mt-0">
            For Questions, Call or Text Anytime at:{" "}
            <strong>866-8-BRIDGE</strong> (
            <a
              href="tel:420-696-9420"
              className="text-[#007e7e] hover:text-[#0cc] font-black transition-all duration-300"
            >
              420-696-9420
            </a>
            ).
          </p>

          <p className="text-[#555] text-sm leading-5 mb-[10px] font-lato mt-0">
            You may also email directly at:{" "}
            <a
              href="mailto:info@coveredbridge.properties"
              className="text-[#007e7e] hover:text-[#0cc] font-black transition-all duration-300"
            >
              info@coveredbridge.properties
            </a>
            .
          </p>
          <div className="w-full max-w-[616px] mx-auto">
            <p className="text-[#555] text-sm leading-5 font-lato mt-0">
              Please reference Covered Bridge Property ID:{" "}
              <span className="font-black">
                {formatPropertyId(propertyId) || "[Error: ID Not Found]"}
              </span>
              .
            </p>
          </div>
        </div>
      ) : (
        <div className=" w-full max-w-[616px]">
          <p className="text-[#555] text-sm leading-5 mb-[10px] font-lato mt-0">
            For Questions or to Purchase this Property, please Call or Text Joe
            directly at:{" "}
            <a href="tel:307-395-0929">
              <span className="text-[#007E7E] hover:text-[#0cc] font-semibold transition-all duration-250">
                <strong>307-395-0929</strong>
              </span>
            </a>
            .
          </p>

          <p className="text-[#555] text-sm leading-5 mb-[10px] font-lato mt-0">
            You may also email us directly at:{" "}
            <a href="mailto:info@coveredbridge.properties">
              <span className="text-[#007E7E] hover:text-[#0cc] font-semibold transition-all duration-250">
                <strong>info@coveredbridge.properties</strong>
              </span>
            </a>
          </p>
          <p className="text-[#555] text-sm leading-5 mb-[10px] font-lato mt-0">
            Property to sell? Feel free to visit:{" "}
            <a
              href="https://www.SELLToCOVEREDBRIDGE.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="text-[#007E7E] hover:text-[#0cc] font-semibold transition-all duration-250">
                https://SELLToCOVEREDBRIDGE.com
              </span>
              , right now.
            </a>
          </p>
          <p className="text-[#555] text-sm leading-5 mb-[10px] font-lato mt-0">
            To Speak with Covered Bridge, Call or Text Us Anytime at:{" "}
            <a href="tel:866-852-6346">
              <span className="text-[#007E7E] hover:text-[#0cc] font-semibold transition-all duration-250">
                866-8-BRIDGE <strong>(866-852-6346)</strong>
              </span>
            </a>
          </p>
          <div className="w-full max-w-[616px] mx-auto">
            <p className="text-[#555] text-sm leading-5 font-lato mt-0">
              Please reference the Covered Bridge Property ID:{" "}
              <span className="font-black">
                {formatPropertyId(propertyId) || "[Error: ID Not Found]"}
              </span>
              .
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyBlurb;
