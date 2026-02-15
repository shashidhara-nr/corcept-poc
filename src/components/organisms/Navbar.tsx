import Container from "../atoms/Container";
import NavLinkItem from "../molecules/NavLinkItem";
import { useEffect, useState } from "react";
import { getSiteConfig } from "../../contentful/mockClient";
import type { SiteConfig } from "../../contentful/types";
import Logo from "../molecules/Logo";

export default function Navbar() {
  // Fix: this should be an array, because you call .map on it
  const [cfg, setCfg] = useState<SiteConfig[] | null>(null);

  useEffect(() => {
    getSiteConfig().then(setCfg);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#121d5e]/95 backdrop-blur text-white">
      {/* Remove justify-between so we can push the right block using ml-auto */}
      <Container className="py-1 flex items-center">
        {/* Left-most: Logo */}
        <Logo />

        {/* Navigation menu (left group) */}
        <nav className="pl-4 md:pl-8 lg:pl-[55px] flex items-center gap-1">
          {cfg?.map((n) => (
            <NavLinkItem key={n.path} to={n.path} label={n.title} />
          ))}
        </nav>

        {/* Right-most: SVG icons in a separate block */}
        <div className="ml-auto flex items-center gap-1">
          <NavLinkItem
            to="/contact"
            label={
              <svg
                width="28"
                height="28"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
                aria-hidden="true"
              >
                <path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h4.09a2 2 0 0 1 2 1.72c.13 1.13.37 2.23.72 3.28a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c1.05.35 2.15.59 3.28.72A2 2 0 0 1 22 16.92z"></path>
              </svg>
            }
            ariaLabel="Call Corcept"
          />

          <NavLinkItem
            to="/search"
            label={
              <svg
                width="28"
                height="28"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            }
            ariaLabel="Search"
          />
        </div>
      </Container>
    </header>
  );
}
