import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import ProductsTable from "../components/productsTable";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

afterEach(() => {
  cleanup();
});

global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  };

describe("Render table", () => {
  const initialState = { products: { values: [] } };
  const mockStore = configureStore();
  let store;

  it("should render products table", () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <ProductsTable />
      </Provider>
    );
    const productsTableElement = screen.getByTestId("productsTable-1");

    expect(productsTableElement).toBeInTheDocument();
    expect(productsTableElement).toHaveTextContent("Name");
    expect(productsTableElement).toHaveTextContent("Description");
    expect(productsTableElement).toHaveTextContent("Price");
    expect(productsTableElement).toHaveTextContent("Inventory Date");
  });
});