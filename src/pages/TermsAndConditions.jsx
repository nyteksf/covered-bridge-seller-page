import { Link } from "react-router";
import { useRef, useState, useEffect } from "react";

import Footer from "../components/Footer";
import LoadingState from "./LoadingState";

const TermsAndConditions = () => {
  const footerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    window.onload = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsLoading(false);
    };

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingState />
      ) : (
        <>
          <div className="flex flex-col min-h-screen w-full max-w-full bg-white text-gray-800 items-center justify-center">
            <div className="flex flex-col w-full items-center justify-center">
              <header className="w-full border-b border-gray-300 py-4 px-8 bg-gray-100 text-center relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-cyan-400">
                <Link to="/">
                  <img
                    src="/logo-sm-1.png"
                    alt="Covered Bridge Properties"
                    className="w-[326px] mx-auto mb-2"
                    title="Return Home"
                  />
                </Link>
                <h1 className="text-2xl font-bold bg-gradient-to-b from-cyan-300 to-cyan-500 bg-clip-text text-transparent">
                  Terms & Conditions
                </h1>
                <p className="text-sm text-gray-600">
                  Last Updated: April 8, 2025
                </p>
              </header>

              <main className="flex-1 max-w-3xl mx-auto px-8 py-8">
                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-2 text-gray-800">
                    Scope of Services
                  </h2>
                  <p>
                    Covered Bridge Property Holdings LLC (“we”, “our”, or “the
                    Company”)—the parent entity of the Covered Bridge
                    Properties™ brand—facilitates direct sales of vacant land we
                    own as a private investment company. We are not real estate
                    brokers or agents: we are a small family. Buyers acknowledge
                    that any information provided to us is used to help assess
                    marketability and potential buyer interest.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-2 text-gray-800">
                    Land Subject to Availability
                  </h2>
                  <p>
                    While we maintain marketing and outreach strategies to
                    engage with buyers like yourself, the availability and
                    disposition of our land depends on market factors and
                    internal decisions. Some land we choose to keep for our
                    personal use, some we will hold, and others we sell, but
                    only as it makes sense to do accordingly.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-2 text-gray-800">
                    Ownership Verification
                  </h2>
                  <p>
                    All properties offered for sale through Covered Bridge
                    Properties are held under legal title by Covered Bridge
                    Property Holdings LLC or its assigns. Title and ownership
                    are verified through public records or third-party title
                    services prior to resale unless explicitly stated otherwise.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-2 text-gray-800">
                    Non-Exclusive Participation
                  </h2>
                  <p>
                    Covered Bridge Properties operates exclusively in connection
                    with assets it owns. We do not and will never move to
                    represent other property owners or act in a brokerage
                    capacity. We reserve the right to make available and remove
                    or withdraw any of our land from availability without
                    notice.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-2 text-gray-800">
                    Data Privacy
                  </h2>
                  <p>
                    Any personal or property-related information submitted
                    through our site is handled according to our Privacy Policy.
                    We do not share, sell, or disclose your data except where
                    legally required or in service of direct property
                    communication and transactions.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-2 text-gray-800">
                    Liability Limitations
                  </h2>
                  <p>
                    Covered Bridge Property Holdings LLC and its affiliates
                    shall not be liable for lost profits, incidental damages, or
                    indirect consequences related to use of the site or any
                    missed communication opportunities. Use of our website and
                    services is voluntary and at the user’s sole discretion.
                    Furthermore, the information provided on each property is
                    believed to be accurate and representative. It is subject to
                    verification and no liability for error or omissions is
                    assumed. There are no warranties, expressed or implied, as
                    to the information herein contained on this website, and it
                    is recommended that all Buyers perform their own due
                    diligence, consult professionals, and make an independent
                    inspection of the property.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-2 text-gray-800">
                    Governing Law
                  </h2>
                  <p>
                    These terms shall be governed by the laws of the United
                    States and the state of Wyoming, in which Covered Bridge
                    Property Holdings LLC is registered. Disputes will be
                    handled in courts of competent jurisdiction therein.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-2 text-gray-800">
                    Changes to Terms
                  </h2>
                  <p>
                    Terms may be updated without notice. Continued use of our
                    services constitutes acceptance of any future modifications,
                    which will be reflected by the "Last Updated" date above.
                  </p>
                </section>
              </main>
            </div>
          </div>
          <Footer footerRef={footerRef} isVisible="false" />
        </>
      )}
    </>
  );
};

export default TermsAndConditions;
