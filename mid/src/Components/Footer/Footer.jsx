import React from "react";
import "./Footer.css";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="footer">
            <hr></hr>
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                        Here, you can post whatever you want
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contacts</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            Ulica Tole bi, 59
                            050000/A05H1T2, Almaty
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">
                            Phone: +7 777 777 77 77
                        </div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">
                            Email: twitter@gmail.com
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">Home </span>
                    <span className="text">Posts </span>
                    <span className="text">Recomendations </span>
                    <span className="text">My posts </span>
                    <span className="text">Followers </span>
                    <span className="text">Subscribed </span>
                </div>
                <div className="col">
                    <div className="title">Pages </div>
                    <span className="text">Home </span>
                    <span className="text">About </span>
                    <span className="text">Privacy Policy </span>
                    <span className="text">Contact Us </span>
                </div>
                <div className="bottom-bar">
                    <div className="bottom-bar-content">
                        <div className="text">
                            TWITTER 2023 CREATED BY VISUAL STUDIO CODE, CODED BY FROMSOFTWARE.  
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;