import React, { useEffect, useState } from "react";
import "./Button.css";

export default function Upbutton() {
  const [isVisible, setIsVisible] = useState(false);

  const Upbutton = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      block: "center",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="Upbutton">
      {isVisible && (
        <div onClick={Upbutton}>
          <a className="top-a">
            <svg
              width="27"
              height="27"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.582 13.891c-.272.268-.709.268-.979 0s-.271-.701 0-.969l7.908-7.83a.697.697 0 0 1 .979 0l7.908 7.83a.68.68 0 0 1 0 .969.695.695 0 0 1-.978 0L10 6.75l-7.418 7.141z" />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
}
