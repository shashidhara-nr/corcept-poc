import Container from '../atoms/Container';

type Member = { name: string; role: string; imageUrl?: string };

export default function TeamGrid({ title, members }:{ title: string; members: Member[]; }) {
  return (
    <section className="py-16 bg-brand-100">
      <Container>
        <h3 className="text-2xl font-semibold">{title}</h3>
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {members.map((m, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-5">
              <div className="w-full h-40 bg-gray-100 rounded-md overflow-hidden"></div>
              <div className="mt-3 font-medium">{m.name}</div>
              <div className="text-sm text-gray-600">{m.role}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
