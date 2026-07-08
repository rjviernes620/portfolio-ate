import { useState } from "react";
import { Mail, Instagram, Linkedin, ArrowUpRight } from "lucide-react";

export default function Contact() {
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
                { icon: <Mail size={15} />, label: "AViernes101@gmail.com", href: "mailto:AViernes101@gmail.com", color: "#D4175A" },
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
