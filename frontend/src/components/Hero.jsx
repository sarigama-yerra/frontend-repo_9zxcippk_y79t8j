import React from "react";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-slate-900">
              Learning & Development for the UK Workforce
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              We help organisations build capability through modern workforce development, leadership & management programmes, and practical coaching & mentoring.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#offerings" className="px-5 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">Explore services</a>
              <a href="#contact" className="px-5 py-3 border border-slate-300 text-slate-700 rounded-md hover:bg-slate-50 transition">Book a discovery call</a>
            </div>
            <div className="mt-8 text-sm text-slate-500">
              Trusted by HR and L&D teams across the UK public, private and third sectors.
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl bg-white shadow-xl border border-slate-200 grid place-items-center">
              <div className="p-8 text-center">
                <div className="text-7xl">🎯</div>
                <p className="mt-4 text-slate-700 font-medium">Targeted programmes aligned to your strategy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
