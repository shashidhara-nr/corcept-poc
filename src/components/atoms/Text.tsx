import { ReactNode } from 'react';
export default function Text({ children, className = '' }:{ children: ReactNode; className?: string; }) {
  return <p className={`text-gray-700 ${className}`}>{children}</p>;
}
