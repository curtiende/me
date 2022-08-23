import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="prof-container">
      <div className="prof-parent">
        <div className="prof-details">
          <div className="columns">
            <div className="columns-icon">
              <a href="https://www.facebook.com/curtisotiende">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.linkedIn.com/curtisotiende">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://www.youtube.com/curtisotiende">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="https://www.twitter.com/curtisotiende">
                <i className="fa fa-twitter-square"></i>
              </a>
            </div>
          </div>
          <div className="prof-details-name">
            <span className="primary-text">
              {""}
              Hello, I am <span className="highlighted-text"> Curtis</span>
            </span>
          </div>
          <div className="prof-details-role">
            <span className="primary-text">
              {""}
              <h1>
                {""}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Front-End ",
                    2000,
                    "Back-End",
                    2000,
                    "Javascript",
                    2000,
                    "Responsive",
                    2000,
                    "React developer",
                    2000,
                  ]}
                />
              </h1>
              <span className="prof-role-tag">
                Always updated with new technologies
              </span>
            </span>
          </div>
          <div className="prof-options">
            <button className="btn primary-btn">
              {""}Hire Me{""}
            </button>
            <a href="curtis.pdf" download="curtis otiende.pdf">
              <button className="btn highlighted-btn">Resume</button>
            </a>
          </div>
        </div>
        <div className="prof-image">
          <div className="prof-image-bg"></div>
        </div>
      </div>
    </div>
  );
}
