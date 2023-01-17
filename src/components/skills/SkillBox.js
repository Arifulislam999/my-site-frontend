import React from "react";

const SkillBox = ({ title, title2, desc }) => {
    return (
        <div data-aos="fade-up" data-aos-duration="2000" className="skill-b">
            <p className="skill-c">
                {title} <span id="s-d">{title2}</span>
            </p>
            <p className="skill-d">{desc}</p>
        </div>
    );
};

export default SkillBox;
