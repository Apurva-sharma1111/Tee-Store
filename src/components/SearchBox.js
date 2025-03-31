import { useState } from "react";
import searchIcon from "../assets/search.png";
const SearchBox = ({ onSearch }) => {
  const [input, setInput] = useState("");
  function handleSearch() {
    onSearch(input);
  }
  return (
    <>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search for products..."
        />
        <button onClick={handleSearch} className="search-button-container">
          <img src={searchIcon} className="searchIcon" alt="Search" />
        </button>
    </>
  );
};

export default SearchBox;
