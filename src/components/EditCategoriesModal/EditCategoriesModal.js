import React from "react";
import { Modal, Form, Input, InputNumber } from "antd";
import InformativePiece from "../InformativePiece/InformativePiece";
import "./EditCategoriesModal.css";

const EditCategoriesModal = ({
  visible,
  updateDataItem,
  record,
  handleCategoryModalClose,
}) => {
  const [form] = Form.useForm();

  const handleSubmitCancel = () => {
    form.resetFields();
    handleCategoryModalClose();
  };

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();

      const updatedItem = {
        id: values.id,
        item: values.item,
        quantity: values.quantity,
        description: values.description,
        notes: values.notes,
      };

      updateDataItem(updatedItem);

      form.resetFields();
      handleCategoryModalClose();
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

      <Form
        form={form}
        layout="vertical"
        initialValues={{
          id: record.id,
          item: record.item,
          quantity: record.quantity,
          description: record.description,
          notes: record.notes,
        }}
      >
        <Form.Item
          name="id"
          hidden
          rules={[
            {
              required: true,
              message: "Please select your Item!",
            },
          ]}
        />
        <Form.Item
          name="item"
          label="Item"
          rules={[
            {
              required: true,
              message: "Please select your Item!",
            },
          ]}
          style={{
            marginTop: "10px",
            display: "inline-block",
            width: "calc(49.5% )",
            marginRight: "1%",
          }}
        >
          <Input
            className="editCategoriesInput"
            placeholder="input placeholder"
          />
        </Form.Item>
        <Form.Item
          name="quantity"
          label="Quantity"
          rules={[{ required: true, message: "Please select Quantity!" }]}
          style={{
            marginTop: "10px",

            display: "inline-block",
            width: "calc(49.5% )",
          }}
        >
          <InputNumber
            className="editCategoriesInput"
            min={0}
            style={{ width: "100%" }}
            placeholder="Select Quantity"
          />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          style={{
            marginTop: "10px",
          }}
          rules={[
            {
              required: true,
              message: "Please type your description.",
            },
          ]}
        >
          <Input.TextArea
            rows={4}
            className="editCategoriesInput"
            placeholder="Type your description."
          />
        </Form.Item>
        <Form.Item
          name="notes"
          label="Notes"
          style={{
            marginTop: "10px",
          }}
          rules={[
            {
              required: true,
              message: "Please type a note.",
            },
          ]}
        >
          <Input.TextArea
            rows={4}
            className="editCategoriesInput"
            placeholder="Type a note."
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditCategoriesModal;
