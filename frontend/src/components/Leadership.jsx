import React from "react";

const Leadership = () => {
  return (
    <section id="leadership" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Leadership & management</h2>
            <p className="mt-4 text-slate-600">Programmes designed around the realities of leading teams in the UK — hybrid working, wellbeing, inclusion and performance.</p>
            <ul className="mt-6 space-y-2 text-slate-700 list-disc list-inside">
              <li>New manager bootcamps</li>
              <li>Leading through change</li>
              <li>Inclusive leadership</li>
              <li>Coaching conversations</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm">
            <h3 className="font-semibold text-slate-900">Sample pathway</h3>
            <ol className="mt-4 list-decimal list-inside space-y-2 text-slate-700">
              <li>Discovery & needs analysis</li>
              <li>Design sprints with your stakeholders</li>
              <li>Blended delivery (live + digital)</li>
              <li>On-the-job projects and coaching</li>
              <li>Evaluation and impact reporting</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
