import React from "react";
import "./Table.css";
import { Table } from "antd";
import { Link } from "react-router-dom";
import JobStatus from "../JobStatus/JobStatus";
const columns = [
  {
    title: "Jobsite Name",
    dataIndex: "jobsite",
    key: "jobsite",
    width: "50%",
    align: "center",

    render: (text, record) => <Link to={`/jobsite/${record.id}`}>{text}</Link>,
  },

  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    width: "50%",
    align: "center",
    render: (text) => <JobStatus status={text} />,
  },
];

const MainTable = ({ data }) => (
  <Table
    columns={columns}
    dataSource={data}
    rowKey={(record) => record.id}
    rowClassName={(record, index) => (index % 2 === 0 ? "even-row" : "odd-row")}
  />
);
export default MainTable;
