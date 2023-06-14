import React from 'react'
import { useNavigate } from 'react-router-dom';
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedin,
    FaGithubAlt,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {


    const navigate  =  useNavigate()

    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    This project is made by Tarang Rastogi
                    Who is an aspiring fullstack developer
                    and currently looking for a job.
                </div>
                <div className="socialIcons">
                    <span className="icon">
                    <a className='footer-icon' href="https://github.com/TechnoDiktator"><FaGithubAlt /></a>
                    </span>
                    <span className="icon">
                        <a className='footer-icon' href="https://www.linkedin.com/in/tarang-rastogi-667397179/"><FaLinkedin/></a>
                    </span>
                    <span className="icon">
                    <a className='footer-icon' href="https://github.com/TechnoDiktator"><FaFacebookF /></a>
                    </span>
                    <span className="icon">
                    <a className='footer-icon' href="https://www.linkedin.com/in/tarang-rastogi-667397179/"><FaInstagram /></a>
                    </span>

                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;

