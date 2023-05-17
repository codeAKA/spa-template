import React, { ReactNode, useState, useEffect } from "react";
import "./ScrollButton.css";
import Button from "./Button";

interface ScrollButtonProps {
  children: ReactNode;
  className?: string;
}

const ScrollButton: React.FC<ScrollButtonProps> = (props) => {
  const { children, className } = props;
  const [showButton, setShowButton] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 40) {
      setShowButton(true);
    } else if (window.pageYOffset <= 40) {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <Button
      onClick={scrollToTop}
      style={{ display: showButton ? "block" : "none" }}
      className={`scroll-button ${className}`}
    >
      {children}
    </Button>
  );
};

export default ScrollButton;
