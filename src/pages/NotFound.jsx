import React from "react";
import { Link } from "react-router-dom";

import "./not-found.css";

const PageNotFound = () => {
  return (
    <div className="container error-404-container">
      <div className="row">
        <div className="error-msg-404--wrapper">
          <img
            src="/404error.png"
            alt="Page Not Found"
            className="page-not-found__img img-404"
          />
          <div className="error-msg-404--msg">
            <h2 className="error-msg-404--title">Page Not Found.</h2>
            <p
              className="error-msg-404--para error-msg-404--para-1"
              style={{ fontSize: "1.4em" }}
            >
              Oops! We can't seem to find the pag
              <span style={{ color: "#76401E" }} className="font-semibold">e</span> <span style={{ color: "#76401E" }} className="font-semibold">you're
              </span>{" "}
              looking for.
            </p>
            <p
              className="error-msg-404--para error-msg-404--para-2"
              style={{ fontSize: "1.25em" }}
            >
              Maybe it was moved or deleted? Or perhaps there was a typo in the
              URL?
            </p>
            <Link to="/">
              <button className="btn-404">Back to Home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
