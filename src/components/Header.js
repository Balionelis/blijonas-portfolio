import React from "react";
import "./header.css";
import hex from './images/B-Hexagonn.png'

export default function Header() {
    return (
        <div className="container">
            <img id="hex" src={hex} alt="Hexagon" />
            <div className="header-container">
                <h1 className="header-number">01.</h1><h1 className="header-text">About</h1>
                <h1 className="header-number">02.</h1><h1 className="header-text">Experience</h1>
                <h1 className="header-number">03.</h1><h1 className="header-text">Contact</h1>
            </div>
        </div>
    );
}