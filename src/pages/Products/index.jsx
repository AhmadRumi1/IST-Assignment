import React from "react";
import MainWrapper from "../../layouts/main";
import { Button, Space, Table, Tag } from "antd";
import styles from './products.module.css'

const columns = [
  
];
const data = [

];

export default function Products() {
  return (
    <MainWrapper>
      <div className={styles.topContainer}>
        <h1 className={styles.heading}>Products</h1>
        <Button type="primary">Add Product</Button>
      </div>
      <Table columns={columns} dataSource={data} />
    </MainWrapper>
  );
}
