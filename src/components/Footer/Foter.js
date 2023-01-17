import React from "react";
import "./Foter.css";
import arif from "../../Image/logo.png";
import facebook from "../../Image/facebook.webp";
import instra from "../../Image/instra.webp";
import whatsapp from "../../Image/whatapps.png";
import linkdin from "../../Image/linkdin.png";

const Foter = () => {
    return (
        <div className="footer">
            <div id="animation">
                <footer>
                    <img draggable={false} src={arif} alt="arif" />
                    <h2 className="f-de">Developed by Ariful Islam</h2>
                    <p className="foter-text">
                        make the right data-driven decision that move your
                        success
                    </p>
                    <p className="foter-text">
                        This Page is a portfolio website where you will find my
                        and my activity on web design and development.Here i
                        describe myself properly.
                    </p>

                    <section className="f-social">
                        <h4>Let's chat me!</h4>
                        <div className="f-s-i">
                            <a
                                href="https://www.facebook.com/jsarif.mondol.3/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={facebook} alt="facebook" />
                            </a>
                            <a
                                href="https://www.instagram.com/the_ar_if_07/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={instra} alt="facebook" />
                            </a>

                            <a
                                href="https://www.linkedin.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={linkdin} alt="facebook" />
                            </a>

                            <a
                                href="https://www.whatsapp.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={whatsapp} alt="facebook" />
                            </a>
                        </div>
                    </section>
                </footer>
            </div>
        </div>
    );
};

export default Foter;
