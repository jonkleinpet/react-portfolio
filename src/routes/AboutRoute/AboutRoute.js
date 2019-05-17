import React from "react";
import './styles/about.css';
export default function AboutRoute() {
  return (
    <section className="ani-container about-section">
      <h1 className='learnMore'>About Me</h1>
      <p className='learnMore'>
        I've been brought up with computers around my whole life and enjoy
        working with them or on them. I always had an interest in learning a
        coding language but never took the plunge. One week into JavaScript
        later; I was hooked and never looked back. The best thing about being
        a developer is no matter how many problems you solve today, tommorrow
        brings even more.
      </p>
      <div className='icon-container'>
        <a
          className='learnMore'
          href='https://www.linkedin.com/in/jonathan-kleinpeter-531a29179/'>
          <img className='icon'
            src={ require("../../imgs/linkedin-icon.png") }
            alt='The linkedin icon'
          />
        </a>
        <a className='learnMore' href='https://github.com/jonkleinpet'>
          <img
            className='gitHub'
            src={ require("../../imgs/GitHub_Logo.png") }
            alt='The github icon'
          />
        </a>
      </div>
    </section>
  );
} 