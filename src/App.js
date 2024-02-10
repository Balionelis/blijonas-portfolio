import React from "react";
import Header from "./components/Header"
import TopSection from "./components/TopSection"
import AboutMe from "./components/AboutMe"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import EndSection from "./components/EndSection"
import "./App.css"

export default function App() {
    return (
        <main>
            <Header />
            <TopSection />
            <AboutMe />
            <Experience />
            <Contact />
            <EndSection />
        </main>
    );
}