import { useState, useEffect } from "react";
import { ArrowUpRight, Mail, Instagram, Linkedin, ExternalLink, ChevronDown, Menu, X } from "lucide-react";
import defaultPhoto from "../../assets/images/WhatsApp Image 2026-06-23 at 7.44.01 PM (1).jpeg";
import jgCircleIcon from "../../assets/images/jg circle 2.png";
import SplashScreen from "./components/SplashScreen";


const roles = [
  {
    title: "Brand Designer",
    description: "Crafting visual identities that feel alive — from logo systems to full brand worlds.",
    icon: "✦",
    color: "#D4175A",
  },
  {
    title: "Creative Director",
    description: "Leading campaigns from concept to execution with an eye for what is next.",
    icon: "◈",
    color: "#FF6B35",
  },
  {
    title: "Product Founder",
    description: "Built JuiceGels from the ground up — formulation, branding, community, growth.",
    icon: "⬡",
    color: "#9B2D6F",
  },
  {
    title: "Content Strategist",
    description: "Turning products into stories that convert and communities that stay.",
    icon: "◎",
    color: "#D4175A",
  },
];

const caseStudies = [
  {
    title: "JuiceGels — Brand from Zero",
    category: "Brand Identity · Product Design · Founder",
    year: "2022–Present",
    description:
      "Started with a concept for handmade press-on gel nails and built a full brand ecosystem — visual identity, packaging, DTC website, social presence, and a loyal community of 40K+.",
    metric: "40K+ community members",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=900&h=600&fit=crop&auto=format",
    tags: ["Branding", "E-commerce", "Packaging", "Community"],
    accent: "#D4175A",
    logo: jgCircleIcon,
  },
  {
    title: "Nail Drop — Campaign Direction",
    category: "Art Direction · Packaging · Campaign",
    year: "2023",
    description:
      "Directed the seasonal nail drop campaign with a full visual overhaul — new photography style, packaging redesign, and a launch strategy targeting beauty-forward Gen Z consumers. 3× organic reach in 60 days.",
    metric: "3× organic reach in 60 days",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=900&h=600&fit=crop&auto=format&sat=-20",
    tags: ["Art Direction", "Campaign", "Photography"],
    accent: "#FF6B35",
  },
  {
    title: "Moisture Lux — Visual Flagship",
    category: "Web Design · Product Identity · Art Direction",
    year: "2024",
    description:
      "Designed the digital flagship and brand identity for Moisture Lux, a clean beauty skincare line. Focused on fluid layouts, high-end editorial typography, and sensory product storytelling that elevated digital conversion.",
    metric: "+42% DTC conversion rate",
    image: "https://images.unsplash.com/photo-1608248597481-496100c80836?w=900&h=600&fit=crop&auto=format",
    tags: ["UI/UX Design", "Art Direction", "Skincare", "E-commerce"],
    accent: "#9B2D6F",
  },
];


