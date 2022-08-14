import React from "react";
import { Form as AntForm, Input, InputNumber, DatePicker } from "antd";
import styles from "./form.module.css";

const { Item } = AntForm;

const types = {
  input: <Input />,
  textArea: <Input.TextArea />,
  number: <InputNumber className={styles.inputNumber} />,
  date: <DatePicker className={styles.inventoryDate} />,
};

export default function Form({ children, formItems, form, onFinish }) {
  return (
    <AntForm form={form} requiredMark={false} onFinish={onFinish}>
      {formItems.map((item) => (
        <div key={item.name}>
          <label>{item.label}</label>
          <Item key={item.name} name={item.name} rules={item.rules}>
            {types[item.type]}
          </Item>
        </div>
      ))}
      {children}
    </AntForm>
  );
}
