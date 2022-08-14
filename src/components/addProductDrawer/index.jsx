import React, { useState } from "react";
import { Button, Drawer as AntDrawer, notification } from "antd";
import { Input, InputNumber, DatePicker, Form as AntForm } from "antd";
import Form from "../form";
import styles from "./addProductDrawer.module.css";
import formItems from "./formItems";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/slices/products";

export default function AddProductDrawer({ drawerVisible, setDrawerVisible }) {
  const [form] = AntForm.useForm();
  const dispatch = useDispatch();

  const onClose = () => {
    form.resetFields();
    setDrawerVisible(false);
  };

  const onFinish = (values) => {
    try {
      dispatch(addProduct(values));
      onClose(false);
      notification.success({
        message: `${values.name} added successfully`,
      });
    } catch (error) {
      notification.error({
        message: error.message,
      });
    }
  };
  return (
    <AntDrawer
      title="Add Product"
      visible={drawerVisible}
      onClose={onClose}
      footer={
        <div className={styles.footerContaienr}>
          <Button onClick={onClose}>Cancel</Button>
          <Button
            type="primary"
            className={styles.submitBtn}
            onClick={() => form.submit()}
          >
            Submit
          </Button>
        </div>
      }
    >
      <Form form={form} onFinish={onFinish} formItems={formItems}></Form>
    </AntDrawer>
  );
}
