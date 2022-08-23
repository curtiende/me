import React from "react";

export default function Profile() {
  return (
    <div className="prof-container">
      <div className="prof-parent">
        <div className="prof-details">
          <div className="columns">
            <a href="https://www.facebook.com/curtisotiende" target="_blank">
              <i className="fa fa-facebook-square"></i>
            </a>

            <a href="https://www.linkedIn.com/curtisotiende" target="_blank">
              <i className="fa fa-instagram-square"></i>
            </a>

            <a href="https://www.youtube.com/curtisotiende" target="_blank">
              <i className="fa fa-youtube-square"></i>
            </a>

            <a href="https://www.twitter.com/curtisotiende" target="_blank">
              <i className="fa fa-twitter-square"></i>
            </a>
          </div>
          <div className="prof-details-name">
            <span className="primary-text">
              { }
              Hello, I am <span className="highlighted-text"> Curtis</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
