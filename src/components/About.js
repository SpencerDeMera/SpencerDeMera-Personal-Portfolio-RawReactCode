import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import portraitImage from '../assets/images/SpencerPortrait(2).jpg';

export default function About() {
    return (
        <div className="aboutSection" id="about">
            <div className="aboutContainer">
                <div className="aboutTitling">
                    <p className="aboutTitle">ABOUT ME</p>
                </div>
                <div className="grids">
                    <div className="about">
                        <div className="aboutText">
                            <br/>
                            <p className="aboutTextContent">
                                I am presently in my fourth year of study in computer science at California State University, Fullerton. Hailing the San Francisco Bay Area, I am currently working on Full Stack and Mobile projects.  My development journey started in Spring 2021 when I became Webmaster of my schools Theta Tau chapter. From then on, I have been deeply enthrawled with web and mobile development.
                            </p>
                            <br/>
                            <p className="aboutTextContent">
                                Learning is something I truly enjoy and hope to continue doing into the forseeable future. From mobile apps to web apps to static websites, my portfolio is and will always continue to grow as I learn and develop my skills.
                            </p>
                            <br/>
                        </div>
                    </div>
                    <div className="portraitContainer">
                        <div className="portrait">
                            <div id="portraitImg" href="#"><img src={portraitImage} alt="Portrait of Spencer DeMera (8-13-2021)"></img></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
