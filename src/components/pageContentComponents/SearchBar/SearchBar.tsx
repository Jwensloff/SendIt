import React, { ChangeEvent, useState } from "react";
import "./SearchBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { searchResort } from "../../../apiCalls/apiCalls";

interface SearchBarProps {
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = ({ searchInput, setSearchInput }: SearchBarProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    searchResort(searchInput);
    setSearchInput("");
  };
  return (
    <div className="search-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchInput}
          onChange={handleChange}
          placeholder="Search..."
        />
        <button type="submit" className="search-btn" onClick={handleSubmit}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
