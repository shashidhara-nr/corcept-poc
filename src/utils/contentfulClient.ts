// lib/contentfulClient.ts
import { createClient } from "contentful";

export const contentfulClient = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  environment: import.meta.env.VITE_CONTENTFUL_ENV_ID || "master",
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});
