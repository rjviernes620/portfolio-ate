import { Mail, Linkedin, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-36 px-6 md:px-12 relative overflow-hidden" style={{ background: "#FBF4EF" }}>
      {/* Subtle decorative grid/glow elements for a premium feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(24,10,16,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(24,10,16,0.01)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none opacity-40" />

      <div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center">
        <div className="flex items-center gap-3 justify-center mb-6">
          <span className="w-8 h-px" style={{ background: "#D4175A" }} />
          <span
            className="text-xs tracking-[0.2em] uppercase font-medium"
            style={{ fontFamily: "'DM Mono', monospace", color: "#D4175A" }}
          >
            Say hello
          </span>
          <span className="w-8 h-px" style={{ background: "#D4175A" }} />
        </div>

        <h2
          className="leading-tight mb-6"
          style={{
            fontFamily: "'Gilda Display', serif",
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            letterSpacing: "-0.01em",
            color: "#D4175A",
          }}
        >
          Let's talk.
        </h2>

        <p
          className="text-base leading-relaxed max-w-xl mb-12"
          style={{
            fontFamily: "'Jost', sans-serif",
            fontWeight: 300,
            color: "rgba(24,10,16,0.65)",
          }}
        >
          Open to brand design projects, creative direction, speaking engagements, and founder collabs.
        </p>

        {/* Redesigned Premium Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl mt-4">
          {/* Email Card */}
          <a
            href="mailto:AViernes101@gmail.com"
            className="group block p-8 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden"
            style={{
              background: "#FFFFFF",
              borderColor: "rgba(24,10,16,0.08)",
            }}
          >
            {/* Subtle card hover accent */}
            <div
              className="absolute inset-0 pointer-events-none transition-all duration-300 opacity-0 group-hover:opacity-100"
              style={{
                background: "radial-gradient(circle at 10% 10%, rgba(212, 23, 90, 0.04) 0%, transparent 70%)"
              }}
            />

            <div className="flex justify-between items-start mb-6">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300 group-hover:scale-110"
                style={{
                  background: "rgba(212, 23, 90, 0.08)",
                  borderColor: "rgba(212, 23, 90, 0.2)",
                  color: "#D4175A",
                }}
              >
                <Mail size={20} />
              </div>
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1"
                style={{ color: "#180A10" }}
              />
            </div>

            <span
              className="text-xs uppercase tracking-wider block mb-1 font-medium"
              style={{ fontFamily: "'DM Mono', monospace", color: "rgba(24, 10, 16, 0.4)" }}
            >
              Email Me
            </span>
            <span
              className="text-lg md:text-xl font-light block break-all"
              style={{ fontFamily: "'Jost', sans-serif", color: "#180A10" }}
            >
              AViernes101@gmail.com
            </span>
          </a>

          {/* LinkedIn Card */}
          <a
            href="https://www.linkedin.com/in/alyssa-mae-viernes-7b2862221/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-8 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden"
            style={{
              background: "#FFFFFF",
              borderColor: "rgba(24,10,16,0.08)",
            }}
          >
            {/* Subtle card hover accent */}
            <div
              className="absolute inset-0 pointer-events-none transition-all duration-300 opacity-0 group-hover:opacity-100"
              style={{
                background: "radial-gradient(circle at 10% 10%, rgba(155, 45, 111, 0.04) 0%, transparent 70%)"
              }}
            />

            <div className="flex justify-between items-start mb-6">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300 group-hover:scale-110"
                style={{
                  background: "rgba(155, 45, 111, 0.08)",
                  borderColor: "rgba(155, 45, 111, 0.2)",
                  color: "#9B2D6F",
                }}
              >
                <Linkedin size={20} />
              </div>
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1"
                style={{ color: "#180A10" }}
              />
            </div>

            <span
              className="text-xs uppercase tracking-wider block mb-1 font-medium"
              style={{ fontFamily: "'DM Mono', monospace", color: "rgba(24, 10, 16, 0.4)" }}
            >
              LinkedIn
            </span>
            <span
              className="text-lg md:text-xl font-light block"
              style={{ fontFamily: "'Jost', sans-serif", color: "#180A10" }}
            >
              alyssa-mae-viernes
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

