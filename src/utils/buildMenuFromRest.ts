type NavNode = {
  title: string;
  path: string;
  order: number;
  children?: NavNode[];
};

type ContentfulEntry = {
  sys: { id: string; contentType: { sys: { id: string } } };
  fields: Record<string, any>;
};

export function buildMenuFromRest(restJson: any, locale = 'en-US'): NavNode[] {
  // 1) Create a lookup of all included entries by id
  const includeEntries: ContentfulEntry[] = restJson?.includes?.Entry ?? [];
  const byId = new Map<string, ContentfulEntry>(
    includeEntries.map((e) => [e.sys.id, e])
  );

  // Helper to safely get a localized field (Contentful may localize fields)
  const get = (obj: any, key: string) => {
    const v = obj?.[key];
    // If it's localized: { 'en-US': value }, else direct scalar
    if (v && typeof v === 'object' && v[locale] !== undefined) return v[locale];
    return v;
  };

  // 2) Resolve a NavigationItem entry (and optional children)
  const toNode = (entry: ContentfulEntry): NavNode => {
    const f = entry.fields;
    const node: NavNode = {
      title: get(f, 'title'),
      path: get(f, 'path'),
      order: get(f, 'order') ?? 0,
    };

    // Optional: if you added a "children" reference field to navigationItem
    const childrenLinks: any[] = get(f, 'children') ?? [];
    if (Array.isArray(childrenLinks) && childrenLinks.length) {
      node.children = childrenLinks
        .map((link) => byId.get(link.sys?.id))
        .filter(Boolean)
        .map((child) => toNode(child as ContentfulEntry))
        .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
    }

    return node;
  };

  // 3) Find the first navigationMenu item and resolve its items list
  const menuEntry = restJson?.items?.[0]; // because you requested limit=1
  const itemLinks: any[] = menuEntry?.fields?.items ?? [];

  // 4) Resolve, transform, and sort
  const nodes: NavNode[] = itemLinks
    .map((link) => byId.get(link.sys?.id))
    .filter(Boolean)
    .map((e) => toNode(e as ContentfulEntry))
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  return nodes;
}