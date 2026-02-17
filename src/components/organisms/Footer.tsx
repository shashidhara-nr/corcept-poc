import Container from "../atoms/Container";
export default function Footer() {
  return (
    <footer className="mt-16">
      <div className="bg-[#173a90] text-white">
        <Container className="mx-4 px-4 py-10 grid sm:grid-cols-1 gap-6">
          <div className="flex gap-12 text-lg justify-between">
            <div className="hover:text-accent-500">
              © {new Date().getFullYear()} Corcept. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="/science" className="hover:text-accent-500">
                Privacy Notice
              </a>
              <span> | </span>
              <a href="/resources" className="hover:text-accent-500">
                Terms of Use
              </a>
              <span> | </span>
              <a href="/investors" className="hover:text-accent-500">
                Site Map
              </a>
              <span> | </span>
              <a href="/science" className="hover:text-accent-500">
                Your Privacy Choices
              </a>
              <span> | </span>
              <a href="/resources" className="hover:text-accent-500">
                LinkedIn
              </a>
              <span> | </span>
              <a href="/investors" className="hover:text-accent-500">
                Youtube
              </a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
