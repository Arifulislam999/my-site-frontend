import React, { useState } from "react";
import { PopUp } from "./PopUp";
import "./popup.css";

const PortfolioSingle = ({ data }) => {
    const { image, tags, name } = data;
    const [toggle, setToggle] = useState(false);
    const handlerImag = () => {
        setToggle(true);
    };
    const handlerToggle = () => {
        setToggle(false);
    };

    return (
        <div className="slider-image">
            <img
                id="img"
                src={image}
                draggable={false}
                alt={name}
                onClick={handlerImag}
            />
            <p className="tags">{tags.map((tag) => tag).join(", ")}</p>
            <p className="portfolio-name">{name}</p>
            {toggle === true && (
                <div className="popup-toggle" onClick={handlerToggle}>
                    <span className="p-t-1"></span>
                    <span className="p-t-2"></span>
                </div>
            )}
            {toggle === true && <PopUp data={data} />}
        </div>
    );
};

export default PortfolioSingle;
