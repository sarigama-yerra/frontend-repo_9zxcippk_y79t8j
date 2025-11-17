import { useEffect, useState } from "react";

export default function CaseStudies() {
  const [items, setItems] = useState([]);
  const base = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    fetch(`${base}/case-studies`).then(async (r) => {
      const data = await r.json();
      setItems(data.items || []);
    }).catch(() => {});
  }, [base]);

  return (
    <section id="case-studies" className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Case studies</h2>
        <p className="mt-2 text-slate-700">Real-world outcomes from UK organisations.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {items.map((cs) => (
            <article key={cs.title} className="p-5 rounded-xl ring-1 ring-slate-200 bg-white shadow-sm">
              <h3 className="font-semibold text-slate-900">{cs.title}</h3>
              <p className="text-slate-700 text-sm mt-1">{cs.client} • {cs.sector}</p>
              <div className="mt-2 text-sm text-slate-700">
                <p><span className="font-medium">Challenge:</span> {cs.challenge}</p>
                <p className="mt-1"><span className="font-medium">Approach:</span> {cs.approach}</p>
                <ul className="list-disc pl-5 mt-2">
                  {cs.outcomes?.map((o) => <li key={o}>{o}</li>)}
                </ul>
                {cs.quote && (
                  <blockquote className="mt-3 border-l-2 border-slate-300 pl-3 italic text-slate-800">
                    “{cs.quote}”
                    {cs.quote_author && <span className="not-italic text-slate-600"> — {cs.quote_author}</span>}
                  </blockquote>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
