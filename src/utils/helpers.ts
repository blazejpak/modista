import { Category, Product } from "./types";

export const URL = "https://dummyjson.com/";

export function getDataRatingAndDiscount(
  data: Category[],
  type: "discount" | "rating",
) {
  const highRatedProducts = [];

  if (!data) return null;

  for (const category of data) {
    let bestPrice = 0;
    let bestProduct = null;

    for (const product of category.products) {
      if (type === "discount" && product.discountPercentage > bestPrice) {
        bestPrice = product.discountPercentage;
        bestProduct = product;
      } else if (type === "rating" && product.rating > bestPrice) {
        bestPrice = product.rating;
        bestProduct = product;
      }
    }

    highRatedProducts.push(bestProduct);
  }
  if (!highRatedProducts) return null;

  highRatedProducts.sort((a, b) => {
    if (a && b) {
      if (type === "discount")
        return b.discountPercentage - a.discountPercentage;
      else if (type === "rating") return b.rating - a.rating;
    }
    return 0;
  });

  return highRatedProducts;
}

export function dataSort(data: Product[], typeSort: string) {
  data.sort((a, b) => {
    switch (typeSort) {
      case "Lowest price":
        return a.price - b.price;
      case "Highest price":
        return b.price - a.price;
      case "Discount":
        return a.discountPercentage - b.discountPercentage;
      case "Name":
        return a.title.localeCompare(b.title);

      default:
        return a.price - b.price;
    }
  });

  return data;
}
