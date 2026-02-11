import Image from '../atoms/Image';
import Container from '../atoms/Container';
import Button from '../atoms/Button';

export default function PipelineCta({ imageUrl, title, body, ctaLabel, ctaHref }:{ imageUrl: string; title: string; body?: string; ctaLabel?: string; ctaHref?: string; }) {
  return (
    <section className="relative">
      <Image src={imageUrl} alt="" className="w-full h-[420px] object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/45 to-black/15" />
      <div className="absolute inset-0">
        <Container className="h-full flex items-center">
          <div className="max-w-xl text-white">
            <h3 className="text-3xl font-semibold">{title} <span className="text-accent-500">built for patients.</span></h3>
            {body && <p className="mt-3 text-white/90">{body}</p>}
            {ctaLabel && ctaHref && (
              <Button variant="secondary" className="mt-5" onClick={() => (window.location.href = ctaHref)}>{ctaLabel}</Button>
            )}
          </div>
        </Container>
      </div>
    </section>
  );
}
