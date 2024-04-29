export const ROUTES = {
  HOMEPAGE: "/",
  CART: "/cart",
  CHECKOUT: "/checkout",
  SEARCH: "/search",
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

export interface LinksImg {
  [key: string]: {
    link: string;
    label: string;
    img: string;
    fullName: string;
  }[];
}

export const categoryLinks: LinksImg = {
  men: [
    {
      link: ROUTES.MEN_SHIRTS,
      label: "shirts",
      img: "/src/assets/categoryPage/men/men-tshirt.jpg",
      fullName: "mens-shirts",
    },
    {
      link: ROUTES.MEN_SHOES,
      label: "shoes",
      img: "/src/assets/categoryPage/men/men-shoes.jpg",
      fullName: "mens-shoes",
    },
    {
      link: ROUTES.MEN_WATCHES,
      label: "watches",
      img: "/src/assets/categoryPage/men/men-watch.jpg",
      fullName: "mens-watches",
    },
  ],
  women: [
    {
      link: ROUTES.WOMEN_DRESSES,
      label: "dresses",
      img: "/src/assets/categoryPage/women/women-dress.jpg",
      fullName: "womens-dresses",
    },
    {
      link: ROUTES.WOMEN_SHOES,
      label: "shoes",
      img: "/src/assets/categoryPage/women/women-shoes.jpg",
      fullName: "womens-shoes",
    },
    {
      link: ROUTES.WOMEN_WATCHES,
      label: "watches",
      img: "/src/assets/categoryPage/women/women-watch.jpg",
      fullName: "womens-watches",
    },
    {
      link: ROUTES.WOMEN_BAGS,
      label: "bags",
      img: "/src/assets/categoryPage/women/women-bag.jpg",
      fullName: "womens-bags",
    },
    {
      link: ROUTES.WOMEN_JEWELLERY,
      label: "jewellery",
      img: "/src/assets/categoryPage/women/women-jewellery.jpg",
      fullName: "womens-jewellery",
    },
  ],
  accessories: [
    {
      link: ROUTES.ACCESSORIES_DECORATIONS,
      label: "home-decoration",
      img: "/src/assets/categoryPage/accessories/accessories-decoration.jpg",
      fullName: "home-decoration",
    },
    {
      link: ROUTES.ACCESSORIES_FURNITURE,
      label: "furniture",
      img: "/src/assets/categoryPage/accessories/accessories-furniture.jpg",
      fullName: "furniture",
    },
    {
      link: ROUTES.ACCESSORIES_SKINCARE,
      label: "skincare",
      img: "/src/assets/categoryPage/accessories/accessories-skincare.jpg",
      fullName: "skincare",
    },
    {
      link: ROUTES.ACCESSORIES_SUNGLASSES,
      label: "sunglasses",
      img: "/src/assets/categoryPage/accessories/accessories-sunglasses.jpg",
      fullName: "sunglasses",
    },
  ],
};

export const paramsLinks = [
  {
    link: ROUTES.MEN_SHIRTS,
    fullName: "mens-shirts",
  },
  {
    link: ROUTES.MEN_SHOES,
    fullName: "mens-shoes",
  },
  {
    link: ROUTES.MEN_WATCHES,
    fullName: "mens-watches",
  },

  {
    link: ROUTES.WOMEN_DRESSES,
    fullName: "womens-dresses",
  },
  {
    link: ROUTES.WOMEN_SHOES,
    fullName: "womens-shoes",
  },
  {
    link: ROUTES.WOMEN_WATCHES,
    fullName: "womens-watches",
  },
  {
    link: ROUTES.WOMEN_BAGS,
    fullName: "womens-bags",
  },
  {
    link: ROUTES.WOMEN_JEWELLERY,
    fullName: "womens-jewellery",
  },

  {
    link: ROUTES.ACCESSORIES_DECORATIONS,
    fullName: "home-decoration",
  },
  {
    link: ROUTES.ACCESSORIES_FURNITURE,
    fullName: "furniture",
  },
  {
    link: ROUTES.ACCESSORIES_SKINCARE,
    fullName: "skincare",
  },
  {
    link: ROUTES.ACCESSORIES_SUNGLASSES,
    fullName: "sunglasses",
  },
];
