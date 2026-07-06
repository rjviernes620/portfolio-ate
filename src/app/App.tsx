import { useState, useEffect } from "react";
import { ArrowUpRight, Mail, Instagram, Linkedin, ExternalLink, ChevronDown, Menu, X } from "lucide-react";
import defaultPhoto from "../../assets/images/WhatsApp Image 2026-06-23 at 7.44.01 PM (1).jpeg";

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
    title: "Content Engine — TikTok Growth",
    category: "Content Strategy · Video Production",
    year: "2024",
    description:
      "Designed and executed a TikTok content system that took the brand from 2K to 28K followers in four months — authentic tutorials, behind-the-scenes, and founder-led storytelling.",
    metric: "2K → 28K followers in 4 months",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=900&h=600&fit=crop&auto=format",
    tags: ["TikTok", "Video", "Growth"],
    accent: "#9B2D6F",
  },
];

const projects = [
  {
    title: "JuiceGels.com",
    type: "Website Design",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=700&h=500&fit=crop&auto=format",
  },
  {
    title: "Moisture Lux Collection",
    type: "Packaging Design",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=700&h=500&fit=crop&auto=format",
  },
  {
    title: "Summer Drop Campaign",
    type: "Art Direction",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=700&h=500&fit=crop&auto=format",
  },
  {
    title: "Nail Edit — Editorial",
    type: "Editorial Design",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=700&h=500&fit=crop&auto=format&hue=20",
  },
  {
    title: "Brand Book 2024",
    type: "Brand Guidelines",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=700&h=500&fit=crop&auto=format",
  },
  {
    title: "Founders Summit Talk",
    type: "Speaking · Strategy",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=700&h=500&fit=crop&auto=format",
  },
];

/* ─── Nav ─── */
function Nav({ activeSection }: { activeSection: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const links = [
    { label: "About", id: "about" },
    { label: "Work", id: "work" },
    { label: "Projects", id: "projects" },
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
          href="mailto:hello@alyssamae.com"
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
            href="mailto:hello@alyssamae.com"
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
                Portfolio 2025
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
              <span style={{ color: "#D4175A" }}>Mae.</span>
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
                href="https://juicegels.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 transition-colors hover:text-primary"
                style={{ color: "#D4175A" }}
              >
                JuiceGels
              </a>
              . I build brands that stick and campaigns that move.
            </p>

            <div className="flex flex-wrap gap-2 mt-1">
              {["Brand Design", "Creative Direction", "Founder", "Content"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-4 py-2 rounded-full border"
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    borderColor: "rgba(212,23,90,0.2)",
                    color: "#9B2D6F",
                    background: "rgba(212,23,90,0.05)",
                    letterSpacing: "0.05em",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-5 mt-2">
              <a
                href="#work"
                className="flex items-center gap-2 text-sm px-6 py-3 rounded-full transition-all duration-200 hover:opacity-85 hover:scale-[1.02]"
                style={{
                  background: "#D4175A",
                  color: "#fff",
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                }}
              >
                View my work <ArrowUpRight size={14} />
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

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-35">
          <span
            className="text-xs tracking-[0.2em] uppercase"
            style={{ fontFamily: "'DM Mono', monospace", color: "#180A10" }}
          >
            Scroll
          </span>
          <ChevronDown size={15} className="animate-bounce" style={{ color: "#D4175A" }} />
        </div>
      </div>

    </section>
  );
}

/* ─── Roles ─── */
function Roles() {
  return (
    <section id="about" className="py-32 px-6 md:px-12" style={{ background: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {roles.map((role, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-2xl border transition-all duration-300 cursor-default overflow-hidden hover:shadow-sm"
              style={{
                background: "#FBF4EF",
                borderColor: "rgba(24,10,16,0.07)",
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 20% 50%, ${role.color}0D 0%, transparent 70%)`,
                }}
              />
              <div className="relative flex flex-col gap-5">
                <span className="text-2xl" style={{ color: role.color }}>{role.icon}</span>
                <div>
                  <h3
                    className="text-xl mb-2"
                    style={{ fontFamily: "'Gilda Display', serif", color: "#180A10" }}
                  >
                    {role.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontWeight: 300,
                      color: "rgba(24,10,16,0.55)",
                    }}
                  >
                    {role.description}
                  </p>
                </div>
                <div
                  className="flex items-center gap-1.5 text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{ color: role.color, fontFamily: "'Jost', sans-serif", letterSpacing: "0.05em" }}
                >
                  Explore <ArrowUpRight size={12} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Case Studies ─── */
function CaseStudies() {
  const [active, setActive] = useState(0);
  const study = caseStudies[active];

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
              className="mt-8 self-start flex items-center gap-2 text-sm px-6 py-3 rounded-full transition-all duration-200 hover:opacity-85 hover:scale-[1.02]"
              style={{
                background: study.accent,
                color: "#fff",
                fontFamily: "'Jost', sans-serif",
                fontWeight: 500,
              }}
            >
              View full case study <ArrowUpRight size={13} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Projects ─── */
function Projects() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="projects" className="py-32 px-6 md:px-12" style={{ background: "#fff" }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span
              className="text-xs tracking-[0.2em] uppercase block mb-4"
              style={{ fontFamily: "'DM Mono', monospace", color: "#9B2D6F" }}
            >
              Archive
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
              Projects
              <br />
              <em>&amp; Work</em>
            </h2>
          </div>
          <p
            className="max-w-xs text-sm leading-relaxed"
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 300,
              color: "rgba(24,10,16,0.5)",
            }}
          >
            A selection of campaigns, products, and creative work from the last few years.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden cursor-pointer border"
              style={{
                background: "#FBF4EF",
                borderColor: "rgba(24,10,16,0.07)",
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="relative h-52 overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(to bottom, transparent 40%, rgba(24,10,16,0.5) 100%)",
                    opacity: hovered === i ? 1 : 0.4,
                  }}
                />
              </div>
              <div className="p-5 flex items-center justify-between">
                <div>
                  <p
                    className="text-xs mb-1 tracking-[0.12em] uppercase transition-colors duration-200"
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      color: hovered === i ? "#D4175A" : "rgba(24,10,16,0.35)",
                    }}
                  >
                    {project.type}
                  </p>
                  <h4
                    className="text-base"
                    style={{ fontFamily: "'Gilda Display', serif", color: "#180A10" }}
                  >
                    {project.title}
                  </h4>
                </div>
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-200"
                  style={{
                    background: hovered === i ? "#D4175A" : "transparent",
                    borderColor: hovered === i ? "#D4175A" : "rgba(212,23,90,0.2)",
                    color: hovered === i ? "#fff" : "#D4175A",
                  }}
                >
                  <ExternalLink size={13} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
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
                { icon: <Mail size={15} />, label: "hello@alyssamae.com", href: "mailto:hello@alyssamae.com", color: "#D4175A" },
                { icon: <Instagram size={15} />, label: "@juicegels", href: "https://instagram.com/juicegels", color: "#FF6B35" },
                { icon: <Linkedin size={15} />, label: "linkedin.com/in/alyssamae", href: "https://linkedin.com/in/alyssamae", color: "#9B2D6F" },
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
    const sections = ["hero", "about", "work", "projects", "contact"];
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
      <Nav activeSection={activeSection} />
      <Hero />
      <Roles />
      <CaseStudies />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                    