import React from "react";
import Home from "../Home/Home";
import ScrollToTop from "react-scroll-to-top";
const Hero = () => {
    return (
        <>
            <Home />
            <div>
                <ScrollToTop
                    smooth
                    top="500"
                    className="scroll-top"
                    component={
                        <p
                            style={{
                                color: "#4ffced",
                                fontSize: "22px",
                                backgroundColor: "black",
                                height: "100%",

                                boxShadow:
                                    "0px -25px 20px -20px rgba(0,0,0,0.45),25px 0px 20px -20px rgba(0,0,120,0.45), 0px 25px 20px -20px rgba(0,120,0,0.45),-25px 0px 20px -20px rgba(120,0,0,0.45)",
                            }}
                        >
                            Up
                        </p>
                    }
                    // viewBox="0 0 24 24"
                    // svgPath="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"
                />
            </div>
        </>
    );
};

export default Hero;
