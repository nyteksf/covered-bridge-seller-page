import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

import "./button-to-top.css";

const ButtonToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth", // this enables a smooth scroll transition
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 200;
      setIsVisible(scrollY > threshold);
    };

    // Check initial scroll position
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    console.log("Current scrollY:", window.scrollY);
  }, [isVisible]);

  return (
    <a
      href="#"
      className={`btn--ToTop ${isVisible ? "btn--toTop-opaque" : ""}`}
      onClick={scrollToTop}
    >
      <div>
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </a>
  );
};

export default ButtonToTop;
