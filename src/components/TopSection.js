import React from 'react';
import '../assets/TopSection.css'
import character from '../assets/images/Character.png'
import line from '../assets/images/line.png'
import instagram from '../assets/images/instagram-logo.png'
import discord from '../assets/images/discord-icon.png'
import github from '../assets/images/github-icon.png'

export default function TopSection() {
    return (
        <div>
            <div className='topsection-text'>
                <h1 className='name-is'>Hi, my name is</h1>
                <h1 className='blijonas-text'>Blijonas.</h1>
                <h1 className='create-websites'>I create websites.</h1>
            </div>
            <img id='character' src={character} />
            <div className="scroll-downs">
                <div className="mousey">
                  <div className="scroller"></div>
                </div>
              </div>
            <img id="left-line-img" src={line} />
            <img id="right-line-img" src={line} />
            <h1 id="right-email">blijonasq@gmail.com</h1>
            <a href="https://github.com/Balionelis" target="_blank"><img id="github-img" src={github} /></a>
            <a href="https://www.instagram.com/" target="_blank"><img id="instagram-img" src={instagram} /></a>
            <a href="" target="_blank"><img id="discord-img" src={discord} /></a>
        </div>
    );
}