/* ─── Nav ─── */
function Nav({ activeSection }: { activeSection: string }) {
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

/* ─── Hero ─── */
function Hero() {
  const [photo] = useState<string | null>(defaultPhoto);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#FBF4EF" }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-0 right-0 w-[55vw] h-full pointer-events-none"
        style={{
          background: "linear-gradient(135deg, #F5E0E8 0%, #FFE8DC 50%, #FBF4EF 100%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none blur-[100px] opacity-30"
        style={{ background: "#D4175A" }}
      />
      <div
        className="absolute top-24 right-[30%] w-48 h-48 rounded-full pointer-events-none blur-[80px] opacity-20"
        style={{ background: "#FF6B35" }}
      />

      {/* Thin decorative lines */}
      <div
        className="absolute left-0 top-0 bottom-0 w-px opacity-20"
        style={{ background: "linear-gradient(to bottom, transparent, #D4175A, transparent)", marginLeft: "5vw" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Left — text */}
          <div className="flex flex-col gap-7 order-2 md:order-1">
            <div className="flex items-center gap-3">
              <span
                className="w-8 h-px"
                style={{ background: "#D4175A" }}
              />
              <span
                className="text-xs tracking-[0.2em] uppercase"
                style={{ fontFamily: "'DM Mono', monospace", color: "#D4175A" }}
              >
                Portfolio
              </span>
            </div>

            <h1
              className="leading-none"
              style={{
                fontFamily: "'Gilda Display', serif",
                fontSize: "clamp(3.5rem, 8vw, 7.5rem)",
                letterSpacing: "-0.01em",
                lineHeight: 0.95,
                color: "#180A10",
              }}
            >
              Alyssa
              <br />
              <span style={{ color: "#D4175A", paddingLeft: "1.15em" }}>Mae</span>
            </h1>

            <p
              className="text-base leading-relaxed max-w-md"
              style={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 300,
                color: "rgba(24,10,16,0.6)",
                letterSpacing: "0.01em",
              }}
            >
              Brand designer, creative director, and founder of{" "}
              <a
                href="https://juicegels.com/about"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 transition-colors hover:text-primary"
                style={{ color: "#D4175A" }}
              >
                JuiceGels
              </a>
              . I build brands that stick and campaigns that move.
            </p>

            <div className="flex items-center gap-3 mt-1">
              {[
                { icon: <Mail size={16} />, label: "Email", href: "mailto:hello@alyssamae.co.uk", color: "#D4175A" },
                { icon: <Instagram size={16} />, label: "Instagram", href: "https://instagram.com/juicegels", color: "#FF6B35" },
                { icon: <Linkedin size={16} />, label: "LinkedIn", href: "https://www.linkedin.com/in/alyssa-mae-viernes-7b2862221/", color: "#9B2D6F" },
              ].map(({ icon, label, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 hover:scale-110"
                  style={{
                    borderColor: "rgba(24,10,16,0.1)",
                    color: "#180A10",
                    background: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = color;
                    e.currentTarget.style.color = "#FFFFFF";
                    e.currentTarget.style.background = color;
                    e.currentTarget.style.boxShadow = `0 4px 12px ${color}33`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(24,10,16,0.1)";
                    e.currentTarget.style.color = "#180A10";
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-5 mt-2">
              <a
                href="/ALYSSACV.docx%20(3).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm px-6 py-3 rounded-full transition-all duration-200 hover:opacity-85 hover:scale-[1.02]"
                style={{
                  background: "#D4175A",
                  color: "#fff",
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                }}
              >
                View my CV <ArrowUpRight size={14} />
              </a>
              <a
                href="#contact"
                className="text-sm underline underline-offset-4 transition-colors hover:text-primary"
                style={{
                  color: "rgba(24,10,16,0.5)",
                  fontFamily: "'Jost', sans-serif",
                }}
              >
                Get in touch
              </a>
            </div>
          </div>

          {/* Right — photo */}
          <div className="flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative">
              {/* Photo frame */}
              <div
                className="relative overflow-hidden rounded-3xl"
                style={{
                  width: "clamp(260px, 35vw, 420px)",
                  height: "clamp(340px, 48vw, 560px)",
                }}
              >
                {photo && (
                  <img
                    src={photo}
                    alt="Alyssa Mae"
                    className="w-full h-full object-cover object-top"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

/* ─── Roles ─── */
function Roles() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="about" className="py-32 px-6 md:px-12 relative overflow-hidden" style={{ background: "#FFFFFF" }}>
      {/* Dynamic Background Glow on Hover */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-1000 ease-out"
        style={{
          background: hoveredIndex !== null
            ? `radial-gradient(circle at 50% 50%, ${roles[hoveredIndex].color}08 0%, transparent 60%)`
            : 'radial-gradient(circle at 50% 50%, transparent 0%, transparent 100%)',
          opacity: hoveredIndex !== null ? 1 : 0
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span
              className="text-xs tracking-[0.2em] uppercase block mb-4"
              style={{ fontFamily: "'DM Mono', monospace", color: "#D4175A" }}
            >
              What I do
            </span>
            <h2
              className="leading-none"
              style={{
                fontFamily: "'Gilda Display', serif",
                fontSize: "clamp(2.8rem, 6vw, 5rem)",
                letterSpacing: "-0.01em",
                color: "#180A10",
              }}
            >
              Roles &amp;
              <br />
              <em>Expertise</em>
            </h2>
          </div>
          <p
            className="max-w-sm text-base leading-relaxed"
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 300,
              color: "rgba(24,10,16,0.55)",
            }}
          >
            From founding a product brand to directing campaigns — I wear many hats, all intentionally.
          </p>
        </div>

        {/* Timeline Layout Container */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-[1px] pointer-events-none"
            style={{
              background: "linear-gradient(to bottom, transparent, rgba(24,10,16,0.1) 15%, rgba(24,10,16,0.1) 85%, transparent)"
            }}
          />

          {/* Timeline Items */}
          <div className="space-y-16 md:space-y-24">
            {roles.map((role, i) => {
              const isEven = i % 2 === 0;
              const isHovered = hoveredIndex === i;

              return (
                <div
                  key={i}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${isEven ? "md:flex-row-reverse" : ""
                    }`}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Card Side */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12 flex flex-col justify-center relative">
                    <div
                      className={`group relative p-8 rounded-2xl border transition-all duration-500 cursor-default overflow-hidden ${isEven
                        ? "md:text-right md:items-end md:ml-auto"
                        : "md:text-left md:items-start md:mr-auto"
                        } w-full max-w-xl`}
                      style={{
                        background: isHovered ? "#FFFFFF" : "#FBF4EF",
                        borderColor: isHovered ? "rgba(24,10,16,0.12)" : "rgba(24,10,16,0.06)",
                        boxShadow: isHovered
                          ? `0 20px 40px -15px ${role.color}15, 0 1px 3px rgba(24,10,16,0.02)`
                          : "none",
                        transform: isHovered
                          ? `translateY(-6px)`
                          : "translateY(0)"
                      }}
                    >
                      {/* Hover radial flare */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                        style={{
                          background: `radial-gradient(circle at ${isEven ? '80%' : '20%'} 50%, ${role.color}0A 0%, transparent 60%)`,
                        }}
                      />

                      <div className="relative flex flex-col gap-4">
                        {/* Mobile view top header (includes icon next to title) */}
                        <div className="flex md:hidden items-center gap-3">
                          <span
                            className="text-lg w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300"
                            style={{
                              color: role.color,
                              borderColor: `${role.color}33`,
                              background: `${role.color}0D`
                            }}
                          >
                            {role.icon}
                          </span>
                          <h3
                            className="text-xl"
                            style={{ fontFamily: "'Gilda Display', serif", color: "#180A10" }}
                          >
                            {role.title}
                          </h3>
                        </div>

                        {/* Desktop View Title */}
                        <h3
                          className="hidden md:block text-2xl"
                          style={{ fontFamily: "'Gilda Display', serif", color: "#180A10" }}
                        >
                          {role.title}
                        </h3>

                        <p
                          className="text-sm md:text-base leading-relaxed"
                          style={{
                            fontFamily: "'Jost', sans-serif",
                            fontWeight: 300,
                            color: isHovered ? "rgba(24,10,16,0.75)" : "rgba(24,10,16,0.55)",
                          }}
                        >
                          {role.description}
                        </p>

                        <div
                          className={`flex items-center gap-1.5 text-xs font-medium transition-all duration-300 ${isEven ? "md:justify-end" : "md:justify-start"
                            }`}
                          style={{
                            color: role.color,
                            fontFamily: "'Jost', sans-serif",
                            letterSpacing: "0.05em",
                            opacity: isHovered ? 1 : 0,
                            transform: isHovered ? "translateY(0)" : "translateY(4px)"
                          }}
                        >
                          Explore <ArrowUpRight size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                      </div>
                    </div>

                    {/* Horizontal Connector Line (Desktop Only) */}
                    {isEven ? (
                      <div
                        className="absolute right-0 top-1/2 -translate-y-1/2 h-[1px] w-12 hidden md:block transition-all duration-500"
                        style={{ background: isHovered ? role.color : 'rgba(24,10,16,0.1)' }}
                      />
                    ) : (
                      <div
                        className="absolute left-0 top-1/2 -translate-y-1/2 h-[1px] w-12 hidden md:block transition-all duration-500"
                        style={{ background: isHovered ? role.color : 'rgba(24,10,16,0.1)' }}
                      />
                    )}
                  </div>

                  {/* Central Node (Desktop) */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center z-20">
                    <div
                      className="w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-500"
                      style={{
                        background: isHovered ? role.color : "#FFFFFF",
                        borderColor: isHovered ? role.color : "rgba(24,10,16,0.15)",
                        color: isHovered ? "#FFFFFF" : "rgba(24,10,16,0.4)",
                        boxShadow: isHovered
                          ? `0 0 20px ${role.color}35, inset 0 0 0 2px rgba(255,255,255,0.2)`
                          : "none",
                        transform: isHovered ? "scale(1.15) rotate(15deg)" : "scale(1) rotate(0deg)"
                      }}
                    >
                      <span className="text-lg font-medium">{role.icon}</span>
                    </div>
                  </div>

                  {/* Mobile Node (Aligned on left timeline line) */}
                  <div className="md:hidden absolute left-4 top-8 -translate-x-1/2 z-20">
                    <div
                      className="w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500"
                      style={{
                        background: isHovered ? role.color : "#FFFFFF",
                        borderColor: isHovered ? role.color : "rgba(24,10,16,0.15)",
                        color: isHovered ? "#FFFFFF" : "rgba(24,10,16,0.4)",
                        transform: isHovered ? "scale(1.1)" : "scale(1)"
                      }}
                    >
                      <span className="text-xs">{role.icon}</span>
                    </div>
                  </div>

                  {/* Empty Spacer Column (Desktop Only) */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}


/* ─── Case Studies ─── */
function CaseStudies() {
  const [active, setActive] = useState(0);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const study = caseStudies[active];

  useEffect(() => {
    if (isOverlayOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOverlayOpen]);

  return (
    <section id="work" className="py-32 px-6 md:px-12" style={{ background: "#FBF4EF" }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span
            className="text-xs tracking-[0.2em] uppercase block mb-4"
            style={{ fontFamily: "'DM Mono', monospace", color: "#FF6B35" }}
          >
            Selected work
          </span>
          <h2
            className="leading-none"
            style={{
              fontFamily: "'Gilda Display', serif",
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
              letterSpacing: "-0.01em",
              color: "#180A10",
            }}
          >
            Case
            <br />
            <em>Studies</em>
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {caseStudies.map((cs, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="text-sm px-5 py-2.5 rounded-full border transition-all duration-200"
              style={{
                fontFamily: "'Jost', sans-serif",
                background: active === i ? study.accent : "transparent",
                color: active === i ? "#fff" : "rgba(24,10,16,0.5)",
                borderColor: active === i ? study.accent : "rgba(24,10,16,0.1)",
                fontWeight: active === i ? 500 : 400,
              }}
            >
              {`0${i + 1}`}
            </button>
          ))}
        </div>

        {/* Card */}
        <div
          key={active}
          className="grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden border"
          style={{ borderColor: "rgba(24,10,16,0.08)", background: "#fff" }}
        >
          {/* Image */}
          <div className="relative h-72 md:h-auto min-h-[340px] bg-muted overflow-hidden">
            <img
              src={study.image}
              alt={study.title}
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: `linear-gradient(to bottom, transparent 40%, ${study.accent}55 100%)` }}
            />
            <div
              className="absolute bottom-5 left-5 px-4 py-2 rounded-full text-sm font-medium"
              style={{
                background: study.accent,
                color: "#fff",
                fontFamily: "'Jost', sans-serif",
                fontWeight: 500,
              }}
            >
              {study.metric}
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between p-8 md:p-12">
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <span
                  className="text-xs tracking-[0.15em] uppercase"
                  style={{ fontFamily: "'DM Mono', monospace", color: study.accent }}
                >
                  {study.year}
                </span>
                <span
                  className="text-xs"
                  style={{ fontFamily: "'DM Mono', monospace", color: "rgba(24,10,16,0.35)" }}
                >
                  {study.category}
                </span>
              </div>

              <h3
                className="leading-tight"
                style={{
                  fontFamily: "'Gilda Display', serif",
                  fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                  color: "#180A10",
                }}
              >
                {study.title}
              </h3>

              <p
                className="text-sm leading-relaxed"
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 300,
                  color: "rgba(24,10,16,0.6)",
                }}
              >
                {study.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1.5 rounded-full border"
                    style={{
                      borderColor: `${study.accent}44`,
                      color: study.accent,
                      fontFamily: "'Jost', sans-serif",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => setIsOverlayOpen(true)}
              className="mt-8 self-start flex items-center gap-2 text-sm px-6 py-3 rounded-full transition-all duration-200 hover:opacity-85 hover:scale-[1.02]"
              style={{
                background: study.accent,
                color: "#fff",
                fontFamily: "'Jost', sans-serif",
                fontWeight: 500,
              }}
            >
              View more <ArrowUpRight size={13} />
            </button>
          </div>
        </div>
      </div>

      {/* Large Overlay Case Study Details */}
      {isOverlayOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-[#180A10]/60 backdrop-blur-sm transition-all duration-300"
          onClick={() => setIsOverlayOpen(false)}
        >
          {/* Modal Card */}
          <div
            className="relative w-full max-w-6xl h-full max-h-[85vh] bg-[#FBF4EF] rounded-3xl border border-border flex flex-col md:grid md:grid-cols-12 overflow-hidden shadow-2xl animate-modal-scale-up"
            style={{
              borderColor: "rgba(24,10,16,0.08)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Floating Close Button */}
            <button
              onClick={() => setIsOverlayOpen(false)}
              className="absolute top-4 right-4 z-50 flex items-center justify-center w-10 h-10 rounded-full border bg-[#FBF4EF]/90 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-[#180A10] hover:text-white cursor-pointer"
              style={{
                borderColor: "rgba(24,10,16,0.1)",
                boxShadow: "0 4px 12px rgba(0,0,0,0.04)"
              }}
              aria-label="Close Case Study"
            >
              <X size={16} />
            </button>

            {/* Left side: Image (increased version of original) */}
            <div className="relative md:col-span-5 h-64 md:h-full bg-muted overflow-hidden">
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: `linear-gradient(to bottom, transparent 40%, ${study.accent}55 100%)` }}
              />
              <div
                className="absolute bottom-5 left-5 px-4 py-2 rounded-full text-xs font-medium"
                style={{
                  background: study.accent,
                  color: "#fff",
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 500,
                }}
              >
                {study.metric}
              </div>
            </div>

            {/* Right side: Content (scrollable on desktop) */}
            <div className="md:col-span-7 p-6 md:p-12 flex flex-col justify-between overflow-y-auto md:max-h-[85vh]">
              <div className="flex flex-col gap-8">
                {/* Header info */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span
                      className="text-xs tracking-[0.15em] uppercase font-semibold"
                      style={{ fontFamily: "'DM Mono', monospace", color: study.accent }}
                    >
                      {study.year}
                    </span>
                    <span
                      className="text-xs opacity-50"
                      style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                      {study.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    {study.logo && (
                      <img
                        src={study.logo}
                        alt={`${study.title.split(' — ')[0]} logo`}
                        className="w-12 h-12 rounded-full object-contain bg-white p-1 border flex-shrink-0"
                        style={{ borderColor: "rgba(24,10,16,0.08)" }}
                      />
                    )}
                    <h2
                      className="leading-tight"
                      style={{
                        fontFamily: "'Gilda Display', serif",
                        fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                        color: "#180A10",
                      }}
                    >
                      {study.title}
                    </h2>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-1">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2.5 py-1 rounded-full border"
                        style={{
                          borderColor: `${study.accent}33`,
                          color: study.accent,
                          fontFamily: "'Jost', sans-serif",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <hr style={{ borderColor: "rgba(24,10,16,0.06)" }} />

                {/* Meta details table */}
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="opacity-45 block mb-0.5 font-semibold" style={{ fontFamily: "'DM Mono', monospace" }}>Client</span>
                    <span className="text-sm font-medium">{study.title.split(' — ')[0]}</span>
                  </div>
                  <div>
                    <span className="opacity-45 block mb-0.5 font-semibold" style={{ fontFamily: "'DM Mono', monospace" }}>Role</span>
                    <span className="text-sm font-medium">Lead Designer</span>
                  </div>
                </div>

                <hr style={{ borderColor: "rgba(24,10,16,0.06)" }} />

                {/* Content sections */}
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <h3
                      className="text-xs tracking-[0.12em] uppercase font-semibold"
                      style={{ fontFamily: "'DM Mono', monospace", color: study.accent }}
                    >
                      01 / The Challenge
                    </h3>
                    <p className="text-sm leading-relaxed opacity-85 font-light" style={{ color: "rgba(24,10,16,0.8)" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.
                    </p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3
                      className="text-xs tracking-[0.12em] uppercase font-semibold"
                      style={{ fontFamily: "'DM Mono', monospace", color: study.accent }}
                    >
                      02 / The Strategy
                    </h3>
                    <p className="text-sm leading-relaxed opacity-85 font-light" style={{ color: "rgba(24,10,16,0.8)" }}>
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Mollis pretium lorem primis cubilia nisl. Feugiat donec tristique rhoncus curae sem. Tellus platea integer taciti potenti sit sodales.
                    </p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3
                      className="text-xs tracking-[0.12em] uppercase font-semibold"
                      style={{ fontFamily: "'DM Mono', monospace", color: study.accent }}
                    >
                      03 / The Outcome
                    </h3>
                    <p className="text-sm leading-relaxed opacity-85 font-light" style={{ color: "rgba(24,10,16,0.8)" }}>
                      Dictumst nam congue ac pretium sollicitudin taciti cubilia magna. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Authentic tutorials, behind-the-scenes storytelling, and community-driven content.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom footer button */}
              <div className="mt-8 pt-6 border-t flex justify-center md:justify-start" style={{ borderColor: "rgba(24,10,16,0.06)" }}>
                <button
                  onClick={() => setIsOverlayOpen(false)}
                  className="px-6 py-2.5 rounded-full text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:opacity-90 shadow-md cursor-pointer"
                  style={{
                    background: "#180A10",
                    fontFamily: "'Jost', sans-serif",
                  }}
                >
                  Close Case Study
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}


/* ─── Contact ─── */
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-12" style={{ background: "#FBF4EF" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Left */}
          <div className="flex flex-col gap-8">
            <div>
              <span
                className="text-xs tracking-[0.2em] uppercase block mb-4"
                style={{ fontFamily: "'DM Mono', monospace", color: "#D4175A" }}
              >
                Say hello
              </span>
              <h2
                className="leading-none"
                style={{
                  fontFamily: "'Gilda Display', serif",
                  fontSize: "clamp(2.8rem, 6vw, 5rem)",
                  letterSpacing: "-0.01em",
                  color: "#180A10",
                }}
              >
                Got a
                <br />
                project?
                <br />
                <em style={{ color: "#D4175A" }}>Let us talk.</em>
              </h2>
            </div>

            <p
              className="text-sm leading-relaxed max-w-sm"
              style={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 300,
                color: "rgba(24,10,16,0.55)",
              }}
            >
              Open to brand design projects, creative direction, speaking engagements, and founder collabs. I read every message.
            </p>

            <div className="flex flex-col gap-3">
              {[
                { icon: <Mail size={15} />, label: "hello@alyssamae.co.uk", href: "mailto:hello@alyssamae.co.uk", color: "#D4175A" },
                { icon: <Instagram size={15} />, label: "@alyssa.vxo", href: "https://instagram.com/alyssa.vxo", color: "#FF6B35" },
                { icon: <Linkedin size={15} />, label: "linkedin.com/in/alyssamae", href: "https://www.linkedin.com/in/alyssa-mae-viernes-7b2862221/", color: "#9B2D6F" },
              ].map(({ icon, label, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm group"
                  style={{ fontFamily: "'Jost', sans-serif", color: "#180A10" }}
                >
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center border"
                    style={{ borderColor: `${color}33`, color }}
                  >
                    {icon}
                  </div>
                  <span className="group-hover:underline underline-offset-4">{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div
            className="rounded-3xl p-8 md:p-10 border"
            style={{
              background: "#fff",
              borderColor: "rgba(24,10,16,0.08)",
            }}
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center gap-5 py-16 text-center">
                <span style={{ fontSize: "2.5rem" }}>✦</span>
                <h3
                  className="text-2xl"
                  style={{ fontFamily: "'Gilda Display', serif", color: "#180A10" }}
                >
                  Message sent!
                </h3>
                <p
                  className="text-sm"
                  style={{ fontFamily: "'Jost', sans-serif", color: "rgba(24,10,16,0.5)" }}
                >
                  I will be in touch soon. Thank you for reaching out.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {[
                  { id: "name", label: "Your name", type: "text", placeholder: "Alyssa Mae", value: form.name, onChange: (v: string) => setForm({ ...form, name: v }) },
                  { id: "email", label: "Email", type: "email", placeholder: "you@example.com", value: form.email, onChange: (v: string) => setForm({ ...form, email: v }) },
                ].map((field) => (
                  <div key={field.id} className="flex flex-col gap-2">
                    <label
                      className="text-xs tracking-[0.15em] uppercase"
                      style={{ fontFamily: "'DM Mono', monospace", color: "rgba(24,10,16,0.4)" }}
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      required
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                      className="w-full rounded-xl px-5 py-3.5 text-sm outline-none transition-all duration-200"
                      style={{
                        background: "#FBF4EF",
                        border: "1px solid rgba(24,10,16,0.1)",
                        color: "#180A10",
                        fontFamily: "'Jost', sans-serif",
                      }}
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}

                <div className="flex flex-col gap-2">
                  <label
                    className="text-xs tracking-[0.15em] uppercase"
                    style={{ fontFamily: "'DM Mono', monospace", color: "rgba(24,10,16,0.4)" }}
                  >
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-xl px-5 py-3.5 text-sm outline-none resize-none"
                    style={{
                      background: "#FBF4EF",
                      border: "1px solid rgba(24,10,16,0.1)",
                      color: "#180A10",
                      fontFamily: "'Jost', sans-serif",
                    }}
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-sm transition-all duration-200 hover:opacity-85"
                  style={{
                    background: "#D4175A",
                    color: "#fff",
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: 500,
                    letterSpacing: "0.04em",
                  }}
                >
                  Send message <ArrowUpRight size={13} className="inline ml-1" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer
      className="py-10 px-6 md:px-12 border-t"
      style={{ background: "#fff", borderColor: "rgba(24,10,16,0.08)" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span
          className="text-sm"
          style={{ fontFamily: "'Gilda Display', serif", color: "rgba(24,10,16,0.4)" }}
        >
          © 2025 Alyssa Mae
        </span>
        <span
          className="text-xs tracking-[0.18em] uppercase"
          style={{ fontFamily: "'DM Mono', monospace", color: "rgba(24,10,16,0.25)" }}
        >
          Brand Designer · Creative Director · Founder
        </span>
        <a
          href="https://juicegels.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm transition-colors hover:text-primary"
          style={{ fontFamily: "'Jost', sans-serif", color: "#D4175A" }}
        >
          juicegels.com <ExternalLink size={12} />
        </a>
      </div>
    </footer>
  );
}

/* ─── Root ─── */
export default function App() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = ["hero", "about", "work", "contact"];
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
