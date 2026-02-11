import Container from '../atoms/Container';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';
import Button from '../atoms/Button';

export default function HeroEditorial({ kicker, title, emphasis, body, ctaLabel, ctaHref }:{
  kicker?: string; title: string; emphasis?: string; body?: string; ctaLabel?: string; ctaHref?: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <Container className="py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          {kicker && <div className="text-brand-700 font-semibold text-sm">{kicker}</div>}
          <Heading level={1} className="mt-2">
            {title} {emphasis && <span className="text-brand-700">{emphasis}</span>}
          </Heading>
          {body && <Text className="mt-4">{body}</Text>}
          {ctaLabel && ctaHref && (
            <Button className="mt-6" onClick={() => (window.location.href = ctaHref)}>{ctaLabel}</Button>
          )}
        </div>
        <div className="relative h-64 md:h-80">
          <div
            className="absolute right-0 top-0 h-full w-[85%] rounded-xl"
            style={{
              background: 'radial-gradient(120% 120% at 60% 40%, #2B6FE9 0%, #0D2C6F 70%)',
              clipPath: 'polygon(15% 0%, 100% 0%, 100% 85%, 75% 100%, 0% 100%, 0% 15%)',
              filter: 'saturate(120%)'
            }}
          />
        </div>
      </Container>
    </section>
  );
}
