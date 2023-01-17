import React from "react";
import "./Technology.css";
const TechonologhBox = ({ img }) => {
    return (
        <div className="t-b">
            <img id="t-img" draggable={false} src={img} alt="potos" />
        </div>
    );
};

export default TechonologhBox;
