import { categoryLinks, paramsLinks } from "./routes";
import { Cart, Category, Product } from "./types";

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
        return a.priceWithDiscount - b.priceWithDiscount;
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
  if (!data) return [];
  let groupObject = {} as Cart[];

  for (const product of data) {
    if (product.amount && product.amount >= 0) {
      if (!groupObject[product.id]) {
        groupObject[product.id] = { ...product, amount: product.amount };
      } else {
        if (groupObject[product.id].amount === 0) {
          groupObject[product.id].amount = 1;
        } else {
          groupObject[product.id].amount += 1;
        }
      }
    } else {
      if (!groupObject[product.id]) {
        groupObject[product.id] = { ...product, amount: 1 };
      } else {
        groupObject[product.id].amount += 1;
      }
    }
  }

  const cartData = Object.values(groupObject);

  return cartData;
}

export function getParamBySubcategory(product: Product) {
  if (!product) return null;

  const param = paramsLinks.find((item) => item.fullName === product.category);

  return param?.link;
}
