import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../../test/test-utils";
import { setupStore } from "../../../store/store";
import { sendData } from "../../../store/reducers/dataSlice";
import { initialState } from "../../../test/helper-test";
import Discount from "../Discount";

describe("CategoryPage - Bestsellers tests:", () => {
  vi.mock("react-router-dom", () => ({
    useParams: () => ({ category: "mens-watches" }), // Mock category value
  }));

  it("should render a heading for products with discount", async () => {
    const store = setupStore();
    store.dispatch(sendData(initialState));

    renderWithProviders(<Discount />, { store });

    const heading = await screen.getByText("With the biggest discount");
    expect(heading).toBeInTheDocument();
  });

  it("should render min 1 link for products with discount", async () => {
    const store = setupStore();
    store.dispatch(sendData(initialState));

    renderWithProviders(<Discount />, { store });

    screen.debug();

    const heading = await screen.findByRole("link");
    expect(heading).toBeGreaterThanOrEqual(1);
  });
});
