export default function Services() {
  const items = [
    {
      title: "Workforce development",
      desc: "Skills mapping, role clarity, and targeted upskilling for frontline and corporate services.",
    },
    {
      title: "Leadership & management",
      desc: "ILM/CMI-aligned programmes from first-line managers to senior leaders.",
    },
    {
      title: "Coaching & mentoring",
      desc: "1:1 and group coaching, mentoring frameworks, and in-house capability building.",
    },
    {
      title: "Training strategy",
      desc: "TNA, learning pathways, evaluation (Kirkpatrick), and governance.",
    },
  ];
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">What we offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {items.map((it) => (
            <div key={it.title} className="p-5 rounded-xl ring-1 ring-slate-200 bg-white shadow-sm">
              <h3 className="font-semibold text-slate-900">{it.title}</h3>
              <p className="mt-2 text-slate-700 text-sm">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
