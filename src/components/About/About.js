import React, { useState } from "react";
import "./About.css";
import download from "../../Image/download.png";

const About = () => {
  const [cv, setCv] = useState(false);
  const handlerCv = () => {
    setCv(true);
    setTimeout(() => {
      setCv(false);
    }, 2000);
  };
  return (
    <div className="about">
      <h3 className="about-me">ABOUT ME</h3>
      <h1 className="about-biography">Biography</h1>
      <p className="about-text">
        I'm a Freelancer Front-end Developer with over 1.2 years of experience.
        I'm from Kushtia Islamic University,Bangladesh. I code and create web
        elements for amazing people around the world. I like work with new
        people. New people are new experiences
      </p>
      <div className="details">
        <div className="address">
          <h2 className="name">NAME</h2>
          <h3>Ariful Islam</h3>
        </div>
        <div className="address">
          <h2 className="name">BIRTHDAY</h2>
          <h3>15th December 1999</h3>
        </div>
        {/* <div className="address">
                    <h2 className="name">AGE</h2>
                    <h3>22 years</h3>
                </div> */}
        <div className="address">
          <h2 className="name">ADDRESS</h2>
          <h3>Mymensingh</h3>
        </div>
        <div className="address">
          <h2 className="name">PHONE</h2>
          <h3>(+880) 1727-349321</h3>
        </div>
        <div className="address">
          <h2 className="name">EMAIL</h2>
          <h3 id="email">arifulislamjoy597@gmail.com</h3>
        </div>
        <div className="address address-1">
          <h2 className="name">SKYPE</h2>
          <h3>arif.902</h3>
        </div>
        <div className="cv-box" onClick={handlerCv}>
          <img
            draggable="false"
            className="img-cv"
            src={download}
            alt="download"
          />
          <p>DOWNLOAD CV</p>
        </div>
        {cv && (
          <div className="cv">
            <span>CV not available yet.</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
