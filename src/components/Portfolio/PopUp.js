import React from "react";
import "./popup.css";
export const PopUp = ({ data }) => {
    const { image, tags, name, desc } = data;

    return (
        <>
            {
                <div className="popUp">
                    <div className="pop-i">
                        <p className="t-p">
                            {tags.map((tag) => tag).join(", ")}
                        </p>
                        <h3 className="t-n">{name}</h3>
                        <img draggable={false} src={image} alt="árif" />
                        <p className="p-d">{desc}</p>
                    </div>
                </div>
            }
        </>
    );
};
