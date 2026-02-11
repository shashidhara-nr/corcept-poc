import type { Article } from '../contentful/types';

const articles: Article[] = [
  {
    slug: 'getting-started',
    title: 'Getting Started with the Mocked CMS',
    excerpt: 'Develop quickly without backend dependencies.',
    publishedDate: '2025-12-15',
    body: [
      { nodeType: 'paragraph', value: 'Use the mocked client to render sections and pages locally.' },
      { nodeType: 'heading-2', value: 'Swap strategy' },
      { nodeType: 'paragraph', value: 'Later, switch to the Contentful SDK with minimal changes.' }
    ]
  }
];

export default articles;
