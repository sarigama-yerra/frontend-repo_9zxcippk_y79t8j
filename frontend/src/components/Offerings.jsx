import React from "react";

const Card = ({ title, desc, points }) => (
  <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition">
    <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
    <p className="mt-2 text-slate-600">{desc}</p>
    <ul className="mt-4 space-y-2 text-slate-700 list-disc list-inside">
      {points.map((p, i) => (
        <li key={i}>{p}</li>
      ))}
    </ul>
  </div>
);

const Offerings = () => {
  return (
    <section id="offerings" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-slate-900">Workforce development</h2>
          <p className="mt-3 text-slate-600">Practical programmes tailored for UK organisations.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            title="Leadership & Management"
            desc="From first-line leaders to senior managers."
            points={["ILM-aligned pathways","People leadership essentials","Change & performance management"]}
          />
          <Card
            title="Coaching & Mentoring"
            desc="Build a coaching culture that sticks."
            points={["1:1 executive coaching","Internal mentor programmes","Manager-as-coach skills"]}
          />
          <Card
            title="Training Strategy"
            desc="Strategic L&D that drives outcomes."
            points={["Capability frameworks","Learning needs analysis","Evaluation & ROI models"]}
          />
        </div>
      </div>
    </section>
  );
};

export default Offerings;
