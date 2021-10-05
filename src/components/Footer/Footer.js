import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './Footer.css';

const Footer = () => {
    return (
        <div>
            {/* footer part*/}
            <div className="bg-dark text-white">
                <div className="p-5">

                    <div className="p-5">
                        <h1 className="site-name">LEARNING ZONE</h1>
                        <h6>An E-Learning Platform</h6>
                    </div>

                    {/* social media icons  */}
                    <div className="social-media">
                        <a href="https://www.facebook.com/shoieb.ctg" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon className="mx-4" icon={faFacebookF} size='2x' />
                        </a>
                        <a href="https://twitter.com/Shoieb5" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon className="mx-4" icon={faTwitter} size='2x' />
                        </a>
                        <a href="https://www.linkedin.com/in/shoieb-alam/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon className="mx-4" icon={faLinkedin} size='2x' />
                        </a>
                        <a href="https://www.youtube.com/channel/UCCIDe_dIDwvX1rBK-Yz30VA" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon className="mx-4" icon={faYoutube} size='2x' />
                        </a>
                        <h4 className="pt-3">GET IN TOUCH</h4>
                    </div>

                    <div className="pt-5">
                        <small>Copyright © 2021, All Rights Reserved.</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;