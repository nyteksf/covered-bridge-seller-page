import { Link } from "react-router-dom";

import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <div className="w-full h-full bg-[#f5f5f5]">
        <div className="w-full max-w-[1200px] flex flex-col justify-center items-center mx-auto bg-[#cccac7] border-l-[8px] border-r-[8px] border-l-[#d7eef0d4] border-r-[#d7eef0d4]">
          <header className="mt-9 w-full max-w-[650px] px-4 py-8 bg-[#f8f8f8] text-center mb-8 rounded-lg border-2 border-gray-400 mx-auto">
            <Link to="/">
              <img
                src="/logo-sm-1.png"
                alt="Covered Bridge Properties Logo 1"
                className="mx-auto w-[470px] max-w-full"
              />
            </Link>
          </header>

          <section className="w-full mt-1 max-w-[650px] bg-cyan-50 px-8 py-16 text-center rounded-xl border-2 border-cyan-300 mb-8 mx-auto">
            <h1 className="!text-[2.6rem] text-[#003e5c] font-semibold md:text-2xl !tracking-[-0.15px] !leading-[0.95]">
              Covered Bridge Properties:
              <br />
              Because Rent Wasn’t Meant to Own You
            </h1>
          </section>
          <section
            className="w-full max-w-[650px] whyweexist--content-section border-2 border-[#a6a6a6] bg-[#f5f5f5] rounded-xl px-6 py-8 mt-1 mb-10 font-semibold mx-auto border-l-8 border-l-[#00ffff]"
            data-title="Why We Believe in Land as a Legacy"
          >
            <h2 className="whyweexist--h2 font-bold text-[#a9746e] text-2xl border-l-[6px] border-[#00ffff] pl-4 mb-6 tracking-wide text-center">
              Why We Believe in Land as Legacy
            </h2>

            <p className="whyweexist--p text-center w-full max-w-[650px] mx-auto mb-5 text-[#181818]">
              Ever notice how most of what we own these days... isn’t really
              owned?
              <br />
              <em>
                Your phone? On a plan. Your house? On a long-term loan. Your
                digital life? Rented in pixels and logins.
              </em>
            </p>

            <p className="whyweexist--p text-center w-full max-w-[650px] mx-auto mb-5 text-[#181818]">
              It’s no wonder more and more people are quietly leaning toward
              something they can hold, touch, return to. Something permanent in
              a world that seems to auto-renew and auto-delete everything else.
            </p>

            <p className="whyweexist--p text-center w-full max-w-[650px] mx-auto mb-5 text-[#181818]">
              Land doesn’t vanish. It doesn’t “expire.” It doesn’t blink away
              when the market shifts or the server goes down.
              <br />
              <strong>It stays. It waits. It roots you.</strong>
            </p>

            <p className="whyweexist--p text-center max-w-[650px] mx-auto mb-5 text-[#181818]">
              For some, this may be the *first* chapter in a new kind of
              ownership. For others, it's a reawakening—stepping back into
              something they always knew they’d return to. Either way, if your
              eyes are on this page now... some part of you already knows:{" "}
              <strong>it's time to reclaim something real.</strong>
            </p>

            <p className="whyweexist--p text-center max-w-[650px] mx-auto mb-5 text-[#181818]">
              At Covered Bridge Properties, we’ve built more than a buying
              process—we’ve created a kind of passage. For folks who don’t want
              just another asset… but a sense of sovereignty.{" "}
              <strong>
                Land you can walk, pass down, escape to—or simply know is there.
              </strong>{" "}
              No app required.
            </p>

            <span className="whyweexist--highlight block bg-[#e6ffff] border-l-4 border-[#00ffff] px-4 py-3 mt-6 italic text-[#2a2a2a] max-w-[600px] mx-auto">
              “You don’t just buy land. You step outside the noise—and into
              something lasting.”
            </span>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
