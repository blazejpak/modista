type SortType = {
  label: string;
  id: number;
};

export const sortType: SortType[] = [
  { label: "Lowest price", id: 0 },
  { label: "Highest price", id: 1 },
  { label: "Discount", id: 2 },
  { label: "Name", id: 3 },
];

export function dataSort(data: any[], typeSort: string) {
  try {
    const sortedProducts = [];

    console.log(data);

    if (data) {
      for (const product of data) {
        console.log(product);
        let sort = 0;
        let sortProduct = null;

        if (typeSort === "Lowest price") {
          if (product.price > sort) {
            sort = product.price;
            sortProduct = product;
          }
        }

        if (typeSort === "Highest price") {
          if (product.price > sort) {
            sort = product.price;
            sortProduct = product;
          }
        }

        if (typeSort === "Discount") {
          if (product.discountPercentage > sort) {
            sort = product.discountPercentage;
            sortProduct = product;
          }
        }

        if (typeSort === "Name") {
          sortProduct = product;
        }

        sortedProducts.push(sortProduct);
      }
      if (sortedProducts) {
        sortedProducts.sort((a, b) => {
          if (a && b) {
            if (typeSort === "Lowest price") return a?.price - b?.price;
            if (typeSort === "Highest price") return b?.price - a?.price;
            if (typeSort === "Discount")
              return a?.discountPercentage - b?.discountPercentage;
            if (typeSort === "Name") {
              if (a.name < b.name) return -1;
              if (a.name > b.name) return 1;
              return 0;
            }
          }
          return 0;
        });
      }
    }
    return sortedProducts;
  } catch (error) {
    console.error(error);
    return [];
  }
}
