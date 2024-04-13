import { URL } from "../../utils/helpers";
import { categoryLinks } from "../CategoryPage/categoryLinks";

export const HomePageLoader = async () => {
  try {
    const URI = `${URL}products/category/`;
    const requests = [];
    for (const category in categoryLinks) {
      console.log(category);
      if (categoryLinks[category]) {
        const categoryRequests = categoryLinks[category].map((subcategory) => {
          return fetch(URI + subcategory.fullName).then((response) =>
            response.json(),
          );
        });
        console.log(categoryRequests);
        requests.push(...categoryRequests);
      }
    }
    console.log(requests);
    const response = await Promise.all(requests);
    return response;
  } catch (error) {
    console.error("Error", error);
  }

  return null;
};
