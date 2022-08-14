import React, { useEffect, useState } from "react";
import MainWrapper from "../../layouts/main";
import { Button, Space, Table, Form, Input } from "antd";
import styles from "./products.module.css";
import AddProductDrawer from "../../components/addProductDrawer";
import { useSelector } from "react-redux";
import ProductsTable from "../../components/productsTable";

export default function Products() {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <MainWrapper>
      <div className={styles.topContainer}>
        <h1 className={styles.heading}>Products</h1>

        <div className={styles.ctaContainer}>
          <Input.Search
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button
            type="primary"
            onClick={() => setDrawerVisible(true)}
            className={styles.addBtn}
          >
            Add Product
          </Button>
        </div>
      </div>
      <AddProductDrawer
        drawerVisible={drawerVisible}
        setDrawerVisible={setDrawerVisible}
      />
      <ProductsTable search={search} />
    </MainWrapper>
  );
}
