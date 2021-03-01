import React from 'react';

import {isMobile} from 'react-device-detect'

import Logo from "../../assets/images/logo.png";
import Twitter from "../../assets/images/Twitter.png";
import Facebook from "../../assets/images/Facebook.png";
import Linkedin from "../../assets/images/Linkedin.png";


const Footer = () => {
    return (
        <footer>
            <div className="wrap-footer">
            {
                !isMobile ?
                    <> 
                        <div className="footer-logo">
                            <img src={Logo} alt="Logo"/>
                        </div>
                        <div className="footer-social-medias">
                            <img src={Twitter} alt="Twitter Logo"/> 
                            <img src={Facebook} alt="Facebook Logo"/> 
                            <img src={Linkedin} alt="Linkedin Logo"/> 
                        </div>
                        <div className="footer-copyrights">
                            <p>Copywright 2020 Bella Onojie.com</p>
                        </div>
                    </>
                :
                    <>
                        <div className="footer-social-medias">
                                <img src={Twitter} alt="Twitter Logo"/> 
                                <img src={Facebook} alt="Facebook Logo"/> 
                                <img src={Linkedin} alt="Linkedin Logo"/> 
                            </div>
                            <div className="footer-copyrights">
                                <p>Just type what's on your mind and we'll</p>
                            </div>
                    </>
            }
            </div>
        </footer>
    )
}

export default Footer