import "./App.css";

const GenderFilters = ({ genderFilter, handleGenderFilter }) => {
  return (
    <div className="gender-filters">
      <button
        type="button"
        onClick={() => handleGenderFilter("all")}
        className={genderFilter === "all" ? "active" : ""}
      >
        All
      </button>
      <button
        type="button"
        onClick={() => handleGenderFilter("m")}
        className={genderFilter === "m" ? "active" : ""}
      >
        Boys
      </button>
      <button
        type="button"
        onClick={() => handleGenderFilter("f")}
        className={genderFilter === "f" ? "active" : ""}
      >
        Girls
      </button>
    </div>
  );
};

export default GenderFilters;
