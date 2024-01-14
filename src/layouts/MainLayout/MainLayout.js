import React from "react";
import Layout, { Content, Header } from "antd/es/layout/layout";
import SHeader from "../../components/SHeader/SHeader";
import "./MainLayout.css";

const MainLayout = ({ children }) => {
  return (
    <Layout className="mainLayout">
      <Header className="mainLayoutHeader">
        <SHeader />
      </Header>
      <Content className="mainLayoutContent">{children}</Content>
    </Layout>
  );
};
export default MainLayout;
