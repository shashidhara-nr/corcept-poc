export type NavItem = { label: string; path: string };
export type SiteConfig = { brandName: string; navigation: NavItem[] };
export type Page = { slug: string; sections: any[] };
export type Article = {
  slug: string;
  title: string;
  excerpt?: string;
  body: { nodeType: 'paragraph' | 'heading-2'; value: string }[];
  publishedDate: string;
};
