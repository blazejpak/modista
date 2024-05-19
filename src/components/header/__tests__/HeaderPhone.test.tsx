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
    const button = screen.getByTestId("buttonMenu-open");
    expect(button).toBeInTheDocument();
  });

  it("should show links to categories when button menu clicked", () => {
    render(
      <MemoryRouter>
        <HeaderPhone />
      </MemoryRouter>,
    );
    const buttonOpenMenu = screen.getByTestId("buttonMenu-open");
    fireEvent.click(buttonOpenMenu);
    const buttonCloseMenu = screen.getByTestId("buttonMenu-close");
    const links = screen.getAllByRole("listitem");

    expect(buttonCloseMenu).toBeInTheDocument();
    expect(links.length).toBeGreaterThan(0);
  });
});
