// import React from "react";
// import "./Comentary.css";
// import ComentaryBox from "./ComentaryBox";
// const Comentary = () => {
//     return (
//         <div>
//             <h1 className="com-text">
//                 Some People Are Satisfying My Activity.
//             </h1>
//             <div className="com-box-item">
//                 <div className="digloag">
//                     <ComentaryBox
//                         text="Design direction for business. Get your business on the next level. We help to create great experiences.Make clean code and grow up better experience to your team."
//                         name="Ariful Islam"
//                     />
//                 </div>
//                 <div className="digloag">
//                     <ComentaryBox
//                         text="Design direction for business. Get your business on the next level. We help to create great experiences.Make clean code and grow up better experience to your team."
//                         name="Ariful Islam"
//                     />
//                 </div>
//                 <div className="digloag">
//                     <ComentaryBox
//                         text="Design direction for business. Get your business on the next level. We help to create great experiences.Make clean code and grow up better experience to your team."
//                         name="Ariful Islam"
//                     />
//                 </div>
//                 <div className="digloag">
//                     <ComentaryBox
//                         text="Design direction for business. Get your business on the next level. We help to create great experiences.Make clean code and grow up better experience to your team."
//                         name="Ariful Islam"
//                     />
//                 </div>
//                 <div className="digloag">
//                     <ComentaryBox
//                         text="Design direction for business. Get your business on the next level. We help to create great experiences.Make clean code and grow up better experience to your team."
//                         name="Ariful Islam"
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Comentary;

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ComentaryBox from "./ComentaryBox";
import "./Comentary.css";
export default class Comentary extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 10000,
            autoplaySpeed: 2000,
            cssEase: "linear",
        };
        return (
            <div className="com-main">
                <h1 className="com-text">
                    Some People Are Satisfying My Activity.
                </h1>
                <Slider {...settings}>
                    <div className="digloag">
                        <ComentaryBox
                            text="Design direction for business. Get your business on the next level. We help to create great experiences.Make clean code and grow up better experience to your team."
                            name="Alamgir Hasan"
                        />
                    </div>
                    <div className="digloag">
                        <ComentaryBox
                            text="Good Person and dedicated learner forever.Have a skill to learn new technology early."
                            name="Niloy Ahamed"
                        />
                    </div>
                    <div className="digloag">
                        <ComentaryBox
                            text="As a human being,doing good works is right time.I think he is a soft hearted person. "
                            name="Sagor Ahamed"
                        />
                    </div>
                    <div className="digloag">
                        <ComentaryBox
                            text="As per my knowledge work regularly and try to do the work in time.As far as I know, he does not have the habit of keeping a job."
                            name="Sojib Khan"
                        />
                    </div>
                </Slider>
            </div>
        );
    }
}
