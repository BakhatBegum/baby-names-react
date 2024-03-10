import "./App.css";

const SearchBar = ({ searchTerm, handleSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search.."
      id="search"
      value={searchTerm}
      onChange={handleSearch}
    />
  );
};

export default SearchBar;
