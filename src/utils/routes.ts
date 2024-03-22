const ROUTES = {
  HOMEPAGE: "/",
  MEN: "/men",
  MEN_SHIRTS: "/men/shirts",
  MEN_SHOES: "/men/shoes",
  MEN_WATCHES: "/men/watches",
  WOMEN: "/women",
  WOMEN_DRESSES: "/women/dresses",
  WOMEN_SHOES: "/women/shoes",
  WOMEN_WATCHES: "/women/watches",
  WOMEN_BAGS: "/women/bags",
  WOMEN_JEWELLERY: "/women/jewellery",
  ACCESSORIES: "/accessories",
  ACCESSORIES_DECORATIONS: "/accessories/home-decoration",
  ACCESSORIES_FURNITURE: "/accessories/furniture",
  ACCESSORIES_SKINCARE: "/accessories/skincare",
  ACCESSORIES_SUNGLASSES: "/accessories/sunglasses",
};

export const navLinks = {
  men: [
    { link: ROUTES.MEN_SHIRTS, label: "shirts" },
    { link: ROUTES.MEN_SHOES, label: "shoes" },
    { link: ROUTES.MEN_WATCHES, label: "watches" },
  ],
  women: [
    { link: ROUTES.WOMEN_DRESSES, label: "dresses" },
    { link: ROUTES.WOMEN_SHOES, label: "shoes" },
    { link: ROUTES.WOMEN_WATCHES, label: "watches" },
    { link: ROUTES.WOMEN_BAGS, label: "bags" },
    { link: ROUTES.WOMEN_JEWELLERY, label: "jewellery" },
  ],
  accessories: [
    { link: ROUTES.ACCESSORIES_DECORATIONS, label: "home decoration" },
    { link: ROUTES.ACCESSORIES_FURNITURE, label: "furniture" },
    { link: ROUTES.ACCESSORIES_SKINCARE, label: "skincare" },
    { link: ROUTES.ACCESSORIES_SUNGLASSES, label: "sunglasses" },
  ],
};

export default ROUTES;
