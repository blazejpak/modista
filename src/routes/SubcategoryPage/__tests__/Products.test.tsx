import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { MemoryRouter } from "react-router-dom";
import Products from "../Products";
import { setupStore } from "../../../store/store";
import { sendData } from "../../../store/reducers/dataSlice";
import { renderWithProviders } from "../../../test/test-utils";
import SubcategoryPage from "../SubcategoryPage";
import { SortDataContext } from "../../../context/SortDataContext";
import { product } from "../../../test/mocks/products";

const user = userEvent.setup();

describe("Subcategory tests:", () => {
  vi.mock("react-router-dom", async () => {
    const mod = await vi.importActual("react-router-dom");
    return {
      ...mod,
      useParams: () => ({ category: "men", subCategory: "watches" }),
    };
  });

  const mockSortDataContext = {
    sortedData: product,
    setSortedData: vi.fn(),
    typeSort: "Lowest price",
    setTypeSort: vi.fn(),
  };

  const store = setupStore();
  store.dispatch(sendData(product));

  const data = store.getState().data.data;

  it("should show min 1 link to product", () => {
    render(
      <MemoryRouter>
        <Products products={data} />
      </MemoryRouter>,
    );

    const link = screen.getAllByRole("link");
    expect(link.length).toBeGreaterThanOrEqual(1);
  });

  it("should filter data and show products", async () => {
    renderWithProviders(
      <SortDataContext.Provider value={mockSortDataContext}>
        <SubcategoryPage />
      </SortDataContext.Provider>,
      { store },
    );

    const mockData = product;

    const minPrice = 20;
    const maxPrice = 50;

    const filteredData = mockData.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice,
    );

    const priceFilterButton = screen.getByRole("button", { name: /price/i });
    expect(priceFilterButton).toBeInTheDocument();
    fireEvent.click(priceFilterButton);

    const inputPriceMin = screen.getByTestId("inputMin");
    const inputPriceMax = screen.getByTestId("inputMax");
    const submitButton = screen.getByText(/submit/i);
    expect(inputPriceMin).toBeInTheDocument();
    expect(inputPriceMax).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();

    user.type(inputPriceMin, `${minPrice}`);
    user.type(inputPriceMax, `${maxPrice}`);
    user.click(submitButton);

    const filteredProducts = await screen.findAllByRole("link");

    expect(filteredProducts.length).toEqual(filteredData.length);
  });

  it("should filter data and don't show products", async () => {
    renderWithProviders(
      <SortDataContext.Provider value={mockSortDataContext}>
        <SubcategoryPage />
      </SortDataContext.Provider>,
      { store },
    );

    const mockData = product;

    const minPrice = 20;
    const maxPrice = 40;

    const filteredData = mockData.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice,
    );

    const priceFilterButton = screen.getByRole("button", { name: /price/i });
    expect(priceFilterButton).toBeInTheDocument();
    fireEvent.click(priceFilterButton);

    const inputPriceMin = screen.getByTestId("inputMin");
    const inputPriceMax = screen.getByTestId("inputMax");
    const submitButton = screen.getByText(/submit/i);
    expect(inputPriceMin).toBeInTheDocument();
    expect(inputPriceMax).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();

    user.type(inputPriceMin, `${minPrice}`);
    user.type(inputPriceMax, `${maxPrice}`);
    user.click(submitButton);

    const filteredProducts = await screen.findAllByRole("link");

    expect(filteredProducts.length).not.toEqual(filteredData.length);
  });
});
