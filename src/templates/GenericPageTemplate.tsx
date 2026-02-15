import HeroEditorial from '../components/organisms/HeroEditorial';
import StoryCard from '../components/organisms/StoryCard';

export type Section =
  | ({ type: 'heroEditorial' } & React.ComponentProps<typeof HeroEditorial>)
  | ({ type: 'storyCard' } & React.ComponentProps<typeof StoryCard>);

export default function GenericPageTemplate({ sections }:{ sections: Section[] }) {
  return (
    <div>
      {sections.map((s, i) => {
        if (s.type === 'heroEditorial') return <HeroEditorial key={i} {...s} />;
        if (s.type === 'storyCard') return <StoryCard key={i} {...s} />;
        return null;
      })}
    </div>
  );
}
