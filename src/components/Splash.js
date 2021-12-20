import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import splashImage from '../assets/images/splashImage.png';

export default function Splash() {
    return (
        <div className="sectionContainer" id="home">
            <div className="splash">
                <div id="splashImg" href="#"><img src={splashImage} alt="San Francisco Apartment Taken by Spencer DeMera"></img></div>
                <div id="overlay"></div>
            </div>
            <div className="splashContainer">
                <div className="splashBody">
                    <div className="splashText">
                        <div className="titling">
                            <p id="helloText">Hello, I'm</p>
                            <p id="nameText">Spencer DeMera</p>
                        </div>
                        <div className="accentTitling">
                            <p className="accentText">Computer Science Student</p>
                            <p className="accentText">From Livermore, CA</p>
                        </div>
                        <div className="resumeDownloadBtn">
                            <div className="cvBtn">
                                <a id="cvText" href="assets/SpencerDeMera-Resume.pdf" download>Resume / CV</a>
                            </div>
                        </div>
                    </div>
                    <div className="socialButtons">
                        <div className="LinksContainer">
                            <div className="linksButton git">
                                <a target="_blank" href="https://github.com/SpencerDeMera">
                                    <div className="linksIcon" id="git_icon"><i className="fab fa-github"></i></div>
                                    <span id="git_span">GitHub</span>
                                </a>
                            </div>
                            <div className="linksButton linked">
                                <a target="_blank" href="https://www.linkedin.com/in/spencer-demera-939527199/">
                                    <div className="linksIcon" id="linked_icon"><i className="fab fa-linkedin-in"></i></div>
                                    <span id="linked_span">LinkedIn</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="watermarkContainer">
                <p id="watermark">Photo by Spencer DeMera</p>
            </div>
        </div>
    );
}
