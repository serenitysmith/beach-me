import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../context/dataContext";

function BeachDetails() {
  const { idBeach } = useParams();
  const { details, beach, saveBeach } = useContext(DataContext);

  useEffect(() => {
    if (idBeach) details(idBeach);
  }, [idBeach, details]);

  
  const {
    strBeachy = "",
    strBeach = "",
    strBeachThumb = "",
    strGlass = "",
    strBeach1 = "",
    strBeach2 = "",
    strBeach3 = "",
    strBeach4 = "",
    strBeach5 = "",
    strBeach6 = "",
    strBeach7 = "",
    strBeach8 = "",
    strBeach9 = "",
    strBeach10 = "",
    strBeach11 = "",
    strBeach12 = "",
    strBeach13 = "",
    strBeach14 = "",
    strBeach15 = "",
  } = beach || {};

  const beachArr = [
    strBeach1,
    strBeach2,
    strBeach3,
    strBeach4,
    strBeach5,
    strBeach6,
    strBeach7,
    strBeach8,
    strBeach9,
    strBeach10,
    strBeach11,
    strBeach12,
    strBeach13,
    strBeach14,
    strBeach15,
  ].filter(Boolean); // Filter out empty strings

  const beachedList = beachArr.map((measurement, i) => (
    <li key={i}>{measurement}</li>
  ));

  const handleSaveBeach = () => {
    saveBeach(idBeach);
  };

  return (
    <div className="beachDetails">
      <div className="beachDetails-header">
        <h1>{strBeach}</h1>
        <p>{strBeachy}</p>
      </div>
      {strBeachThumb && (
        <div className="beachDetails-image">
          <img src={strBeachThumb} alt={strBeach} />
        </div>
      )}
      <div className="beachDetails-info">
        {strGlass && <p>Glass Type: {strGlass}</p>}
        <div className="beachDetails-activities">
          <h2>Activities:</h2>
          <ul>{beachedList}</ul>
        </div>
      </div>
      <button className="beachCard-saveBtn" onClick={handleSaveBeach}>
        Save Beach
        <img
          src="https://cdn0.iconfinder.com/data/icons/summer-26/512/Beach_Slippers-2-1024.png"
          alt="Save Icon"
          style={{ marginLeft: "8px", width: "20px", height: "20px" }}
        />
      </button>
    </div>
  );
}


export default BeachDetails;
