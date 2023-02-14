import React, { useState } from "react";
import "./Home.css";
import Hero from "../../Image/hero.svg";
import { Typewriter } from "react-simple-typewriter";
// import Particle from "./Particle";
import { useNavigate } from "react-router-dom";
import AnimatedBackground from "./AnimatedBackground";

const HomeRight = () => {
  const goToUp = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    // console.log("Click");
  };
  const navigate = useNavigate();
  const [scroll, setScroll] = useState(0);
  const [width, setWidth] = useState(1006);
  const scrollY = () => {
    setScroll(window.scrollY.toFixed(0));
  };
  const innerWidthArea = () => {
    setWidth(window.innerWidth);
  };
  window.addEventListener("scroll", scrollY);
  window.addEventListener("resize", innerWidthArea);
  const handlerHire = () => {
    // setHire(true);
    navigate("/contact-me");
    goToUp();
  };

  return (
    <div>
      {width > 1005 && (
        <div className={scroll > 1 ? "home-right-scroll" : "home-right"}>
          <div className="hero-center">
            <div className="hero-right">
              <div className="hero-right-inner">
                <img src={Hero} alt="Hero" />
                <div className={scroll > 1 ? "border-1" : "border-2"}>
                  <h1 className={scroll > 1 ? "hi-title" : "hi-title-1"}>
                    HI THERE! I AM
                  </h1>

                  <h1 className="dynamic">
                    <span>
                      [
                      <Typewriter
                        words={[
                          "Ariful Islam",
                          "UI/UX Developer",
                          "Freelancer",
                          "Curious Programmer",
                          "A Self Believer❤️",
                        ]}
                        loop={Infinity}
                        cursor
                        cursorStyle="."
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                      />
                      ]
                    </span>
                  </h1>
                </div>
              </div>
            </div>
            <div className="t-job">
              <span className={scroll > 1 ? "t-job-inner" : "t-job-1"}>
                <span className="dot"></span>
                I’m available for a freelance job.
              </span>
            </div>
            <div id="hire-arif">
              <strong onClick={handlerHire} style={{ color: "#ADDFFF" }}>
                Hire me!
              </strong>
            </div>
          </div>
          {/* <Particle /> */}
          <AnimatedBackground />
        </div>
      )}
    </div>
  );
};

export default HomeRight;
