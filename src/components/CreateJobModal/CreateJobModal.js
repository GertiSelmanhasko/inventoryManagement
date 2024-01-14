import React, { useContext } from "react";
import { Modal, Form, Input, Select } from "antd";
import InformativePiece from "../InformativePiece/InformativePiece";
import { AppContext } from "../../context/AppContext";
import "./CreateJobModal.css";
const { Option } = Select;

const options = [
  {
    value: "Sidewalk Shed",
  },
  {
    value: "Scaffold",
  },
  {
    value: "Shoring",
  },
];

const CreateJobModal = ({ visible, handleOk, handleCancel }) => {
  const [form] = Form.useForm();
  const { addNewDataItem } = useContext(AppContext);

  const handleSubmitCancel = () => {
    form.resetFields();
    handleCancel();
  };
  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();

      const newItem = {
        id: Math.floor(Math.random() * 100000000000),
        jobsite: values.jobsite,
        status: values.status,
        categories: values.categories.map((category) => ({
          category,
          items: [],
        })),
      };

      addNewDataItem(newItem);

      form.resetFields();

      handleOk();
    } catch (errorInfo) {
      console.log("Validation Failed:", errorInfo);
    }
  };
  return (
    <Modal
      title="Title"
      open={visible}
      onOk={handleSubmit}
      onCancel={handleSubmitCancel}
      width={868}
    >
      <InformativePiece />

      <Form form={form} layout="vertical">
        <Form.Item
          name="jobsite"
          label="Name"
          rules={[{ required: true }]}
          style={{
            marginTop: "10px",
          }}
        >
          <Input
            className="createJobModalInput"
            placeholder="Type the jobsite name"
          />
        </Form.Item>
        <Form.Item
          name="categories"
          label="Categories Included"
          rules={[
            {
              required: true,
              message: "Please select your Categories!",
              type: "array",
            },
          ]}
          style={{
            display: "inline-block",
            marginTop: "5px",
            width: "calc(49.5% )",
            marginRight: "1%",
          }}
        >
          <Select mode="multiple" placeholder="Select" options={options} />
        </Form.Item>
        <Form.Item
          name="status"
          label="Status"
          rules={[{ required: true, message: "Please select your status!" }]}
          style={{
            marginTop: "5px",
            display: "inline-block",
            width: "calc(49.5% )",
          }}
        >
          <Select placeholder="Select one">
            <Option value="Completed">Competed</Option>
            <Option value="In Progress">In Progress</Option>
            <Option value="On Hold">On Hold</Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateJobModal;
