import React, { useEffect, useState } from "react";
import "./ResortsPage.scss";
import { ResortData } from "../../types";
import SearchBar from "../../components/pageContentComponents/SearchBar/SearchBar";
import ResortResults from "../../components/pageContentComponents/ResortResults/ResortResults";

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
      {data ? (
        <ResortResults data={data} />
      ) : (
        <div className="initial-content">
          <p>Search a resort to get started</p>
          <img
            src="assets/photos/ski-lift.png"
            alt="Icon of a person sitting on a ski lift"
          />
        </div>
      )}
    </section>
  );
};

export default ResortsPage;
