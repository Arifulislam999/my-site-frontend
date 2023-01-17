// import React from "react";
// import "./Technology.css";
// import TechonologhBox from "./TechonologhBox";
// import bootstrtp from "../../Image/bootstrap.png";
// import tailwind from "../../Image/tailwind.png";
// import js from "../../Image/javascript.png";
// import materialUI from "../../Image/materialUI.png";
// import redux from "../../Image/redux.jpg";
// import react from "../../Image/react.png";
// import html from "../../Image/html.png";
// import css from "../../Image/css.png";
// const Technology = () => {
//     return (
//         <div className="techonology">
//             <h2 className="tec-h2">Technology</h2>
//             <h1 className="tec-h1">Satisfying Technology Idea</h1>
//             <h2 className="compoents-s">Markup Language For Ever</h2>
//             <div className="t-fl">
//                 <TechonologhBox img={html} />
//                 <TechonologhBox img={css} />
//                 <TechonologhBox img={materialUI} />
//                 <TechonologhBox img={bootstrtp} />
//                 <TechonologhBox img={tailwind} />
//                 <TechonologhBox img={js} />
//                 <TechonologhBox img={redux} />
//                 <TechonologhBox img={react} />
//             </div>
//         </div>
//     );
// };

// export default Technology;
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";

import "./Technology.css";
import TechonologhBox from "./TechonologhBox";
import bootstrtp from "../../Image/bootstrap.png";
import tailwind from "../../Image/tailwind.png";
import js from "../../Image/javascript.png";
import materialUI from "../../Image/materialUI.png";
import redux from "../../Image/redux.jpg";
import react from "../../Image/react.png";
import html from "../../Image/html.png";
import css from "../../Image/css.png";

export default class Technology extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true,
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        };

        return (
            <div className="techonology">
                <h2 className="tec-h2">Technology</h2>
                <h1 className="tec-h1">Satisfying Technology Idea</h1>

                <Slider ref={(slider) => (this.slider = slider)} {...settings}>
                    <div id="img-sli">
                        <TechonologhBox img={html} />
                    </div>
                    <TechonologhBox img={css} />
                    <TechonologhBox img={materialUI} />
                    <TechonologhBox img={bootstrtp} />
                    <TechonologhBox img={tailwind} />
                    <TechonologhBox img={js} />
                    <TechonologhBox img={redux} />
                    <TechonologhBox img={react} />
                </Slider>
            </div>
        );
    }
}
