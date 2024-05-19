import Bestsellers from "../Bestsellers";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../../test/test-utils";
import { setupStore } from "../../../store/store";
import { sendData } from "../../../store/reducers/dataSlice";
import { initialState } from "../../../test/helper-test";
import { MemoryRouter } from "react-router-dom";

describe("CategoryPage - Bestsellers tests:", () => {
  vi.mock("react-router-dom", async () => {
    const mod = await vi.importActual("react-router-dom");
    return {
      ...mod,
      useParams: () => ({ category: "men" }),
    };
  });

  it("should render a heading for bestsellers", async () => {
    const store = setupStore();
    store.dispatch(sendData(initialState));

    renderWithProviders(
      <MemoryRouter>
        <Bestsellers />
      </MemoryRouter>,
      { store },
    );

    const heading = await screen.findByText(/Check ours bestsellers!/i);
    expect(heading).toBeInTheDocument();
  });

  it("should render min 1 link with bestseller", async () => {
    const store = setupStore();
    store.dispatch(sendData(initialState));

    renderWithProviders(
      <MemoryRouter>
        <Bestsellers />
      </MemoryRouter>,
      { store },
    );

    const heading = await screen.findByRole("link");
    expect(heading).toBeInTheDocument();
  });
});
