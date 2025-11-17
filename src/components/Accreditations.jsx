import { useEffect, useState } from "react";

export default function Accreditations() {
  const [items, setItems] = useState([]);
  const base = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    fetch(`${base}/accreditations`).then(async (r) => {
      const data = await r.json();
      setItems(data.items || []);
    }).catch(() => {});
  }, [base]);

  return (
    <section id="accreditations" className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Accreditations & frameworks</h2>
        <p className="mt-2 text-slate-700">Alignment to ILM, CMI, and apprenticeship standards.</p>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {items.map((a) => (
            <div key={a.body} className="p-5 rounded-xl ring-1 ring-slate-200 bg-white shadow-sm">
              <h3 className="font-semibold text-slate-900">{a.body}</h3>
              <p className="mt-2 text-slate-700 text-sm">{a.description}</p>
              <p className="mt-2 text-slate-700 text-sm"><span className="font-medium">Levels:</span> {a.levels?.join(", ")}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
