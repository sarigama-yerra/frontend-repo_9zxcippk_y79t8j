export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 items-center gap-10">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Develop confident, capable managers across your organisation
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            UK-focused Learning & Development programmes in workforce development, leadership & management,
            coaching & mentoring, and training strategy.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#contact" className="px-5 py-3 rounded bg-indigo-600 text-white font-medium hover:bg-indigo-700">
              Book a discovery call
            </a>
            <a href="#services" className="px-5 py-3 rounded border border-slate-300 text-slate-800 font-medium hover:bg-white">
              Explore services
            </a>
          </div>
        </div>
        <div className="bg-white/60 rounded-xl p-6 shadow-sm ring-1 ring-slate-200">
          <ul className="space-y-3 text-slate-800">
            <li>• ILM/CMI-aligned pathways</li>
            <li>• Coaching & mentoring options</li>
            <li>• Practical, outcomes-focused design</li>
            <li>• UK public sector experience (NHS, Local Gov)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
