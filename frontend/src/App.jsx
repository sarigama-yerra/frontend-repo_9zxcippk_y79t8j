import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Offerings from "./components/Offerings";
import Leadership from "./components/Leadership";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <Offerings />
        <Leadership />
        <Contact />
      </main>
      <footer className="py-10 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-slate-500">
          © {new Date().getFullYear()} Flourish L&D UK. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
