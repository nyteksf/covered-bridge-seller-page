import { Link } from "react-router";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";

const TestimonialsPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const testimonials = [
    {
      name: "Kelly M., Oklahoma",
      text: "I asked a bunch of stuff before I paid anything and he didn’t get annoyed or anything. Felt like I could take my time which was nice. I’m happy with the service Joe gave me.",
    },
    {
      name: "Marcus T., Nevada",
      text: "To be real with you I thought it might be a scam until we got on the phone together. But no, Joe talked to me straight and I ended up with a quiet spot just like I wanted. Not perfect land but a good deal for how much I paid.",
    },
    {
      name: "Joanne L., Arkansas",
      text: "I just wanted a small piece of land with no drama, and that’s definitely what I got. Thought it’d be harder. I didn’t need credit or a bunch of back and forth. I can say it worked for me.",
    },
    {
      name: "Samir H., Southern California",
      text: "Honestly I was nervous cause I’d never bought land before, and most websites only made my decision more confusing. This one didn’t. I liked all the details laid out, and the map layers, too.",
    },
    {
      name: "Carlos G., New Mexico",
      text: "Picked a spot for camping. It’s kinda remote but that’s also what I wanted. They showed the GPS, I checked it out, and sent the deposit. Done. Simple.",
    },
  ];

  return (
    <>
      <header className="mt-9 w-full max-w-[650px] px-4 py-8 bg-[#f8f8f8] text-center mb-8 rounded-lg border-2 border-gray-400 mx-auto">
        <Link to="/">
          <img
            src="/logo-sm-1.png"
            alt="Covered Bridge Properties Logo 1"
            className="mx-auto w-[470px] max-w-full"
          />
        </Link>
      </header>

      <div className="w-full px-4 flex justify-center mt-10">
        <div className="w-full max-w-4xl">
          <header className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-[#f5f5f5] font-montserrat mb-4">
              What Buyers Have Said
            </h1>
            <p className="text-lg text-slate-600 font-semibold font-montserrat">
              These aren’t actors. These aren’t scripts. Just a few words from
              some folks we’ve worked with.
            </p>
          </header>

          <section className="space-y-10">
            {testimonials.map(({ name, text }, i) => (
              <blockquote
                key={i}
                className="bg-white p-6 border-l-4 border-cyan-500 rounded-md shadow-sm text-gray-800 text-base leading-relaxed tracking-tight relative"
              >
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  className="text-cyan-300 absolute top-2 left-2 text-xl opacity-30"
                />
                <p className="mb-4 pl-6">{text}</p>
                <footer className="text-right text-sm text-[#003e5c] font-semibold pl-6">
                  — {name}
                </footer>
              </blockquote>
            ))}
          </section>

          <div className="mt-8 text-center mb-8">
            <p className="text-md text-slate-500 font-montserrat">
              You’ve heard what a few people had to say. Now, if you’ve still
              got questions, you can always—
            </p>
            <Link
              to="/faq"
              className="inline-block mt-4 px-6 py-3 bg-[#003e5c] text-white rounded hover:bg-[#065f6e] font-semibold font-montserrat transition"
            >
              Read the F.A.Q.
            </Link>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default TestimonialsPage;
