import React from "react";
import "../assets/header.css";
import hex from '../assets/images/B-Hexagonn.png'

export default function Header() {
    return (
        <div className="container">
            <a href="https://blijonas-portfolio-blijonas-projects.vercel.app/" target="_blank"><img id="hex" src={hex} alt="Hexagon" /></a>
            <div className="header-container">
                <h1 className="header-number">01.</h1><h1 className="header-text">About</h1>
                <h1 className="header-number">02.</h1><h1 className="header-text">Experience</h1>
                <h1 className="header-number">03.</h1><h1 className="header-text">Contact</h1>
            </div>
        </div>
    );
}