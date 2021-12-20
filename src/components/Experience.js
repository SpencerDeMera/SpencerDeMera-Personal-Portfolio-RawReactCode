import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';

export default function Experience() {
    return (
        <div className="experiencesSection" id="experiences">
            <div className="experiencesContainer">
                <div className="innerExperiencesContainer">
                    <div className="experiencesTitling">
                        <p className="experiencesTitle">WORK EXPERIENCE</p>
                    </div>
                    <div className="experiencesGrids">
                        <div className="experiences">
                            <div className="experienceInner">
                                <p className="experienceIndivTitle">Webmaster / Web-Developer</p>
                                <div className="experiencesBar"></div>
                                <p className="experiencesDescriptText">
                                    Developed and Rebuilt entire website with HTML, CSS, and JavaScript to accommodate chapter needs. Maintained chapter website while adding additional features to better represent our chapter. Expanded website functionality to properly format for use on multiple devices. Worked with team of students on various large projects during development.
                                </p>
                                <p className="stackTitle">Stack</p>
                                <div className="stackGrid">
                                    <div className="innerStackGrid">
                                        <p className="stackTools">Figma</p>
                                        <p className="stackTools">HTML/CSS</p>
                                        <p className="stackTools">JavaScript</p>
                                    </div>
                                    <div className="innerStackGrid-lower">
                                        <p className="stackTools">"Source Available Above"</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="experiences">
                            <div className="experienceInner">
                                <p className="experienceIndivTitle">Summer Research Assistant</p>
                                <div className="experiencesBar"></div>
                                <p className="experiencesDescriptText">
                                    Conducted research for the National Science Foundation through Cal State Fullerton's ASSURE-US Program. Attempted to reduce redundancy and load of machine learning on GPUs and accelerate their performance by using YolOX. Aim to train most efficient and accurate model for our overall project so as not to have exuberant computational requirements.
                                </p>
                                <p className="stackTitle">Stack</p>
                                <div className="stackGrid">
                                    <div className="innerStackGrid">
                                        <p className="stackTools">Python</p>
                                        <p className="stackTools">PyTorch</p>
                                        <p className="stackTools">Weights&Biases</p>
                                    </div>
                                    <div className="innerStackGrid-lower">
                                        <p className="stackTools">Roboflow</p>
                                        <p className="stackTools">YolOX</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="experiences">
                            <div className="experienceInner">
                                <p className="experienceIndivTitle">Undergrad Research Assistant</p>
                                <div className="experiencesBar"></div>
                                <p className="experiencesDescriptText">
                                    Funded by Department of Defense to optimize real time image processing for a self-navigating vehicle with a team of undergraduate and graduate students. Experimented with the PyTorch / Anaconda based machine learning system YoLOv5 to train and identify static and moving people and other objects in images and videos compiled by Stanford University. 
                                </p>
                                <p className="stackTitle">Stack</p>
                                <div className="stackGrid">
                                <div className="innerStackGrid">
                                        <p className="stackTools">Python</p>
                                        <p className="stackTools">PyTorch</p>
                                        <p className="stackTools">Weights&Biases</p>
                                    </div>
                                    <div className="innerStackGrid-lower">
                                        <p className="stackTools">Roboflow</p>
                                        <p className="stackTools">YolOv5</p>
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
