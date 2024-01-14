import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import CreateJobModal from "../CreateJobModal/CreateJobModal";
import "./CreateJobsiteButton.css";
const CreateButton = () => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <Button
        className="createJobsiteButton"
        type="primary"
        onClick={showModal}
      >
        Create <PlusOutlined />
      </Button>
      <CreateJobModal
        visible={open}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </>
  );
};

export default CreateButton;
