import React, { useEffect, useState } from "react";
import "./ResortsPage.scss";
import { ResortData } from "../../types"; // Adjust path as needed
import mockData from "./mockData.json"; // Adjust path as needed
import SearchBar from "../../components/pageContentComponents/SearchBar/SearchBar";

const ResortsPage = () => {
  const [data, setData] = useState<ResortData | null>(null);
  const [searchInput, setSearchInput] = useState<string>("");

  // useEffect(() => {
  //   setData(mockData);
  // }, []);

  // console.log({ data });
  return (
    <section className="resort-page">
      <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
    </section>
  );
};

export default ResortsPage;
