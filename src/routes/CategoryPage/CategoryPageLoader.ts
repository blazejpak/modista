import { URL } from "../../utils/helpers";
import { categoryLinks } from "../../utils/routes";

export const CategoryPageLoader = async (param: string) => {
  try {
    const URI = `${URL}products/category/`;
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
