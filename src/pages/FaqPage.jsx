import { Link } from "react-router";
import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestionCircle,
  faFileAlt,
  faLandmark,
  faMoneyBillWave,
  faHandshake,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";

import Footer from "../components/Footer";
import LoadingState from "./LoadingState";
import ContactMeModal from "../components/ContactMeModal";

const FaqPage = () => {
  const footerRef = useRef(null);
  const setIsModalAnimating = useState(false)[1];
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleDOMContentLoaded = () => {
      setIsLoading(false);
    };

    if (
      document.readyState === "interactive" ||
      document.readyState === "complete"
    ) {
      handleDOMContentLoaded();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);
      return () =>
        document.removeEventListener(
          "DOMContentLoaded",
          handleDOMContentLoaded
        );
    }

    const safetyTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(safetyTimeout);
  }, []);

  const launchContactModal = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsModalAnimating(true);
    setTimeout(() => {
      setIsModalOpen(true);
    }, 500);
  };

  return (
    <>
      <ContactMeModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setIsModalAnimating={setIsModalAnimating}
      />
      {isLoading ? (
        <LoadingState />
      ) : (
        <div className="w-full px-4 flex justify-center">
          <div className="w-full max-w-6xl">
            <header className="text-center m-10 bg-white p-6 pb-9 rounded-xl border border-gray-300 shadow-sm">
              <Link to="/">
                <img
                  src="/logo-sm-4.png"
                  alt="Covered Bridge Properties"
                  className="mx-auto w-[428px] max-w-full"
                  title="Return Home"
                />
              </Link>
              <h1 className="text-[2rem] md:text-[2.5rem] font-bold text-[#003e5c] mt-4">
                Frequently Asked Questions
              </h1>
              <p className="text-lg mt-2 max-w-2xl mx-auto text-[#1a1a1a]">
                Curious about buying land? Whether you’re planning your first
                purchase, eyeing a retreat, or building a legacy—here are the
                answers.
              </p>
            </header>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <article className="bg-white p-6 pb-9 rounded-xl border border-gray-300 shadow-sm">
                <div className="text-2xl text-cyan-500 mb-4">
                  <FontAwesomeIcon icon={faQuestionCircle} />
                </div>
                <h2 className="text-xl tracking-[0.15] font-semibold text-[#003e5c] mb-2">
                  Why buy more land instead of investing in a house?
                </h2>
                <p className="text-gray-700 -tracking-[0.15] leading-relaxed">
                  Land is freedom. No HOA fees. No landlords. Just you, nature,
                  and endless possibility. Whether it’s your future cabin site,
                  part of a dignified retirement plan, or just a quiet
                  escape—land holds. Only with no tenants, termites or other
                  cashflow headaches involved. And this is important.
                  <br className="my-2" />
                  Moreover, here’s what most other people out there who think
                  about investing tend to overlook: billionaires, hedge funds,
                  and legacy families are acquiring land fast, even while other
                  investments abound. Why? Because land’s ultra-limited,
                  low-maintenance, and a timeless investment for anyone to
                  consider making today. After all, land doesn’t vanish in a
                  market crash. It waits—and appreciates. So, they may manage to
                  make a new trend every year that comes and goes, and one can
                  try to ride that wave, but nobody will be able to recreate the
                  consistently witnessed value growing under your feet year
                  after year like one can obtain uniquely within the realm of
                  land investing.
                </p>
              </article>

              <article className="bg-white p-6 rounded-xl border border-gray-300 shadow-sm">
                <div className="text-2xl text-cyan-500 mb-4">
                  <FontAwesomeIcon icon={faFileAlt} />
                </div>
                <h2 className="text-xl font-semibold text-[#003e5c] mb-2 tracking-[0.15]">
                  Is buying land complicated?
                </h2>
                <p className="text-gray-700 leading-relaxed -tracking-[0.15]">
                  Not with us. We make it seamless—no agents, no red tape, no
                  hidden fees. We walk you through every step: from due
                  diligence to deed transfer. We even handle the paperwork. As
                  such, you'll find yourself soon able to see the value in
                  making this decision well before you are sighing that sigh of
                  relief; the one letting you know you've made a good choice, as
                  have many before you, and many after to come.
                </p>
              </article>

              <article className="bg-white p-6 rounded-xl border border-gray-300 shadow-sm">
                <div className="text-2xl text-cyan-500 mb-4">
                  <FontAwesomeIcon icon={faLandmark} />
                </div>
                <h2 className="text-xl font-semibold text-[#003e5c] mb-2 tracking-[0.15]">
                  Can I use it right away?
                </h2>
                <p className="text-gray-700 leading-relaxed -tracking-[0.15]">
                  Most buyers are surprised how easy it is. Depending on the
                  property, you might camp, hike, hunt, put in a mobile home or
                  hunting blinds, or just hold it for later. You don’t need
                  permission to walk your own land. And you can start doing that
                  typically within one week of placing your deposit.
                </p>
              </article>

              <article className="bg-white p-6 rounded-xl border border-gray-300 shadow-sm">
                <div className="text-2xl text-cyan-500 mb-4">
                  <FontAwesomeIcon icon={faMoneyBillWave} />
                </div>
                <h2 className="text-xl font-semibold text-[#003e5c] mb-2 tracking-[0.15]">
                  Is land expensive?
                </h2>
                <p className="text-gray-700 leading-relaxed -tracking-[0.15]">
                  Not compared to homes or stocks. Vacant land often has no
                  utilities, which keeps prices low and taxes minimal. That’s
                  why it’s ideal for first-time buyers looking for affordable
                  entry into ownership; for oneself now, and maybe for your
                  children to remember you by some day.
                </p>
              </article>

              <article className="bg-white p-6 rounded-xl border border-gray-300 shadow-sm">
                <div className="text-2xl text-cyan-500 mb-4">
                  <FontAwesomeIcon icon={faHandshake} />
                </div>
                <h2 className="text-xl font-semibold text-[#003e5c] mb-2 tracking-[0.15]">
                  What if I change my mind?
                </h2>
                <p className="text-gray-700 leading-relaxed -tracking-[0.15]">
                  We give you 30 days to swap your property for another in our
                  current catalog. But as a land owner, you’re always in the
                  driver's seat. If you ever want to sell, you’re not locked in.
                  You can list it, gift it, or just hold it while it gains more
                  and more value over time. There’s no ongoing commitment, and
                  often no POA restrictions to deal with.
                </p>
              </article>

              <article className="bg-white p-6 rounded-xl border border-gray-300 shadow-sm">
                <div className="text-2xl text-cyan-500 mb-4">
                  <FontAwesomeIcon icon={faCalendarCheck} />
                </div>
                <h2 className="text-xl font-semibold text-[#003e5c] mb-2">
                  How fast can I own it?
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Very fast. Once you’re ready, we close through a title company
                  or attorney, wire the funds, and record the deed in your name.
                  Sometimes in just 7 days. And whenever possible, we prefer
                  using your local, trusted attorneys.
                </p>
              </article>
            </section>

            <section className="text-center mt-5">
              <h2 className="text-2xl font-semibold text-[#d8d8d8] mb-6">
                Want clarity on something not covered above?
              </h2>
              <Link
                to="#"
                className="inline-block bg-cyan-400 text-[#f5f5f5] px-6 py-3 font-semibold rounded shadow-md hover:shadow-lg hover:bg-cyan-300 transition translate-x-0 translate-y-0 hover:translate-x-1 hover:translate-y-1 duration-450"
                onClick={launchContactModal}
              >
                Contact Us With Your Question Here
              </Link>
              <div className="mt-6 text-gray-700 space-y-2 mb-10">
                <div>
                  <a
                    href="tel:866-610-5263"
                    className="text-cyan-600 font-medium"
                  >
                    (866) 610-LAND{" "}
                    <i>
                      <span className="text-[#a1a1a1]">(5263)</span>
                    </i>
                  </a>
                </div>
                <div>
                  <span className="text-cyan-600 font-medium">
                    joe@coveredbridge.properties
                  </span>
                </div>
              </div>
            </section>

            <Footer footerRef={footerRef} isVisible="false" />
          </div>
        </div>
      )}
    </>
  );
};

export default FaqPage;
