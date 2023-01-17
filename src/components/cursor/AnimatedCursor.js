import React from "react";
import AnimatedCursor from "react-animated-cursor";

const AnimatedCursorPointer = () => {
    return (
        <div>
            <AnimatedCursor
                innerSize={5}
                outerSize={10}
                color="193, 11, 111"
                outerAlpha={0.5}
                innerScale={0.75}
                outerScale={5}
                hasBlendMode={true}
                outerStyle={{
                    border: "1.5px solid yellow",
                }}
                innerStyle={{
                    backgroundColor: "rgb(248 113 113)",
                }}
                clickables={[
                    "a",
                    'input[type="text"]',
                    'input[type="email"]',
                    'input[type="number"]',
                    'input[type="submit"]',
                    'input[type="image"]',
                    "label[for]",
                    "select",
                    "textarea",
                    "button",
                    ".link",
                    "img",
                ]}
            />
        </div>
    );
};

export default AnimatedCursorPointer;
