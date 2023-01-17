import React, { useState } from "react";
import ArifPic from "../../Image/Arif-p.jpg";
import "./ContactMe.css";
import "../Contact/Contact.css";
import { usePostUserMutation } from "../../redux/Feature/portfolio/api/apiSlice";
import { validateEmail } from "../../utils/emailChecker";
import facebook from "../../Image/facebook.webp";
import instra from "../../Image/instra.webp";
import whatsapp from "../../Image/whatapps.png";
import linkdin from "../../Image/linkdin.png";
import github from "../../Image/github.png";
import { useNavigate } from "react-router-dom";

const ContactMe = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");
    const [nameCondition, setNameCondition] = useState(false);
    const [emailCondition, setEmailCondition] = useState(false);
    const [textArea, setTextCondition] = useState(false);
    const [emailCheck, setEmailCheck] = useState(false);
    const [success, setSuccess] = useState(false);
    const [postUser] = usePostUserMutation();
    const navigate = useNavigate();

    const handlerSubmit = () => {
        if (!validateEmail(email)) {
            setEmailCheck(true);
            setTimeout(() => {
                setEmailCheck(false);
            }, 2000);
        } else if (name.length === 0) {
            setNameCondition(true);
            setEmailCondition(false);
            setEmailCheck(false);
            setTextCondition(false);
        } else if (email.length === 0) {
            setEmailCondition(true);
            setEmailCheck(false);
            setNameCondition(false);

            setTextCondition(false);
        } else if (text.length === 0) {
            setTextCondition(true);
            setEmailCheck(false);
            setNameCondition(false);
            setEmailCondition(false);
        } else {
            setNameCondition(false);
            setEmailCondition(false);
            setTextCondition(false);
            setEmailCheck(false);

            postUser({
                name,
                email,
                description: text,
            });
            setEmail("");
            setName("");
            setText("");
            setSuccess(true);
            setTimeout(() => {
                setSuccess(false);
            }, 3000);
        }
    };
    const handlerHome = () => {
        navigate("/");
    };
    return (
        <div className="contact-me-personel">
            <div className="c-personel">
                <img draggable={false} src={ArifPic} alt="arif" />
                <div className="img-replection" onClick={handlerHome}></div>
            </div>
            <div className="c-contact">
                <div className="form-contact">
                    <div className="login-box">
                        <h2>Describe</h2>
                        <form>
                            <div className="user-box">
                                <input
                                    type="text"
                                    name=""
                                    required=""
                                    value={name}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                        setNameCondition(false);
                                    }}
                                />

                                {nameCondition && (
                                    <p className="c-name">
                                        Your fill is empty!
                                    </p>
                                )}
                                <label>Name</label>
                            </div>
                            <div className="user-box">
                                <input
                                    type="email"
                                    name=""
                                    required=""
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        setEmailCondition(false);
                                    }}
                                />
                                {emailCondition && (
                                    <p className="c-name">
                                        Your fill is empty!
                                    </p>
                                )}
                                {emailCheck && (
                                    <p className="c-name">
                                        Your email is not valid.!
                                    </p>
                                )}

                                <label>Email</label>
                            </div>
                            <div className="user-box">
                                <textarea
                                    className="text-area"
                                    id="story"
                                    name="story"
                                    rows="4"
                                    required
                                    cols="33"
                                    value={text}
                                    onChange={(e) => {
                                        setText(e.target.value);
                                        setTextCondition(false);
                                    }}
                                ></textarea>
                                {textArea && (
                                    <p className="c-text-a">
                                        Your fill is empty!
                                    </p>
                                )}

                                <label htmlFor="story" id="t-tex">
                                    Tell me your votiveness:
                                </label>
                            </div>
                            {success && (
                                <div className="success">
                                    <p>Success Submit!</p>
                                </div>
                            )}
                            <div onClick={handlerSubmit}>
                                <a href="#/">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Submit
                                </a>
                            </div>
                            <div className="hidden-s">
                                <div className="social-media   social-m-contact">
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

                                    <a
                                        href="https://github.com/Arifulislam999"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img src={github} alt="facebook" />
                                    </a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;
