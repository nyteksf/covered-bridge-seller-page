import { Link } from "react-router-dom";

import Footer from "../components/Footer";

const OurGuarantee = () => {
  return (
    <>
      <section>
        <div className="max-w-[46rem] mx-auto my-8 p-0 border-[3px] border-[#f5f5f5] rounded-lg shadow-lg bg-[transparent]">
          <div className="-tracking-[0.075px] mx-4 md:mx-auto mt-8 bg-[#f0fdfa] border-l-4 border-[#06b6d4] text-[#003e5c] px-6 pt-2 pb-2 rounded-lg shadow mb-4 max-w-2xl">
            <h1 className="font-lato text-[2.65rem] font-bold text-[#003e5c] text-center leading-tight mt-4 mb-4">
              The Covered Bridge
              <br />
              Guarantee
            </h1>
            <p className="tracking-[0.05px] border-l-4 border-[slategray] text-[#333] max-w-2xl font-lato text-center text-lg font-semibold mb-8 mx-auto leading-8">
              We believe buying land should feel solid, safe, and smart. So
              here’s our promise to you: If you don’t love your land, you don’t
              have to keep it.
            </p>
          </div>
          <div className="guarantee-icon-wrapper w-full max-w-2xl flex flex-col items-center mx-auto">
            <div className="w-full border-b-4 border-brown" />
            <img
              src="/img/moneybackguarantee.png"
              className="w-full max-w-[128px] my-4"
            />
            <div className="w-full border-b-4 border-brown" />
          </div>
          <div className="bg-[#f0fdfa] border-l-4 border-[#06b6d4] text-[#003e5c] px-6 pt-5 pb-5 rounded-lg shadow mt-4 mb-8 max-w-2xl mx-4 md:mx-auto">
            <strong className="-tracking-[0.05px] font-montserrat border-l-4 border-cyan-300 pl-2">
              90-Day “Love‑It‑Or‑Swap‑It‑Or‑Refund‑It” Guarantee:
            </strong>
            <br />
            <p className="text-[#333] my-3 max-w-3xl mx-auto font-lato leading-6 tracking-[0.05px]">
              Every parcel we sell comes backed by a 100% Satisfaction, 90-Day
              Money Back Guarantee. In plain English: that means if and when you
              buy from us soon, then should you not find yourself satisfied with
              your land in the first 90 days—and no improvements have been
              made—rest assured you're automatically eligible for a full refund
              wherein we reclaim the deed, or offer to swap your property out
              for another in our portfolio.
            </p>

            <p className="text-[#333] my-3 max-w-3xl mx-auto font-lato leading-6 tracking-[0.05px]">
              In rare cases where we facilitate a transaction through a partner
              or intermediary seller (such as a double-close or assignment),
              that guarantee may not apply. When this happens, we’ll always let
              you know clearly and upfront—before any funds are exchanged.
            </p>

            <p className="text-[#333] mb-3 max-w-3xl mx-auto font-lato leading-6 tracking-[0.05px]">
              With no hidden fees, and no hassle: Covered Bridge Properties
              never pressures anyone to buy; let alone to hold. Our mission is
              simply to make it simple to look at any of our listings and decide
              to find the right reasons needed for buying that certain plat
              today which you'll start to see yourself come to love and cherish
              for many tomorrows, looking back on a day like today in the weeks,
              months, and even years to come as the start of that decision. In
              saying so, we stand behind our land, unlike our many competitors
              having "different" priorities.
            </p>
            <p className="text-[#333] mb-4 max-w-3xl mx-auto font-lato leading-6 tracking-[0.05px]">
              So, as you find yourself thinking about what could be, what are
              you waiting for? You can find out how we've built our sales
              process around trust and quality, first hand. And with that in
              mind, feel free to take a look at our current offerings:
            </p>
            <div className="w-full flex justify-center">
              <Link
                to="/land-for-sale?country=U.S.A."
                className="w-[90%] mx-auto text-center inline-block bg-cyan-400 text-[#f5f5f5] py-4 font-semibold text-[16px] rounded shadow-md hover:shadow-lg hover:bg-cyan-300 hover:text-[#181818] border-2 border-[white] hover:border-[#333] transition translate-x-0 translate-y-0 hover:translate-x-1 hover:translate-y-1 duration-450 font-montserrat  -tracking-[0.05px]"
              >
                SEARCH ALL LAND NOW
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
};

export default OurGuarantee;
