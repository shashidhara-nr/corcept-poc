import Container from '../atoms/Container';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import Image from '../atoms/Image';

export default function Understanding({ title, body, ctaLabel, ctaHref, smallImage }:{ title: string; body: string; ctaLabel?: string; ctaHref?: string; smallImage?: string; }) {
  return (
    <section className="relative py-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[90%] h-40 border-t border-brand-100" style={{ transform: 'translateX(-50%) skewY(7deg)' }} />
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[80%] h-40 border-b border-brand-100" style={{ transform: 'translateX(-50%) skewY(-7deg)' }} />
      </div>
      <Container className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <Heading level={2}>{title}</Heading>
          <Text className="mt-3">{body}</Text>
          {ctaLabel && ctaHref && (
            <Button size="sm" className="mt-5" onClick={() => (window.location.href = ctaHref)}>{ctaLabel}</Button>
          )}
        </div>
        {smallImage && (
          <div className="justify-self-center">
            <Image src={smallImage} alt="" className="w-48 h-48 object-cover rounded-xl shadow" />
          </div>
        )}
      </Container>
    </section>
  );
}
