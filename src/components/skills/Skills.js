import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import SkillBox from "./SkillBox";
import "./skills.css";
const Skills = () => {
    const [toggle1, setTggle1] = useState(true);
    const [toggle2, setTggle2] = useState(false);
    const [toggle3, setTggle3] = useState(false);
    const handlerExp = () => {
        setTggle1(true);
        setTggle2(false);
        setTggle3(false);
    };
    const handlerEdu = () => {
        setTggle2(true);
        setTggle1(false);
        setTggle3(false);
    };
    const handlerSkill = () => {
        setTggle3(true);
        setTggle1(false);
        setTggle2(false);
    };
    return (
        <div>
            <div className="exp">
                <span
                    className={
                        toggle1 === true
                            ? "exp-11 exp-111 active underline s-border "
                            : "exp-11 exp-111 Active"
                    }
                    onClick={handlerExp}
                >
                    Experience
                </span>
                <span
                    className={
                        toggle2 === true
                            ? "exp-1 exp-111 active underline s-border "
                            : "exp-1 exp-111 Active "
                    }
                    onClick={handlerEdu}
                >
                    Education
                </span>
                <span
                    className={
                        toggle3 === true
                            ? "exp-2 Active active underline s-border "
                            : "exp-2"
                    }
                    onClick={handlerSkill}
                >
                    Skills
                </span>
            </div>
            {toggle1 && (
                <div className="skill-des">
                    <SkillBox
                        title="None JS "
                        title2={<strong>( June,2022-Today )</strong>}
                        desc="JavaScript is one of the most popular programming languages. The powerful Node.js runtime environment has been ranked the technology most commonly used by professional developers. Node.js is an event-driven JavaScript runtime. Node has myriad potential uses for JavaScript development including being a great environment for building efficient network applications. Node.js is a very powerful JavaScript-based platform built on Google Chrome's JavaScript V8 Engine. It is used to develop I/O intensive web applications like video streaming sites, single-page applications, and other web applications."
                    />
                    <SkillBox
                        title="Vanilla JavaScript "
                        title2={<strong>( December,2021-June,2022 )</strong>}
                        desc="Vanilla Js is a powerful scripting language.Which occur front-end and back-end both site.Basically front-end used React Js, Vue Js,Angular Js and back-end used Node Js."
                    />
                    <SkillBox
                        title="Bootstrap v5 "
                        title2={<strong>( October,2021-Noverber,2021 )</strong>}
                        desc="As a framework, Bootstrap includes the basics for responsive web development, so developers only need to insert the code into a pre-defined grid system. The Bootstrap framework is built on Hypertext Markup Language (HTML), cascading style sheets (CSS) and JavaScript. Web developers using Bootstrap can build websites much faster without spending time worrying about basic commands and functions."
                    />
                </div>
            )}
            {toggle2 && (
                <div className="skill-des">
                    <SkillBox
                        title="Islamic University,Bangladesh "
                        title2={
                            <strong>
                                ( January,2019-Today ) <br /> Computer Science &
                                Engineering(CSE)
                            </strong>
                        }
                        desc="In 2019 ,I was admitted to the Computer science & engineering department of the science faculty of Islamic University.Ever since was a something understand,I always wanted to stydy computer science.Since then stydy computer science admission here."
                    />
                    <SkillBox
                        title="Notre Dame College,Mymensingh "
                        title2={
                            <strong>
                                ( July,2016-June,2018 ) <br /> Science
                            </strong>
                        }
                        desc="It was my dream college from where i learned a lot.It was very good to finish school and join freshers and start a new life.After completing my school life,I was admitted to the science department.There was a log to learn and a lot to control. And learned how to live life."
                    />
                    <SkillBox
                        title="Mukul Niketan High School,Mymensingh "
                        title2={
                            <strong>
                                ( January,2010-March,2016 )<br />
                                Six to Ten
                            </strong>
                        }
                        desc="I was spent the best time of my life in Mukul Niketan High School from six to ten.This time I learned a lot in a new environment.Adapting myself to that environment was a big challenge for me.I finished my school life with new friends,new environment,new life.All in all the day was well spent and ended well...."
                    />
                </div>
            )}
            {toggle3 && (
                <div className="pp-bar">
                    <ProgressBar />
                </div>
            )}
        </div>
    );
};

export default Skills;
