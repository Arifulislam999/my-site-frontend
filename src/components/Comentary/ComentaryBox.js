import React from "react";
import "./Comentary.css";
const ComentaryBox = ({ text, name }) => {
    return (
        <div className="com-box">
            <p>{text}</p>
            <q>{name}</q>
        </div>
    );
};

export default ComentaryBox;
