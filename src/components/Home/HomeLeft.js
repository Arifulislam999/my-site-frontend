import React, { useEffect, useState } from "react";
import "./Home.css";
import "./HomeMobile.css";
import "./HomeLeft.css";
import ArifLogo from "../../Image/logo.png";
import About from "../About/About";
import Skills from "../skills/Skills";
import Portfolio from "../Portfolio/Portfolio";
import Services from "../Services/Services";
import Technology from "../Technology/Technology";
import Comentary from "../Comentary/Comentary";
import ContactForm from "../Contact/ContactForm";
import Foter from "../Footer/Foter";
const HomeLeft = () => {
    const [width, setWidth] = useState(1006);

    const [scroll, setScroll] = useState(0);

    const scrollY = () => {
        setScroll(window.scrollY.toFixed(0));
    };

    const innerWidthArea = () => {
        setWidth(window.innerWidth);
    };
    useEffect(() => {
        innerWidthArea();
        scrollY();
        window.addEventListener("resize", innerWidthArea);
        window.addEventListener("scroll", scrollY);
    }, []);
    return (
        <div className="height">
            <div
                className={width <= 1006 ? " mobile-left" : "home-left-scroll"}
            >
                <div
                    className={
                        scroll > 0 ? " home-left-menu-scroll" : "home-left-menu"
                    }
                >
                    <h3 className="introduction">INTRODUCTION</h3>
                    <h1 className="ui-ux">UI/UX Designer</h1>
                    <p className="p-text">
                        I design and develop services for customers of all
                        sizes, specializing in creating stylish, modern
                        websites, web services and online stores.
                    </p>
                    <div className="w-logo">
                        <img draggable={false} src={ArifLogo} alt="Arif" />
                    </div>
                    <About />
                    <Skills />
                    <Portfolio />
                    <Services />
                    <Technology />
                    <Comentary />
                    <ContactForm />
                    <Foter />
                </div>
            </div>
        </div>
    );
};

export default HomeLeft;
