import React from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "../layouts//MainLayout/MainLayout";
import MainPage from "../pages/MainPage/MainPage";
import JobsiteCategoryLayout from "../layouts/JobsiteCategoryLayout/JobsiteCategoryLayout";
import JobsiteCategoryPage from "../pages/JobsiteCategoryPage/JobsiteCategoryPage";

const Router = () =>
  useRoutes([
    {
      path: "/",
      element: (
        <MainLayout>
          <MainPage />
        </MainLayout>
      ),
    },
    {
      path: "/jobsite/:id",
      element: (
        <JobsiteCategoryLayout>
          <JobsiteCategoryPage />
        </JobsiteCategoryLayout>
      ),
    },
  ]);
export default Router;
