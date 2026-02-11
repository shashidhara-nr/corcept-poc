import type { SiteConfig } from '../contentful/types';

const siteConfig: SiteConfig = {
  brandName: 'Corcept',
  navigation: [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Products', path: '/products' },
    { label: 'Science', path: '/science' },
    { label: 'Resources', path: '/resources' },
    { label: 'Investors', path: '/investors' }
  ]
};

export default siteConfig;
