import React, { useContext } from "react";
import CreateJobsiteButton from "../../components/CreateJobsiteButton/CreateJobsiteButton";
import InformativePiece from "../../components/InformativePiece/InformativePiece";
import MainTable from "../../components/Table/Table";
import { AppContext } from "../../context/AppContext";
import SearchJobsite from "../../components/SearchJobsite/SearchJobsite";
import "./MainPage.css";

const MainPage = () => {
  const { filteredData } = useContext(AppContext);

  return (
    <>
      <div className="mainPageHead">
        <h4>Title</h4>
      </div>
      <div className="searchBarContainer">
        <InformativePiece />
        <div className="searchBar">
          <SearchJobsite />
          <CreateJobsiteButton />
        </div>
      </div>
      <MainTable data={filteredData} />
    </>
  );
};
export default MainPage;
