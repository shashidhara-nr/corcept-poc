import { ReactNode } from 'react';

export default function Heading({ level = 2, children, className = '' }:{ level?: 1|2|3|4|5|6; children: ReactNode; className?: string; }) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const sizes: Record<number, string> = { 1: 'text-3xl md:text-5xl', 2: 'text-2xl md:text-3xl', 3: 'text-xl md:text-2xl', 4: 'text-lg', 5: 'text-base', 6: 'text-sm' };
  return <Tag className={`${sizes[level]} font-semibold ${className}`}>{children}</Tag>;
}
