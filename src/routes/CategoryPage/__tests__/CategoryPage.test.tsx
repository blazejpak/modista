import Bestsellers from "../Bestsellers";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../../test/test-utils";

describe("Category Page tests:", () => {
  it("d", () => {
    renderWithProviders(<Bestsellers />);

    screen.debug();

    const textChecker = screen.getByText(/Check/i);

    expect(textChecker).toBeInTheDocument();
  });
});
