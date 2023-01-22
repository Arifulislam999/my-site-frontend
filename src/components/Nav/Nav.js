import React, { useState } from "react";
import { Blur } from "./Blur";
import MenuToggle from "./MenuToggle";
import "./Nav.css";
import "./socialmedia.css";
import facebook from "../../Image/facebook.webp";
import instra from "../../Image/instra.webp";
import whatsapp from "../../Image/whatapps.png";
import linkdin from "../../Image/linkdin.png";
import github from "../../Image/github.png";
import { Link } from "react-router-dom";
const Nav = () => {
    // Scroll To Top
    const goToUp = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        // console.log("Click");
    };
    const [toggleBar, setToggle] = useState(true);
    const hanglerToggle = () => {
        setToggle((e) => !e);
    };
    const handlerToggle = () => {
        setToggle((e) => !e);
    };
    const handlerBlur = () => {
        setToggle((e) => !e);
        // goToUp();
    };
    const handlerChange = () => {
        goToUp();
        setToggle((e) => !e);
    };

    return (
        <nav className={toggleBar === false ? "nav-toggle-1" : "nav-toggle-2"}>
            <div onClick={handlerToggle}>
                {toggleBar === true ? (
                    <MenuToggle toggle="menu-toggle" />
                ) : (
                    <MenuToggle toggle="menu-toggle-re-position" />
                )}
            </div>
            <span onClick={handlerBlur}>
                <Blur toggleCheck={toggleBar} />
            </span>
            <div className="toggle" onClick={hanglerToggle}>
                <span className="toggle-1"></span>
                <span className="toggle-2"></span>
            </div>
            <header>Menu</header>
            <ul>
                <li>
                    <Link to="/" className="a" onClick={handlerChange}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about-me" className="a" onClick={handlerChange}>
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        to="/contact-me"
                        className="a"
                        onClick={handlerChange}
                    >
                        Contact
                    </Link>
                </li>
                <li>
                    <Link
                        to="/application"
                        className="a"
                        onClick={handlerChange}
                    >
                        Project
                    </Link>
                </li>
            </ul>

            <div
                className={toggleBar ? " social-media-hidden" : "social-media"}
            >
                <a
                    href="https://www.facebook.com/jsarif.mondol.3/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={facebook} alt="facebook" />
                </a>
                <a
                    href="https://www.instagram.com/the_ar_if_07/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={instra} alt="facebook" />
                </a>

                <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={linkdin} alt="facebook" />
                </a>

                <a
                    href="https://www.whatsapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={whatsapp} alt="facebook" />
                </a>

                <a
                    href="https://github.com/Arifulislam999"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={github} alt="facebook" />
                </a>
            </div>

            <div className="develop">
                <p>
                    Developed BY:<strong>ARIFUL ISLAM</strong>
                </p>
            </div>
        </nav>
    );
};

export default Nav;
