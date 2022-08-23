import React from "react";
import "./About.css";
export default function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <span className="about-title">About Me</span>
        <h3>Why am a good choice</h3>
      </div>
      <div className="about-main">
        <div className="about-image"></div>
        <div className="about-text">
          <div className="about-text-top">
            <p>I am a front-end web developer with more than two years knowledge of React Js, JavaScript, HTML, and CSS. I also have the basics of Java and python. I have enough knowledge of algorithms.I am a fast learner willing to work in a team to build web applications. I am also ready to learn more technologies as they emerge.</p>
          </div>
          <div className="about-text-list"></div>
        </div>
      </div>
    </div>
  );
}
