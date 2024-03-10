import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import GenderFilters from "./GenderFilters";
import NameList from "./NameList";
import Favorites from "./Favorites";
import namesData from "./babyNamesData.json"; // Replace with the actual path

const App = () => {
  const [names, setNames] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [genderFilter, setGenderFilter] = useState("all"); // 'all', 'm', or 'f'

  useEffect(() => {
    const filteredNames = namesData
      .filter(
        (name) =>
          (genderFilter === "all" || name.sex === genderFilter) &&
          name.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => a.name.localeCompare(b.name));

    setNames(filteredNames);
  }, [searchTerm, genderFilter]);

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
  };

  const handleGenderFilter = (selectedGender) => {
    setGenderFilter(selectedGender);
  };

  const addToFavourites = (id) => {
    const selectedName = names.find((name) => name.id === id);
    setFavourites([...favourites, selectedName]);
    const updatedNames = names.filter((name) => name.id !== id);
    setNames(updatedNames);
  };

  const removeFromFavourites = (id) => {
    const selectedName = favourites.find((name) => name.id === id);
    setNames([...names, selectedName]);
    const updatedFavourites = favourites.filter((name) => name.id !== id);
    setFavourites(updatedFavourites);
  };

  return (
    <div className="display">
      <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
      <GenderFilters
        genderFilter={genderFilter}
        handleGenderFilter={handleGenderFilter}
      />
      <Favorites
        favourites={favourites}
        removeFromFavourites={removeFromFavourites}
      />
      <div className="forLine"></div>
      <NameList names={names} addToFavourites={addToFavourites} />
    </div>
  );
};

export default App;
