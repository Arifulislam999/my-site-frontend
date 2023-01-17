import React, { useEffect, useState } from "react";
import HomeLeft from "./HomeLeft";
import HomeRight from "./HomeRight";
import "./Home.css";
import "./HomeMobile.css";
import MobileTop from "./M_Top";
import Nav from "../Nav/Nav";

const Home = () => {
    const [width, setWidth] = useState(0);

    const innerWidthArea = () => {
        setWidth(window.innerWidth);
    };
    useEffect(() => {
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
