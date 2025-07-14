import { toast } from "sonner";
import { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./contact-me-modal.css";

const ContactMeModal = ({
  isModalOpen,
  setIsModalOpen,
  isModalAnimating,
  setIsModalAnimating,
}) => {
  const form = useRef();

  /* MAIL CONTACT FORM FUNCTIONALITY */
  function contact(e) {
    try {
      e.preventDefault();
      emailjs
        .sendForm("service_2zh7gkh", "template_athyrzu", form.current, {
          publicKey: "M5JGTBwzcn6wIf6a7",
        })
        .then(
          (result) => {
            setTimeout(() => {
              setIsModalOpen(false);
              form.current.reset();
            }, "300");
          },
          (error) => {
            alert(
              "Error: The email service is temporarily unavailable. Please contact me directly on email.nytek@gmail.com"
            );
          }
        );
    } catch (error) {
      console.error("Error in contact function:", error);
    }
  }

  // Prevent clicks on backdrop from propagating
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal(false);
    }
  };

  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;

    if (isModalOpen) {
      // First scroll to top smoothly
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      // Apply scroll lock after a delay to allow smooth scrolling to complete
      const scrollLockTimer = setTimeout(() => {
        // Store current scroll position (should be 0 after scrolling to top)
        const scrollY =
          window.pageYOffset || document.documentElement.scrollTop;

        // Apply scroll lock
        body.style.position = "fixed";
        body.style.top = `-${scrollY}px`;
        body.style.left = "0";
        body.style.right = "0";
        body.style.width = "100%";
        body.style.overflow = "hidden";

        // Store scroll position for restoration
        body.dataset.scrollY = scrollY.toString();

        // Add class for additional styling
        body.classList.add("modal-open");
        html.classList.add("modal-open");
      }, 1000); // 500ms delay to allow smooth scroll to complete

      // Store timer reference for cleanup
      body.dataset.scrollLockTimer = scrollLockTimer;
    } else {
      // Clear any pending scroll lock timer
      const scrollLockTimer = body.dataset.scrollLockTimer;
      if (scrollLockTimer) {
        clearTimeout(scrollLockTimer);
        delete body.dataset.scrollLockTimer;
      }

      // Get stored scroll position
      const scrollY = parseInt(body.dataset.scrollY || "0", 10);

      // Remove scroll lock
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.width = "";
      body.style.overflow = "";

      // Remove classes
      body.classList.remove("modal-open");
      html.classList.remove("modal-open");

      // Clean up data attribute
      delete body.dataset.scrollY;

      // Restore scroll position (should be 0 since we scrolled to top)
      window.scrollTo(0, scrollY);
    }

    // Cleanup function
    return () => {
      // Clear any pending scroll lock timer
      const scrollLockTimer = body.dataset.scrollLockTimer;
      if (scrollLockTimer) {
        clearTimeout(scrollLockTimer);
        delete body.dataset.scrollLockTimer;
      }

      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.width = "";
      body.style.overflow = "";
      body.classList.remove("modal-open");
      html.classList.remove("modal-open");
      delete body.dataset.scrollY;
    };
  }, [isModalOpen]);

  useEffect(() => {
    if (isModalOpen) {
      setTimeout(() => {
        setIsModalAnimating(true);
      }, 10); // slight delay to trigger CSS transition
    } else {
      setIsModalAnimating(false);
    }
  }, [isModalOpen]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const closeModal = (isSubmit) => {
    setIsModalAnimating(false);
    setTimeout(() => {
      setIsModalOpen(false);
      form.current.reset();
      isSubmit ? toast.success("Message sent successfully.") : "";
    }, 300);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`modal__backdrop ${
          isModalOpen ? "backdrop--open" : "backdrop--closed"
        }`}
        onClick={() => closeModal(false)}
      />

      <div
        className={`contact-modal ${
          isModalOpen ? "modal--open" : "modal--closed"
        }`}
      >
        <div
          className={`
          modal__half modal__about ${
            isModalAnimating ? "slide-in-left" : "slide-out-left"
          }
        `}
        >
          <img src="/logo-sm-2-invert.png" className="modal-header-img" />

          <h3 className="modal__title modal__title--about">
            Know Exactly What You’re Getting
          </h3>
          <h4 className="modal__sub-title modal__sub-title--about font-semibold">
            Covered Bridge Properties · No agents. No nonsense.
          </h4>
          <p className="modal__para">
            At Covered Bridge Properties, we make land simple — the way it
            should be. No banks, no brokers, no fine print.
          </p>

          <p className="modal__para">
            Just clean, rural acreage sold direct — with honest terms and fast
            closings. Whether you're looking to build, camp, invest, or just{" "}
            <strong>get off the grid</strong>, you're in the right place.
          </p>

          <p className="modal__para">
            Every parcel we sell is handpicked, verified, and ready for you to
            make it yours. You don’t need perfect credit. You don’t need a
            realtor. You just need a vision.
          </p>
        </div>
        <div
          className={`
          modal__half modal__contact ${
            isModalAnimating ? "slide-in-right" : "slide-out-right"
          }
        `}
        >
          <FontAwesomeIcon
            icon={faXmark}
            onClick={() => closeModal(false)}
            className="modal__exit click"
            size="2x"
          />
          <h3 className="modal__title modal__title--contact">
            Let's talk land.
          </h3>
          <div className="form__item">
            <label className="form__item--label">
              <span className="purple required-field">*</span> I'm reaching out
              because...
            </label>
            <select name="inquiry_type" className="contact__input" required>
              <option value="">Select an option here</option>
              <option value="buy">I'm interested in buying land.</option>
              <option value="sell">I'd like to sell my land.</option>
              <option value="question">I have a general question.</option>
            </select>
          </div>
          <form ref={form} id="contact__form" onSubmit={contact}>
            <div className="form__item">
              <label className="form__item--label">
                <span className="purple required-field">*</span> Name
              </label>
              <input
                type="text"
                name="user_name"
                className="contact__input"
                required
              />
            </div>
            <div className="form__item">
              <label className="form__item--label">
                <span className="purple required-field">*</span> E-mail
              </label>
              <input
                type="email"
                name="user_email"
                className="contact__input"
                required
              />
            </div>
            <div className="form__item">
              <label className="form__item--label">
                <span className="purple required-field">*</span> Message
              </label>
              <textarea
                type="text"
                name="message"
                className="contact__input"
                required
              ></textarea>
            </div>
            <button
              id="contact__submit"
              type="submit"
              onClick={() => closeModal(true)}
              className="form__submit"
            >
              Send it my way
            </button>
          </form>
          <div className="modal__overlay modal__overlay--loading">
            <i className="fa-solid fa-spinner" aria-hidden="true"></i>
          </div>
          <div className="modal__overlay modal__overlay--success">
            Thank you! We'll reach out within one (1) business day.
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMeModal;
