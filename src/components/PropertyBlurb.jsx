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
    <div className="block -mt-1 mb-6">
      {propertyBlurbContent?.canOwnerFinance ||
      propertyBlurbContent?.canBuyNow ? (
        <>
          {/* PENIS */}
          {/* Callout wrapper: full-bleed background, centered inner container */}
          <div className="w-full bg-[#edf7f1] border border-[#e6e6e6] mb-6 px-4 md:px-6 py-6">
            <div className="mx-auto max-w-[1080px] grid gap-4 justify-items-center text-center items-center md:flex md:justify-center md:items-center md:gap-4">
              {/* Left: Checkmark + Heading */}
              <div className="flex items-center gap-2 min-w-0 justify-center md:justify-start">
                <img
                  src={checkmarkGreen}
                  className="h-6 w-6 shrink-0"
                  alt="Checkmark"
                />
                <h3 className="m-0 font-lato text-[22px] sm:text-[24px] font-bold text-[#333] leading-[1.25]">
                  ${formatWithCommas(propertyBlurbContent?.depositPrice)}{" "}
                  Deposit Secures This Property
                </h3>
              </div>

              {/* CUT HERE */}
              {/* MIDDLE column — stays centered on laptop */}
              <div className="justify-self-center">
                <Button
                  className={`uppercase bg-[#0aa952] font-lato text-[14px] px-[15px] py-[9px] rounded-lg font-black tracking-[1.1px] min-h-[35px] hover:bg-[#099146] focus:bg-[#099146] disabled:bg-[#999999]
                shadow-md hover:shadow-sm hover:translate-y-[1px] text-white transition duration-150 ease-in-out border-0 ${
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
                </Button>
              </div>

              {/* RIGHT column — cards + caption (no overflow) */}
              <div className="flex flex-col items-center md:items-center text-center md:text-center gap-2 font-lato justify-self-center md:justify-self-center">
                <div className="flex flex-wrap items-center justify-center md:justify-center gap-2 max-w-full">
                  <img
                    src={MasterCardIcon}
                    className="border border-[#e6e6e6] rounded h-7 w-auto max-w-[72px]"
                    alt="MasterCard"
                  />
                  <img
                    src={VisaCardIcon}
                    className="border border-[#e6e6e6] rounded h-7 w-auto max-w-[72px]"
                    alt="Visa"
                  />
                  <img
                    src={DiscoverCardIcon}
                    className="border border-[#e6e6e6] rounded h-7 w-auto max-w-[72px]"
                    alt="Discover"
                  />
                  <img
                    src={AmExCardIcon}
                    className="border border-[#e6e6e6] rounded h-7 w-auto max-w-[72px]"
                    alt="AmEx"
                  />
                </div>
                <div className="text-[#6c6c6c] tracking-[0.1px] text-[15px] md:text-[16px]">
                  <strong>Guaranteed Safe &amp; Secure Checkout</strong>
                </div>

                {/* END CUT HERE */}
              </div>
            </div>
          </div>
          {/* END */}
        </>
      ) : (
        ""
      )}

      {propertyBlurbContent?.canOwnerFinance ||
      propertyBlurbContent?.canBuyNow ? (
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
            {formatWithCommas(propertyBlurbContent?.depositPrice)}
            {propertyBlurbContent?.monthlyPrice > 0 && (
              <>
                {" "}
                and Monthly Payments as low as $
                {formatWithCommas(propertyBlurbContent?.monthlyPrice)}
              </>
            )}
            .
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
            <a
              href="tel:866-610-5263"
              className="text-[#007e7e] hover:text-[#0cc] font-black transition-all duration-300"
            >
              <strong>866-610-LAND</strong>
            </a>{" "}
            <em>
              (
              <a
                href="tel:866-610-5263"
                className="text-[#007e7e] hover:text-[#0cc] font-black transition-all duration-300"
              >
                5263
              </a>
              )
            </em>
            .
          </p>

          <p className="text-[#555] text-sm leading-5 mb-[10px] font-lato mt-0">
            You may also email directly at:{" "}
            <a
              href="mailto:joe@coveredbridge.properties"
              className="text-[#007e7e] hover:text-[#0cc] font-black transition-all duration-300"
            >
              joe@coveredbridge.properties
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
            <a href="tel:407-289-1848">
              <span className="text-[#007E7E] hover:text-[#0cc] font-semibold transition-all duration-250">
                <strong>407-289-1848</strong>
              </span>
            </a>
            .
          </p>

          <p className="text-[#555] text-sm leading-5 mb-[10px] font-lato mt-0">
            You may also email us directly at:{" "}
            <a href="mailto:joe@coveredbridge.properties">
              <span className="text-[#007E7E] hover:text-[#0cc] font-semibold transition-all duration-250">
                <strong>joe@coveredbridge.properties</strong>
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
            <a href="tel:866-610-5263">
              <span className="text-[#007E7E] hover:text-[#0cc] font-semibold transition-all duration-250">
                866-610-LAND <em>(5263)</em>
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
