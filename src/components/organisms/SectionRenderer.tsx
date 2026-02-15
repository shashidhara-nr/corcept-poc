// components/SectionRenderer.tsx
import React from "react";
import HeaderSection from "./HeaderSection";

const registry: Record<string, React.ComponentType<any>> = {
  headerContent: HeaderSection,
  // heroBanner: HeroBanner, // add others here as you build them
};

type AnyEntry = {
  sys: { id: string; contentType?: { sys: { id: string } } };
  fields: Record<string, any>;
};

export default function SectionRenderer1({ items }: { items: AnyEntry[] }) {
  return (
    <>
      {items.map((entry) => {
        const typeId = entry?.sys?.contentType?.sys?.id;
        const Cmp = (typeId && registry[typeId]) || UnknownSection;
        return <Cmp key={entry.sys.id} entry={entry} />;
      })}
    </>
  );
}

function UnknownSection({ entry }: { entry: AnyEntry }) {
  return (
    <section
      style={{ padding: 24, border: "1px dashed #ddd", margin: "16px 0" }}
    >
      <pre style={{ whiteSpace: "pre-wrap" }}>
        {`⚠️ No renderer for content type: ${entry?.sys?.contentType?.sys?.id || "unknown"}`}
      </pre>
    </section>
  );
}
