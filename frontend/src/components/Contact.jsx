import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ""}/enquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-slate-900">Book a discovery call</h2>
          <p className="mt-3 text-slate-600">Tell us a little about your organisation and goals.</p>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 grid gap-4 max-w-2xl">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required className="w-full rounded-md border border-slate-300 px-4 py-3" />
          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Work email" required className="w-full rounded-md border border-slate-300 px-4 py-3" />
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="What would you like to achieve?" rows="5" className="w-full rounded-md border border-slate-300 px-4 py-3"></textarea>
          <button disabled={status==="loading"} className="w-full sm:w-auto px-6 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50">{status==="loading"?"Sending...":"Send enquiry"}</button>
          {status==="success" && <p className="text-green-700">Thanks — we'll be in touch within one working day.</p>}
          {status==="error" && <p className="text-red-700">Something went wrong. Please try again.</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
