export default function Pill({ label }: { label: string }) {
  return (
    <span className="px-3 py-1 text-xs rounded-full bg-brand-100 text-brand-700">
      {label}
    </span>
  );
}
