import { useEffect, useState } from "react";
import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";

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

      <div className="relative z-10 flex flex-col items-center gap-5 select-none pointer-events-none">
        {/* Animated Text */}
        <h1
          className="text-4xl md:text-6xl font-light tracking-wide text-center"
          style={{ fontFamily: "'Gilda Display', serif" }}
        >
          {logoText.split("").map((char, index) => {
            let charColor = "#180A10";
            if (index >= 6 && index <= 8) {
              charColor = "#D4175A"; // "mae"
            } else if (char === ".") {
              charColor = "#D4175A"; // dots
            }
            return (
              <span
                key={index}
                className="splash-letter"
                style={{
                  animationDelay: `${index * 55}ms`,
                  color: charColor,
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
