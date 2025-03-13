import { createClient } from "next-sanity";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: process.env.NEXT_PUBLIC_SANITY_USE_CDN === "false",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
});
