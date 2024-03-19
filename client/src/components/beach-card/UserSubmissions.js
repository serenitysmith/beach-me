import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import BeachCard from "../BeachCard";

function UserSubmissions() {
  const {
    publicBeaches,
    user: { _id },
  } = useContext(UserContext);

  return (
    <div style={{ marginTop: "100px" }}>
      {publicBeaches.length > 0 ? (
        publicBeaches.map(
          (beach) =>
            beach.user === _id && (
              <BeachCard
                {...beach}
                path="/beach-card/public-beach"
                key={beach.idBeach}
                remove="remove"
              />
            )
        )
      ) : (
        <h1>
          Sorry, your private beach is currently under water. Check out the{" "}
          <Link to="/beach-card/public-beach">Public Beaches</Link> and find
          some new favorites!
        </h1>
      )}
    </div>
  );
}

export default UserSubmissions;
