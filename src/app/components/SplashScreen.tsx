import { useEffect, useState } from "react";
import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";
import "../../styles/SplashScreen.css";

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
    const exitTimer = setTimeout(() => {
      setStatus("exit");
    }, 2800);

    // Completely hide and clean up after curtain transition finishes (0.95s transition)
    const hideTimer = setTimeout(() => {
      setStatus("hidden");
      document.body.style.overflow = "";
      if (onComplete) onComplete();
    }, 3750); // 2800 + 950 = 3750

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(hideTimer);
      document.body.style.overflow = "";
    };
  }, [onComplete, forceShow]);

  if (status === "hidden") return null;

  // Screen sparkles distributed across the viewport
  const screenSparkles = [
    { id: 1, top: "8%", left: "12%", delay: "0.1s", size: "1.4rem", color: "#FF6B35" },
    { id: 2, top: "14%", left: "82%", delay: "0.3s", size: "1.8rem", color: "#D4175A" },
    { id: 3, top: "22%", left: "48%", delay: "0.6s", size: "1.1rem", color: "#F5A623" },
    { id: 4, top: "32%", left: "15%", delay: "0.9s", size: "1.5rem", color: "#D4175A" },
    { id: 5, top: "28%", left: "88%", delay: "0.2s", size: "1.3rem", color: "#FF6B35" },
    { id: 6, top: "48%", left: "22%", delay: "1.1s", size: "1.7rem", color: "#F5A623" },
    { id: 7, top: "42%", left: "78%", delay: "0.5s", size: "1.2rem", color: "#D4175A" },
    { id: 8, top: "58%", left: "10%", delay: "0.7s", size: "1.4rem", color: "#FF6B35" },
    { id: 9, top: "62%", left: "92%", delay: "1.0s", size: "1.6rem", color: "#F5A623" },
    { id: 10, top: "72%", left: "28%", delay: "0.4s", size: "1.1rem", color: "#D4175A" },
    { id: 11, top: "78%", left: "74%", delay: "0.8s", size: "1.5rem", color: "#FF6B35" },
    { id: 12, top: "82%", left: "42%", delay: "1.2s", size: "1.3rem", color: "#D4175A" },
    { id: 13, top: "6%", left: "54%", delay: "0.5s", size: "1.4rem", color: "#FF6B35" },
    { id: 14, top: "88%", left: "18%", delay: "1.3s", size: "1.9rem", color: "#F5A623" },
    { id: 15, top: "88%", left: "84%", delay: "0.2s", size: "1.2rem", color: "#D4175A" },
    { id: 16, top: "50%", left: "8%", delay: "0.4s", size: "1.3rem", color: "#F5A623" },
    { id: 17, top: "68%", left: "82%", delay: "0.9s", size: "1.5rem", color: "#FF6B35" },
    { id: 18, top: "92%", left: "52%", delay: "1.4s", size: "1.1rem", color: "#D4175A" }
  ];

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center splash-container ${status === "exit" ? "exit" : ""
        }`}
    >
      {/* Background Shader Gradient */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none">
        <ShaderGradientCanvas style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
          <ShaderGradient
            control="props"
            animate="on"
            axesHelper="off"
            bgColor1="#FBF4EF"
            bgColor2="#FBF4EF"
            brightness={1}
            cAzimuthAngle={180}
            cDistance={2.9}
            cPolarAngle={120}
            cameraZoom={1}
            color1="#ffffff"
            color2="#eed9db"
            color3="#f3c6cf"
            destination="onCanvas"
            embedMode="off"
            envPreset="city"
            format="gif"
            fov={45}
            frameRate={10}
            gizmoHelper="hide"
            grain="on"
            lightType="3d"
            pixelDensity={1}
            positionX={0}
            positionY={1.8}
            positionZ={0}
            range="disabled"
            rangeEnd={40}
            rangeStart={0}
            reflection={0.1}
            rotationX={0}
            rotationY={0}
            rotationZ={-90}
            shader="defaults"
            type="waterPlane"
            uAmplitude={0}
            uDensity={0.9}
            uFrequency={5.5}
            uSpeed={0.3}
            uStrength={3.5}
            uTime={0.2}
            wireframe={false}
          />
        </ShaderGradientCanvas>
      </div>

      {/* Screen-covering Sparkles */}
      <div className="absolute inset-0 w-full h-full z-10 pointer-events-none overflow-hidden">
        {screenSparkles.map((sparkle) => (
          <span
            key={sparkle.id}
            className="screen-sparkle"
            style={{
              top: sparkle.top,
              left: sparkle.left,
              animationDelay: sparkle.delay,
              fontSize: sparkle.size,
              color: sparkle.color,
            }}
          >
            ✦
          </span>
        ))}
      </div>

      {/* Centered Logo Wrapper */}
      <div className="relative z-20 flex flex-col items-center select-none pointer-events-none logo-wrapper">
        {/* The Text Design */}
        <h1 className="logo-text">AMV</h1>
        
        {/* The SVG Swoop and Heart */}
        <svg className="logo-decoration" viewBox="0 0 200 80">
          <path 
            className="swash"
            d="M 35 48 C 22 48, 15 54, 25 62 C 45 74, 90 62, 180 44 C 188 42, 186 48, 178 52 C 110 74, 50 78, 35 48 Z" 
            fill="#f27eb2" 
          />
          <path 
            className="heart" 
            d="M100,42 A5,5 0 0,1 110,42 Q110,52 100,57 Q90,52 90,42 A5,5 0 0,1 100,42 Z" 
            fill="#f27eb2" 
          />
        </svg>

        {/* Animated Local Sparkles (framing the logo) */}
        <span className="sparkle s1">✦</span>
        <span className="sparkle s2">✦</span>
        <span className="sparkle s3">✦</span>
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
        className="absolute bottom-10 z-10 text-xs uppercase tracking-[0.2em] opacity-40 hover:opacity-100 transition-opacity duration-200"
        style={{
          fontFamily: "'DM Mono', monospace",
          color: "#180A10",
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
