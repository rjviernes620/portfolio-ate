import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

interface NavProps {
  activeSection: string;
}

export default function Nav({ activeSection }: NavProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const links = [
    { label: "About", id: "about" },
    { label: "Work", id: "work" },
    { label: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 transition-all duration-300">
      <div
        className="max-w-7xl mx-auto flex items-center justify-between transition-all duration-300"
        style={{
          background: scrolled ? "rgba(251,244,239,0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderRadius: scrolled ? "999px" : "0",
          border: scrolled ? "1px solid rgba(24,10,16,0.08)" : "none",
          padding: scrolled ? "10px 24px" : "0",
        }}
      >
        <a
          href="#hero"
          className="font-normal tracking-wide text-foreground"
          style={{ fontFamily: "'Gilda Display', serif", fontSize: "1.15rem" }}
        >
          Alyssa Mae
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className="text-sm transition-colors duration-200 relative"
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 400,
                  color: activeSection === l.id ? "#D4175A" : "rgba(24,10,16,0.55)",
                  letterSpacing: "0.06em",
                }}
              >
                {l.label}
                {activeSection === l.id && (
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-px"
                    style={{ background: "#D4175A" }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="mailto:hello@alyssamae.co.uk"
          className="hidden md:flex items-center gap-2 text-sm px-5 py-2.5 rounded-full transition-all duration-200 hover:opacity-85"
          style={{
            background: "#D4175A",
            color: "#fff",
            fontFamily: "'Jost', sans-serif",
            fontWeight: 500,
            letterSpacing: "0.04em",
          }}
        >
          Say hello <ArrowUpRight size={13} />
        </a>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div
          className="md:hidden mt-2 rounded-2xl p-6 flex flex-col gap-5"
          style={{
            background: "rgba(251,244,239,0.97)",
            border: "1px solid rgba(24,10,16,0.08)",
            backdropFilter: "blur(16px)",
          }}
        >
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="text-base"
              style={{ fontFamily: "'Jost', sans-serif", color: "#180A10" }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:hello@alyssamae.co.uk"
            className="flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full w-fit"
            style={{ background: "#D4175A", color: "#fff", fontFamily: "'Jost', sans-serif" }}
          >
            Say hello <ArrowUpRight size={13} />
          </a>
        </div>
      )}
    </nav>
  );
}
