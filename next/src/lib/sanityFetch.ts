import { sanityClient } from "./sanityClient";

export const fetchTest = async () => {
  const query = `*[_type == "home"][0]{title, image}`;
  return await sanityClient.fetch(query);
};
