// import React from "react";

const NameList = ({ names, addToFavourites }) => {
  return (
    <div className="container">
      {names.map(({ id, name, sex }) => (
        <span
          key={id}
          className={`name ${sex === "m" ? "boy" : "girl"}`}
          onClick={() => addToFavourites(id)}
        >
          {name}
        </span>
      ))}
    </div>
  );
};

export default NameList;
