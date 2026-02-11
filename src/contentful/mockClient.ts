import { createClient } from 'contentful';
import mockSiteConfig from '../mocks/siteConfig';
import pages from '../mocks/pages';
import articles from '../mocks/articles';
import type { SiteConfig, Page, Article } from './types';
import { buildMenuFromRest } from '../utils/buildMenuFromRest';

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

const contentfulClient = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

export async function getSiteConfig(): Promise<SiteConfig> {
  try {
    const entries = await contentfulClient.getEntries({
      content_type: 'navigationMenu',
      limit: 1,
    });
    if (entries.items.length > 0) {
      return buildMenuFromRest(entries) as any; // You may want to adjust this based on your actual Contentful structure
      // return (entries.items[0] as any).fields as SiteConfig;
    }
  } catch (error) {
    console.error('Error fetching siteConfig from Contentful:', error);
  }
  return mockSiteConfig;
}
export async function getPageBySlug(slug: string): Promise<Page | null> { await delay(100); return pages.find(p => p.slug === slug) ?? null; }
export async function getArticles(): Promise<Article[]> { await delay(100); return articles; }
export async function getArticleBySlug(slug: string): Promise<Article | null> { await delay(100); return articles.find(a => a.slug === slug) ?? null; }

export async function getEntries<T = unknown>(opts: { content_type: string; 'fields.slug'?: string }) {
  await delay(100);
  if (opts.content_type === 'page') {
    const items = pages.filter(p => (opts['fields.slug'] ? p.slug === opts['fields.slug'] : true)).map(p => ({ sys: { id: p.slug }, fields: p })) as any[];
    return { items };
  }
  if (opts.content_type === 'article') {
    const items = (opts['fields.slug'] ? articles.filter(a => a.slug === opts['fields.slug']) : articles).map(a => ({ sys: { id: a.slug }, fields: a })) as any[];
    return { items };
  }
  if (opts.content_type === 'siteConfig') {
    const items = [{ sys: { id: 'site-config' }, fields: mockSiteConfig }] as any[];
    return { items };
  }
  return { items: [] as any[] };
}

export async function getEntry<T = unknown>(id: string) {
  await delay(100);
  const match = pages.find(p => p.slug === id) || articles.find(a => a.slug === id);
  if (!match) return null;
  return { sys: { id }, fields: match } as any;
}



export async function fetchLogoUrlByAssetId(assetId: string): Promise<string | undefined> {
  const asset = await contentfulClient.getAsset(assetId);
  const raw = (asset as any)?.fields?.file?.url as string | undefined; // often starts with "//"
  if (!raw) return undefined;
  return raw.startsWith('//') ? `https:${raw}` : raw;
}
