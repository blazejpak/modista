import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import LinksImages from "../LinksImages";
import Testimonials from "../Testimonials";

describe("Homepage tests", () => {
  it("should contain links to all 3 categories", async () => {
    render(
      <MemoryRouter>
        <LinksImages />
      </MemoryRouter>,
    );
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(3);
  });

  it("should have more than 2 testimonials", async () => {
    render(
      <MemoryRouter>
        <Testimonials />
      </MemoryRouter>,
    );
    const testimonials = screen.getAllByRole("article");
    expect(testimonials).length.greaterThanOrEqual(2);
  });
});
