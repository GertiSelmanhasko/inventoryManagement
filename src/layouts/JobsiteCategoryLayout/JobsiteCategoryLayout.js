import React from "react";
import Layout, { Content } from "antd/es/layout/layout";
import "./JobsiteCategoryLayout.css";
const JobsiteCategoryLayout = ({ children }) => {
  return (
    <Layout className="jobsiteLayout">
      <Content className="jobsiteContent">{children}</Content>
    </Layout>
  );
};
export default JobsiteCategoryLayout;
