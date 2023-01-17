import React from "react";
import "./Services.css";

export const ServicesBox = ({ title, text, q }) => {
    return (
        <div data-aos="fade-up" data-aos-duration="3000" className="ser-box">
            <h1 className="ser-box-h1">{title}</h1>
            <p className="ser-box-p">{text}</p>
            <q className="s-q">{q}</q>
        </div>
    );
};
