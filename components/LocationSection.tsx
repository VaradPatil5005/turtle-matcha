"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function LocationSection() {
  const address =
    "Ground Floor, 1329, 13th Cross Rd, 2nd Stage, Indiranagar, Bengaluru, Karnataka 560038";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "Turtle Matcha Indiranagar Bengaluru"
  )}`;

  return (
    <section
      id="location"
      className="scroll-mt-16 sm:scroll-mt-24 bg-[#FFFFFF] text-[#000000] py-20 sm:py-28 border-b border-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="mb-14 sm:mb-18">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-2 h-2 bg-black inline-block" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#6B6B6B]">
              The Space · Indiranagar
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase leading-none tracking-tight">
            VISIT THE CAFE
          </h2>
        </div>

        {/* Two-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-t border-l border-r border-black">
          {/* Left Column: Business Details */}
          <div className="lg:col-span-6 p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-black flex flex-col justify-between">
            <div className="space-y-8">
              {/* Address */}
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#6B6B6B] block mb-2">
                  Location & Neighborhood
                </span>
                <p className="font-bold text-lg sm:text-xl uppercase tracking-wider text-black leading-snug">
                  {address}
                </p>
                <p className="text-xs text-[#6B6B6B] mt-2 font-mono">
                  Quiet residential street • Converted heritage bungalow • 2nd
                  Stage Indiranagar
                </p>
              </div>

              {/* Hours */}
              <div className="border-t border-[#E4E4E1] pt-6">
                <span className="font-mono text-xs uppercase tracking-widest text-[#6B6B6B] block mb-2">
                  Hours of Operation
                </span>
                <div className="flex items-center justify-between text-sm sm:text-base font-bold uppercase">
                  <span>Tuesday – Sunday</span>
                  <span>12:00 PM – 10:00 PM</span>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm text-[#6B6B6B] font-mono mt-1">
                  <span>Monday</span>
                  <span>Closed (Rest & Sourcing)</span>
                </div>
              </div>

              {/* Price & Services */}
              <div className="border-t border-[#E4E4E1] pt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#6B6B6B] block mb-1">
                    Price Range
                  </span>
                  <p className="font-bold text-base uppercase">
                    ₹200 – ₹400 per person
                  </p>
                </div>
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#6B6B6B] block mb-1">
                    Service Options
                  </span>
                  <p className="text-xs sm:text-sm text-black font-semibold leading-relaxed">
                    Dine-in · Takeaway · No-contact delivery · Online orders
                  </p>
                </div>
              </div>

              {/* Pet-friendly & Community Vibe Badge */}
              <div className="border border-black p-4 bg-[#F4F4F2]">
                <span className="font-mono text-xs uppercase tracking-widest text-black font-bold block mb-1">
                  Pet-Friendly & Community Gatherings
                </span>
                <p className="text-xs text-[#6B6B6B] leading-relaxed">
                  Dogs and pets are welcome inside and in the courtyard. We also
                  host monthly matcha-making masterclasses, pickleball club
                  meetups, and acoustic music launch evenings.
                </p>
              </div>
            </div>

            {/* Directions Action Button */}
            <div className="pt-8 mt-8 border-t border-[#E4E4E1]">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full p-4 sm:p-5 bg-black text-white hover:bg-[#222222] transition-colors group"
              >
                <span className="font-display text-lg sm:text-xl uppercase tracking-wider">
                  GET DIRECTIONS ON GOOGLE MAPS
                </span>
                <ArrowUpRight
                  size={24}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </a>
            </div>
          </div>

          {/* Right Column: Map Embed / Visual representation */}
          <div className="lg:col-span-6 relative min-h-[400px] lg:min-h-full bg-[#EDEDEA] flex flex-col">
            <iframe
              title="Turtle Matcha Indiranagar Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.982928581335!2d77.63665!3d12.9729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae169a19c72e27%3A0x868b449bca7dfb0!2s13th%20Cross%20Rd%2C%20Indiranagar%2C%20Bengaluru%2C%20Karnataka%20560038!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full h-full min-h-[420px] filter grayscale contrast-125 border-none"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Map Overlay Badge */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs p-3 border border-black flex items-center justify-between">
              <div>
                <span className="font-bold text-xs uppercase block">
                  13th Cross Rd, Indiranagar
                </span>
                <span className="text-[11px] font-mono text-[#6B6B6B]">
                  12.9729° N, 77.6366° E • Bengaluru
                </span>
              </div>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono font-bold uppercase underline"
              >
                Open Map ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
