import { Category, Product } from "./types";

export const URL = "https://dummyjson.com/";

type ProductType = 'discountPercentage' | 'rating';

const mappingNames = {
  discount: 'discountPercentage',
  rating: 'rating'
}

export function getDataRatingAndDiscount(
  data: Category[],
  type: "discount" | "rating",
) {
  try {
    const highRatedProducts: Product[] = [];
    const _type = mappingNames[type] as ProductType;

    if (!data) { return }
    
    for (const category of data) {
      let bestPrice = 0;
      let bestProduct = null;

      for (const product of category.products) {
        if (product.discountPercentage > bestPrice) {
          bestPrice = product[_type];
          bestProduct = product;
        }
        
        if (!bestProduct) {
          continue;
        }

        highRatedProducts.push(bestProduct);
      }

      highRatedProducts?.sort((a, b) => b[_type] - a[_type]);
    }
    return highRatedProducts;
  } catch (error) {
    console.error(error);
  }
}