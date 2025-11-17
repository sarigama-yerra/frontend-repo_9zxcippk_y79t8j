import Navbar from "./components/Navbar";
import GSAPLanding from "./components/GSAPLanding";
import Services from "./components/Services";
import Accreditations from "./components/Accreditations";
import Sectors from "./components/Sectors";
import CaseStudies from "./components/CaseStudies";
import Resources from "./components/Resources";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <GSAPLanding />
      <Services />
      <Accreditations />
      <Sectors />
      <CaseStudies />
      <Resources />
      <Contact />
      <footer className="py-10 border-t border-slate-200 text-center text-sm text-slate-600">
        <p>© {new Date().getFullYear()} UK L&D. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
