import React from "react";
import "./AboutMe.css";
import ArifPic from "../../Image/Arif-p.jpg";
import allTechnology from "../../Image/allTechnology.jpg";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

const AboutMe = () => {
    return (
        <div className="about-me-personel">
            <div className="a-personel">
                <img draggable={false} src={ArifPic} alt="arif" />
            </div>
            <div className="a-m-flex">
                <div className="a-m-left">
                    <div className="a-m-me">
                        <h2>About</h2>
                    </div>
                    <img
                        className="a-am"
                        draggable={false}
                        src={allTechnology}
                        alt="arif"
                    />

                    <div className="a-m-in">
                        <p>Hi i'm Arif...!</p>
                        <p>
                            I love to learn new Technology.Basically i'm front
                            end developer but recently i'm working back end with
                            Node JS.
                        </p>
                    </div>
                    <div>
                        <ul className="a-ul">
                            <li>
                                <Link to="/" className="aa">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact-me" className="aa">
                                    Contact
                                </Link>
                            </li>
                            <li className="aaa">
                                <a
                                    href="https://github.com/Arifulislam999?tab=repositories"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    More Project
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="a-m-right">
                    <h1 className="a-m-name">My Self</h1>
                    <h1 className="a-m-text">
                        People find writing about themselves difficult.I'm try
                        to write...!My name is Ariful Islam.Now i'm reading at
                        Islamic University,Bangladesh(IU). i always try to write
                        clean code for website.i live in kushtia but my
                        permanent home is mymensingh.i believe the human
                        experience is meant to be shared.that's why i am
                        passionate about the power of thoughtful communication
                        and new web design.i am usually knee deep in a slew of
                        projects,technical blogs quippy social posts,website
                        content,and whatever else clients request always active.
                        my personal philosophy when it comes to education and
                        learning is closely related to several cognitive
                        theories of motivation.I enjoy writing on a variety of
                        topics and i'm open to taking on projects in other
                        industries.
                    </h1>
                    <br />
                    <h1 className="a-m-name">My Activity</h1>
                    <br />
                    <h2 className="a-m-title">Node JS</h2>
                    <p className="a-m-text">
                        Node.js is a very powerful JavaScript-based platform
                        built on Google Chrome's JavaScript V8 Engine. It is
                        used to develop I/O intensive web applications like
                        video streaming sites, single-page applications, and
                        other web applications.Try to Learn about core node js
                        and implement my site.
                    </p>
                    <h2 className="a-m-title">Vanilla JavaScript</h2>
                    <p className="a-m-text">
                        Vanilla Js is a powerful scripting language.Which occur
                        front-end and back-end both site.Basically front-end
                        used React Js, Vue Js,Angular Js and back-end used Node
                        Js.I'm Proficient at Vanilla Js.
                    </p>

                    <h2 className="a-m-title">
                        Famous Framework for styleing Components...
                    </h2>
                    <p className="a-m-text">
                        As a framework, Bootstrap includes the basics for
                        responsive web development, so developers only need to
                        insert the code into a pre-defined grid system. The
                        Bootstrap framework is built on Hypertext Markup
                        Language (HTML), cascading style sheets (CSS) and
                        JavaScript. Web developers using Bootstrap can build
                        websites much faster without spending time worrying
                        about basic commands and functions.For Bootstrap a site
                        looks like Gorgeous.
                    </p>
                    <div className="a-m-n-w2">
                        <h1 className="a-m-n-w a-m-n-ww">Ariful Islam</h1>
                        <h2 className="a-m-n-w">Web Developer & Designer.</h2>
                    </div>
                </div>
            </div>
            <div>
                <ScrollToTop
                    smooth
                    top="500"
                    id="scroll-top"
                    component={<p>Up</p>}
                    // viewBox="0 0 24 24"
                    // svgPath="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"
                />
            </div>
        </div>
    );
};

export default AboutMe;
