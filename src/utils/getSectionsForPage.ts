// lib/getSectionsForPage.ts
import { contentfulClient } from "./contentfulClient";

// NOTE: contentful returns linked Assets/Entries resolved in the SDK.
// If you fetch via REST directly, use ?include=3 and resolve links.
export async function getSectionsForPage(pageslug: string) {
  const res = await contentfulClient.getEntries({
    "fields.pageslug": pageslug,
    content_type: "headerContent",
    include: 3,
    limit: 100,
  });

  return res.items; // array of different section entries
}
