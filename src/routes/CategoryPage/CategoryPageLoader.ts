import { categoryLinks } from "./categoryLinks";

export const CategoryPageLoader = async (param: string) => {
  try {
    const URI = "https://dummyjson.com/products/category/";
    const requests = [];

    if (categoryLinks[param]) {
      const categoryRequests = categoryLinks[param].map((subcategory) => {
        return fetch(URI + subcategory.fullName).then((response) =>
          response.json(),
        );
      });
      requests.push(...categoryRequests);
    }

    const response = await Promise.all(requests);
    return response;
  } catch (error) {
    console.error("Error", error);
  }

  return null;
};
