import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../App.css';

export default function PageHeader() {
    const [navbar, setNavBar] = useState(false);

    const showNavBar = () => setNavBar(!navbar);

    // Closes nav onClick of Title iff navbar == true
    const closeNavFromTitle = () => {
        if (showNavBar === false) {}
        else { 
            setNavBar(false);
        }
    }

    return (
        <header className="head">
            <nav className="navbar">
                <div className="navbarContainer">
                    <a href="#home" id="navbar-title" onClick={closeNavFromTitle}>S P E N C E R .</a>
                    <div className="mobile-menu" id="navbar-toggle" onClick={showNavBar}>
                        {/* Inline style to change menu to close menu */}
                        <span className="bar" style={navbar ? {transform: 'translateY(11px) rotate(45deg)'} : {}}></span>
                        <span className="bar" style={navbar ? {opacity: 0} : {}}></span>
                        <span className="bar" style={navbar ? {transform: 'translateY(-11px) rotate(-45deg)'} : {}}></span>
                    </div>
                    <ul className={navbar ? "navbar-menu active" : "navbar-menu"}>
                        <li className="navbarItem">
                            <a href="#home" className="navbarLinks" id="home-page" onClick={showNavBar}>Home</a>
                        </li>
                        <li className="navbarItem">
                            <a href="#about" className="navbarLinks" id="about-page" onClick={showNavBar}>About</a>
                        </li>
                        <li className="navbarItem">
                            <a href="#projects" className="navbarLinks" id="projects-page" onClick={showNavBar}>Projects</a>
                        </li>
                        <li className="navbarItem">
                            <a href="#experiences" className="navbarLinks" id="experience-page" onClick={showNavBar}>Work</a>
                        </li>
                        <li className="navbarItem">
                            <a href="#tools" className="navbarLinks" id="tools-page" onClick={showNavBar}>Tools</a>
                        </li>
                        <li className="navbarItem">
                            <a href="#contact" className="navbarLinks" id="contact-page" onClick={showNavBar}>Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
