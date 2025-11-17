import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "#headline",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", delay: 0.1 }
      );

      gsap.fromTo(
        ".hero-copy",
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.25 }
      );

      gsap.fromTo(
        ".cta",
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.35, stagger: 0.08 }
      );

      gsap.fromTo(
        ".hero-card li",
        { x: 16, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power2.out", delay: 0.5, stagger: 0.05 }
      );

      // Subtle floating accent for background gradient shimmer
      gsap.to(".gradient-float", {
        y: 12,
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="home" className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      <div className="pointer-events-none absolute inset-0 gradient-float opacity-40">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-indigo-200 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-sky-200 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 items-center gap-10">
        <div>
          <h1 id="headline" className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Develop confident, capable managers across your organisation
          </h1>
          <p className="hero-copy mt-4 text-lg text-slate-700">
            UK-focused Learning & Development programmes in workforce development, leadership & management,
            coaching & mentoring, and training strategy.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#contact" className="cta px-5 py-3 rounded bg-indigo-600 text-white font-medium hover:bg-indigo-700">
              Book a discovery call
            </a>
            <a href="#services" className="cta px-5 py-3 rounded border border-slate-300 text-slate-800 font-medium hover:bg-white">
              Explore services
            </a>
          </div>
        </div>
        <div className="bg-white/60 rounded-xl p-6 shadow-sm ring-1 ring-slate-200 hero-card">
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
