import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getArticleBySlug } from '../contentful/mockClient';
import type { Article } from '../contentful/types';

export default function ArticlePage() {
  const { slug } = useParams();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => { if (slug) getArticleBySlug(slug).then(setArticle); }, [slug]);
  if (!article) return <div className="mx-auto max-w-content px-4 py-20">Loading…</div>;

  return (
    <article className="mx-auto max-w-content px-4 py-12">
      <h1 className="text-3xl font-semibold">{article.title}</h1>
      <div className="text-sm text-gray-500 mt-1">{new Date(article.publishedDate).toLocaleDateString()}</div>
      <div className="prose mt-6">
        {article.body.map((n, i) => {
          if (n.nodeType === 'paragraph') return <p key={i}>{n.value}</p>;
          if (n.nodeType === 'heading-2') return <h2 key={i}>{n.value}</h2>;
          return null;
        })}
      </div>
    </article>
  );
}
