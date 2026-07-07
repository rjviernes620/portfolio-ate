import { useState, useEffect } from "react";
import { ArrowUpRight, X } from "lucide-react";
import jgCircleIcon from "../../../assets/images/jg circle 2.png";
import jgCarousel1 from "../../../assets/images/juicegels-carousel/WhatsApp Image 2026-07-07 at 8.55.34 AM.jpeg";
import jgCarousel2 from "../../../assets/images/juicegels-carousel/2.jpeg";
import jgCarousel3 from "../../../assets/images/juicegels-carousel/3_cropped.jpeg";
import jgCarousel4 from "../../../assets/images/juicegels-carousel/4.jpeg";
import jgCarousel5 from "../../../assets/images/juicegels-carousel/5.jpeg";
import jgSmallPhoto from "../../../assets/images/juicegels-carousel/6_cropped.jpeg";
import ghdCarousel1 from "../../../assets/images/ghd-carousel/1.jpeg";
import ghdCarousel2 from "../../../assets/images/ghd-carousel/2.jpeg";
import ghdCarousel3 from "../../../assets/images/ghd-carousel/3.jpeg";
import ghdCarousel4 from "../../../assets/images/ghd-carousel/4.jpeg";
import ghdCarousel5 from "../../../assets/images/ghd-carousel/5.jpeg";
import ghdCarousel6 from "../../../assets/images/ghd-carousel/6.jpeg";


interface CaseStudy {
  title: string;
  category: string;
  year: string;
  description: string;
  metric: string;
  image: string;
  carouselImages?: string[];
  tags: string[];
  accent: string;
  logo?: string;
}

const caseStudies: CaseStudy[] = [
  {
    title: "JuiceGels — Obsession to Reality",
    category: "Brand Identity · Product Design · Founder",
    year: "2022–Present",
    description:
      "Started with a concept for handmade press-on gel nails and built a full brand ecosystem — visual identity, packaging, DTC website, social presence, and a loyal community of 40K+.",
    metric: "Over 100+ Nail styles",
    image: jgSmallPhoto,
    carouselImages: [jgCarousel1, jgCarousel2, jgCarousel3, jgCarousel4, jgCarousel5],
    tags: ["Branding", "E-commerce", "Packaging", "Community"],
    accent: "#D4175A",
    logo: jgCircleIcon,
  },
  {
    title: "ghd - Placement Year",
    category: "Art Direction · Packaging · Campaign",
    year: "2023",
    description:
      "Directed the seasonal nail drop campaign with a full visual overhaul — new photography style, packaging redesign, and a launch strategy targeting beauty-forward Gen Z consumers. 3× organic reach in 60 days.",
    metric: "3× organic reach in 60 days",
    image: ghdCarousel1,
    carouselImages: [
      ghdCarousel2,
      ghdCarousel3,
      ghdCarousel4,
      ghdCarousel5,
      ghdCarousel6,
    ],
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

export default function CaseStudies() {
  const [active, setActive] = useState(0);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const study = caseStudies[active];

  useEffect(() => {
    if (!isOverlayOpen || !study.carouselImages) return;
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % study.carouselImages!.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isOverlayOpen, study.carouselImages]);

  useEffect(() => {
    if (isOverlayOpen) {
      setCarouselIndex(0);
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
            className="relative w-full max-w-screen-2xl h-full max-h-[90vh] bg-[#FBF4EF] rounded-3xl border border-border flex flex-col md:grid md:grid-cols-12 overflow-hidden shadow-2xl animate-modal-scale-up"
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

            {/* Left side: Image/Carousel container with padding to keep space around it */}
            <div className="relative md:col-span-6 p-1 md:p-2 flex items-center justify-center bg-transparent">
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg border border-black/5 bg-muted">
                {study.carouselImages ? (
                  <div className="w-full h-full relative">
                    {study.carouselImages.map((imgSrc, idx) => (
                      <img
                        key={imgSrc}
                        src={imgSrc}
                        alt={`${study.title} carousel image ${idx + 1}`}
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
                        style={{
                          opacity: carouselIndex === idx ? 1 : 0,
                          zIndex: carouselIndex === idx ? 1 : 0,
                        }}
                      />
                    ))}
                  </div>
                ) : (
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                )}
                <div
                  className="absolute inset-0 z-20 pointer-events-none"
                  style={{ background: `linear-gradient(to bottom, transparent 50%, ${study.accent}33 100%)` }}
                />
                <div
                  className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full text-[11px] font-medium z-30"
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
            </div>

            {/* Right side: Content (scrollable on desktop) */}
            <div className="md:col-span-6 p-6 md:p-12 flex flex-col justify-between overflow-y-auto md:max-h-[90vh]">
              <div className="flex flex-col gap-8">
                {/* Header info */}
                <div
                  className="flex flex-col gap-3"
                  style={{ paddingBottom: study.logo ? "110px" : "0" }}
                >
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

                  <h2
                    className="leading-tight"
                    style={{
                      fontFamily: "'Gilda Display', serif",
                      fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                      color: "#180A10",
                    }}
                  >
                    {study.logo && study.title.includes(" to ") ? (
                      <span>
                        {study.title.split(" to ")[0]}
                        {" "}
                        <span className="relative inline-block">
                          <span>to</span>
                          <img
                            src={study.logo}
                            alt={`${study.title.split(' — ')[0]} logo`}
                            className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-36 h-36 rounded-full object-contain z-10 max-w-none"
                            style={{ maxWidth: "none" }}
                          />
                        </span>
                        {" "}
                        {study.title.split(" to ")[1]}
                      </span>
                    ) : (
                      study.title
                    )}
                  </h2>

                  <div
                    className="flex flex-wrap gap-2 mt-1"
                    style={{ paddingRight: study.logo ? "120px" : "0" }}
                  >
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
                    <span className="text-sm font-medium">Founder</span>
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
                      01 / The idea
                    </h3>
                    <p className="text-sm leading-relaxed opacity-85 font-light" style={{ color: "rgba(24,10,16,0.8)" }}>
                      Nail art is a form of expression which I was very interested in,
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
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
