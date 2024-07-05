import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./ScrollButton.css";

const ScrollButton = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const handleScroll = () => {
    const halfwayPoint = document.documentElement.scrollHeight / 2;
    const isTopHalf = window.scrollY < halfwayPoint;

    setShowScrollToTop(!isTopHalf);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="scroll-button-container">
      <button className="scroll-button" onClick={showScrollToTop ? scrollToTop : scrollToBottom}>
        <FontAwesomeIcon icon={showScrollToTop ? faAngleUp : faAngleDown} />
      </button>
    </div>
  );
};

export default ScrollButton;
