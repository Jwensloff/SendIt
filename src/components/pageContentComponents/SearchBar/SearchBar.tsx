import React, { ChangeEvent } from "react";
import "./SearchBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { ResortData } from "../../../types";
import mockData from "../../../pages/ResortsPage/mockData.json";

interface SearchBarProps {
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  setData: React.Dispatch<React.SetStateAction<ResortData | null>>;
}

const SearchBar = ({
  searchInput,
  setSearchInput,
  setData,
}: SearchBarProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // COMMENT BACK IN WHEN READY TO USE SEARCH 
      // const data = await searchResort(searchInput);
      // setData(data);
      setData(mockData);

      setSearchInput("");
    } catch (error) {
      console.error("Error searching resort:", error);
    }
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
