import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./cousor.css";
const Cursor = () => {
    const [mouse, setMouse] = useState({
        x: 0,
        y: 0,
    });
    const [dot, setDot] = useState({
        xx: 0,
        yy: 0,
    });
    useEffect(() => {
        const mouseMove = (e) => {
            setMouse({
                x: e.clientX - 10,
                y: e.clientY - 10,
            });
            setDot({
                x: e.clientX - 10,
                y: e.clientY - 10,
            });
        };
        window.addEventListener("mousemove", mouseMove);
        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);
    const variants = {
        default: {
            x: mouse.x,
            y: mouse.y,
            xx: dot.x,
            yy: dot.y,
        },
    };
    return (
        <div>
            <motion.div
                className="cursor"
                variants={variants}
                animate="default"
            />
            <motion.div className="dot" variants={variants} animate="default" />
        </div>
    );
};

export default Cursor;
