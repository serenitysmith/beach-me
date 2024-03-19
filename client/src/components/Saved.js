import React, { useContext } from "react";
import BeachCards from "./BeachCards";
import { DataContext } from "../context/dataContext";

function Saved() {
  const { beachList, removeBeach } = useContext(DataContext);
  return (
    <div className="saved">
      <h1>Your trip awaits</h1>
      <hr />
      <div className="saved--list">
        {beachList && beachList.length > 0 ? (
          beachList.map((beach) => (
            <BeachCards
              {...beach}
              removeBeach={removeBeach}
              key={beach.idBeach}
            />
          ))
        ) : (
          <h1 style={{ justifySelf: "center" }}>
            Your saved beaches will display here
          </h1>
        )}
      </div>
    </div>
  );
}

export default Saved;
