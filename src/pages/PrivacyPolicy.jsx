import { Link } from "react-router";
import { useState, useEffect } from "react";

import Footer from "../components/Footer";
import LoadingState from "./LoadingState";

const PrivacyPolicy = ({ footerRef }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.onload = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsLoading(false);
    };
    const timer = setTimeout(() => setIsLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingState />
      ) : (
        <div className="flex flex-col min-h-screen bg-white text-gray-800">
          <header className="border-b border-gray-300 py-4 px-8 bg-gray-100 text-center">
            <div className="flex justify-center items-center">
              <Link to="/">
                <img
                  src="/logo-sm-1.png"
                  className="w-[412px] max-w-full mx-auto"
                  alt="Logo"
                  title="Return Home"
                />
              </Link>
            </div>
          </header>

          <main className="flex-1 max-w-3xl mx-auto px-8 py-8">
            <h2 className="text-2xl font-bold mb-2">Privacy Policy</h2>
            <p className="text-sm text-gray-600 mb-6">
              Last Updated: April 8, 2025
            </p>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Introduction</h3>
              <p>
                Welcome to Covered Bridge Properties ("we," "our," or "the
                Company"), a trademarked brand of Covered Bridge Property
                Holdings LLC. This Privacy Policy outlines how we handle your
                information when you engage with our services or website.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-2">
                Information We Collect
              </h3>
              <h4 className="text-lg font-medium mt-4 underline">
                Information You Provide
              </h4>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>Contact Info:</strong> Name, email, phone, mailing
                  address
                </li>
                <li>
                  <strong>Property Info:</strong> Details about property you're
                  selling
                </li>
                <li>
                  <strong>Transaction Data:</strong> Related to past/potential
                  deals
                </li>
                <li>
                  <strong>Communication Logs:</strong> Messages or notes from
                  interactions
                </li>
              </ul>
              <h4 className="text-lg font-medium mt-4 underline">
                Automatically Collected Info
              </h4>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>Device:</strong> IP, browser, OS
                </li>
                <li>
                  <strong>Usage:</strong> Pages visited, referral paths
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-2">How We Use It</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>To review and market your property</li>
                <li>To reply to your inquiries or updates</li>
                <li>To facilitate the transaction process</li>
                <li>To improve the functionality of our website</li>
                <li>To comply with legal and compliance requirements</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Legal Basis</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Your consent</li>
                <li>Contractual necessity</li>
                <li>Legitimate business interest</li>
                <li>Legal compliance</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-2">
                Information Sharing
              </h3>
              <p className="mb-2">
                <strong>
                  <em>We do not sell your personal data.</em>
                </strong>{" "}
                We may share limited info with:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>Service Providers:</strong> Title, escrow, legal teams
                </li>
                <li>
                  <strong>Legal Compliance:</strong> As required by law
                </li>
              </ul>
              <p className="mt-2">
                All third parties are bound to confidentiality obligations.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Security</h3>
              <p>
                We apply reasonable safeguards. But no online system is 100%
                immune from breach.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Data Retention</h3>
              <p>
                We keep your info as long as needed for service purposes or
                legal compliance.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Your Rights</h3>
              <p className="mb-2">
                Depending on your location, you may request:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Access or correction</li>
                <li>Deletion or restriction</li>
                <li>Portability</li>
              </ul>
              <p className="mt-2">To submit a request, contact us below.</p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Children's Privacy</h3>
              <p>
                We do not knowingly collect data from those under 18 years old.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Updates</h3>
              <p>
                This policy and its details may change at any time. Revisit this
                page to stay current.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
              <address className="not-italic mt-1">
                <strong>Covered Bridge Property Holdings LLC</strong>
                <br />
                304 S. Jones Blvd. #2156,
                <br />
                Las Vegas, NV 89107
                <br />
                <u>Email:</u>{" "}
                <a href="mailto:joe@coveredbridge.properties">
                  joe@coveredbridge.properties
                </a>
                <br />
                <u>Phone:</u> 866-610-LAND{" "}
                <span className="text-slate-500">(5263)</span>
              </address>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Governing Law</h3>
              <p>
                Governed by U.S. and Wyoming law where Covered Bridge Properties
                is a registered trademark and brand of Covered Bridge Property
                Holdings LLC
              </p>
            </section>
          </main>

          <Footer footerRef={footerRef} isVisible="false" />
        </div>
      )}
    </>
  );
};

export default PrivacyPolicy;
