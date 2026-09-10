"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

interface NavbarProps {
  currentTextColor?: string;
  isHeroVisible?: boolean;
}

export default function Navbar({
  currentTextColor = "#000000",
  isHeroVisible = true,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Scroll detection for desktop header backdrop
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight - 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle ESC key and focus trapping when mobile menu is open
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    // Lock body scroll when mobile menu is open
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  // Desktop color transitions
  const isDarkNav = !scrolled && isHeroVisible;
  const desktopTextColor = isDarkNav ? currentTextColor : "#000000";
  const desktopBgColor = scrolled
    ? "rgba(255, 255, 255, 0.94)"
    : "transparent";
  const desktopBorderColor = scrolled ? "rgba(0, 0, 0, 0.12)" : "transparent";

  return (
    <>
      {/* Fixed Navigation Bar - z-70 above hero elements (z-60) */}
      <header
        className={`fixed top-0 left-0 right-0 z-70 transition-all duration-300 pt-[env(safe-area-inset-top,0px)] ${
          scrolled ? "shadow-xs" : ""
        }`}
        style={{
          borderBottom: `1px solid ${desktopBorderColor}`,
        }}
      >
        {/* Mobile Opaque Nav Bar Background (always visible, opaque black with white text for maximum legibility over any slide) */}
        <div className="sm:hidden w-full bg-[#000000] text-[#FFFFFF] border-b border-[#222222] px-4 py-3 flex items-center justify-between">
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-2 text-white"
          >
            <span className="font-display text-xl tracking-tight leading-none uppercase">
              TURTLE MATCHA
            </span>
            <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 border border-white/40 tracking-widest text-white/80">
              INDIRANAGAR
            </span>
          </Link>

          {/* Accessible 44x44px Tap Target Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open mobile navigation menu"
            aria-expanded={mobileMenuOpen}
            className="w-11 h-11 flex items-center justify-center text-white active:scale-95 transition-transform cursor-pointer"
          >
            <Menu size={26} strokeWidth={2.2} />
          </button>
        </div>

        {/* Desktop Header */}
        <div
          className="hidden sm:flex w-full py-4 sm:py-5 px-6 sm:px-10 items-center justify-between transition-colors duration-300"
          style={{
            backgroundColor: desktopBgColor,
            backdropFilter: scrolled ? "blur(12px)" : "none",
          }}
        >
          {/* Brand Lockup */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            style={{ color: desktopTextColor, transition: "color 650ms" }}
          >
            <span className="font-display text-2xl sm:text-3xl tracking-tighter leading-none">
              TURTLE MATCHA
            </span>
            <span className="text-[10px] tracking-widest font-mono uppercase px-2 py-0.5 border border-current opacity-70">
              Indiranagar • BLR
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="flex items-center gap-6 md:gap-8 text-xs font-semibold uppercase tracking-wider">
            <Link
              href="#popular"
              className="opacity-80 hover:opacity-100 transition-opacity"
              style={{ color: desktopTextColor }}
            >
              Popular
            </Link>
            <Link
              href="#craft"
              className="opacity-80 hover:opacity-100 transition-opacity"
              style={{ color: desktopTextColor }}
            >
              Our Craft
            </Link>
            <Link
              href="#menu"
              className="opacity-80 hover:opacity-100 transition-opacity"
              style={{ color: desktopTextColor }}
            >
              Menu
            </Link>
            <Link
              href="#comparison"
              className="opacity-80 hover:opacity-100 transition-opacity"
              style={{ color: desktopTextColor }}
            >
              Why Us
            </Link>
            <Link
              href="#location"
              className="opacity-80 hover:opacity-100 transition-opacity"
              style={{ color: desktopTextColor }}
            >
              Visit
            </Link>
            <Link
              href="#menu"
              className="px-4 py-2 border text-xs tracking-wider uppercase font-bold transition-all duration-150"
              style={{
                borderColor: desktopTextColor,
                color: desktopTextColor,
                backgroundColor: "transparent",
              }}
            >
              Order Now
            </Link>
          </nav>
        </div>
      </header>

      {/* Accessible Mobile Fullscreen Menu Drawer - z-80 */}
      {mobileMenuOpen && (
        <div
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
          className="sm:hidden fixed inset-0 z-80 bg-[#000000] text-[#FFFFFF] flex flex-col justify-between p-6 pt-[calc(env(safe-area-inset-top,0px)+1.5rem)] animate-in fade-in duration-200"
        >
          {/* Top Bar inside Drawer with 44x44px Close Button */}
          <div className="flex items-center justify-between pb-6 border-b border-white/20">
            <span className="font-display text-2xl uppercase tracking-tight text-white">
              TURTLE MATCHA
            </span>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeMenu}
              aria-label="Close navigation menu"
              className="w-12 h-12 flex items-center justify-center border border-white/40 text-white rounded-full active:scale-95 cursor-pointer"
            >
              <X size={24} strokeWidth={2.2} />
            </button>
          </div>

          {/* Navigation Links with large 48px+ tap targets */}
          <nav className="flex flex-col gap-2 py-6">
            {[
              { label: "Top Pours", href: "#popular" },
              { label: "Our Craft", href: "#craft" },
              { label: "Full Menu", href: "#menu" },
              { label: "Why Us", href: "#comparison" },
              { label: "Location & Hours", href: "#location" },
            ].map((link, idx) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="flex items-center justify-between py-4 text-xl font-bold uppercase tracking-wider border-b border-white/10 hover:text-white/80 active:opacity-70 transition-colors"
              >
                <span>{link.label}</span>
                <span className="font-mono text-xs text-white/50">0{idx + 1}</span>
              </a>
            ))}
          </nav>

          {/* Bottom Drawer CTA & Location Meta */}
          <div className="pt-4 border-t border-white/20 space-y-4">
            <a
              href="#menu"
              onClick={closeMenu}
              className="w-full py-4 bg-white text-black font-display text-xl uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer active:scale-98 transition-transform"
            >
              <span>ORDER NOW</span>
              <ArrowRight size={20} />
            </a>

            <div className="text-xs font-mono text-white/60 space-y-1">
              <p>Ground Floor, 1329, 13th Cross Rd, Indiranagar</p>
              <p>Tue – Sun: 12:00 PM – 10:00 PM • Pet Friendly</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
