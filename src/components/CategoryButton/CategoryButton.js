import React from "react";
import { Button } from "antd";
import "./CategoryButton.css";

const CategoryButton = ({ name, onClick }) => {
  return (
    <Button type="text" className="categoryButton" onClick={onClick}>
      {name}
    </Button>
  );
};

export default CategoryButton;
