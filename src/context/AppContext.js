import React, { createContext, useState } from "react";
import sdata from "../store/data.json";

const AppContext = createContext();
const AppContextProvider = ({ children }) => {
  const [data, setData] = useState(sdata);
  const [filteredData, setFilteredData] = useState(data);

  const filterData = (filterValue) => {
    const filteredResult = data.filter((item) =>
      item.jobsite.toLowerCase().includes(filterValue.toLowerCase())
    );

    setFilteredData(filteredResult);
  };
  const addNewDataItem = (newItem) => {
    setData((prevData) => [...prevData, newItem]);
    setFilteredData((prevFilteredData) => [...prevFilteredData, newItem]);
  };
  const contextValue = {
    data,
    filteredData,
    filterData,
    addNewDataItem,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
