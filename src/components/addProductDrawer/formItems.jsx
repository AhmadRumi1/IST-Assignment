const formItems = [
  {
    label: "Name",
    name: "name",
    rules: [
      { required: true, message: "Please input the product name!" },
      {
        min: 2,
      },
      {
        max: 50,
      },
    ],
    type: "input",
  },
  {
    label: "Description",
    name: "description",
    rules: [
      { required: true, message: "Please input a description!" },
      {
        min: 2,
      },
      {
        max: 300,
      },
    ],
    type: "textArea",
  },
  {
    label: "Price",
    name: "price",
    rules: [
      { required: true, message: "Please input the product price!" },
      {
        pattern: /^[\d]{0,9}$/,
        message: "Price should be less than 999999999",
      },
    ],
    type: "number",
  },
  {
    label: "Inventory Date",
    name: "inventoryDate",
    rules: [{ required: true, message: "Please select a inventory date!" }],
    type: "date",
  },
];

export default formItems;
