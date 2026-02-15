import Container from '../atoms/Container';
export default function Footer() {
  return (
    <footer className="mt-16">
      <div className="bg-[#173a90] text-white">
        <Container className="py-10 grid sm:grid-cols-2 gap-6">
          <div>
            <div className="text-lg font-semibold">Corcept</div>
            <p className="text-sm text-white/80 mt-2">Focused on cortisol, fueled by independence.</p>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="/science" className="hover:text-accent-500">Science</a>
            <a href="/resources" className="hover:text-accent-500">Resources</a>
            <a href="/investors" className="hover:text-accent-500">Investors</a>
          </div>
        </Container>
      </div>
      <div className="text-xs text-gray-500 py-3 text-center">
        © {new Date().getFullYear()} Corcept. All rights reserved.
      </div>
    </footer>
  );
}
