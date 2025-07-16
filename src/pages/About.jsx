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
              For some, this may be the <em>first</em> chapter in a new kind of
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

          <section className="w-full max-w-[650px] bg-[#fdfdfd] px-6 py-10 rounded-xl border-2 border-[#a6a6a6] mt-0 mb-10 font-semibold mx-auto border-l-8 border-l-[#00ffff]">
            <h2 className="text-center text-[#a9746e] text-2xl font-bold mb-4 border-l-[6px] border-[#00ffff] pl-4 tracking-wide">
              The Guy on the Other End of the Line
            </h2>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <img
                src="/img/joecovportrait.jpg"
                alt="Portrait of Joe Coviello"
                className="rounded-full w-[140px] h-[140px] object-cover border-4 border-cyan-300 shadow-md"
              />
              <p className="text-[#181818] leading-relaxed text-center sm:text-left">
                I’m Joe Coviello—owner, land buyer, and the person you’ll hear
                from if and when you reach out.
                <br className="hidden sm:block" />
                I started Covered Bridge Properties because I wanted to make
                owning real land feel real again—human, honest, and rooted.
                <br className="hidden sm:block" />
                If you’ve made it this far down the page, I just want you to
                know: this isn’t a faceless company. It’s me, working to help
                people like you claim something lasting; something treasured;
                something generational.
              </p>
            </div>
            <div className="mt-6 text-[#181818] text-base leading-relaxed tracking-tight space-y-5">
              <p>
                I didn’t grow up thinking I’d sell land. Honestly, I stumbled
                into it the way you stumble into anything that sticks—with a
                little skepticism, a little obsession, and a lot of reading at
                2am.
              </p>
              <p>
                My first property? Total mess. A tiny lot in the middle of
                nowhere back in 2023 that made no sense on paper. But it taught
                me I'm not the market, it taught me there's a buyer for every
                patch of dirt, and moreover: how to read the land, how to spot
                value where others miss it—and how to see what a piece of earth
                could become with a little dash of marketing and a big dash of
                passion mixed in and applied.
              </p>
              <p>
                Since then, I’ve bought close to a dozen parcels across the
                country. But more than that, I’ve helped people—normal people,
                and investors—get their sometimes first foothold in real,
                tangible ownership.
              </p>
              <p>
                Covered Bridge was built to reflect that. No upsell. No cringy
                tech-bro jargon. Just direct land deals, handled like they
                matter—because they do.
              </p>
            </div>
          </section>

          <section className="w-full max-w-[650px] bg-[#ffffff] px-6 py-8 rounded-xl border-2 border-[#a6a6a6] mt-0 mb-10 font-semibold mx-auto border-l-8 border-l-cyan-300">
            <h2 className="text-center text-[#a9746e] text-2xl font-bold mb-4 border-l-[6px] border-cyan-300 pl-4 tracking-wide">
              How I Got Here (The Full Story)
            </h2>

            <p className="text-[#181818] text-left leading-relaxed mb-5">
              Like a lot of people, I first dipped into investing back in
              college—with penny stocks. I’d saved up birthday and holiday money
              simply to buy my first car, but instead I wound up YOLOing it all
              into a microcap biotech stock called Advanced Viral Research
              (ADVR.OB via OTCBB), sold on the Over The Counter Bulletin Board,
              that a friend told me about. I remember it went down in value, and
              I was sad. But it actually paid off. I bought a cherry red Miata
              with the profit; my first ever car and taste of freedom as a young
              adult. From that moment on, I was hooked on investing.
            </p>

            <p className="text-[#181818] text-left leading-relaxed mb-5">
              That same obsession led me straight to Wall Street through a
              friend of a family member that noticed my passion and decided to
              reward it. And so I interned in the NYSE Blue Room for James E.
              Cullen’s firm on Wall St. one summer period in my youth, where I'd
              spent my time learning how to enter into the digital system those
              orders which had come through via the brokerage house line, and
              running between trading desks with hardcopy tickets meant for
              specialists' booths while just observing and learning everything I
              could about how brokers did their thing. And later I'd dabbled in
              day trading off and on. But even with all that adrenaline and
              surrounding prestige, something about it just...never quite
              clicked. It felt like motion without meaning. Furthermore, I
              didn't enjoy embracing the inherent volatility of the stock market
              as a day trader. And it seemed like anyone who could do basic math
              could have the stock broker job while meanwhile working hard and
              not even really making an impact one can see resulting from their
              efforts; save for maybe in terms of their wallet fattening alone.
            </p>

            <p className="text-[#181818] text-left leading-relaxed mb-5">
              Being eager, I looked into house flipping, too. And like everyone
              else during that wave thanks to all the TV shows out there, like
              on TLC. But hearing friends' stories about nightmare tenants doing
              damage and ghosting, plus spending my time elbow-deep in repairs,
              juggling contractors, and betting big on variables I couldn’t
              control? It never made sense to me—not then, and maybe not ever.
              So I reluctantly moved on to the next big idea; having apparently
              crossed Real Estate off my list, too.
            </p>

            <p className="text-[#181818] text-left leading-relaxed mb-5">
              Being proficient in leveraging systems, I even took a swing at
              federal government contracting. Teamed up with someone that at one
              time was a friend who owned a construction company and quickly
              learned my first painful lesson in business: your dreams will only
              move as fast as the person you’ve tethered them to. I was ready to
              work. They weren’t. I was all in. They were secretly skeptical. I
              briefly thought about finding other local businesses after so much
              work and preparation began a descent down the proverbial "tubes",
              but realized my reputation and career would be riding on those
              folks who also similarly may not wind up caring about my bottom
              line versus their own perceived interests. Meanwhile, I would know
              those people even less. I was knocked down again. But was I truly
              done with entrepreneurship?
            </p>

            <p className="text-[#181818] text-left leading-relaxed mb-5">
              Then came pressure. A son on the way. A need to create something
              stable. I switched tracks again and leaned into my analytical side
              and studied diagnostic medical sonography—memorizing Latin roots
              and absorbing complex anatomy in a discipline that challenged me
              mentally, but never lit a fire emotionally; just like before. As
              the time approached to enter clinical rotations, reality set in:
              as a sonography tech I'd be sacrificing my body and most of my
              waking hours, stuck on-call, missing out on family time and life’s
              important moments. It hit me clearly—I couldn’t spend my life that
              way.
            </p>

            <p className="text-[#181818] text-left leading-relaxed mb-5">
              And then… I found land. Or rather, an ad on YouTube one day found
              me. I skipped it a few times; eager to get on with my coursework
              and achieve my degree. That was, until I hadn't skipped it one
              evening. Finally, <strong>everything aligned</strong>. All the
              boxes real estate had previously left unchecked—this answered. No
              tenants. No termites. No foundation cracks or late-night leak
              calls. Just raw, real ownership. Something permanent. Tangible.
              Non-volatile. Deceptively simple, but powerful. People said I was
              crazy to take on debt with a new child and "safe" path in life
              underfoot. But no matter how much effort, time, or resources it
              took, I committed to making it work. The mentors I'd found had
              blazed a trail before me, proving it could be done. I dedicated
              myself fully, determined to learn everything possible about this
              new venture and build my land business; knowing it was the only
              way to succeed that mattered for me.
            </p>

            <p className="text-[#181818] text-left leading-relaxed">
              I started Covered Bridge Properties not merely because of some
              obsession with success, however, but because I knew I could make
              land feel <strong>human</strong> again. Not corporate. Not
              faceless. Not some anonymous guy hawking land on eBay that you'll
              never know or see. Just a guy who believes real ownership should
              feel like real <strong>freedom</strong>, and who puts himself out
              there in the process of making it happen for folks just like
              yourself, reading this. That’s the journey. And this is where it’s
              led. Now I'm pleased to be able to meet you at this time; as you
              cross the bridge into ownership and into what I have come to
              firmly believe is the best class of investment one can hope to own
              in this great country. And having said that, and as you'll see, a
              person will inevitably find I'm far from alone in drawing this
              conclusion. So if you’re here now, you’re in good company—and just
              maybe, right on time.
            </p>
          </section>

          <section className="w-full max-w-[650px] bg-white px-6 py-8 rounded-xl border-2 border-[#a6a6a6] mt-0 mb-16 font-semibold mx-auto border-l-8 border-l-[#00ffff]">
            <h2 className="text-center text-[#a9746e] text-2xl font-bold mb-4 border-l-[6px] border-[#00ffff] pl-4 tracking-wide">
              Our 90-Day Guarantee
            </h2>
            <p className="text-[#181818] text-center leading-relaxed">
              We offer a{" "}
              <strong>
                90-Day, "Love-It-Or-Swap-It-Or-Refund-It" Guarantee.
              </strong>{" "}
              If you’re not fully satisfied within 90 days of purchase—and no
              improvements were made—you can either{" "}
              <strong>swap for another lot</strong> or request a{" "}
              <strong>full refund</strong>. No pressure. No hassle.
            </p>
            <p className="text-[#181818] text-center leading-relaxed mt-4">
              Because ownership should feel empowering, not binding. And we’re
              here to help you find the right land——and to love the land you
              own.
            </p>
            <div className="w-full flex">
              <Link
                className="inline-block bg-cyan-400 text-[#f5f5f5] py-3 font-semibold rounded shadow-md hover:shadow-lg hover:bg-cyan-300 transition translate-x-0 translate-y-0 hover:translate-x-1 hover:translate-y-1 duration-450 justify-center items-center w-full mt-6 text-center px-8"
                to="/guarantee"
                data-discover="true"
              >
                Get More Info Here
              </Link>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
