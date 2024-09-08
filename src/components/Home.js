import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Create this CSS file for styling

function Home() {
  const phrases = useMemo(() => ["Flutter Developer", "Web Devloper", "Freelancer"], []);

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState(phrases[0] || ""); // Initialize with an empty string or the first phrase
  const [isRemoving, setIsRemoving] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText((prevText) => {
        if (!isRemoving) {
          if (prevText === phrases[currentPhraseIndex]) {
            setIsRemoving(true);
          }
          return prevText + phrases[currentPhraseIndex][prevText.length];
        } else {
          if (prevText === "" || prevText === undefined) {
            // Handle undefined case
            // setIsRemoving(true);
            setCurrentPhraseIndex(
              (prevIndex) => (prevIndex + 1) % phrases.length
            );
            return phrases[(currentPhraseIndex + 1) % phrases.length];
          }

          return prevText.slice(0, -1);
        }
      });
    }, 200);

    return () => clearInterval(intervalId);
  }, [currentPhraseIndex, phrases, isRemoving]);

  return (
    <div className="relative-container animation-background">
      <div className="carousel-caption row h-100 align-items-end justify-content-center">
        <div className="col-12 col-lg-8 home-content text-center">
          <h1 className="headingName ">Rishi Mourya</h1>
          <h3 className=" designation">I am {currentText}</h3>
        </div>
      </div>

      <div className="krishnName">
        <p>Jai Shri Krishn</p>
      </div>
      {/* right side social media icons */}
      <div className="social-links">
        <Link
          to="https://www.facebook.com/rishi.mourya.96"
          className="social-link"
          target="_blank"
        >
          <i className="bi bi-facebook"></i>
        </Link>
        <Link
          to="https://instagram.com/__mickey_0305?igshid=OGQ5ZDc2ODk2ZA=="
          className="social-link"
          target="_blank"
        >
          <i className="bi bi-instagram"></i>
        </Link>
        <Link
          to="https://x.com/RishiMourya7?t=ppl8Wn3nzK837-7ilbDdSw&s=08"
          className="social-link"
          target="_blank"
        >
          <i className="bi bi-twitter"></i>
        </Link>

        <Link
          to="https://github.com/rishi-mourya/"
          className="social-link"
          target="_blank"
        >
          <i className="bi bi-github"></i>
        </Link>
        <Link
          to="https://www.linkedin.com/in/rishi-morya-8b1a69149?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          className="social-link"
        >
          <i className="bi bi-linkedin"></i>
        </Link>
      </div>
    </div>
  );
}

export default Home;
