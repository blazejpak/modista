import ROUTES from "../../utils/routes";

interface LinksImg {
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
      label: "home decoration",
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
