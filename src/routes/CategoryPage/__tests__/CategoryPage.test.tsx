import Bestsellers from "../Bestsellers";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../../test/test-utils";

describe("Category Page tests:", () => {
  renderWithProviders(<Bestsellers />);

  expect(screen.getByText("Check")).toBeInTheDocument();
});
