import React from 'react';
import './AboutMe.css'
import hex from './images/Aboutme-hex.png'
import line from './images/container-lines.png'

export default function AboutMe() {
    return (
        <div className="about-container">
        <img id="about-cont-hex" src={hex} />
        <div id="abt-cont-about">
            <h1 id="abt-number">01.</h1>
            <h1 id="abt-text">About me</h1>
            <img id="abt-container-line" src={line} />
        </div>
        <div id="abt-cont-text">
            <h1>Hello! My name is Blijonas and I enjoy creating things that live on
                the internet. My interest in web development started back in 2021
                when I decided to try creating a portfolio website — turns out
                creating it thought me a lot about HTML & CSS!
            </h1>
        </div>
        <div id="abt-cont-working">
            <h1>Here are a few technologies I've been working with recently:</h1>
            <h2>▸ Javascript ▸ HTML ▸ CSS ▸ Skript ▸ Python</h2>
        </div>
    </div>
    );
}