import { MemoryRouter } from "react-router-dom";
import { sendData } from "../../../store/reducers/dataSlice";
import { setupStore } from "../../../store/store";
import { initialState } from "../../../test/helper-test";
import { renderWithProviders } from "../../../test/test-utils";
import ProductPage from "../ProductPage";
import { fireEvent, screen } from "@testing-library/react";

describe("Product Page tests: ", () => {
  const store = setupStore();
  store.dispatch(sendData(initialState));
  const mockData = store.getState().data.data[0];

  vi.mock("react-router-dom", async () => {
    const mod = await vi.importActual("react-router-dom");
    return {
      ...mod,
      useParams: () => ({
        category: "men",
        subCategory: "watches",
        productId: initialState[0].id,
      }),
    };
  });

  it("should show the most important things like title, price and description", () => {
    renderWithProviders(
      <MemoryRouter>
        <ProductPage />
      </MemoryRouter>,
      { store },
    );

    const title = screen.getByRole("heading", {
      name: mockData.brand,
    });
    const price = screen.getByText("$" + mockData.priceWithDiscount.toFixed(2));
    const description = screen.getByText(mockData.description);
    expect(title).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it("should send data to the cart when the button clicked", () => {
    renderWithProviders(
      <MemoryRouter>
        <ProductPage />
      </MemoryRouter>,
      { store },
    );

    const button = screen.getByRole("button", { name: /add to cart/i });
    expect(button).toBeInTheDocument();

    const cartDataPrev = store.getState().cart.cartData;
    expect(cartDataPrev.length).toEqual(0);

    fireEvent.click(button);

    const cartDataNew = store.getState().cart.cartData;
    expect(cartDataNew.length).greaterThan(0);
  });
});
