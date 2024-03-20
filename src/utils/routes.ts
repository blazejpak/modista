type Routes = {
  HOMEPAGE: string;
  MEN: string;
  WOMEN: string;
  ACCESSORIES: string;
  HOME: string;
  MEN_SHIRTS: string;
  MEN_SHOES: string;
  MEN_WATCHES: string;
  WOMEN_TOPS: string;
  WOMEN_DRESSES: string;
  WOMEN_SHOES: string;
  WOMEN_WATCHES: string;
  HOME_DECORATIONS: string;
  HOME_FURNITURE: string;
};
const ROUTES: Routes = {
  HOMEPAGE: "/",
  MEN: "/men",
  MEN_SHIRTS: "/men/shirts",
  MEN_SHOES: "/men/shoes",
  MEN_WATCHES: "/men/watches",
  WOMEN: "/women",
  WOMEN_TOPS: "/women/tops",
  WOMEN_DRESSES: "/women/tops",
  WOMEN_SHOES: "/women/tops",
  WOMEN_WATCHES: "/women/watches",
  ACCESSORIES: "/accessories",
  HOME: "/home",
  HOME_DECORATIONS: "/home/decorations",
  HOME_FURNITURE: "/home/furniture",
};

export const NavLinks = {
  men: [
    { link: ROUTES.MEN_SHIRTS, label: "shirts" },
    { link: "", label: "shoes" },
    { link: "", label: "watches" },
  ],
  women: [
    { link: "", label: "dresses" },
    { link: "", label: "shoes" },
    { link: "", label: "watches" },
    { link: "", label: "bags" },
    { link: "", label: "jewellery" },
  ],
  accessories: [
    { link: "", label: "groceries" },
    { link: "", label: "lighting" },
  ],
};

export default ROUTES;
