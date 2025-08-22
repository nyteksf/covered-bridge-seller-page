import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 px-4 py-10 text-white text-center relative">
      
      {/* ⬇️ Position this RELATIVE container to anchor the image */}
      <div className="relative w-full max-w-md mb-6">
        <h2 className="text-2xl md:text-3xl font-bold">Page Not Found.</h2>

        {/* ⬇️ Absolute image placed visually "on top" of heading */}
        <img
          src="/404error.png"
          alt="Page Not Found"
          className="absolute -top-[120px] md:-top-[160px] left-1/2 -translate-x-1/2 w-40 md:w-60"
        />
      </div>

      <p className="text-lg md:text-xl mb-2 leading-relaxed">
        Oops! We can't seem to find the page you're looking for.
      </p>

      <p className="text-base md:text-lg mb-6 max-w-md mx-auto">
        Maybe it was moved or deleted? Or perhaps there was a typo in the URL?
      </p>

      <Link to="/">
        <button className="px-6 py-2 bg-white text-gray-900 rounded-full hover:bg-orange-200 transition">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default PageNotFound;
