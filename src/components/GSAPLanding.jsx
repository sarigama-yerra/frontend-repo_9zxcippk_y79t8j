import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GSAPLanding() {
  const root = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      // Ensure initial state is lightweight
      gsap.set([".headline", ".subhead", ".cta-primary", ".cta-secondary", ".feature-card", ".nav-item"], {
        willChange: prefersReduced ? "auto" : "transform, opacity",
      });

      if (prefersReduced) {
        // Respect reduced motion: present content statically without entrance or looping animations
        gsap.set([".nav-item", ".headline", ".subhead", ".cta-primary", ".cta-secondary", ".feature-card"], {
          clearProps: "all",
          opacity: 1,
          y: 0,
        });
        return;
      }

      // Build a paused timeline and only play when section first enters viewport
      const tl = gsap.timeline({ defaults: { ease: "power3.out" }, paused: true });
      tl.from(".nav-item", { y: -16, opacity: 0, stagger: 0.06, duration: 0.5 })
        .from(".headline", { y: 40, opacity: 0, duration: 0.7 }, "-=0.2")
        .from(".subhead", { y: 24, opacity: 0, duration: 0.6 }, "-=0.35")
        .from(".cta-primary", { y: 20, opacity: 0, duration: 0.5 }, "-=0.25")
        .from(".cta-secondary", { y: 22, opacity: 0, duration: 0.5 }, "-=0.4")
        .from(".feature-card", { y: 30, opacity: 0, stagger: 0.07, duration: 0.5 }, "-=0.1");

      ScrollTrigger.create({
        trigger: root.current,
        start: "top bottom-=20%",
        once: true,
        onEnter: () => tl.play(0),
      });

      // Ambient orb motion only while section is in view
      gsap.to(".orb", {
        y: 10,
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        scrollTrigger: {
          trigger: root.current,
          start: "top bottom",
          end: "bottom top",
          toggleActions: "play pause resume pause",
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="orb absolute -top-24 -left-24 h-72 w-72 rounded-full bg-indigo-200 blur-3xl" />
        <div className="orb absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-sky-200 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 pt-28 pb-16">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6 text-slate-700">
            <span className="nav-item font-semibold text-slate-900 text-lg">UK L&D</span>
            <span className="nav-item hidden md:inline">Services</span>
            <span className="nav-item hidden md:inline">Accreditations</span>
            <span className="nav-item hidden md:inline">Sectors</span>
            <span className="nav-item hidden md:inline">Resources</span>
            <span className="nav-item hidden md:inline">Contact</span>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="headline text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Develop confident, capable managers across your organisation
            </h1>
            <p className="subhead mt-4 text-lg text-slate-700">
              UK-focused learning programmes in workforce development, leadership & management,
              coaching & mentoring, and training strategy.
            </p>
            <div className="mt-8 flex gap-3">
              <button className="cta-primary px-5 py-3 rounded bg-indigo-600 text-white font-medium hover:bg-indigo-700">
                Book a discovery call
              </button>
              <button className="cta-secondary px-5 py-3 rounded border border-slate-300 text-slate-800 font-medium hover:bg-white">
                Explore services
              </button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {["ILM/CMI-aligned pathways", "Coaching & mentoring options", "Practical, outcomes-focused design", "UK public sector experience (NHS, Local Gov)"].map((t) => (
              <div key={t} className="feature-card p-5 rounded-xl ring-1 ring-slate-200 bg-white shadow-sm text-left">
                <span className="text-slate-800">• {t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
