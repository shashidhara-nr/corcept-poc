import Container from '../atoms/Container';
import Stat from '../molecules/Stat';

export default function StatsBand({ stats }:{ stats: { value: string; label: string }[] }) {
  return (
    <section className="bg-white">
      <Container className="-mt-10 grid sm:grid-cols-3 gap-4">
        {stats.map((s, i) => (<Stat key={i} value={s.value} label={s.label} />))}
      </Container>
    </section>
  );
}
