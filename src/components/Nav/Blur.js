import React from "react";
import "./Nav.css";
export const Blur = ({ toggleCheck }) => {
    return <div className={!toggleCheck === true ? "blur-1" : "blur-2"}></div>;
};
