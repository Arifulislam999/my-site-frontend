import React, { useEffect, useState } from "react";
import HomeLeft from "./HomeLeft";
import HomeRight from "./HomeRight";
import "./Home.css";
import "./HomeMobile.css";
import MobileTop from "./M_Top";
import Nav from "../Nav/Nav";

const Home = () => {
    const [width, setWidth] = useState(0);
    const goToUp = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        // console.log("Click");
    };

    const innerWidthArea = () => {
        setWidth(window.innerWidth);
    };
    useEffect(() => {
        goToUp();
        innerWidthArea();
        window.addEventListener("resize", innerWidthArea);
    }, [width]);
    return (
        <div className={width <= 1006 ? "home-mobile" : "home"}>
            <Nav />
            {width <= 1006 ? <MobileTop /> : <HomeRight />}
            <HomeLeft />
        </div>
    );
};

export default Home;
// https://michalsnik.github.io/aos/
