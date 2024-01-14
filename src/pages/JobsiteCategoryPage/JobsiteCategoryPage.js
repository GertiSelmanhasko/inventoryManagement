import React, { useContext, useState } from "react";
import "./JobsiteCategoryPage.css";
import { AppContext } from "../../context/AppContext";
import { useParams, useNavigate } from "react-router-dom";
import CategoryButton from "../../components/CategoryButton/CategoryButton";
import ItemTable from "../../components/ItemTable/ItemTable";
import { Button } from "antd";
import { CloseOutlined, SwapLeftOutlined } from "@ant-design/icons";
import NoServiceSelected from "../../components/NoServiceSelected/NoServiceSelected";

export default function JobsiteCategoryPage() {
  const { data } = useContext(AppContext);
  const { id } = useParams();
  const [category, setCategory] = useState();
  const [selectedCategoryItems, setSelectedCategoryItems] = useState(null);
  const navigate = useNavigate();
  const filteredJobsite = data.find((item) => item.id === +id);

  const updateDataItem = (updatedItem) => {
    const index = selectedCategoryItems.findIndex(
      (item) => item.id === updatedItem.id
    );

    if (index !== -1) {
      const newDataItems = [...selectedCategoryItems];
      newDataItems[index] = updatedItem;
      setSelectedCategoryItems(newDataItems);
    } else {
      console.error(`Item with id ${updatedItem.id} not found.`);
    }
  };

  const handleCategoryButtonClick = (categoryName) => {
    const selectedCategory = filteredJobsite.categories.find(
      (item) => item.category === categoryName
    );

    if (selectedCategory) {
      setSelectedCategoryItems(selectedCategory.items);
      setCategory(selectedCategory.category);
    }
  };

  const resetButtonClick = () => {
    setSelectedCategoryItems(null);
  };
  const handleBackClick = () => {
    navigate("/");
  };
  return (
    <section className="jobsiteContainer">
      <div className="jobsiteSiderContainer">
        <div className="jobsiteSiderTitleContainer">
          <p className="title">{filteredJobsite.jobsite}</p>
        </div>

        <div className="jobsiteSiderCategoryContainer">
          <div className="jobsiteSiderCategory">
            {filteredJobsite?.categories?.map((item, index) => (
              <CategoryButton
                key={index}
                name={item.category}
                onClick={() => handleCategoryButtonClick(item.category)}
              />
            ))}
          </div>

          <div style={{ marginTop: "auto" }}>
            <Button
              className="jobsiteSiderBackButton"
              onClick={handleBackClick}
            >
              Back <SwapLeftOutlined />
            </Button>
          </div>
        </div>
      </div>

      <div className="jobsiteItemContent">
        <div className="jobsiteItemContentTitle">
          {selectedCategoryItems === null ? (
            <p className="title">Data Grid</p>
          ) : selectedCategoryItems.length === 0 ? (
            <p className="title">No Data Here </p>
          ) : (
            <div className="jobsiteItemTableTitle" style={{}}>
              <p className="title">{category}</p>
              <Button type="none" onClick={resetButtonClick}>
                <CloseOutlined style={{ fontSize: "medium" }} />
              </Button>
            </div>
          )}
        </div>

        {selectedCategoryItems === null ? (
          <NoServiceSelected />
        ) : selectedCategoryItems.length === 0 ? (
          <h1 style={{ color: "black" }}>No data Here</h1>
        ) : (
          <ItemTable
            updateDataItem={updateDataItem}
            category={category}
            data={selectedCategoryItems}
          />
        )}
      </div>
    </section>
  );
}
