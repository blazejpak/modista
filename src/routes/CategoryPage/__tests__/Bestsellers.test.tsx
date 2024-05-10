import Bestsellers from "../Bestsellers";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../../test/test-utils";
import { setupStore } from "../../../store/store";
import { sendData } from "../../../store/reducers/dataSlice";
import { initialState } from "../../../test/helper-test";

describe("CategoryPage - Bestsellers tests:", () => {
  vi.mock("react-router-dom", () => ({
    useParams: () => ({ category: "mens-watches" }),
    Link: vi.fn(),
  }));

  vi.mock("../../../utils/helpers.ts", () => ({
    getDataByCategory: initialState,
    getDataRatingAndDiscount: vi.fn(() => [
      { id: 1, title: "Produkt 1", rating: 5 },
      { id: 2, title: "Produkt 2", rating: 4.5 },
    ]),
  }));

  it("should render a heading for bestsellers", async () => {
    const store = setupStore();
    store.dispatch(sendData(initialState));

    renderWithProviders(<Bestsellers />, { store });

    screen.debug();

    const heading = await screen.findByText(/Check ours bestsellers!/i);
    expect(heading).toBeInTheDocument();
  });

  it("should render min 1 link with bestseller", async () => {
    const store = setupStore();
    store.dispatch(sendData(initialState));

    renderWithProviders(<Bestsellers />, { store });
    screen.debug();

    const heading = await screen.findByRole("link");
    expect(heading).toBeInTheDocument();
  });
});
