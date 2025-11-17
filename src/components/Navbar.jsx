import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-semibold text-slate-900 text-lg">UK L&D</a>
        <nav className="hidden md:flex gap-6 text-slate-700">
          <a href="#services" className="hover:text-slate-900">Services</a>
          <a href="#accreditations" className="hover:text-slate-900">Accreditations</a>
          <a href="#sectors" className="hover:text-slate-900">Sectors</a>
          <a href="#case-studies" className="hover:text-slate-900">Case Studies</a>
          <a href="#resources" className="hover:text-slate-900">Resources</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
        </nav>
        <button className="md:hidden p-2 rounded hover:bg-slate-100" aria-label="Menu">
          <Menu size={20} />
        </button>
      </div>
    </header>
  );
}
