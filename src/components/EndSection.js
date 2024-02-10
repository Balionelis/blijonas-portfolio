import React from 'react';
import './EndSection.css'
import fork from './images/github-fork.png'
import watch from './images/github-watch.png'

function GithubFetch() {
    const apiUrl = 'https://api.github.com/repos/balionelis/moviefinder';

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const watchingElement = document.getElementById('watching');
        const forksElement = document.getElementById('forks');

        watchingElement.textContent = data.subscribers_count;
        forksElement.textContent = data.forks_count;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

export default function EndSection() {
    GithubFetch()
    return (
        <div className="end-container">
        <a href="https://github.com/Balionelis/moviefinder" target="_blank">
            <h2 id="text">Designed & Built by Blijonas</h2>
            <div id="icons">
                <img id="github-watch" src={watch} />
                <img id="github-fork" src={fork} />
                <h2 id="watching"></h2>
                <h2 id="forks"></h2>
            </div>
        </a>
    </div>
    );
}