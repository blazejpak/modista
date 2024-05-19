import { sendCartData } from "../../../store/reducers/cartSlice";
import { setupStore } from "../../../store/store";
import { renderWithProviders } from "../../../test/test-utils";
import CartPage from "../CartPage";
import { screen } from "@testing-library/react";
import { product } from "../../../test/mocks/products";

describe("Cart tests: ", () => {
  const store = setupStore();

  it("should show products when cart.length > 0", () => {
    store.dispatch(sendCartData(product));

    renderWithProviders(<CartPage />, { store });

    const products = screen.getAllByRole("listitem");
    expect(products.length).greaterThan(0);
  });
});
