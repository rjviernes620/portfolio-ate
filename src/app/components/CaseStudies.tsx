import React, { useState, useEffect } from "react";
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from "lucide-react";
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
import ghdLogo from "../../../assets/images/ghd-carousel/images.png";
import synergyCarousel1 from "../../../assets/images/Synergy Carousel/1.jpeg";
import synergyCarousel2 from "../../../assets/images/Synergy Carousel/2.jpeg";
import synergyCarousel3 from "../../../assets/images/Synergy Carousel/3.jpeg";
import synergyCarousel4 from "../../../assets/images/Synergy Carousel/4.jpeg";
import synergyCarousel5 from "../../../assets/images/Synergy Carousel/5.jpeg";
import synergySmallPhoto from "../../../assets/images/Synergy Carousel/6.jpeg";
import synergyLogo from "../../../assets/images/Synergy Carousel/Synergy.jpeg";


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
  role?: string;
  stats?: { label: string; value: string; icon: string }[];
  details?: {
    idea: React.ReactNode;
    strategy: React.ReactNode;
    outcome: React.ReactNode;
  };
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
    role: "Founder",
    details: {
      idea: (
        <p>
          Growing up as a nail biter, I often felt self-conscious about my hands and found traditional salon nails expensive,
          time-consuming and impractical. I wanted a beauty solution that offered the confidence of salon-quality nails
          without the long-term commitment, something wearable, reusable and expressive.
          <br /><br />
          What started as a personal solution quickly evolved into something much bigger.
        </p>
      ),
      strategy: (
        <div className="flex flex-col gap-4">
          <p>
            As both founder and marketer, I built every aspect of Juice Gels from the ground up, from the initial concept to a fully functioning direct-to-consumer business.
          </p>
          <p>
            I developed the brand positioning, visual identity and customer experience, while managing product design, content creation, website development and day-to-day operations. Every decision was made with the intention of creating a recognisable brand rather than simply selling products.
          </p>
          <div className="mt-4">
            <p className="font-semibold mb-2 text-[#D4175A]">
              The strategy centred around three key principles:
            </p>
            <ul className="list-disc pl-5 space-y-3">
              <li>
                <strong>Brand before product:</strong> Creating a distinctive identity inspired by Y2K fashion, Korean beauty and internet culture, giving Juice Gels a recognisable personality across every customer touchpoint.
              </li>
              <li>
                <strong>Content before advertising:</strong> Growing organically through storytelling, behind-the-scenes content and short-form video, allowing customers to connect with the journey behind the brand instead of relying on paid advertising.
              </li>
              <li>
                <strong>Community before customers:</strong> Building meaningful relationships through authentic engagement, seasonal launches and interactive content that encourages customers to become part of the brand rather than simply purchase from it.
              </li>
            </ul>
          </div>
          <p className="mt-2">
            This strategy shaped every stage of the customer journey, from discovering Juice Gels on social media to browsing the website, purchasing a set and becoming a returning customer.
          </p>
        </div>
      ),
      outcome: (
        <div className="flex flex-col gap-4">
          <p>
            Today, Juice Gels has evolved from an idea into an independent beauty brand with a growing digital presence and a strong brand identity.
          </p>
          <div className="mt-2">
            <p className="font-semibold mb-2 text-[#D4175A]">
              Key milestones include:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Founded and launched an independent direct-to-consumer beauty brand</li>
              <li>Developed the complete brand strategy, positioning and visual identity</li>
              <li>Designed and launched a fully independent e-commerce website</li>
              <li>Transitioned from Etsy to a standalone website and Instagram Shop</li>
              <li>Produced multiple seasonal campaigns and product launches</li>
              <li>Hosted the brand's first in-person pop-up event in London</li>
              <li>Built an engaged online community through consistent organic content and storytelling</li>
              <li>Applied academic research directly to real-world brand growth and strategic decision-making</li>
            </ul>
          </div>
        </div>
      )
    }
  },
  {
    title: "ghd — Placement Year",
    category: "Global PR · Social Media · Campaign Execution",
    year: "2024-2025",
    description:
      "Supporting the Global PR and Social Media teams with campaign execution, influencer relations, content production, and performance monitoring across multiple international markets.",
    metric: "3× organic reach in 60 days",
    image: ghdCarousel1,
    carouselImages: [
      ghdCarousel2,
      ghdCarousel3,
      ghdCarousel4,
      ghdCarousel5,
      ghdCarousel6,
    ],
    tags: ["Global PR", "Social Media", "Campaign Execution"],
    accent: "#FF6B35",
    logo: ghdLogo,
    role: "Art Director",
    details: {
      idea: (
        <p>
          Joining ghd as its first Global PR & Social Media Intern gave me the opportunity to experience how one of the world's leading premium beauty brands builds global campaigns at scale.
          <br /><br />
          Unlike previous experiences where I worked closely with a single business, this role introduced me to global brand consistency, cross-functional collaboration and the level of detail required to manage campaigns across multiple international teams.
        </p>
      ),
      strategy: (
        <div className="flex flex-col gap-4">
          <p>
            Working alongside the Global PR and Social Media teams, I supported every stage of the campaign lifecycle—from early planning through to post-campaign reporting.
          </p>
          <div className="mt-4">
            <p className="font-semibold mb-2 text-[#FF6B35]">
              My work included:
            </p>
            <ul className="list-disc pl-5 space-y-4">
              <li>
                <strong>Global Product Launches:</strong> Supporting the delivery of international product launches by coordinating assets, managing gifting logistics and ensuring campaigns were prepared for global distribution.
              </li>
              <li>
                <strong>Influencer & PR:</strong> Managing influencer and media send-outs, supporting VIP events and maintaining relationships with creators and press contacts while ensuring campaigns were executed to premium brand standards.
              </li>
              <li>
                <strong>Social Media:</strong> Creating platform-native content inspired by emerging trends, assisting with social shoots, writing creative briefs and supporting content production for global social channels.
              </li>
              <li>
                <strong>Performance & Insight:</strong> Monitoring campaign performance through Earned Media Value (EMV) reporting, competitor benchmarking and social listening, helping the team understand how campaigns performed across global markets and identify future opportunities.
              </li>
            </ul>
          </div>
        </div>
      ),
      outcome: (
        <div className="flex flex-col gap-4">
          <p>
            My placement at ghd provided a behind-the-scenes understanding of how global beauty brands operate—from campaign planning and creative production to influencer marketing and performance measurement.
          </p>
          <div className="mt-4">
            <p className="font-semibold mb-2 text-[#FF6B35]">
              Key contributions included:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Supported multiple global product launch campaigns</li>
              <li>Assisted with influencer and media gifting for international activations</li>
              <li>Produced socially native content concepts for TikTok and Instagram</li>
              <li>Contributed to global creative briefs and campaign planning</li>
              <li>Reported on Earned Media Value (EMV) and competitor performance across global markets</li>
              <li>Supported social-first campaign shoots and content production</li>
              <li>Worked alongside cross-functional teams including PR, Social Media, Creative and Brand Marketing</li>
            </ul>
          </div>
          <p className="mt-4 font-semibold text-[#FF6B35]">
            More importantly, the experience shaped the way I approach marketing today.
          </p>
          <p>
            Working inside a premium global brand taught me that great campaigns aren't built by one department alone—they're the result of strategy, creativity, data and collaboration working together. It strengthened my understanding of how storytelling, influencer marketing and performance insights can combine to create culturally relevant campaigns while maintaining a consistent global brand identity.
          </p>
        </div>
      )
    }
  },
  {
    title: "Synergy Exchange — Bridging Fintech with Marketing",
    category: "Marketing Management · Content Creation · Creative Direction",
    year: "2025 - Present",
    description:
      "Revamped Synergy Exchange's digital presence with a content-first approach, establishing the company as a thought leader in the commercial finance industry through executive personal branding, educational content, and multi-platform storytelling.",
    metric: "277,889+ impressions generated",
    image: synergySmallPhoto,
    carouselImages: [
      synergyCarousel1,
      synergyCarousel2,
      synergyCarousel3,
      synergyCarousel4,
      synergyCarousel5,
    ],
    tags: ["Commerical Finance", "Marketing & Social Media Management", "Content Creation"],
    accent: "#9B2D6F",
    logo: synergyLogo,
    role: "Marketing & Social Media Manager",
    stats: [
      { label: "LinkedIn Impressions", value: "277,889+", icon: "📈" },
      { label: "LinkedIn Video Views", value: "44,594+", icon: "🎥" },
      { label: "Content Clicks", value: "25,182+", icon: "🖱️" },
      { label: "Reactions", value: "3,724+", icon: "❤️" },
    ],
    details: {
      idea: (
        <div className="flex flex-col gap-4">
          <p>
            When I joined Synergy Exchange, I wasn't stepping into an established marketing department, I was building one.
          </p>
          <p>
            Operating within the commercial finance and foreign exchange industry, the business had traditionally relied on relationship-building, referrals and corporate communications. Like many organisations within a highly regulated and traditionally male-led sector, marketing had largely been viewed as a support function rather than a strategic driver of brand growth.
          </p>
          <p>
            I saw an opportunity to change that.
          </p>
          <p>
            Instead of positioning Synergy Exchange as another finance company talking about products and services, I wanted to build a brand that people recognised, trusted and genuinely wanted to follow. My goal was to modernise the company's marketing through authentic storytelling, educational content and personal branding while maintaining the professionalism and compliance expected within financial services.
          </p>
        </div>
      ),
      strategy: (
        <div className="flex flex-col gap-4">
          <p>
            As the company's sole Marketing Manager, I built the marketing function from the ground up, creating a content-first strategy that shifted the business away from traditional corporate messaging towards a more human and relationship-driven brand.
          </p>
          <div className="my-2 py-3 px-4 rounded-xl bg-black/[0.02] border-l-2 border-[#9B2D6F] italic">
            "Why would someone choose to follow a finance company? The answer wasn't finance. It was people."
          </div>
          <div className="mt-4">
            <p className="font-semibold mb-2 text-[#9B2D6F]">
              This led to a marketing strategy built around three key principles:
            </p>
            <ul className="list-disc pl-5 space-y-4">
              <li>
                <strong>People before products:</strong> I introduced executive personal branding across LinkedIn, positioning members of the leadership team as trusted voices within the industry through educational content, thought leadership and authentic storytelling.
              </li>
              <li>
                <strong>Content before promotion:</strong> Rather than relying solely on promotional messaging, I developed a consistent stream of educational videos, company culture content, industry insights, event coverage and behind-the-scenes storytelling across LinkedIn, Instagram, TikTok, YouTube and email marketing.
              </li>
              <li>
                <strong>Relationships before reach:</strong> Instead of chasing viral moments, the focus was on building credibility and long-term trust with business owners, finance professionals and commercial partners through valuable, consistent content that strengthened the brand over time.
              </li>
            </ul>
          </div>
        </div>
      ),
      outcome: (
        <div className="flex flex-col gap-4">
          <p>
            Over the past nine months, I transformed Synergy Exchange's marketing from a limited digital presence into a consistent multi-platform content operation.
          </p>
          <p>
            By introducing a people-first approach, the business developed a stronger online identity that showcased not only its services, but the expertise, culture and personalities behind the brand.
          </p>
          <div className="mt-4">
            <p className="font-semibold mb-2 text-[#9B2D6F]">
              Key Impact:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Built the company's marketing function from the ground up</li>
              <li>Introduced executive personal branding as a core marketing strategy</li>
              <li>Established a consistent presence across LinkedIn, Instagram, TikTok, YouTube and email marketing</li>
              <li>Developed recurring educational and video-first content series</li>
              <li>Produced content from industry exhibitions, networking events and company initiatives</li>
              <li>Shifted marketing towards a more authentic, relationship-driven approach while maintaining compliance within a highly regulated industry</li>
            </ul>
          </div>
          <div className="mt-6">
            <p className="font-semibold mb-3 text-[#9B2D6F]">
              Performance Highlights:
            </p>
            <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-black/[0.02] border border-black/5">
              <div className="flex items-center gap-3">
                <span className="text-xl">📈</span>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-[#180A10]" style={{ fontFamily: "'Jost', sans-serif" }}>277,889+</span>
                  <span className="text-[10px] uppercase tracking-wider text-black/45" style={{ fontFamily: "'DM Mono', monospace" }}>LinkedIn Impressions</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">🎥</span>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-[#180A10]" style={{ fontFamily: "'Jost', sans-serif" }}>44,594+</span>
                  <span className="text-[10px] uppercase tracking-wider text-black/45" style={{ fontFamily: "'DM Mono', monospace" }}>LinkedIn Video Views</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">🖱️</span>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-[#180A10]" style={{ fontFamily: "'Jost', sans-serif" }}>25,182+</span>
                  <span className="text-[10px] uppercase tracking-wider text-black/45" style={{ fontFamily: "'DM Mono', monospace" }}>Content Clicks</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">❤️</span>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-[#180A10]" style={{ fontFamily: "'Jost', sans-serif" }}>3,724+</span>
                  <span className="text-[10px] uppercase tracking-wider text-black/45" style={{ fontFamily: "'DM Mono', monospace" }}>Reactions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  },
];

export default function CaseStudies() {
  const [active, setActive] = useState(0);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const study = caseStudies[active];

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

              {study.stats && (
                <div className="grid grid-cols-2 gap-4 my-2 p-4 rounded-2xl bg-[#FBF4EF]/40 border border-black/[0.04]">
                  {study.stats.map((stat, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <span className="text-lg">{stat.icon}</span>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-[#180A10]" style={{ fontFamily: "'Jost', sans-serif" }}>
                          {stat.value}
                        </span>
                        <span className="text-[10px] uppercase tracking-wider text-black/45" style={{ fontFamily: "'DM Mono', monospace" }}>
                          {stat.label}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

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
                  <div className="w-full h-full relative group/carousel">
                    {study.carouselImages.map((imgSrc, idx) => (
                      <img
                        key={imgSrc}
                        src={imgSrc}
                        alt={`${study.title} carousel image ${idx + 1}`}
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out"
                        style={{
                          opacity: carouselIndex === idx ? 1 : 0,
                          zIndex: carouselIndex === idx ? 1 : 0,
                        }}
                      />
                    ))}

                    {/* Navigation Arrows */}
                    <button
                      onClick={() => setCarouselIndex((prev) => (prev - 1 + study.carouselImages!.length) % study.carouselImages!.length)}
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-black/30 hover:bg-black/60 text-white backdrop-blur-sm transition-all duration-200 opacity-80 md:opacity-0 md:group-hover/carousel:opacity-100 cursor-pointer"
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={() => setCarouselIndex((prev) => (prev + 1) % study.carouselImages!.length)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-black/30 hover:bg-black/60 text-white backdrop-blur-sm transition-all duration-200 opacity-80 md:opacity-0 md:group-hover/carousel:opacity-100 cursor-pointer"
                      aria-label="Next image"
                    >
                      <ChevronRight size={18} />
                    </button>

                    {/* Dot Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-1.5 bg-black/25 px-3 py-1.5 rounded-full backdrop-blur-sm">
                      {study.carouselImages.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCarouselIndex(idx)}
                          className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                            carouselIndex === idx ? "bg-white scale-125" : "bg-white/40 hover:bg-white/70"
                          }`}
                          aria-label={`Go to slide ${idx + 1}`}
                        />
                      ))}
                    </div>
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
                  className="flex flex-col gap-3 relative"
                  style={{
                    paddingBottom: study.logo && study.title.includes(" to ")
                      ? "110px"
                      : study.logo && study.title.includes("Year")
                        ? "50px"
                        : study.logo
                          ? "110px"
                          : "0"
                  }}
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
                    ) : study.logo && study.title.includes("Year") ? (
                      <span>
                        {study.title.split("Year")[0]}
                        <span className="relative inline-block">
                          <span>Year</span>
                          <img
                            src={study.logo}
                            alt={`${study.title.split(' — ')[0]} logo`}
                            className="absolute left-full top-[80%] -translate-y-1/2 ml-30 w-20 h-20 rounded-full object-contain z-10 max-w-none"
                            style={{ maxWidth: "none" }}
                          />
                        </span>
                        {study.title.split("Year")[1]}
                      </span>
                    ) : (
                      study.title
                    )}
                  </h2>

                  <div
                    className="flex flex-wrap gap-2 mt-1"
                    style={{
                      paddingRight: study.logo && !study.title.includes(" to ") && !study.title.includes("Year")
                        ? "120px"
                        : "0"
                    }}
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

                  {study.logo && !study.title.includes(" to ") && !study.title.includes("Year") && (
                    <img
                      src={study.logo}
                      alt={`${study.title.split(' — ')[0]} logo`}
                      className="absolute right-0 bottom-4 w-24 h-24 rounded-full object-contain z-10"
                    />
                  )}
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
                    <span className="text-sm font-medium">{study.role || "Founder"}</span>
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
                    <div className="text-sm leading-relaxed opacity-85 font-light" style={{ color: "rgba(24,10,16,0.8)" }}>
                      {study.details?.idea || (
                        <p>Content coming soon...</p>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3
                      className="text-xs tracking-[0.12em] uppercase font-semibold"
                      style={{ fontFamily: "'DM Mono', monospace", color: study.accent }}
                    >
                      02 / The Strategy
                    </h3>
                    <div className="text-sm leading-relaxed opacity-85 font-light" style={{ color: "rgba(24,10,16,0.8)" }}>
                      {study.details?.strategy || (
                        <p>Content coming soon...</p>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3
                      className="text-xs tracking-[0.12em] uppercase font-semibold"
                      style={{ fontFamily: "'DM Mono', monospace", color: study.accent }}
                    >
                      03 / The Outcome
                    </h3>
                    <div className="text-sm leading-relaxed opacity-85 font-light" style={{ color: "rgba(24,10,16,0.8)" }}>
                      {study.details?.outcome || (
                        <p>Content coming soon...</p>
                      )}
                    </div>
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
