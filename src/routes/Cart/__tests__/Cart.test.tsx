import { MemoryRouter } from "react-router-dom";
import { sendCartData } from "../../../store/reducers/cartSlice";
import { setupStore } from "../../../store/store";
import { initialState } from "../../../test/helper-test";
import { renderWithProviders } from "../../../test/test-utils";
import CartPage from "../CartPage";
import { screen } from "@testing-library/react";

describe("Cart tests: ", () => {
  const store = setupStore();

  it("should show products when cart.length > 0", () => {
    store.dispatch(sendCartData(initialState));

    renderWithProviders(
      <MemoryRouter>
        <CartPage />
      </MemoryRouter>,
      { store },
    );

    const products = screen.getAllByRole("listitem");
    expect(products.length).greaterThan(0);
  });
});
