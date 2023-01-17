import React from "react";
import "./Nav.css";
const MenuToggle = ({ toggle }) => {
    return (
        <div className={toggle}>
            <div className="bar-box-head">
                <div className="bar-box"></div>
            </div>
            <div className="M">
                <h3>Menu</h3>
            </div>
            <div className="bar">
                <span className="menu-toggle-1"></span>
                <span className="menu-toggle-2"></span>
                <span className="menu-toggle-3"></span>
            </div>
        </div>
    );
};

export default MenuToggle;
