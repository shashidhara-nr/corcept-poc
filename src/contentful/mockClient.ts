import { createClient } from "contentful";
import mockSiteConfig from "../mocks/siteConfig";
import pages from "../mocks/pages";
import articles from "../mocks/articles";
import type { SiteConfig, Page, Article } from "./types";
import { buildMenuFromRest } from "../utils/buildMenuFromRest";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

const contentfulClient = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

export async function getSiteConfig(): Promise<SiteConfig> {
  try {
    const entries = await contentfulClient.getEntries({
      content_type: "navigationMenu",
      limit: 1,
    });
    if (entries.items.length > 0) {
      return buildMenuFromRest(entries) as any;
    }
  } catch (error) {
    console.error("Error fetching siteConfig from Contentful:", error);
  }
  return mockSiteConfig;
}
export async function getPageBySlug(slug: string): Promise<Page | null> {
  await delay(100);
  return pages.find((p) => p.slug === slug) ?? null;
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  await delay(100);
  return articles.find((a) => a.slug === slug) ?? null;
}
