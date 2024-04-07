import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import HeaderPhone from "../HeaderPhone";

describe("Header tests", () => {
  it("should contain button to open menu", async () => {
    render(
      <MemoryRouter>
        <HeaderPhone />
      </MemoryRouter>,
    );
    const button = screen.getByTestId("buttonMenu");
    expect(button).toBeInTheDocument();
  });

  it("should show links to categories when button menu clicked", () => {
    render(
      <MemoryRouter>
        <HeaderPhone />
      </MemoryRouter>,
    );
    const button = screen.getByTestId("buttonMenu");
    fireEvent.click(button);

    expect(button).toBeInTheDocument();
  });
});
