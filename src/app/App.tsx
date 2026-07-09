import { useState, useEffect } from "react";
import SplashScreen from "./components/SplashScreen";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Roles from "./components/Roles";
import CaseStudies from "./components/CaseStudies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = ["hero", "expertise", "work", "contact"];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SplashScreen />
      <Nav activeSection={activeSection} />
      <Hero />
      <Roles />
      <CaseStudies />
      <Contact />
      <Footer />
    </div>
  );
}
