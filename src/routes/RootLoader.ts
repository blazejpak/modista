import { categoryLinks } from "../utils/routes";
import { URL } from "../utils/variables";

export const RootLoader = async () => {
  try {
    const URI = `${URL}products/category/`;
    const requests = [];
    for (const category in categoryLinks) {
      if (categoryLinks[category]) {
        const categoryRequests = categoryLinks[category].map((subcategory) => {
          return fetch(URI + subcategory.fullName).then((response) =>
            response.json(),
          );
        });
        requests.push(...categoryRequests);
      }
    }
    const response = await Promise.all(requests);
    return response;
  } catch (error) {
    console.error("Error", error);
  }
<<<<<<< HEAD

  return null;
=======
>>>>>>> 85cdc32feb2d1570b9fc2de74fd7df5d7951ddbb
};
