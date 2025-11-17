export default function Sectors() {
  const sectors = [
    {
      name: "NHS",
      points: [
        "Band 6–8a leadership pathways",
        "Patient flow, rostering, and people leadership",
        "Coaching for clinical and non-clinical leaders",
      ],
    },
    {
      name: "Local government",
      points: [
        "Customer services and operational leadership",
        "Performance and outcomes focus",
        "Service improvement projects with measurable KPIs",
      ],
    },
    {
      name: "Financial services",
      points: [
        "Regulatory-ready people leadership",
        "Coaching for performance and culture",
        "Emerging leader programmes",
      ],
    },
  ];
  return (
    <section id="sectors" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Sectors we serve</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {sectors.map((s) => (
            <div key={s.name} className="p-5 rounded-xl ring-1 ring-slate-200 bg-white shadow-sm">
              <h3 className="font-semibold text-slate-900">{s.name}</h3>
              <ul className="mt-2 text-slate-700 text-sm list-disc pl-5">
                {s.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
