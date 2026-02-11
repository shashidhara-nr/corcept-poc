import HeroEditorial from '../design-system/organisms/HeroEditorial';
import StoryCard from '../design-system/organisms/StoryCard';
import CenterBadge from '../design-system/organisms/CenterBadge';
import Understanding from '../design-system/organisms/Understanding';
import PipelineCta from '../design-system/organisms/PipelineCta';
import StatsBand from '../design-system/organisms/StatsBand';
import TeamGrid from '../design-system/organisms/TeamGrid';
import Pill from '../design-system/molecules/Pill';
import Container from '../design-system/atoms/Container';

export type Section =
  | ({ type: 'heroEditorial' } & React.ComponentProps<typeof HeroEditorial>)
  | ({ type: 'pills' } & { items: string[] })
  | ({ type: 'centerBadge' } & React.ComponentProps<typeof CenterBadge>)
  | ({ type: 'understanding' } & React.ComponentProps<typeof Understanding>)
  | ({ type: 'pipelineCta' } & React.ComponentProps<typeof PipelineCta>)
  | ({ type: 'statsBand' } & { stats: { value: string; label: string }[] })
  | ({ type: 'storyCard' } & React.ComponentProps<typeof StoryCard>)
  | ({ type: 'teamGrid' } & React.ComponentProps<typeof TeamGrid>);

export default function HomeTemplate({ sections }:{ sections: Section[] }) {
  return (
    <div>
      {sections.map((s, i) => {
        if (s.type === 'heroEditorial') return <HeroEditorial key={i} {...s} />;
        if (s.type === 'pills') return (
          <Container key={i} className="pb-6 flex flex-wrap gap-2">
            {s.items.map((t, j) => (<Pill key={j} label={t} />))}
          </Container>
        );
        if (s.type === 'centerBadge') return <CenterBadge key={i} {...s} />;
        if (s.type === 'understanding') return <Understanding key={i} {...s} />;
        if (s.type === 'pipelineCta') return <PipelineCta key={i} {...s} />;
        if (s.type === 'statsBand') return <StatsBand key={i} {...s} />;
        if (s.type === 'storyCard') return <StoryCard key={i} {...s} />;
        if (s.type === 'teamGrid') return <TeamGrid key={i} {...s} />;
        return null;
      })}
    </div>
  );
}
