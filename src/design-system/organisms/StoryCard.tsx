import Container from '../atoms/Container';
import Button from '../atoms/Button';
import Image from '../atoms/Image';

function HexPattern({ className = '' }:{ className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 200" preserveAspectRatio="none" aria-hidden>
      <defs>
        <pattern id="hex" width="20" height="34.64" patternUnits="userSpaceOnUse">
          <polygon points="10,0 20,5.77 20,17.32 10,23.09 0,17.32 0,5.77" fill="rgba(43,111,233,0.06)"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hex)" />
    </svg>
  );
}

export default function StoryCard({ title, ctaLabel, ctaHref, imageUrl }:{ title: string; ctaLabel?: string; ctaHref?: string; imageUrl: string; }) {
  return (
    <section className="relative py-14 overflow-hidden">
      <HexPattern className="absolute inset-0 w-full h-full" />
      <Container className="grid md:grid-cols-2 gap-8 items-center relative">
        <div>
          <h3 className="text-2xl font-semibold">{title}</h3>
          {ctaLabel && ctaHref && (
            <Button className="mt-5" onClick={() => (window.location.href = ctaHref)}>{ctaLabel}</Button>
          )}
        </div>
        <div className="justify-self-center">
          <div className="w-64 h-64 bg-white rounded-2xl shadow-focus grid place-items-center overflow-hidden">
            <Image src={imageUrl} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </Container>
    </section>
  );
}
