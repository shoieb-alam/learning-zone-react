import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import './Footer.css';
const Footer = () => {
    return (
        <div>
            {/* Footer */}
            <div className="bg-dark text-white">
                <div className="p-5">
                    <h1 className="pt-3">LEARNING ZONE</h1>
                    <br />
                    <br />
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
                    </div>
                    <br />
                    <br />
                    <br />
                    <p>Copyright © 2021, All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;