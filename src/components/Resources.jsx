import { useEffect, useState } from "react";

export default function Resources() {
  const [items, setItems] = useState([]);
  const base = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    fetch(`${base}/resources`).then(async (r) => {
      const data = await r.json();
      setItems(data.items || []);
    }).catch(() => {});
  }, [base]);

  return (
    <section id="resources" className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Resources & blog</h2>
        <p className="mt-2 text-slate-700">Articles, templates, and practical guidance for L&D leaders.</p>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {items.map((a) => (
            <article key={a.slug} className="p-5 rounded-xl ring-1 ring-slate-200 bg-white shadow-sm">
              <h3 className="font-semibold text-slate-900">{a.title}</h3>
              <p className="mt-2 text-slate-700 text-sm">{a.summary}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {a.tags?.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-indigo-50 text-indigo-700 ring-1 ring-indigo-200">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
