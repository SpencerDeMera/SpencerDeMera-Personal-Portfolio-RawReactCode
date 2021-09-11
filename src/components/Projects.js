import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import portfolioImage from '../assets/projectsImages/PersonalPortfolio.png';
import stormyWeatherApp from '../assets/projectsImages/StormyWeather.png';
import TTSite from '../assets/projectsImages/ttSite.png';

export default function Projects() {
    return (
        <div className="projectsSection" id="projects">
            <div className="projectsContainer">
                <div className="innerProjectsContainer">
                    <div className="projectsTitling">
                        <p className="projectsTitle">PROJECTS</p>
                    </div>
                    <div className="projectsGrids">
                        <div className="projects">
                            <div id="projectImg" href="#"><img src={portfolioImage} alt="Portrait of Spencer DeMera (8-13-2021)"></img></div>
                            <div className="projectInner">
                                <p className="projectIndivTitle">My Portfolio</p>
                                <div className="projectsBar"></div>
                                <p className="projectsDescriptText">
                                    The site's main structure was primarily built out in vanilla HTML, CSS, and Javascript within React.js, which was used for better overall structure. After initial designing in Figma and construction in VS Code, the site is currently hosted on GitHub Pages.
                                </p>
                                <p className="stackTitle">Stack</p>
                                <div className="stackGrid">
                                    <div className="innerStackGrid">
                                        <p className="stackTools">Figma</p>
                                        <p className="stackTools">JavaScript</p>
                                        <p className="stackTools">React.js</p>
                                    </div>
                                </div>
                                <div className="codebuttonContainer">
                                    <div className="codeButton">
                                        <a className="codeBtn" target="_blank" href="https://github.com/SpencerDeMera/SpencerDeMera.github.io">Source Code</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="projects">
                            <div id="projectImg" href="#"><img src={stormyWeatherApp} alt="StormyWeather Build 0.5.2 Beta"></img></div>
                            <div className="projectInner">
                                <p className="projectIndivTitle">StormyWeather App</p>
                                <div className="projectsBar"></div>
                                <p className="projectsDescriptText">
                                    StormyWeather is my own take on a weather app that is simple and clean while still providing detailed hourly and daily forecasts. This app was developed with the OpenWeather OneCall™ API to ensure simple and accurate atmospheric weather forecast data. This app is currently in developer beta for Android and later iOS.
                                </p>
                                <p className="stackTitle">Stack</p>
                                <div className="stackGrid">
                                    <div className="innerStackGrid">
                                        <p className="stackTools">Figma</p>
                                        <p className="stackTools">OpenWeather™&nbsp;API</p>
                                        <p className="stackTools">Figma</p>
                                        <p className="stackTools"></p>
                                        <p className="stackTools">React-Native</p>
                                    </div>
                                </div>
                                <div className="codebuttonContainer">
                                    <div className="codeButton">
                                        <a className="codeBtn" target="_blank" href="https://github.com/SpencerDeMera">Source Code</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="projects">
                            <div id="projectImg" href="#"><img src={TTSite} alt="CSUF Theta Tau Phi Epsilon Chapter Website"></img></div>
                            <div className="projectInner">
                                <p className="projectIndivTitle">CSUF Theta Tau Website</p>
                                <div className="projectsBar"></div>
                                <p className="projectsDescriptText">
                                    This is the official website of Cal State Fullerton's Theta Tau Chapter, Phi Epsilon. This site was theorized and designed by a team of Phi Epsilon actives lead by myself over the course of the Spring 2021 semester. The majority of the site was built by myself using vanilla HTML, CSS, Javascript and (in the future) PHP.
                                </p>
                                <p className="stackTitle">Stack</p>
                                <div className="stackGrid">
                                    <div className="innerStackGrid">
                                        <p className="stackTools">Figma</p>
                                        <p className="stackTools">PHP</p>
                                        <p className="stackTools">JavaScript</p>
                                        <p className="stackTools"></p>
                                        <p className="stackTools">HTML/CSS</p>
                                    </div>
                                </div>
                                <div className="codebuttonContainer">
                                    <div className="codeButton">
                                        <a className="codeBtn" target="_blank" href="https://github.com/CSUFThetaTau-web/CSUFThetaTau-web.github.io">Source Code</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
