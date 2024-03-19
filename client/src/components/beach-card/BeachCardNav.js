import React from "react"
import {Link} from "react-router-dom"


function BeachCardNav(props){
    const {token} = props


  return (
    <div>
      {token && (
        <nav style={{ backgroundColor: "black" }}>
          <Link
            to="/beach-card/dashboard"
            style={{ margin: "10px", textDecoration: "none" }}
          >
            Dashboard
          </Link>
          
          <Link
            to="/beach-card/public-beach"
            style={{ margin: "10px", textDecoration: "none" }}
          >
            Public Library
          </Link>
          <Link
            to="/beach-card/submission-form"
            style={{ margin: "10px", textDecoration: "none" }}
          >
            Submit New Recipe
          </Link>
          <Link
            to="/beach-card/user-submissions"
            style={{ margin: "10px", textDecoration: "none" }}
          >
            Your Submissions
          </Link>
          <Link
            to="/beach-card/account-settings"
            style={{ margin: "10px", textDecoration: "none" }}
          >
            Account Settings
          </Link>
        </nav>
      )}
    </div>
  );
}

export default BeachCardNav;
