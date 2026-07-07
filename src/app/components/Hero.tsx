import { useState } from "react";
import { ArrowUpRight, Mail, Instagram, Linkedin } from "lucide-react";
import defaultPhoto from "../../../assets/images/WhatsApp Image 2026-06-23 at 7.44.01 PM (1).jpeg";

export default function Hero() {
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
