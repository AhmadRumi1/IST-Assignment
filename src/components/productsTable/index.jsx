import { Table } from "antd";
import React, { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import moment from "moment";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: "Description",
    dataIndex: "description",
  },
  {
    title: "Price",
    dataIndex: "price",
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: "Inventory Date",
    dataIndex: "inventoryDate",
    render: (val) => moment(val).format("YYYY-MM-DD"),
    sorter: (a, b) => moment(a.inventoryDate).diff(b.inventoryDate, "minute"),
  },
];

export default function ProductsTable({ search }) {
  const products = useSelector((state) => state.products.values);
  const filtered = useMemo(
    () =>
      products.filter((product) => {
        const arr = Object.values(product);
        let found = false;

        arr.map((item) => {
          if (moment.isMoment(item)) {
            return;
          }

          if (
            item
              .toString()
              .toLowerCase()
              .includes(search?.toString().toLowerCase())
          ) {
            found = true;
          }
        });

        return found;
      }),
    [products, search]
  );

  return (
    <Table
      data-testid="productsTable-1"
      columns={columns}
      dataSource={filtered}
      pagination={{ pageSize: 10 }}
    />
  );
}
