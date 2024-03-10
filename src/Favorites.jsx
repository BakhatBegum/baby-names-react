// import React from "react";

const Favorites = ({ favourites, removeFromFavourites }) => {
  return (
    <>
      <h2>Favourites: </h2>
      <div className="container">
        {favourites.map(({ id, name, sex }) => (
          <span
            key={id}
            className={`name ${sex === "m" ? "boy" : "girl"}`}
            onClick={() => removeFromFavourites(id)}
          >
            {name}
          </span>
        ))}
      </div>
    </>
  );
};

export default Favorites;
