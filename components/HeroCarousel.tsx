"use client";

import React, {
  useState,
  useEffect,
  useCallback,
  useSyncExternalStore,
} from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

function subscribeReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

function subscribeMobile(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("resize", callback);
  return () => window.removeEventListener("resize", callback);
}

function getMobileSnapshot() {
  return window.innerWidth < 640;
}

function getMobileServerSnapshot() {
  return false;
}

export interface Drink {
  name: string;
  blurb: string;
  image: string;
  bg: string;
  textColor: string;
}

export const DRINKS: Drink[] = [
  {
    name: "Strawberry Matcha",
    blurb:
      "Layered strawberry and ceremonial matcha, poured slow over ice.",
    image: "/images/hero/strawberry-matcha.png",
    bg: "#CD485E",
    textColor: "#FFFFFF",
  },
  {
    name: "Mango Matcha",
    blurb:
      "Ceremonial matcha poured over fresh mango and boba, bright and fruit-forward.",
    image: "/images/hero/mango-matcha.png",
    bg: "#F0A71D",
    textColor: "#FFFFFF",
  },
  {
    name: "Honey Rosemary Matcha",
    blurb:
      "Stone-ground matcha layered with honey and a whisper of rosemary, finished with fresh fruit.",
    image: "/images/hero/honey-rosemary-matcha.png",
    bg: "#AC5522",
    textColor: "#FFFFFF",
  },
  {
    name: "Matcha Martini",
    blurb:
      "Our matcha, shaken smooth and served up — the after-dark side of the menu.",
    image: "/images/hero/matcha-martini.png",
    bg: "#6E925F",
    textColor: "#FFFFFF",
  },
  {
    name: "Classic Whisk Matcha",
    blurb:
      "Ceremonial matcha, hand-whisked with a bamboo chasen and poured over ice — no shortcuts, no syrup.",
    image: "/images/hero/classic-whisk-matcha.png",
    bg: "#FFFFFF",
    textColor: "#000000",
  },
];

interface HeroCarouselProps {
  onActiveDrinkChange?: (drink: Drink) => void;
}

