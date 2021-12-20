import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';

export default function Footer() {
    return (
        <div className="footerSection" id="contact">
            <div className="footerContainer">
                <div className="footerTitling">
                    <p className="footerTitle">CONTACT ME</p>
                </div>
                <br />
                <div className="socialsIcons">
                    <a target="_blank" href="https://github.com/SpencerDeMera">
                        <div className="socialsIcon" id="githubb_icon"><i className="fab fa-github"></i></div>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/spencer-demera-939527199/">
                        <div className="socialsIcon" id="linkedin_icon"><i className="fab fa-linkedin-in"></i></div>
                    </a>
                </div>
                <div className="contactArea">
                    <div className="contactGrids">
                        <div className="contactCats">
                            <div className="contactsIcon" id="location_icon"><i class="fas fa-compass"></i></div>
                            <p className="contactHeader">Location</p>
                            <p className="contactText">Fullerton, California</p>
                        </div>
                        <div className="contactCats">
                            <div className="contactsIcon" id="email_icon"><i class="fas fa-envelope-open"></i></div>
                            <p className="contactHeader">Email</p>
                            <p className="contactText">spencer.dem55@gmail.com</p>
                        </div>
                        <div className="contactCats">
                            <div className="contactsIcon" id="phone_icon"><i class="fas fa-mobile-alt"></i></div>
                            <p className="contactHeader">Phone</p>
                            <p className="contactText">(925) 960 - 3437</p>
                        </div>
                    </div>
                </div>
                <br />
                <div className="footerArea">
                    <br />
                    <div className="version-info">
                        <p>Website Version 1.1.0</p>
                    </div>
                    <div className="copyright-info">
                        <p>Copyright &copy; 2021 Spencer DeMera.&nbsp;</p>
                        <p>All Rights Reserved.</p>
                    </div>
                    <br />
                </div>
            </div>
        </div>
    );
}
