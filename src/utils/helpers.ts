import { Category } from "./types";

export const URL = "https://dummyjson.com/";

export function getDataRatingAndDiscount(
  data: Category[],
  type: "discount" | "rating",
) {
  try {
    const highRatedProducts = [];

    if (!data) return null;
    else {
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
      else {
        highRatedProducts.sort((a, b) => {
          if (a && b) {
            if (type === "discount")
              return b?.discountPercentage - a?.discountPercentage;
            else if (type === "rating") return b?.rating - a?.rating;
          }
          return 0;
        });
      }
    }
    return highRatedProducts;
  } catch (error) {
    console.error(error);
  }
}
