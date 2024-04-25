import { categoryLinks } from "./routes";
import { Cart, Category, Product } from "./types";

export const URL = "https://dummyjson.com/";

export function pushDataIntoArray(data: Category[]) {
  if (!data) return null;

  const initialData = data.flatMap((items) => items.products);

  return initialData;
}

export function getDataRatingAndDiscount(
  data: Product[],
  type: "discount" | "rating",
) {
  if (!data) return null;

  const sortedData = data
    .sort((a, b) => {
      if (a && b) {
        if (type === "discount")
          return b.discountPercentage - a.discountPercentage;
        else if (type === "rating") return b.rating - a.rating;
      }
      return 0;
    })
    .slice(0, 3);

  return sortedData;
}

export function dataSort(data: Product[], typeSort: string) {
  const sortedData = [...data];

  sortedData.sort((a, b) => {
    switch (typeSort) {
      case "Lowest price":
        return a.price - b.price;
      case "Highest price":
        return b.price - a.price;
      case "Discount":
        return b.discountPercentage - a.discountPercentage;
      case "Name":
        return a.title.localeCompare(b.title);

      default:
        return a.price - b.price;
    }
  });

  return sortedData;
}

export function getDataByCategory(data: Product[], param: string) {
  try {
    if (!data || !param) return null;

    let filteredData: Product[] = [];

    if (categoryLinks[param]) {
      const categoryItems = categoryLinks[param];
      const categoriesFullName = categoryItems.map((item) => item.fullName);

      for (const category of categoriesFullName) {
        const categoryData = data.filter((item) => item.category === category);
        filteredData.push(...categoryData);
      }
    }
    return filteredData;
  } catch (error) {
    console.log(error);
  }
}

export function getDataBySubcategory(data: Product[], param: string) {
  try {
    if (!data || !param) return null;
    let filteredData = data.filter((product) => product.category === param);

    return filteredData;
  } catch (error) {
    console.log(error);
  }
}

export function getProductById(data: Product[], id: string) {
  try {
    if (!data || !id) return null;

    const filteredData = data.find((product) => product.id === Number(id));
    return filteredData;
  } catch (error) {
    console.log(error);
  }
}

export function groupProductInCartByAmount(data: Cart[]) {
  // TODO type Record

  if (!data) return [];

  const groupAmount = data.reduce(
    (result: Record<string | number, Cart>, item) => {
      if (item && item.id) {
        if (!result[item.id]) {
          result[item.id] = { ...item, amount: 0, totalPrice: 0 };
        }

        result[item.id].amount += item.amount;
        result[item.id].totalPrice += item.price * item.amount;
      }
      return result;
    },
    {},
  );
  const cartData: Cart[] = Object.values(groupAmount);
  return cartData;
}