export default function HeroCarousel({ onActiveDrinkChange }: HeroCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  const isMobile = useSyncExternalStore(
    subscribeMobile,
    getMobileSnapshot,
    getMobileServerSnapshot
  );

  // Preload all 5 transparent hero drink images
  useEffect(() => {
    DRINKS.forEach((drink) => {
      const img = new Image();
      img.src = drink.image;
    });
  }, []);

  // Notify parent of active drink change
  useEffect(() => {
    if (onActiveDrinkChange) {
      onActiveDrinkChange(DRINKS[activeIndex]);
    }
  }, [activeIndex, onActiveDrinkChange]);

  const animDuration = reducedMotion ? "0ms" : "650ms";

  const navigate = useCallback(
    (direction: "next" | "prev") => {
      if (isAnimating && !reducedMotion) return;
      setIsAnimating(true);
      if (direction === "next") {
        setActiveIndex((prev) => (prev + 1) % 5);
      } else {
        setActiveIndex((prev) => (prev + 4) % 5);
      }
      setTimeout(
        () => {
          setIsAnimating(false);
        },
        reducedMotion ? 50 : 650
      );
    },
    [isAnimating, reducedMotion]
  );

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") navigate("prev");
      if (e.key === "ArrowRight") navigate("next");
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigate]);

  const currentDrink = DRINKS[activeIndex];
  const textColor = currentDrink.textColor;

  // Calculate roles from activeIndex
  const getRole = (index: number) => {
    const diff = (index - activeIndex + 5) % 5;
    if (diff === 0) return "center";
    if (diff === 1) return "right";
    if (diff === 2) return "back";
    if (diff === 3) return "farBack";
    return "left"; // diff === 4
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: currentDrink.bg,
        transition: `background-color ${animDuration} cubic-bezier(0.4, 0, 0.2, 1)`,
        fontFamily: "var(--font-inter), sans-serif",
        touchAction: "pan-y",
      }}
    >
      <div
        className="relative h-screen w-full overflow-hidden select-none flex flex-col justify-between"
        style={{ touchAction: "pan-y" }}
      >
        {/* SVG Fractal Noise Grain Overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-50 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.08 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
            backgroundRepeat: "repeat",
          }}
        />

        {/* Giant Centered Background Text "MATCHA" - Behind center drink, in front of background */}
        <div
          className="absolute inset-x-0 top-[14%] sm:top-[16%] md:top-[18%] flex items-center justify-center pointer-events-none select-none z-10"
          aria-hidden="true"
        >
          <span
            className="font-display uppercase tracking-tight text-center leading-none"
            style={{
              fontSize: "clamp(75px, 20vw, 290px)",
              fontWeight: 900,
              color: textColor,
              letterSpacing: "-0.03em",
              transition: "color 650ms cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            MATCHA
          </span>
        </div>

        {/* 3D-Style Carousel Items (Cutout Glasses) */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          {DRINKS.map((drink, index) => {
            const role = getRole(index);

            let transform = "translateX(-50%) scale(0.6)";
            let filter = "blur(4px)";
            let opacity = 0;
            let zIndex = 5;
            let left = "50%";
            let height = "25%";
            let bottom = "15%";

            if (role === "center") {
              // Main hero drink standing in front of giant text
              transform = `translateX(-50%) scale(${isMobile ? 1.05 : 1.15})`;
              filter =
                textColor === "#FFFFFF"
                  ? "drop-shadow(0 25px 35px rgba(0,0,0,0.6))"
                  : "drop-shadow(0 20px 30px rgba(0,0,0,0.22))";
              opacity = 1;
              zIndex = 25;
              left = "50%";
              height = isMobile ? "62%" : "76%";
              bottom = isMobile ? "12%" : "3%";
            } else if (role === "left") {
              // Miniature flanking figure on the left
              transform = "translateX(-50%) scale(1)";
              filter =
                textColor === "#FFFFFF"
                  ? "blur(1px) drop-shadow(0 15px 20px rgba(0,0,0,0.5))"
                  : "blur(1px) drop-shadow(0 12px 18px rgba(0,0,0,0.18))";
              opacity = 0.85;
              zIndex = 18;
              left = isMobile ? "15%" : "25%";
              height = isMobile ? "24%" : "36%";
              bottom = isMobile ? "22%" : "12%";
            } else if (role === "right") {
              // Miniature flanking figure on the right
              transform = "translateX(-50%) scale(1)";
              filter =
                textColor === "#FFFFFF"
                  ? "blur(1px) drop-shadow(0 15px 20px rgba(0,0,0,0.5))"
                  : "blur(1px) drop-shadow(0 12px 18px rgba(0,0,0,0.18))";
              opacity = 0.85;
              zIndex = 18;
              left = isMobile ? "85%" : "75%";
              height = isMobile ? "24%" : "36%";
              bottom = isMobile ? "22%" : "12%";
            } else {
              // Hidden in background
              transform = "translateX(-50%) scale(0.4)";
              filter = "blur(6px)";
              opacity = 0;
              zIndex = 4;
              left = "50%";
              height = "20%";
              bottom = "12%";
            }

            return (
              <div
                key={drink.name}
                className="absolute flex items-end justify-center pointer-events-auto cursor-pointer"
                onClick={() => {
                  if (role === "left") navigate("prev");
                  if (role === "right") navigate("next");
                }}
                style={{
                  left,
                  bottom,
                  height,
                  aspectRatio: "0.65 / 1",
                  transform,
                  filter,
                  opacity,
                  zIndex,
                  touchAction: "pan-y",
                  transition: `transform ${animDuration} cubic-bezier(0.4, 0, 0.2, 1), filter ${animDuration} cubic-bezier(0.4, 0, 0.2, 1), opacity ${animDuration} cubic-bezier(0.4, 0, 0.2, 1), left ${animDuration} cubic-bezier(0.4, 0, 0.2, 1), bottom ${animDuration} cubic-bezier(0.4, 0, 0.2, 1), height ${animDuration} cubic-bezier(0.4, 0, 0.2, 1)`,
                  willChange: "transform, filter, opacity, left",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={drink.image}
                  alt={drink.name}
                  draggable={false}
                  className="w-full h-full object-contain object-bottom pointer-events-none"
                />
              </div>
            );
          })}
        </div>

        {/* Bottom-left copy + nav buttons (Positioned cleanly with safe-area padding and 48px tap targets) */}
        <div className="absolute bottom-[calc(env(safe-area-inset-bottom,0px)+1.5rem)] left-4 sm:left-12 z-40 max-w-[270px] sm:max-w-[340px]">
          <div
            className="font-bold uppercase tracking-wider text-base sm:text-xl mb-2 leading-tight"
            style={{
              color: textColor,
              opacity: 0.95,
              transition: `color ${animDuration} cubic-bezier(0.4, 0, 0.2, 1)`,
            }}
          >
            {currentDrink.name.toUpperCase()}
          </div>

          <div
            className="hidden sm:block text-xs sm:text-sm leading-relaxed mb-5"
            style={{
              color: textColor,
              opacity: 0.8,
              lineHeight: 1.55,
              transition: `color ${animDuration} cubic-bezier(0.4, 0, 0.2, 1)`,
            }}
          >
            {currentDrink.blurb}
          </div>

          {/* Circular arrow nav buttons (48x48px mobile, 56x56px desktop, 44px+ tap target cleared) */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("prev")}
              disabled={isAnimating}
              type="button"
              aria-label="Previous Drink"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-150 active:scale-95 disabled:opacity-50 cursor-pointer touch-manipulation"
              style={{
                border: `2px solid ${textColor}`,
                color: textColor,
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.08)";
                e.currentTarget.style.backgroundColor =
                  textColor === "#FFFFFF"
                    ? "rgba(255, 255, 255, 0.15)"
                    : "rgba(0, 0, 0, 0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <ArrowLeft size={22} strokeWidth={2.25} />
            </button>

            <button
              onClick={() => navigate("next")}
              disabled={isAnimating}
              type="button"
              aria-label="Next Drink"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-150 active:scale-95 disabled:opacity-50 cursor-pointer touch-manipulation"
              style={{
                border: `2px solid ${textColor}`,
                color: textColor,
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.08)";
                e.currentTarget.style.backgroundColor =
                  textColor === "#FFFFFF"
                    ? "rgba(255, 255, 255, 0.15)"
                    : "rgba(0, 0, 0, 0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <ArrowRight size={22} strokeWidth={2.25} />
            </button>

            {/* Slide counter */}
            <span
              className="ml-2 text-xs tracking-widest font-mono uppercase"
              style={{
                color: textColor,
                opacity: 0.6,
                transition: "color 650ms cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              0{activeIndex + 1} / 05
            </span>
          </div>
        </div>

        {/* Bottom-right "ORDER NOW" CTA matching reference "DISCOVER IT ->" */}
        <div className="absolute bottom-[calc(env(safe-area-inset-bottom,0px)+1.5rem)] right-4 sm:right-12 z-40">
          <a
            href="#menu"
            className="flex items-center gap-2 group transition-opacity duration-200 cursor-pointer min-h-[44px] touch-manipulation"
            style={{
              fontFamily: "var(--font-anton), sans-serif",
              fontSize: "clamp(24px, 4.5vw, 54px)",
              fontWeight: 400,
              color: textColor,
              opacity: 0.95,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: `color ${animDuration} cubic-bezier(0.4, 0, 0.2, 1), opacity 200ms ease`,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.95")}
          >
            <span>ORDER NOW</span>
            <ArrowRight
              className="w-6 h-6 sm:w-9 sm:h-9 transition-transform duration-200 group-hover:translate-x-2"
              strokeWidth={2.25}
              style={{ color: textColor }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

