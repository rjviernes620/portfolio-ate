import { useEffect, useState } from "react";
import "../../styles/SplashScreen.css";

interface SplashScreenProps {
  onComplete?: () => void;
  forceShow?: boolean;
}

export default function SplashScreen({ onComplete, forceShow = false }: SplashScreenProps) {
  const [status, setStatus] = useState<"visible" | "exit" | "hidden">("visible");

  useEffect(() => {
    const hasSeenSplash = sessionStorage.getItem("hasSeenSplash");
    const urlParams    = new URLSearchParams(window.location.search);
    const forceParam   = urlParams.get("splash") === "force";
    const skipParam    = urlParams.get("splash") === "skip";

    if ((hasSeenSplash || skipParam) && !forceShow && !forceParam) {
      setStatus("hidden");
      if (onComplete) onComplete();
      return;
    }

    sessionStorage.setItem("hasSeenSplash", "true");
    document.body.style.overflow = "hidden";

    // Logo animates over ~2s, then hold briefly before exit
    const exitTimer = setTimeout(() => setStatus("exit"), 2800);
    const hideTimer = setTimeout(() => {
      setStatus("hidden");
      document.body.style.overflow = "";
      if (onComplete) onComplete();
    }, 3700);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(hideTimer);
      document.body.style.overflow = "";
    };
  }, [onComplete, forceShow]);

  if (status === "hidden") return null;

  const handleSkip = () => {
    setStatus("exit");
    setTimeout(() => {
      setStatus("hidden");
      document.body.style.overflow = "";
      if (onComplete) onComplete();
    }, 900);
  };

  return (
    <div
      className={`splash-container${status === "exit" ? " exit" : ""}`}
      aria-hidden="true"
    >
      {/* Thin vertical accent lines — same as the Hero's left edge detail */}
      <div className="splash-accent-line splash-accent-line-l" />
      <div className="splash-accent-line splash-accent-line-r" />

      {/* Corner ornaments — editorial magazine framing */}
      <div className="splash-corner splash-corner-tl" />
      <div className="splash-corner splash-corner-tr" />
      <div className="splash-corner splash-corner-bl" />
      <div className="splash-corner splash-corner-br" />

      {/* Central content card */}
      <div className="splash-card">

        {/* Eyebrow — DM Mono tracked caps, mirrors the "Portfolio" label in the hero */}
        <p className="splash-eyebrow">Portfolio</p>

        {/* Monogram — Gilda Display, staggered entrance */}
        {/*
          Colour logic mirrors the Hero heading:
            "Alyssa" → dark   /  "Mae" → #D4175A crimson
            "A" → dark        /  "M"   → #D4175A crimson  /  "V" → dark
        */}
        <div className="splash-monogram" aria-label="AMV">
          <span className="splash-letter splash-letter-a">A</span>
          <span className="splash-letter splash-letter-m">M</span>
          <span className="splash-letter splash-letter-v">V</span>
        </div>

        {/* Rule with centrepiece diamond — draws outward after letters land */}
        <div className="splash-rule-wrap">
          <div className="splash-rule" />
          <div className="splash-rule-diamond" />
        </div>

        {/* Full name — tracks in via letter-spacing animation */}
        <p className="splash-name">Alyssa Mae Viernes</p>

        {/* Role line — Jost light, with crimson dots as separators */}
        <p className="splash-role">
          Brand Designer
          <span className="splash-role-dot">·</span>
          Creative Director
          <span className="splash-role-dot">·</span>
          Founder
        </p>

      </div>

      {/* Skip button */}
      <button
        id="splash-skip-btn"
        className="splash-skip"
        onClick={handleSkip}
      >
        Skip Intro
      </button>
    </div>
  );
}
