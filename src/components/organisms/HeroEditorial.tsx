import React from "react";
import { getSectionsForPage } from "../../utils/getSectionsForPage";
import SectionRenderer from "./SectionRenderer";

export default function HeroEditorial() {
  const [items, setItems] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    getSectionsForPage("home")
      .then((data) => setItems(data))
      .catch((e) => setError(e.message || "Failed to load content"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div style={{ padding: 24 }}>Loading…</div>;
  if (error)
    return <div style={{ padding: 24, color: "crimson" }}>{error}</div>;

  return <SectionRenderer items={items} />;
}
