import { render, screen } from "@testing-library/react";
import Footer from "../Footer";
import { MemoryRouter } from "react-router-dom";

it("should have links", async () => {
  render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>,
  );
  const links = screen.getAllByRole("link");
  links.forEach((link) => {
    expect(link).toBeInTheDocument();
  });
});

it("should has actual copyright", async () => {
  render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>,
  );
  const copyright = screen.getByText(/Copyright 2024/i);
  expect(copyright).toBeInTheDocument();
});
