import { Product, SortType } from "./types";

export const sortType: SortType[] = [
  { label: "Lowest price", id: 0 },
  { label: "Highest price", id: 1 },
  { label: "Discount", id: 2 },
  { label: "Name", id: 3 },
];

export const URL = "https://dummyjson.com/";

export const deliveryPrice = 4.99;

export const cartOrderValue = (data: Product[]) => {
  const orderValue = data.reduce((acc, product) => {
    acc += product.priceWithDiscount * product.amount;

    return acc;
  }, 0);

  return orderValue;
};

export const cartTotalPrice = (cartOrderValue: number) => {
  return cartOrderValue + deliveryPrice;
};
