import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "../AboutMe/AboutMe";
import ContactMe from "../Contact-Me/ContactMe";
import Application from "../FrontEndApplication/Application";
import Hero from "../Hero/Hero";
import MenuToggle from "../Nav/MenuToggle";
import Nav from "../Nav/Nav";
const Routering = () => {
    const [toggleBar, setToggle] = useState(true);

    const handlerToggle = () => {
        setToggle((e) => !e);
    };
    return (
        <>
            <BrowserRouter>
                <span onClick={handlerToggle}>
                    <MenuToggle
                        toggle={
                            toggleBar === true
                                ? "menu-toggle-re-position"
                                : "menu-toggle"
                        }
                    />
                </span>
                <span>{toggleBar && <Nav />}</span>
                <Routes>
                    <Route path="/" element={<Hero />}></Route>
                    <Route path="/about-me" element={<AboutMe />}></Route>
                    <Route path="/contact-me" element={<ContactMe />}></Route>
                    <Route
                        path="/application"
                        element={<Application />}
                    ></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Routering;
