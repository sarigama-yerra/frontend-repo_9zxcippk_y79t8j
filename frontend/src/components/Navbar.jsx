import React from "react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-blue-600 text-white grid place-items-center font-bold">LD</div>
            <span className="font-semibold text-slate-800">Flourish L&D UK</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            <a href="#offerings" className="hover:text-blue-700">Workforce Development</a>
            <a href="#leadership" className="hover:text-blue-700">Leadership</a>
            <a href="#coaching" className="hover:text-blue-700">Coaching</a>
            <a href="#strategy" className="hover:text-blue-700">Training Strategy</a>
            <a href="#contact" className="px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">Get in touch</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
