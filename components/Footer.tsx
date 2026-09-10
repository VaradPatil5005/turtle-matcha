"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#000000] text-[#FFFFFF] border-t border-black pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top: Massive Anton Wordmark */}
        <div className="border-b border-white/20 pb-12 mb-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <h1 className="font-display text-5xl sm:text-8xl md:text-9xl uppercase tracking-tight leading-none">
              TURTLE MATCHA
            </h1>
            <div className="max-w-sm">
              <p className="text-xs sm:text-sm text-[#AAAAAA] leading-relaxed font-body">
                Making matcha taste good for everyone. Indiranagar&apos;s
                dedicated matcha and hojicha destination — pet-friendly,
                community-centered, and whisked fresh.
              </p>
            </div>
          </div>
        </div>

        {/* Middle: Hours, Address & Quick Nav Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12 text-xs font-mono">
          <div className="md:col-span-4">
            <span className="text-[#6B6B6B] block uppercase tracking-widest mb-2">
              ADDRESS
            </span>
            <p className="text-white leading-relaxed font-body text-sm">
              Ground Floor, 1329, 13th Cross Rd,
              <br />
              2nd Stage, Indiranagar, Bengaluru 560038
            </p>
          </div>

          <div className="md:col-span-4">
            <span className="text-[#6B6B6B] block uppercase tracking-widest mb-2">
              HOURS
            </span>
            <p className="text-white leading-relaxed font-body text-sm">
              Tuesday – Sunday: 12:00 PM – 10:00 PM
              <br />
              Monday: Closed
            </p>
          </div>

          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <span className="text-[#6B6B6B] block uppercase tracking-widest mb-2">
                COMMUNITY & SOCIAL
              </span>
              <p className="text-white leading-relaxed font-body text-sm">
                Instagram:{" "}
                <a
                  href="https://instagram.com/turtlematcha.blr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:opacity-80 transition-opacity"
                >
                  @turtlematcha.blr
                </a>
              </p>
            </div>
            <div className="mt-4">
              <span className="inline-block border border-white/40 px-2 py-1 text-[11px] uppercase tracking-widest">
                Pet-Friendly • Pickleball Meetups • Masterclasses
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#6B6B6B]">
          <div>
            © {new Date().getFullYear()} Turtle Matcha. Indiranagar, Bengaluru.
            All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="#popular"
              className="hover:text-white transition-colors uppercase"
            >
              Top Pours
            </Link>
            <Link
              href="#menu"
              className="hover:text-white transition-colors uppercase"
            >
              Full Menu
            </Link>
            <Link
              href="#location"
              className="hover:text-white transition-colors uppercase"
            >
              Find Us
            </Link>
            <a
              href="#top"
              className="hover:text-white transition-colors uppercase"
            >
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
