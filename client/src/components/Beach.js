import React, { useState } from "react";
import { Link } from "react-router-dom";

function Beach(props) {
  const { verification } = props;
  const [beachClick, setBeachClick] = useState(false);

  function openNav() {
    document.getElementById("myNav").style.width = "25%";
    setBeachClick(true);
  }

  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    setBeachClick(false);
  }

  return (
    <>
      {verification && (
        <>
          <div id="myNav" className="overlay">
            <button className="closebtn" onClick={closeNav}>
              &times;
            </button>
            <nav className="overlay-content">
              <Link
                to="/"
                style={{ textDecoration: "none" }}
                onClick={closeNav}
              >
                Home
              </Link>
              {/* <Link to="about" style={{textDecoration:'none'}} onClick={closeNav}>About</Link> */}
              <Link
                to="search"
                style={{ textDecoration: "none" }}
                onClick={closeNav}
              >
                Search
              </Link>
              <Link
                to="saved"
                style={{ textDecoration: "none" }}
                onClick={closeNav}
              >
                Saved
              </Link>
              <Link
                to="beach-card"
                style={{ textDecoration: "none" }}
                onClick={closeNav}
              >
                Beach Card
              </Link>
            </nav>
          </div>
          <button onClick={beachClick ? closeNav : openNav} id="beach">
            <img src="" id="beachh--image" alt="menu" />
          </button>
        </>
      )}
    </>
  );
}

export default Beach;
