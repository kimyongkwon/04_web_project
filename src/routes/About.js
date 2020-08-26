import React from "react";
import "./About.css";

function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <h1> About Me </h1>
      <span>This is a project created by Kim Yong-kwon. Thank you!</span>
      <div className="about__data">
        <a
          className="about__link"
          href="https://github.com/powderBlue91"
          target="_blank"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
      <span>
        <b>Click me!!!</b>
      </span>
    </div>
  );
}

export default About;
