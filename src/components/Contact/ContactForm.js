import React, { useState } from "react";
import { usePostUserMutation } from "../../redux/Feature/portfolio/api/apiSlice";
import { validateEmail } from "../../utils/emailChecker";
import "./Contact.css";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");
    const [nameCondition, setNameCondition] = useState(false);
    const [emailCondition, setEmailCondition] = useState(false);
    const [textArea, setTextCondition] = useState(false);
    const [emailCheck, setEmailCheck] = useState(false);
    const [success, setSuccess] = useState(false);
    const [postUser] = usePostUserMutation();
    const handlerSubmit = () => {
        if (name.length === 0) {
            setNameCondition(true);
            setEmailCondition(false);
            setEmailCheck(false);
            setTextCondition(false);
            setTimeout(() => {
                setNameCondition(false);
            }, 2000);
        } else if (email.length === 0) {
            setEmailCondition(true);
            setEmailCheck(false);
            setNameCondition(false);
            setTextCondition(false);
            setTimeout(() => {
                setEmailCondition(false);
            }, 2000);
        } else if (text.length === 0) {
            setTextCondition(true);
            setEmailCheck(false);
            setNameCondition(false);
            setEmailCondition(false);
            setTimeout(() => {
                setTextCondition(false);
            }, 2000);
        } else if (!validateEmail(email)) {
            setEmailCheck(true);
            setTimeout(() => {
                setEmailCheck(false);
            }, 2000);
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

    return (
        <div className="form-contact">
            <h2 className="c-me">CALL ME</h2>
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
                            <p className="c-name">Your fill is empty!</p>
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
                            <p className="c-name">Your fill is empty!</p>
                        )}
                        {emailCheck && (
                            <p className="c-name">Your email is't valid.!</p>
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
                            <p className="c-text-a">Your fill is empty!</p>
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
                        <a href="#/submit">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Submit
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
