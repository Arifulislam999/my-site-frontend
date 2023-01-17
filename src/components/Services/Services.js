import React from "react";
import "./Services.css";
import { ServicesBox } from "./ServicesBox";
const Services = () => {
    return (
        <div>
            <h2 className="s-title">SERVICES</h2>
            <h1 className="s-title-1">What I Do</h1>
            <p className="services-text">
                I help ambitious businesses like yours generate more profits by
                building awareness, driving web traffic, connecting with
                customers and growing overall sales.
            </p>
            <ServicesBox
                title="UI/UX Solutions"
                q="Learn UX/UI"
                text="Design direction for business. Get your business on the next level. We help to create great experiences.Make clean code and grow up better experience to your team."
            />
            <ServicesBox
                title="Advice To Problem Solving"
                text="Let’s face it, having to deal with problems can really suck, making you feel paralysed and out of control. Whatever the scale of your issues, there are steps you can take to feel more in control. And while you might not always make the right choice, you can learn how to feel comfortable with the decisions you make."
                q="Happy Coading"
            />
            <ServicesBox
                title="Ability To Learn Any Technology"
                text="When i am exploring the idea of learning technology skills, it’s smart to consider which ones will be the most in-demand skills for the future. Tech is a broad field, and there are a lot of interesting directions i can go in. But it’s also a field that evolves rapidly, so i will  want to keep my finger on the pulse of hot technologies and high-demand skills for the next 5 years."
                q="Happy Journey To Learn New Technology."
            />
        </div>
    );
};

export default Services;
