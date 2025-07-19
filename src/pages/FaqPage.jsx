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
  faHeart,
  faUserTie,
  faStore,
  faMapMarkedAlt,
  faClock,
  faIdCard,
  faPlug,
  faGem,
  faSeedling,
  faShieldAlt,
  faFileContract,
  faReceipt,
} from "@fortawesome/free-solid-svg-icons";

import Footer from "../components/Footer";
import LoadingState from "./LoadingState";
import ContactMeModal from "../components/ContactMeModal";

const FaqPage = () => {
  const footerRef = useRef(null);

  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalAnimating, setIsModalAnimating] = useState(false);

  useEffect(() => {
    const handleDOMContentLoaded = () => {
      setIsLoading(false);
    };

    if (
      document.readyState === "interactive" ||
      document.readyState === "complete"
    ) {
      handleDOMContentLoaded();
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

  useEffect(() => {
    if (!isLoading) {
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  }, [isLoading]);

  const launchContactModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <>
      <ContactMeModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        isModalAnimating={isModalAnimating}
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
              <h1 className="text-[2rem] md:text-[2.5rem] font-bold text-[#003e5c] mt-3">
                Frequently Asked Questions
              </h1>
              <p className="text-lg mt-2 max-w-2xl mx-auto text-[slategray] font-semibold">
                Curious about buying land? Whether you’re planning your first
                purchase, eyeing a retreat, or building a legacy—here are the
                answers.
              </p>
            </header>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <article className="bg-white p-6 pb-9 rounded-xl border border-gray-300 shadow-sm border-l-8 border-l-[cyan]">
                <div className="text-2xl text-cyan-500 mb-4">
                  <FontAwesomeIcon icon={faQuestionCircle} />
                </div>
                <h2 className="border-l-8 pl-2 border-l-[#a9746e] text-xl tracking-[0.15] font-semibold text-[#003e5c] mb-2">
                  Why buy more land instead of investing in a house/stock?
                </h2>
                <p className="text-gray-700 -tracking-[0.15] leading-relaxed">
                  Land is freedom. No HOA fees. No landlords. Just you, nature,
                  and endless possibility. Whether it’s your future cabin site,
                  part of a dignified retirement plan, or just a quiet
                  escape—land holds. Only with no rodents, renters, renovations
                  or other common cashflow headaches. And this is important.
                  <br className="my-2" />
                  <div className="my-1 w-full" />
                  Moreover, here’s what most others out there who think about
                  investing tend to overlook: billionaires, hedge funds, and
                  legacy families are acquiring land fast, even while other
                  investments abound. Why? Because land’s ultra-limited,
                  low-maintenance, and a timeless investment for anyone to
                  consider making today. After all, land doesn’t vanish in a
                  market crash. It waits—and appreciates with low-volatility;
                  even as inflation daily erases the value of our dollar, and as
                  interest rates start to climb. Nothing can recreate the type
                  of consistently witnessed, solid value growing under your
                  feet, year after year, like that uniquely found within the
                  realm of land investing.
                </p>
              </article>

              <article className="bg-white p-6 rounded-xl border border-gray-300 shadow-sm border-l-8 border-l-[cyan]">
                <div className="text-2xl text-cyan-500 mb-4">
                  <FontAwesomeIcon icon={faHeart} />
                </div>
                <h2 className="border-l-8 pl-2 border-l-[#a9746e] text-xl font-semibold text-[#003e5c] mb-2">
                  What’s your satisfaction guarantee?
                </h2>
                <p className="text-gray-700 leading-relaxed -tracking-[0.15]">
                  We offer a{" "}
                  <strong>
                    90-Day, 100% Money-Back Guarantee.
                  </strong>{" "}
                  If not fully satisfied with your parcel within the first 90
                  days, and no improvements were made, you can choose either a{" "}
                  <strong>full refund</strong> and we'll reclaim the deed, or a{" "}
                  <strong>swap</strong> for any lot of equal or greater value in
                  our current catalog. Within this period, no limits are placed
                  on the number of possible swaps, either.
                  <br className="my-2" />
                  <div className="my-1 w-full" />
                  There are no hidden penalties for exercising this option, and
                  no pressure. Just give us a quick call and we'll take it with
                  you from there. That’s just one of the benefits of working
                  with us; you’re dealing directly with the person who secured
                  and vetted this land; not some developer or faceless shell
                  corporation. And we want you to be happy.
                </p>
                <div className="flex justify-center text-center mt-6">
                  <Link
                    to="/guarantee"
                    className="px-6 py-4 w-full bg-[#003e5c] text-white rounded hover:bg-[#065f6e] transition font-semibold font-montserrat"
                  >
                    Review Our Satisfaction Policy
                  </Link>
                </div>
              </article>

              <article className="bg-white p-6 rounded-xl border border-gray-300 shadow-sm border-l-8 border-l-[cyan]">
                <div className="text-2xl text-cyan-500 mb-4">
                  <FontAwesomeIcon icon={faPlug} />
                </div>
                <h2 className="border-l-8 pl-2 border-l-[#a9746e] text-xl font-semibold text-[#003e5c] mb-2">
                  Does the property have utilities?
                </h2>
                <p className="text-gray-700 leading-relaxed -tracking-[0.15]">
                  Unless otherwise noted in the listing, our rural lots are
                  off-grid—perfect for solar, wind, or other sustainable setups.
                  If you're dreaming of a green getaway, you're in the right
                  place.
                </p>
              </article>

              <article className="bg-white p-6 rounded-xl border border-gray-300 shadow-sm border-l-8 border-l-[cyan]">
                <div className="text-2xl text-cyan-500 mb-4">
                  <FontAwesomeIcon icon={faGem} />
                </div>
                <h2 className="border-l-8 pl-2 border-l-[#a9746e] text-xl font-semibold text-[#003e5c] mb-2">
                  Are mineral rights included?
                </h2>
                <p className="text-gray-700 leading-relaxed -tracking-[0.15]">
                  Mineral rights are not included. However, geological surveys
                  have shown no valuable deposits on these lands—and in our
                  experience, it’s never once been a problem.
                </p>
              </article>

              <article className="bg-white p-6 rounded-xl border border-gray-300 shadow-sm border-l-8 border-l-cyan-400">
                <div className="text-2xl text-cyan-400 mb-4">
                  <FontAwesomeIcon icon={faSeedling} />
                </div>
                <h2 className="border-l-8 pl-2 border-l-[#a9746e] text-xl font-semibold text-[#003e5c] mb-2">
                  Can I raise animals or grow crops on the land?
                </h2>
                <p className="text-gray-700 leading-relaxed -tracking-[0.15]">
                  In most cases, yes. Many of our parcels are zoned for
                  agriculture, which means you can raise livestock, grow crops,
                  or even go fully off-grid. We list zoning details clearly in
                  every property description, so you’ll always know your options
                  before buying.
                </p>
              </article>

              <article className="bg-white p-6 rounded-xl border border-gray-300 shadow-sm border-l-8 border-l-[cyan]">
                <div className="text-2xl text-cyan-500 mb-4">
                  <FontAwesomeIcon icon={faFileContract} />
                </div>
                <h2 className="border-l-8 pl-2 border-l-[#a9746e] text-xl font-semibold text-[#003e5c] mb-2">
                  Is title insurance available?
                </h2>
                <p className="text-gray-700 leading-relaxed -tracking-[0.15]">
                  Yes. We often provide title insurance through First American
                  Title on financed properties. If a title policy is included,
                  it’ll be noted in the listing.
                </p>
              </article>

              <article className="bg-white p-6 rounded-xl border border-gray-300 shadow-sm border-l-8 border-l-[cyan]">
                <div className="text-2xl text-cyan-500 mb-4">
                  <FontAwesomeIcon icon={faReceipt} />
                </div>
                <h2 className="border-l-8 pl-2 border-l-[#a9746e] text-xl font-semibold text-[#003e5c] mb-2">
                  What about property taxes?
                </h2>
                <p className="text-gray-700 leading-relaxed -tracking-[0.15]">
                  Most of our parcels carry very low annual taxes—often under
                  $50. And they’re typically current unless stated otherwise. We
                  always list estimated taxes up front.
                </p>
              </article>

              <article className="bg-white p-6 rounded-xl border border-gray-300 shadow-sm border-l-8 border-l-[cyan]">
                <div className="text-2xl text-cyan-500 mb-4">
                  <FontAwesomeIcon icon={faLandmark} />
                </div>
                <h2 className="text-xl font-semibold text-[#003e5c] mb-2 tracking-[0.15] border-l-8 pl-1 border-l-[#a9746e]">
                  Can I use it right away?
                </h2>
                <p className="text-gray-700 leading-relaxed -tracking-[0.15]">
                  Most buyers are surprised how easy it is. Depending on the
                  property, you might camp, hike, hunt, put in a mobile home or
                  hunting blinds, or just hold it for later. You don’t need
                  permission to walk your own land. And you can start doing that
                  typically within one to maybe two weeks of placing your
                  deposit.
                </p>
              </article>

              <article className="bg-white p-6 rounded-xl border border-gray-300 shadow-sm border-l-8 border-l-[cyan]">
                <div className="text-2xl text-cyan-500 mb-4">
                  <FontAwesomeIcon icon={faMoneyBillWave} />
                </div>
                <h2 className="border-l-8 pl-2 border-l-[#a9746e] text-xl font-semibold text-[#003e5c] mb-2 tracking-[0.15]">
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

              <article className="bg-white p-6 rounded-xl border border-gray-300 shadow-sm border-l-8 border-l-[cyan]">
                <div className="text-2xl text-cyan-500 mb-4">
                  <FontAwesomeIcon icon={faCalendarCheck} />
                </div>
                <h2 className="border-l-8 pl-2 border-l-[#a9746e] text-xl font-semibold text-[#003e5c] mb-2">
                  How fast can I own it?
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Very fast. Once you’re ready, we close through a title company
                  or attorney, wire the funds, and record the deed in your name.
                  Sometimes in just 7 days. And whenever necessary, we prefer to
                  use your local, trusted attorneys.
                </p>
              </article>

              <article className="bg-white p-6 rounded-xl border border-gray-300 shadow-sm border-l-8 border-l-[cyan]">
                <div className="text-2xl text-cyan-500 mb-4">
                  <FontAwesomeIcon icon={faUserTie} />
                </div>
                <h2 className="border-l-8 pl-2 border-l-[#a9746e] text-xl font-semibold text-[#003e5c] mb-2">
                  Do I need an attorney or real estate agent?
                </h2>
                <p className="text-gray-700 leading-relaxed -tracking-[0.15]">
                  We’ve stripped the complexity out. Everything’s laid out in
                  plain English contracts. You’re welcome to bring in a
                  professional if you’d like—but we’ve made it simple enough
                  that most buyers don’t need to.
                </p>
              </article>

              <article className="bg-white p-6 rounded-xl border border-gray-300 shadow-sm border-l-8 border-l-[cyan]">
                <div className="text-2xl text-cyan-500 mb-4">
                  <FontAwesomeIcon icon={faFileAlt} />
                </div>
                <h2 className="border-l-8 pl-2 border-l-[#a9746e] text-xl font-semibold text-[#003e5c] mb-2 tracking-[0.15]">
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

              <article className="bg-white p-6 rounded-xl border border-gray-300 shadow-sm border-l-8 border-l-[cyan]">
                <div className="text-2xl text-cyan-500 mb-4">
                  <FontAwesomeIcon icon={faStore} />
                </div>
                <h2 className="border-l-8 pl-2 border-l-[#a9746e] text-xl font-semibold text-[#003e5c] mb-2">
                  Why buy from Covered Bridge instead of Craigslist or eBay?
                </h2>
                <p className="text-gray-700 leading-relaxed -tracking-[0.15]">
                  Better land, cleaner process. No surprise liens, no vague
                  listings. Our parcels are vetted for access, value, and
                  potential appreciation—and our buying process is built for
                  clarity and trust.
                </p>
              </article>

              <article className="bg-white p-6 rounded-xl border border-gray-300 shadow-sm border-l-8 border-l-[cyan]">
                <div className="text-2xl text-cyan-500 mb-4">
                  <FontAwesomeIcon icon={faHandshake} />
                </div>
                <h2 className="border-l-8 pl-2 border-l-[#a9746e] text-xl font-semibold text-[#003e5c] mb-2">
                  Why buy from you instead of a real estate agent?
                </h2>
                <p className="text-gray-700 leading-relaxed -tracking-[0.15]">
                  Most real estate agents don’t specialize in land—and it shows.
                  Listings are often vague, overpriced, or poorly marketed.
                  Agents may not know the zoning, access, or off-grid potential,
                  yet still charge 5% to 10% in commissions that get baked into
                  your then more expensive final price.
                  <br />
                  <div className="my-2" />
                  With us, you skip the middlemen and buy direct from the
                  source. No commissions, no delays, and no pressure. Just clean
                  land, clearly priced, and often with flexible{" "}
                  <strong>owner financing options</strong> to make your purchase
                  even easier.
                </p>
              </article>

              <article className="bg-white p-6 rounded-xl border border-gray-300 shadow-sm border-l-8 border-l-[cyan]">
                <div className="text-2xl text-cyan-500 mb-4">
                  <FontAwesomeIcon icon={faMapMarkedAlt} />
                </div>
                <h2 className="border-l-8 pl-2 border-l-[#a9746e] text-xl font-semibold text-[#003e5c] mb-2">
                  Can I inspect the property before buying?
                </h2>
                <p className="text-gray-700 leading-relaxed -tracking-[0.15]">
                  Yes—but don’t wait. Land moves fast. We recommend securing the
                  parcel first with a down payment. Then we’ll provide GPS
                  coordinates, maps, and access info to help you visit on your
                  own schedule. And remember: your deposit is backed by our
                  90-day satisfaction guarantee.
                </p>
              </article>

              <article className="bg-white p-6 rounded-xl border border-gray-300 shadow-sm border-l-8 border-l-[cyan]">
                <div className="text-2xl text-cyan-500 mb-4">
                  <FontAwesomeIcon icon={faShieldAlt} />
                </div>
                <h2 className="border-l-8 pl-2 border-l-[#a9746e] text-xl font-semibold text-[#003e5c] mb-2">
                  Are all properties backed by the guarantee?
                </h2>
                <p className="text-gray-700 leading-relaxed -tracking-[0.15]">
                  In around 4 out of 5 cases, yes. Our 90-day guarantee gives
                  you full peace of mind after closing.
                  <br />
                  The only possible exception is when we’re acting more as a
                  facilitator—on what’s called a “double close”—where we’re
                  lining up the deal between seller and buyer under contract.
                  <br />
                  When that’s the case, we’ll always make that clear before you
                  ever commit. No pressure, no surprises. That's how we do
                  things. And as you read this and understand, that's what you
                  can expect.
                </p>
              </article>

              <article className="bg-white p-6 rounded-xl border border-gray-300 shadow-sm border-l-8 border-l-[cyan]">
                <div className="text-2xl text-cyan-500 mb-4">
                  <FontAwesomeIcon icon={faIdCard} />
                </div>
                <h2 className="border-l-8 pl-2 border-l-[#a9746e] text-xl font-semibold text-[#003e5c] mb-2">
                  What documents do I need for financing?
                </h2>
                <p className="text-gray-700 leading-relaxed -tracking-[0.15]">
                  None. No IDs, no applications, no uploads. Our process is as
                  frictionless as it gets—just pick a parcel, pay your down
                  payment of as little as $99 per month, and you’re well on your
                  way to monthly payments thereafter of anywhere from $99 to
                  about $500, depending on acreage and other specifics.
                </p>
              </article>

              <article className="bg-white p-6 rounded-xl border border-gray-300 shadow-sm border-l-8 border-l-[cyan]">
                <div className="text-2xl text-cyan-500 mb-4">
                  <FontAwesomeIcon icon={faClock} />
                </div>
                <h2 className="border-l-8 pl-2 border-l-[#a9746e] text-xl font-semibold text-[#003e5c] mb-2">
                  How long does the closing process take?
                </h2>
                <p className="text-gray-700 leading-relaxed -tracking-[0.15]">
                  Typically about two weeks. We handle everything digitally:
                  contracts, maps, payment setup. After your final payment, we
                  issue a Warranty Deed and mail it directly to you—free and
                  clear.
                </p>
              </article>
            </section>

            <article className="bg-white p-6 rounded-xl border border-gray-300 shadow-sm border-l-8 border-l-[cyan] mt-10 text-center">
              <div className="text-2xl text-cyan-500 mb-4">
                <FontAwesomeIcon icon={faUserTie} />
              </div>
              <div className="border-l-4 border-[brown]">
                <figure className="flex flex-col items-center space-y-2 mb-4">
                  <div className="w-[132px] h-[132px] rounded-full overflow-hidden border-4 border-cyan-300 shadow-md">
                    <img
                      src="/img/joecovportrait.jpg"
                      alt="Portrait of Joe Coviello"
                      title="Hi! I'm Joe!"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <figcaption className="text-center">
                    <p className="text-lg font-semibold text-[#003e5c] font-montserrat">
                      Joe Coviello
                    </p>
                    <p className="text-sm text-gray-500 font-montserrat">
                      Managing Member
                    </p>
                  </figcaption>
                </figure>

                <h2 className="text-xl font-semibold text-[#003e5c] mb-2">
                  Want to talk to someone real?
                </h2>
              </div>

              <p className="text-gray-700 leading-relaxed -tracking-[0.15px]">
                I’m not a developer. I’m not a broker. I’m the actual person who
                found and bought this land before you did.
                <br />
                <br />
                And if you’ve got questions—or just want a straight answer—tap
                below. I’ll get back to you directly.
              </p>

              <button
                onClick={launchContactModal}
                className="mt-4 px-4 py-2 bg-[#003e5c] text-white rounded hover:bg-[#065f6e] transition"
              >
                Contact Me
              </button>
              <p className="mt-3 text-sm text-gray-600">
                Not ready to reach out just yet?{" "}
                <Link
                  to="/about"
                  className="text-cyan-600 hover:underline font-medium"
                >
                  Learn more about who I am →
                </Link>
              </p>
            </article>

            <section className="text-center mt-5">
              <h2 className="text-2xl font-semibold text-[#d8d8d8] mb-5">
                Want clarity on something not covered above?
              </h2>
              <button
                className="inline-block bg-cyan-400 text-[#f5f5f5] px-6 py-3 font-semibold rounded shadow-md hover:shadow-lg hover:bg-cyan-300 transition translate-x-0 translate-y-0 hover:translate-x-1 hover:translate-y-1 duration-450"
                onClick={launchContactModal}
              >
                Contact Us With Your Question Here
              </button>
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
