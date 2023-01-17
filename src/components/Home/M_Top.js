import React, { useState } from "react";
import Hero from "../../Image/hero.svg";
import "./HomeMobile.css";
import { Typewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";
const MobileTop = () => {
    const navigate = useNavigate();
    const [width, setWidth] = useState(1006);

    const innerWidthArea = () => {
        setWidth(window.innerWidth);
    };
    window.addEventListener("resize", innerWidthArea);
    const handlerPopUp = () => {
        navigate("/contact-me");
    };

    return (
        <div className="top">
            {width <= 1006 && (
                <div>
                    <div className="mobile-top">
                        <div className="hero-right">
                            <div className="hero-right-inner">
                                <img src={Hero} alt="Hero" />
                                <div className="border">
                                    <h1 className="hi">HI THERE! I AM</h1>
                                    <h1 className="dynamic-1">
                                        {/* [ Ariful Islam ] */}
                                        <span>
                                            [
                                            <Typewriter
                                                words={[
                                                    "Ariful Islam",
                                                    "UI/UX Developer",
                                                    "Freelancer",
                                                    "Curious Programmer",
                                                    "A Self Believer ❤",
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
                        <div className="t-job-mobile">
                            <span className="text-dot">
                                <span className="dot-mobile"></span>
                                <span id="i-am">
                                    I’m available for a freelance job.
                                </span>
                                <br />
                                <span onClick={handlerPopUp} className="hire">
                                    Hire me!
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MobileTop;
