import React from "react";
import Header from "./components/Header"
import TopSection from "./components/TopSection"
import AboutMe from "./components/AboutMe"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import EndSection from "./components/EndSection"
import "./App.css"
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function App() {
    return (
        <main>
            <Header />
            <TopSection />
            <AboutMe />
            <Experience />
            <Contact />
            <EndSection />
            <SpeedInsights />
        </main>
    );
}