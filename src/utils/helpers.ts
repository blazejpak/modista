import { Category, Product } from "./types";

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

export function dataSort(data: Product[], typeSort: string) {
  try {
    if (!data) return null;
    else {
      data.sort((a, b) => {
        if (a && b) {
          if (typeSort === "Lowest price") return a.price - b.price;
          else if (typeSort === "Highest price") return b.price - a.price;
          else if (typeSort === "Discount")
            return a.discountPercentage - b.discountPercentage;
          else if (typeSort === "Name") {
            return a.title.localeCompare(b.title);
          }
        }
        return 0;
      });

      return data;
    }
  } catch (error) {
    console.error(error);
    return [];
  }
}
