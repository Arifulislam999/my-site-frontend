import React from "react";
import "./progressbar.css";
const ProgressBar = () => {
  return (
    <div className="progress">
      <div className="skill-box">
        <span className="title">HTML5 & CSS3</span>
        <div className="skill-bar">
          <span className="skill-per html">
            <span className="tooltip">95%</span>
          </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="title">JavaScript</span>
        <div className="skill-bar">
          <span className="skill-per javascript">
            <span className="tooltip">90%</span>
          </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="title">React JS</span>
        <div className="skill-bar">
          <span className="skill-per reactjs">
            <span className="tooltip">85%</span>
          </span>
        </div>
      </div>

      <div className="skill-box">
        <span className="title">Node JS</span>
        <div className="skill-bar">
          <span className="skill-per nodejs">
            <span className="tooltip">82%</span>
          </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="title">Express JS</span>
        <div className="skill-bar">
          <span className="skill-per expressjs">
            <span className="tooltip">79%</span>
          </span>
        </div>
      </div>

      <div className="pg-text">
        <p>
          <q>
            A freelance creative designer with a love for minimal design, clean
            typography and well-written code, located in my Department. Provide
            high quality and cost effective offshore web and software
            development services. Wide range of web and software development
            services across the world.
          </q>
        </p>
      </div>
    </div>
  );
};

export default ProgressBar;
