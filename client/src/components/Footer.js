import React from "react"

function Footer(){
    return (
      <div className="footer">
        <h1 id="footer-text">Beach Me</h1>
        <div className="icon-container">
          <a href="/severitycodes@gmail.com" className="icons">
            <img
              src="https://www.pinclipart.com/picdir/big/141-1417157_gmail-icon.png"
              alt="mail"
            ></img>
          </a>
          <a href="https://github.com/serenitysmith/main" className="icons">
            <img
              src="\static\github.png"  alt="github"
            ></img>
          </a>
        </div>
      </div>
    );
}

export default Footer