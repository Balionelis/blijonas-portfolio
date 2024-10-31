import React from 'react';
import '../assets/Contact.css'

export default function Contact() {
    return (
        <div className="contact-container">
            <h2 id="whats-next">03. What’s Next?</h2>
            <h1 id="get-in-touch">Get In Touch</h1>
            <h2 id="contact-text">You can get in contact with me anytime</h2>
            <a onClick={() => alert("Get in touch with me:\nGmail: blijonasq@gmail.com\nDiscord: blijonas")}><button>Get In Touch</button></a>
        </div>        
    );
}