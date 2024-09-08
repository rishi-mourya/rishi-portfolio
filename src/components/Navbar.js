import React, { useState, useEffect, useRef } from "react";
import FeatherImage from "./images/feather.png"; // Replace with the actual path to your image
import { Link } from "react-router-dom";

function Navbar() {
  let fontColor = "text-light";
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const optionsRef = useRef(null);
  const buttonRef = useRef(null);

  const handleClick = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  const handleClickOutside = (event) => {
    if (
      optionsRef.current &&
      !optionsRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setIsOptionsOpen(false);
    }
  };

  const handleLinkClick = () => {
    setIsOptionsOpen(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark  fixed-top navbarMain">
        <div className="container-fluid  ">
          <div className="navbar-brand d-flex align-items-center">
            <img
              src={FeatherImage}
              style={{ width: "30px", height: "30px" }}
              alt=""
            />
            <Link className={`text-light text-decoration-none fs-5` } to="/">
              Rishi
            </Link>
          </div>

          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={handleClick}
            ref={buttonRef}
            aria-controls="navbarSupportedContent"
            aria-expanded={isOptionsOpen}
            aria-label="Toggle navigation"
          >
            <span className="material-icons text-light">sort</span>
          </button>

          <div
            className={`collapse navbar-collapse justify-content-end ${
              isOptionsOpen ? "show" : ""
            }`}
            id="navbarSupportedContent"
            ref={optionsRef}
          >
            <ul className="navbar-nav">
              <li className="nav-item px-2 fs-5">
                <Link
                  className={`nav-link ${fontColor}`}
                  to="/about"
                  onClick={handleLinkClick}
                >
                  About
                </Link>
              </li>
              <li className="nav-item px-2 fs-5">
                <Link
                  className={`nav-link ${fontColor}`}
                  to="/resume"
                  onClick={handleLinkClick}
                >
                  Resume
                </Link>
              </li>
             
              <li className="nav-item px-2 fs-5">
                <Link
                  className={`nav-link ${fontColor}`}
                  to="/contact"
                  onClick={handleLinkClick}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
