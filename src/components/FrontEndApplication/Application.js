import React from "react";
import "./Application.css";
import ApplicationSingle from "./ApplicationSingle";
import img_1 from "../../Image/frontend-1.png";
import img_2 from "../../Image/frontend-2.png";
import img_3 from "../../Image/frontend-3.png";
import img_4 from "../../Image/frontend-4.png";
import img_5 from "../../Image/frontend-5.png";

function Application() {
    return (
        <div className="project-frontend">
            <h1 className="front-end-h1">
                MY SOME RESPONSIVE FRONTEND APPLICATION.
            </h1>

            <div className="Application">
                <a
                    href="https://portfolio-v-1-eta.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <ApplicationSingle img={img_1} />
                </a>
                <a
                    href="https://coffee-shop-apg18litb-arifulislam999.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <ApplicationSingle img={img_2} />
                </a>
                <a
                    href="https://blog-site-assignment.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <ApplicationSingle img={img_3} />
                </a>
                <a
                    href="https://w-3-school-demo.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <ApplicationSingle img={img_4} />
                </a>
                <a
                    href="https://my-portfolio-3o9e.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <ApplicationSingle img={img_5} />
                </a>
            </div>
        </div>
    );
}

export default Application;
