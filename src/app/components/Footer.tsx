import { ExternalLink } from "lucide-react";

export default function Footer() {
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
