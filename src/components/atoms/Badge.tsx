export default function Badge({ children }:{ children: string }) {
  return <span className="px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs">{children}</span>;
}
