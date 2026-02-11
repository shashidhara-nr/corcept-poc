import { useEffect, useState } from "react";
import { getPageBySlug } from "../contentful/mockClient";
import GenericPageTemplate, { Section } from "../templates/GenericPageTemplate";

export default function PageBySlug({ slug }: { slug: string }) {
  const [sections, setSections] = useState<Section[] | null>(null);
  useEffect(() => {
    getPageBySlug(slug).then((p) =>
      setSections((p?.sections ?? null) as Section[] | null),
    );
  }, [slug]);
  
  if (!sections)
    return <div className="mx-auto max-w-content px-4 py-20">Loading…</div>;
  return <GenericPageTemplate sections={sections} />;
}
