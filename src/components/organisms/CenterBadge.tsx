import Image from '../atoms/Image';
import Button from '../atoms/Button';

export default function CenterBadge({ imageUrl, title, ctaLabel, ctaHref }:{ imageUrl: string; title: string; ctaLabel?: string; ctaHref?: string; }) {
  return (
    <section className="relative">
      <div className="relative max-w-none">
        <Image src={imageUrl} alt="" className="w-full object-cover max-h-[420px]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="backdrop-blur bg-white/85 border rounded-2xl px-6 py-8 text-center shadow-focus">
            <h2 className="text-xl md:text-2xl font-semibold max-w-xl">{title}</h2>
            {ctaLabel && ctaHref && (
              <Button size="sm" className="mt-4" onClick={() => (window.location.href = ctaHref)}>{ctaLabel}</Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
