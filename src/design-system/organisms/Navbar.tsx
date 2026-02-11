import Container from '../atoms/Container';
import NavLinkItem from '../molecules/NavLinkItem';
import { useEffect, useState } from 'react';
import { getSiteConfig } from '../../contentful/mockClient';
import type { SiteConfig } from '../../contentful/types';
import Logo from '../molecules/Logo';

export default function Navbar() {
  const [cfg, setCfg] = useState<SiteConfig | null>(null);
  useEffect(() => { getSiteConfig().then(setCfg); }, []);
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#121d5e]/95 backdrop-blur text-white">
      <Container className="py-3 flex items-center justify-between">
        {/* <a href="/" className="font-semibold tracking-wide">Corcept</a> */}
        <Logo />
        <nav className="flex gap-1">
          {cfg?.map((n) => (
            <NavLinkItem key={n.path} to={n.path} label={n.title} />
          ))}
        </nav>
      </Container>
    </header>
  );
}
