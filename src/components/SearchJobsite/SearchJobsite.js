import React, { useContext } from "react";
import Input from "antd/es/input/Input";
import { AppContext } from "../../context/AppContext";
import { SearchOutlined } from "@ant-design/icons";
import "./SearchJobsite.css";

const SearchJobsite = () => {
  const { filterData } = useContext(AppContext);

  const handleInputChange = (e) => {
    const value = e.target.value;
    filterData(value);
  };
  return (
    <Input
      className="searchJobsiteInput"
      placeholder="Search a driver"
      onChange={handleInputChange}
      prefix={<SearchOutlined />}
    />
  );
};

export default SearchJobsite;
