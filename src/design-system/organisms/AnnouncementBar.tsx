import Container from '../atoms/Container';

export default function AnnouncementBar() {
  return (
    <div className="bg-brand-900 text-white text-xs sm:text-sm">
      <Container className="py-2 flex items-center justify-between">
        <span>Explore the possibilities of cortisol modulation.</span>
        <a href="/science" className="underline underline-offset-2 hover:text-accent-500">Learn more</a>
      </Container>
    </div>
  );
}
