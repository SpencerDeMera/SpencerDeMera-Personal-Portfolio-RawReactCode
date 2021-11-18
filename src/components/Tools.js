import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';

export default function Tools() {
    return (
        <div className="toolsSection" id="tools">
            <div className="toolsContainer">
                <div className="toolsTitling">
                    <p className="toolsTitle">TOOLS</p>
                    <p id="toolsDescriptText">As a rising computer science student, I have worked with numerous tools and technologies that range from machine learning to react-native app development. Below are some of my familiar tools and technologies, all of which I posses varrying levels of experience in.</p>
                </div>
                <div className="toolsBody">
                    <div className="toolsGrids">
                        <div className="cats">
                            <div className="catsTitling">
                                <div className="toolsIcon" id="engineer_icon"><i class="fas fa-sitemap"></i></div>
                                <p className="catsTitle">Engineering</p>
                            </div>
                            <div className="toolsList">
                                <p>C/C++</p>
                                <p>Python</p>
                                <p>C#</p>
                                <p>Java</p>
                            </div>
                        </div>
                        <div className="cats">
                            <div className="catsTitling">
                                <div className="toolsIcon" id="front_icon"><i class="fab fa-react"></i></div>
                                <p className="catsTitle">Front-End</p>
                            </div>
                            <div className="toolsList">
                                <p>React.js</p>
                                <p>React-Native</p>
                                <p>JavaScript</p>
                                <p>HTML/CSS</p>
                            </div>
                        </div>
                        <div className="cats">
                            <div className="catsTitling">
                                <div className="toolsIcon" id="back_icon"><i class="fas fa-database"></i></div>
                                <p className="catsTitle">Back-End</p>
                            </div>
                            <div className="toolsList">
                                <p>MySQL</p>
                                <p>Python</p>
                                <p>Redis</p>
                                <p>DynamoDB</p>
                            </div>
                        </div>
                        <div className="cats">
                            <div className="catsTitling">
                                <div className="toolsIcon" id="design_icon"><i class="fas fa-palette"></i></div>
                                <p className="catsTitle">Design</p>
                            </div>
                            <div className="toolsList">
                                <p>Figma</p>
                                <p>Canva</p>
                                <p>Adobe PhotoShop</p>
                                <p>Adobe InDesign</p>
                            </div>
                        </div>
                        <div className="cats">
                            <div className="catsTitling">
                                <div className="toolsIcon" id="tech_icon"><i class="fab fa-ubuntu"></i></div>
                                <p className="catsTitle">Technologies</p>
                            </div>
                            <div className="toolsList">
                                <p>UNIX</p>
                                <p>Git</p>
                                <p>Bash</p>
                                <p>PyTorch</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
