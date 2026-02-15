import HeroEditorial from "../components/organisms/HeroEditorial";
import StoryCard from "../components/organisms/StoryCard";
import CenterBadge from "../components/organisms/CenterBadge";
import Understanding from "../components/organisms/Understanding";
import PipelineCta from "../components/organisms/PipelineCta";
import StatsBand from "../components/organisms/StatsBand";
import TeamGrid from "../components/organisms/TeamGrid";
import Pill from "../components/molecules/Pill";
import Container from "../components/atoms/Container";

export type Section =
  | ({ type: "heroEditorial" } & React.ComponentProps<typeof HeroEditorial>)
  | ({ type: "pills" } & { items: string[] })
  | ({ type: "centerBadge" } & React.ComponentProps<typeof CenterBadge>)
  | ({ type: "understanding" } & React.ComponentProps<typeof Understanding>)
  | ({ type: "pipelineCta" } & React.ComponentProps<typeof PipelineCta>)
  | ({ type: "statsBand" } & { stats: { value: string; label: string }[] })
  | ({ type: "storyCard" } & React.ComponentProps<typeof StoryCard>)
  | ({ type: "teamGrid" } & React.ComponentProps<typeof TeamGrid>);

export default function HomeTemplate({ sections }: { sections: Section[] }) {
  return (
    <div>
      {sections.map((section, i) => {
        switch (section.type) {
          case "heroEditorial":
            return <HeroEditorial key={i} {...section} />;
          case "pills":
            return (
              <Container key={i} className="pb-6 flex flex-wrap gap-2">
                {section.items.map((t, j) => (
                  <Pill key={j} label={t} />
                ))}
              </Container>
            );
          // case 'centerBadge':
          //   return <CenterBadge key={i} {...section} />;
          // case 'understanding':
          //   return <Understanding key={i} {...section} />;
          // case 'pipelineCta':
          //   return <PipelineCta key={i} {...section} />;
          // case 'statsBand':
          //   return <StatsBand key={i} {...section} />;
          // case 'storyCard':
          //   return <StoryCard key={i} {...section} />;
          // case 'teamGrid':
          //   return <TeamGrid key={i} {...section} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
