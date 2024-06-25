import React, { useEffect, useState } from "react";
import "./ResortsPage.scss";
import { ResortData } from "../../types";
import SearchBar from "../../components/pageContentComponents/SearchBar/SearchBar";

const ResortsPage = () => {
  const [data, setData] = useState<ResortData | null>(null);
  const [searchInput, setSearchInput] = useState<string>("");

  useEffect(() => {
    console.log(data);
  }, [data]);

  // console.log({ data });
  return (
    <section className="resort-page">
      <SearchBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        setData={setData}
      />
    </section>
  );
};

export default ResortsPage;
