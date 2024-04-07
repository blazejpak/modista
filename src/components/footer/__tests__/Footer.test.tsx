import { render, screen } from "@testing-library/react";
import Footer from "../Footer";
import { MemoryRouter } from "react-router-dom";

describe("Footer tests", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );
  });

  it("should have links", async () => {
    const links = screen.getAllByRole("link");
    links.forEach((link) => {
      expect(link).toBeInTheDocument();
    });
  });

  it("should has actual copyright", async () => {
    const copyright = screen.getByText(/Copyright 2024/i);
    expect(copyright).toBeInTheDocument();
  });
});
