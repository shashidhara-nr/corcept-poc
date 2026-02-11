import { useEffect, useState } from "react";
import { getPageBySlug } from "../contentful/mockClient";
import HomeTemplate, { Section } from "../templates/HomeTemplate";

export default function HomePage() {
  const [sections, setSections] = useState<Section[]>([]);
  useEffect(() => {
    getPageBySlug("home").then((p) =>
      setSections((p?.sections ?? []) as Section[]),
    );
  }, []);
  return <HomeTemplate sections={sections} />;
}
