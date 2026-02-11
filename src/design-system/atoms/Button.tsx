import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md';
};

export default function Button({ variant = 'primary', size = 'md', className, ...rest }: Props) {
  const base = 'inline-flex items-center justify-center rounded-md font-medium transition';
  const sizes = size === 'sm' ? 'px-3 py-1.5 text-sm' : 'px-5 py-2.5 text-sm';
  const variants: Record<string, string> = {
    primary: 'bg-brand-600 text-white hover:bg-brand-700',
    secondary: 'bg-white text-brand-900 hover:bg-white/90 border',
    ghost: 'bg-transparent text-brand-700 hover:bg-brand-100'
  };
  return <button className={clsx(base, sizes, variants[variant], className)} {...rest} />;
}
