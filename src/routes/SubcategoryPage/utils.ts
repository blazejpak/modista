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
