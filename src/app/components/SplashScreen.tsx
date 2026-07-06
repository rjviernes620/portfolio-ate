import { useEffect, useState } from "react";

interface SplashScreenProps {
  onComplete?: () => void;
  forceShow?: boolean;
}

export default function SplashScreen({ onComplete, forceShow = false }: SplashScreenProps) {
  const [status, setStatus] = useState<"visible" | "exit" | "hidden">("visible");

  useEffect(() => {
    // Check session storage to see if we should skip the splash screen
    const hasSeenSplash = sessionStorage.getItem("hasSeenSplash");
    
    // Check URL params for forcing or skipping
    const urlParams = new URLSearchParams(window.location.search);
    const forceParam = urlParams.get("splash") === "force";
    const skipParam = urlParams.get("splash") === "skip";

    if ((hasSeenSplash || skipParam) && !forceShow && !forceParam) {
      setStatus("hidden");
      if (onComplete) onComplete();
      return;
    }

    // Mark as seen for this session
    sessionStorage.setItem("hasSeenSplash", "true");

    // Lock scrolling on mount
    document.body.style.overflow = "hidden";

    // Start exit transition after logo animation plays
    // Adjusted for a 4.5 second overall duration:
    // Hold on screen for 3.6 seconds, then transition for 0.95 seconds
    const exitTimer = setTimeout(() => {
      setStatus("exit");
    }, 3600);

    // Completely hide and clean up after curtain transition finishes (0.95s transition)
    const hideTimer = setTimeout(() => {
      setStatus("hidden");
      document.body.style.overflow = "";
      if (onComplete) onComplete();
    }, 4550); // 3600 + 950 = 4550

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(hideTimer);
      document.body.style.overflow = "";
    };
  }, [onComplete, forceShow]);

  if (status === "hidden") return null;

  const logoText = "alyssamae.co.uk";

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center splash-container ${
        status === "exit" ? "exit" : ""
      }`}
    >
      <div className="flex flex-col items-center gap-5 select-none">
        {/* Animated Text */}
        <h1
          className="text-4xl md:text-6xl font-light tracking-wide text-center"
          style={{ fontFamily: "'Gilda Display', serif" }}
        >
          {logoText.split("").map((char, index) => {
            const isPeriod = char === ".";
            return (
              <span
                key={index}
                className="splash-letter"
                style={{
                  animationDelay: `${index * 55}ms`,
                  color: isPeriod ? "#D4175A" : undefined,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            );
          })}
        </h1>

        {/* Elegant Underline */}
        <div className="splash-line" />
      </div>

      {/* Skip button for keyboard accessibility or quick skip */}
      <button
        onClick={() => {
          setStatus("exit");
          setTimeout(() => {
            setStatus("hidden");
            document.body.style.overflow = "";
            if (onComplete) onComplete();
          }, 950);
        }}
        className="absolute bottom-10 text-xs uppercase tracking-[0.2em] opacity-40 hover:opacity-100 transition-opacity duration-200"
        style={{
          fontFamily: "'DM Mono', monospace",
          color: "#FBF4EF",
          background: "transparent",
          border: "none",
          cursor: "pointer",
        }}
      >
        Skip Intro
      </button>
    </div>
  );
}
