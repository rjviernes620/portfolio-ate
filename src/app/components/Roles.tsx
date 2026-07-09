import { useState } from "react";

const roles = [
  {
    title: "Brand Builder",
    description: "Creating brands people connect with through strategy, storytelling and creative execution.",
    color: "#D4175A", // Rose
  },
  {
    title: "Marketing Strategist",
    description: "Turning business objectives into content-led marketing strategies that build awareness and trust.",
    color: "#FF6B35", // Coral
  },
  {
    title: "Content Creator",
    description: "Producing engaging social-first content across photography, video, design and copywriting.",
    color: "#9B2D6F", // Purple/Plum
  },
  {
    title: "Founder",
    description: "Building and growing Juice Gels from concept to a direct-to-consumer beauty brand.",
    color: "#E8195A", // Bright Magenta/Red
  },
];

export default function Roles() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const activeIndex = hoveredIndex !== null ? hoveredIndex : 0;
  const activeRole = roles[activeIndex];

  return (
    <section id="expertise" className="py-24 md:py-36 px-6 md:px-12 relative overflow-hidden" style={{ background: "#FFFFFF" }}>
      {/* Background radial glow that follows the active role's color */}
      <div
        className="absolute top-1/2 left-1/3 w-[600px] h-[600px] rounded-full pointer-events-none blur-[150px] transition-all duration-1000 ease-out opacity-10"
        style={{
          background: activeRole.color,
          transform: `translate(-50%, -50%) scale(${hoveredIndex !== null ? 1.2 : 0.9})`,
        }}
      />
      
      {/* Very faint background grids for elegant tech-design hybrid look */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(24,10,16,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(24,10,16,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column - Titles */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-28">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px" style={{ background: "#D4175A" }} />
              <span
                className="text-xs tracking-[0.2em] uppercase font-medium"
                style={{ fontFamily: "'DM Mono', monospace", color: "#D4175A" }}
              >
                Expertise
              </span>
            </div>
            
            <h2
              className="leading-tight"
              style={{
                fontFamily: "'Gilda Display', serif",
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                letterSpacing: "-0.02em",
                color: "#180A10",
              }}
            >
              Roles &amp;
              <br />
              <span className="italic" style={{ color: "#D4175A" }}>Capabilities</span>
            </h2>
            
            <p
              className="max-w-md text-base leading-relaxed"
              style={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 300,
                color: "rgba(24,10,16,0.6)",
              }}
            >
              Combining strategic thinking, content creation, and entrepreneurial execution to build memorable brand experiences.
            </p>
          </div>

          {/* Right Column - Accordion/Catalog-Style Role List */}
          <div className="lg:col-span-7 flex flex-col justify-center divide-y" style={{ borderColor: "rgba(24, 10, 16, 0.08)" }}>
            {roles.map((role, idx) => {
              const isHovered = hoveredIndex === idx;
              
              return (
                <div
                  key={idx}
                  className="group py-8 md:py-10 flex items-start gap-6 cursor-default relative overflow-hidden transition-all duration-500"
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    paddingLeft: "16px",
                    paddingRight: "16px",
                  }}
                >
                  {/* Subtle card-slide-in highlight background on hover */}
                  <div 
                    className="absolute inset-0 pointer-events-none transition-all duration-500 opacity-0 group-hover:opacity-100"
                    style={{
                      background: "linear-gradient(90deg, rgba(251, 244, 239, 0.4) 0%, transparent 100%)",
                      borderLeft: `3px solid ${role.color}`
                    }}
                  />

                  {/* Role Number */}
                  <span 
                    className="text-4xl md:text-5xl font-light transition-all duration-500 select-none mt-1"
                    style={{ 
                      fontFamily: "'Gilda Display', serif", 
                      color: isHovered ? role.color : "rgba(24, 10, 16, 0.15)",
                      transform: isHovered ? "scale(1.05)" : "scale(1)"
                    }}
                  >
                    0{idx + 1}
                  </span>

                  {/* Title & Description Container */}
                  <div className="flex-1 flex flex-col gap-2 relative z-10 transition-transform duration-300 group-hover:translate-x-2">
                    <h3 
                      className="text-2xl md:text-3xl"
                      style={{ fontFamily: "'Gilda Display', serif", color: "#180A10" }}
                    >
                      {role.title}
                    </h3>
                    <p 
                      className="text-sm md:text-base font-light leading-relaxed max-w-2xl"
                      style={{ 
                        fontFamily: "'Jost', sans-serif", 
                        color: isHovered ? "rgba(24,10,16,0.85)" : "rgba(24,10,16,0.55)"
                      }}
                    >
                      {role.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
