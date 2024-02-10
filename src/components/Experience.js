import React from 'react';
import './Experience.css'
import line from './images/container-lines.png'
import moviefinder from './images/moviefinder.png'
import redirect from './images/share.png'
import github from './images/github-icon.png'

export default function Experience() {
    return (
        <div className="experience-container">
        <h1 id="exp-number">02.</h1>
        <h1 id="exp-text">Some Things I’ve Built</h1>
        <img id="exp-container-line" src={line} />        
        <div id="movie-finder-cont">           
            <img src={moviefinder} />
            <div id="movie-finder-img"></div>
            <div id="zoom-cont">
                <div id="movie-finder-box"></div>
                <h2 id="feat-project">Featured Project</h2>
                <h1 id="feat-movie-finder">Movie Finder</h1>
                <a id="redirect-movie-finder-a" href="https://blijonas.tech/" target="_blank"><img id="redirect-movie-finder-img" src={redirect} /></a>
                <a id="github-movie-finder-a" href="https://github.com/Balionelis/moviefinder" target="_blank"><img id="github-movie-finder-img" src={github} /></a>
                <h2 id="movie-finder-abt">A website that uses the <span id="tmdb">TMDb</span> database to search through movies.</h2>
            </div>   
        </div>
    </div>
    );
}