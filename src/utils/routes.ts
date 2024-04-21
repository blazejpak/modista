const ROUTES = {
  HOMEPAGE: "/",
  CART: "/cart",
  CHECKOUT: "/checkout",
  MEN: "category/men",
  MEN_SHIRTS: "category/men/shirts",
  MEN_SHOES: "category/men/shoes",
  MEN_WATCHES: "category/men/watches",
  WOMEN: "category/women",
  WOMEN_DRESSES: "category/women/dresses",
  WOMEN_SHOES: "category/women/shoes",
  WOMEN_WATCHES: "category/women/watches",
  WOMEN_BAGS: "category/women/bags",
  WOMEN_JEWELLERY: "category/women/jewellery",
  ACCESSORIES: "category/accessories",
  ACCESSORIES_DECORATIONS: "category/accessories/home-decoration",
  ACCESSORIES_FURNITURE: "category/accessories/furniture",
  ACCESSORIES_SKINCARE: "category/accessories/skincare",
  ACCESSORIES_SUNGLASSES: "category/accessories/sunglasses",
};

export const navLinks = {
  men: [
    { link: ROUTES.MEN, label: "all" },
    { link: ROUTES.MEN_SHIRTS, label: "shirts" },
    { link: ROUTES.MEN_SHOES, label: "shoes" },
    { link: ROUTES.MEN_WATCHES, label: "watches" },
  ],
  women: [
    { link: ROUTES.WOMEN, label: "all" },
    { link: ROUTES.WOMEN_DRESSES, label: "dresses" },
    { link: ROUTES.WOMEN_SHOES, label: "shoes" },
    { link: ROUTES.WOMEN_WATCHES, label: "watches" },
    { link: ROUTES.WOMEN_BAGS, label: "bags" },
    { link: ROUTES.WOMEN_JEWELLERY, label: "jewellery" },
  ],
  accessories: [
    { link: ROUTES.ACCESSORIES, label: "all" },
    { link: ROUTES.ACCESSORIES_DECORATIONS, label: "home-decoration" },
    { link: ROUTES.ACCESSORIES_FURNITURE, label: "furniture" },
    { link: ROUTES.ACCESSORIES_SKINCARE, label: "skincare" },
    { link: ROUTES.ACCESSORIES_SUNGLASSES, label: "sunglasses" },
  ],
};

export default ROUTES;
