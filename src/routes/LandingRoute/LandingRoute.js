import React from 'react';
import './styles/landing.css';
export default function LandingRoute() {
  return (
    <section className="ani-container landing-section">
      <h1 className="landing">Jonathan Kleinpeter</h1>
        <p className="landing">
          I am a web developer proficent in JavaScript, CSS, and HTML who currently lives in Houston Texas. An unshameful coffee enthusiast, cat lover and gamer. My favorite conversations always inculde new technologies and discussing there implications for the future. I relish a challenge and having a new problem to solve excites me. Feel free to contact me via email and view some of my work.
        </p>
      <a className="landing" href="mailto:joklein341@gmail.com">Email Me</a>
    </section>
  )
}