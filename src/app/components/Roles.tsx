import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

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

export default function Roles() {
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
