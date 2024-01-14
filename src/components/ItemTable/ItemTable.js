import React, { useState } from "react";
import "./ItemTable.css";
import { Table } from "antd";
import EditCategoriesModal from "../EditCategoriesModal/EditCategoriesModal";
const columns = [
  {
    title: "id",
    key: "id",
    dataIndex: "id",
  },
  {
    title: "Item",
    key: "item",
    dataIndex: "item",
  },
  {
    title: "Quantity",
    key: "quantity",
    dataIndex: "quantity",
  },
  {
    title: "Description",
    key: "description",
    dataIndex: "description",
  },

  {
    title: "Notes",
    key: "notes",
    dataIndex: "notes",
  },
];

const ItemTable = ({ data, updateDataItem }) => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [isCategoryModalVisible, setCategoryModalVisible] = useState(false);

  const handleRowClick = (record) => {
    setSelectedRow(record);
    setCategoryModalVisible(true);
  };

  const handleCategoryModalClose = () => {
    setCategoryModalVisible(false);
    setSelectedRow(null);
  };

  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        rowKey={(record) => record.id}
        rowClassName={(record, index) =>
          index % 2 === 0 ? "even-row" : "odd-row"
        }
        onRow={(record) => ({
          onClick: () => handleRowClick(record),
        })}
      />
      {selectedRow && (
        <EditCategoriesModal
          updateDataItem={updateDataItem}
          visible={isCategoryModalVisible}
          handleCategoryModalClose={handleCategoryModalClose}
          record={selectedRow}
        />
      )}
    </>
  );
};

export default ItemTable;
