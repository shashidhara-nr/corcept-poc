export default function Stat({ value, label }:{ value: string; label: string }) {
  return (
    <div className="bg-white rounded-xl shadow px-6 py-6 text-center">
      <div className="text-3xl font-semibold text-brand-700">{value}</div>
      <div className="text-sm text-gray-600 mt-1">{label}</div>
    </div>
  );
}
