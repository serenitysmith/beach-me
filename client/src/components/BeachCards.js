import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/dataContext";
import { UserContext } from "../context/userContext";

function BeachCards(props) {
  const { save, ...beach } = props;
  const [toggle, setToggle] = useState(false);

  const { saveBeach, removeBeach } = useContext(DataContext);
  const { removeUserBeach } = useContext(UserContext);

  const {
    idBeach,
    strBeachThumb,
    strBeach,
    strBeachy,
    strBeach1,
    strBeach2,
    // Other strBeach properties...
    _id,
    author,
  } = beach;

  const beachArr = [
    strBeach1,
    strBeach2,
    // Other strBeach properties...
  ];

  const beachList = beachArr.map((beach, index) => {
    return beach && <li key={index}>{beach}</li>;
  });

  function toggleSave() {
    setToggle((prevToggle) => !prevToggle); // Toggles the value
  }

  function handleRemove() {
    author ? removeUserBeach(beach._id) : removeBeach(idBeach);
  }

  useEffect(() => {
    if (toggle) {
      saveBeach(idBeach);
    }
  }, [toggle, idBeach, saveBeach]);

  return (
    <div className="beachCards">
      <Link
        to={`/beach/${_id ? _id : idBeach}`}
        style={{ textDecoration: "none" }}
      >
        <img
          src={strBeachThumb}
          className="beachCard--img"
          alt="beach thumbnail"
        />
      </Link>
      {author && <p>{author}</p>}
      <div className="beachCard--details">
        <h2 style={{ margin: "0", fontSize: "15px" }}>{strBeach}</h2>
        {strBeachy && (
          <p style={{ margin: "0", fontSize: "12px" }}>
            {strBeachy && strBeachy === "Alge" ? "Contains Alge" : "No-Beach"}
          </p>
        )}
        <hr style={{ width: "80%" }}></hr>
        <ul style={{ margin: "0", fontSize: "12px" }}>{beachList}</ul>
        {save && (
          <button className="beachCard--save" onClick={toggleSave}>
            <img
              src="https://cdn1.iconfinder.com/data/icons/beach-accessories-2/500/Untitled_design_6-1024.png"
              alt="favIcon"
              style={{ backgroundColor: toggle && "yellow" }}
            />
          </button>
        )}
        {props.remove && (
          <button className="beachCard--remove" onClick={handleRemove}>
            <img
              src="https://www.freepik.com/icon/vacations_2664593#fromView=keyword&page=1&position=2&uuid=73f932a4-7b28-4655-9c33-71c526f8570c"
              alt="removeIcon"
            />
          </button>
        )}
      </div>
    </div>
  );
}

export default BeachCards;
