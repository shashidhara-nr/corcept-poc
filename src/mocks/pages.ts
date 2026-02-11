import type { Page } from '../contentful/types';
import mosaic from '../assets/mosaic.svg';
import pipeline from '../assets/pipeline.svg';
import story from '../assets/story.svg';

const pages: Page[] = [
  {
    slug: 'home',
    sections: [
      { type: 'heroEditorial', kicker: 'Explore the possibilities of', title: 'CORTISOL MODULATION.', body: 'Science-led research, robust pipeline, and perspectives that advance outcomes.', ctaLabel: 'Explore Science', ctaHref: '/science', emphasis: '' },
      { type: 'pills', items: ['Research', 'Pipeline', 'Resources'] },
      { type: 'centerBadge', imageUrl: mosaic, title: 'FOCUSED ON CORTISOL, FUELED BY INDEPENDENCE.', ctaLabel: 'Learn more', ctaHref: '/resources' },
      { type: 'understanding', title: 'UNDERSTAND CORTISOL.', body: 'Cortisol influences many systems. We focus on its modulation with rigor and care.', ctaLabel: 'Read overview', ctaHref: '/science' },
      { type: 'pipelineCta', imageUrl: pipeline, title: 'Discover the pipeline', body: 'A targeted approach designed to translate science into meaningful impact.', ctaLabel: 'View products', ctaHref: '/products' },
      { type: 'statsBand', stats: [ { value: '1000+', label: 'Participants across studies' }, { value: '30+', label: 'Clinical sites' }, { value: '25+', label: 'Years exploring cortisol' } ] },
      { type: 'storyCard', title: 'STORIES AND PERSPECTIVES.', ctaLabel: 'Browse resources', ctaHref: '/resources', imageUrl: story },
      { type: 'teamGrid', title: 'MEET THE EXECUTIVE TEAM', members: [
        { name: 'Alex Morgan', role: 'Chief Executive Officer' },
        { name: 'Jordan Patel', role: 'Chief Medical Officer' },
        { name: 'Casey Lin', role: 'Head of Research' },
        { name: 'Taylor Kim', role: 'Chief Operating Officer' },
        { name: 'Riley Shah', role: 'VP, Clinical Development' },
        { name: 'Sam Lee', role: 'VP, Communications' }
      ] }
    ]
  },
  {
    slug: 'about',
    sections: [
      { type: 'heroEditorial', title: 'About Corcept', body: 'Our mission and values guide every step of our work.' },
      { type: 'storyCard', title: 'Culture of integrity and curiosity', ctaLabel: 'Read resources', ctaHref: '/resources', imageUrl: story }
    ]
  },
  {
    slug: 'products',
    sections: [
      { type: 'heroEditorial', title: 'Products', body: 'Focused portfolio shaped by science and patient needs.' },
      { type: 'storyCard', title: 'Clinical programs and updates', ctaLabel: 'See updates', ctaHref: '/resources', imageUrl: pipeline }
    ]
  },
  {
    slug: 'science',
    sections: [
      { type: 'heroEditorial', title: 'The Science of Cortisol Modulation', body: 'Mechanisms, pathways, and evolving evidence.' },
      { type: 'storyCard', title: 'Deep dives & publications', ctaLabel: 'View library', ctaHref: '/resources', imageUrl: mosaic }
    ]
  },
  {
    slug: 'resources',
    sections: [
      { type: 'heroEditorial', title: 'Resources', body: 'Stories, perspectives, and learning materials.' },
      { type: 'storyCard', title: 'Featured resource', ctaLabel: 'Open resource', ctaHref: '/resources', imageUrl: story }
    ]
  },
  {
    slug: 'investors',
    sections: [
      { type: 'heroEditorial', title: 'Investors', body: 'Key materials, presentations, and company updates.' },
      { type: 'storyCard', title: 'Latest presentation deck', ctaLabel: 'Download', ctaHref: '/resources', imageUrl: mosaic }
    ]
  },
  { slug: '404', sections: [ { type: 'heroEditorial', title: 'Page not found', body: 'Try using the navigation above.' } ] }
];

export default pages;
