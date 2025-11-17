import { useState } from "react";

export default function Contact() {
  const base = import.meta.env.VITE_BACKEND_URL;
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    payload.consent = !!payload.consent;
    try {
      const r = await fetch(`${base}/enquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!r.ok) throw new Error(await r.text());
      setStatus({ ok: true, msg: "Thanks — we’ll be in touch within one business day." });
      e.currentTarget.reset();
    } catch (err) {
      setStatus({ ok: false, msg: "Sorry, something went wrong. Please try again later." });
    }
  }

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Book a discovery call</h2>
        <p className="mt-2 text-slate-700">Share a few details and we’ll respond promptly.</p>
        <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="name" required placeholder="Full name" className="px-3 py-2 rounded border border-slate-300" />
          <input name="email" type="email" required placeholder="Email" className="px-3 py-2 rounded border border-slate-300" />
          <input name="phone" placeholder="Phone" className="px-3 py-2 rounded border border-slate-300" />
          <input name="company" placeholder="Company" className="px-3 py-2 rounded border border-slate-300" />
          <select name="service" className="px-3 py-2 rounded border border-slate-300 md:col-span-2">
            <option value="">Service of interest</option>
            <option>Workforce development</option>
            <option>Leadership & Management</option>
            <option>Coaching & Mentoring</option>
            <option>Training Strategy</option>
          </select>
          <textarea name="message" required rows={5} placeholder="Tell us about your goals"
            className="px-3 py-2 rounded border border-slate-300 md:col-span-2" />
          <label className="text-sm text-slate-700 flex items-center gap-2 md:col-span-2">
            <input type="checkbox" name="consent" /> I consent to be contacted in line with the privacy notice.
          </label>
          <div className="md:col-span-2 flex gap-3 items-center">
            <button className="px-5 py-3 rounded bg-indigo-600 text-white font-medium hover:bg-indigo-700">Send</button>
            {status && (
              <span className={status.ok ? "text-green-700" : "text-red-700"}>{status.msg}</span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
