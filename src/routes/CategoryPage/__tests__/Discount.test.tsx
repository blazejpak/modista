import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../../test/test-utils";
import { setupStore } from "../../../store/store";
import { sendData } from "../../../store/reducers/dataSlice";
import { initialState } from "../../../test/helper-test";
import Discount from "../Discount";
import { MemoryRouter } from "react-router-dom";

describe("CategoryPage - Discount tests:", () => {
  vi.mock("react-router-dom", async () => {
    const mod = await vi.importActual("react-router-dom");
    return {
      ...mod,
      useParams: () => ({ category: "men" }),
    };
  });

  it("should render a heading for products with discount", async () => {
    const store = setupStore();
    store.dispatch(sendData(initialState));

    renderWithProviders(
      <MemoryRouter>
        <Discount />
      </MemoryRouter>,
      { store },
    );

    const heading = await screen.getByText(/With the biggest discount/i);
    expect(heading).toBeInTheDocument();
  });

  it("should render min 1 link for products with discount", async () => {
    const store = setupStore();
    store.dispatch(sendData(initialState));

    renderWithProviders(
      <MemoryRouter>
        <Discount />
      </MemoryRouter>,
      { store },
    );

    screen.debug();

    const heading = await screen.findAllByRole("link");
    expect(heading.length).toBeGreaterThanOrEqual(1);
  });
});
