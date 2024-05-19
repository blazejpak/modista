import { render, screen } from "@testing-library/react";
import SubCategories from "../SubCategories";
import { MemoryRouter } from "react-router-dom";

describe("CategoryPage, subcategory tests:", () => {
  vi.mock("react-router-dom", async () => {
    const mod = await vi.importActual("react-router-dom");
    return {
      ...mod,
      useParams: () => ({ category: "men" }),
    };
  });

  it("should show 34 links do subcategories", () => {
    render(
      <MemoryRouter>
        <SubCategories />
      </MemoryRouter>,
    );

    const link = screen.getAllByRole("link");
    expect(link).toHaveLength(3);
  });
});
