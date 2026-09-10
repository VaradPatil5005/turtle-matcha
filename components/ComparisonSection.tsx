"use client";

import React from "react";

const COMPARISON_ROWS = [
  {
    criteria: "Leaf Origin & Grade",
    turtle: "First-harvest ceremonial tencha leaves, shade-grown 21+ days in Uji & Shizuoka.",
    typical: "Commercial culinary dust or yellowed late-harvest tea leaves from industrial farms.",
  },
  {
    criteria: "Milling & Freshness",
    turtle: "Granite stone-ground in micro batches. Bright electric-green with zero oxidation.",
    typical: "Mass machine-ground months prior; dull olive hue and depleted catechins.",
  },
  {
    criteria: "Whisking Technique",
    turtle: "Hand-whisked to order with a 100-prong bamboo chasen creating creamy microfoam.",
    typical: "Motorized electric immersion blenders or premixed concentrate pumps.",
  },
  {
    criteria: "Sweetener & Balance",
    turtle: "Pure umami & vegetal sweetness allowed to shine. Zero sugar masking.",
    typical: "Loaded with heavy syrups and artificial flavoring to mask bitter aftertaste.",
  },
  {
    criteria: "Atmosphere & Community",
    turtle: "Cozy converted Indiranagar bungalow, dog-friendly garden, pickleball & matcha workshops.",
    typical: "Noisy commercial counters, generic corporate franchise interior.",
  },
];

export default function ComparisonSection() {
  return (
    <section
      id="comparison"
      className="scroll-mt-16 sm:scroll-mt-24 bg-[#000000] text-[#FFFFFF] py-20 sm:py-28 border-b border-[#333333]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="mb-14 sm:mb-20">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-2 h-2 bg-white inline-block" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#6B6B6B]">
              The Standard · Direct Comparison
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase leading-none tracking-tight">
              WHY OUR MATCHA
              <br />
              IS SUPERIOR
            </h2>
            <p className="text-sm sm:text-base text-[#6B6B6B] max-w-md font-body">
              A side-by-side look at how ceremonial tea should be handled versus
              the shortcuts common in commercial cafes.
            </p>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="border border-white overflow-x-auto">
          {/* Table Header */}
          <div className="grid grid-cols-12 min-w-[640px] border-b border-white bg-[#0A0A0A] text-xs font-mono uppercase tracking-widest">
            <div className="col-span-4 p-4 sm:p-6 border-r border-white font-bold text-[#6B6B6B]">
              CRITERIA
            </div>
            <div className="col-span-4 p-4 sm:p-6 border-r border-white font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 bg-white inline-block" />
              TURTLE MATCHA
            </div>
            <div className="col-span-4 p-4 sm:p-6 font-bold text-[#6B6B6B]">
              TYPICAL CAFE MATCHA
            </div>
          </div>

          {/* Table Body Rows */}
          {COMPARISON_ROWS.map((row, idx) => (
            <div
              key={row.criteria}
              className={`grid grid-cols-12 min-w-[640px] ${
                idx !== COMPARISON_ROWS.length - 1 ? "border-b border-white/40" : ""
              } hover:bg-[#111111] transition-colors`}
            >
              <div className="col-span-4 p-4 sm:p-6 border-r border-white/40 font-bold uppercase text-xs sm:text-sm tracking-wider text-white">
                {row.criteria}
              </div>
              <div className="col-span-4 p-4 sm:p-6 border-r border-white/40 text-xs sm:text-sm text-white leading-relaxed font-body">
                {row.turtle}
              </div>
              <div className="col-span-4 p-4 sm:p-6 text-xs sm:text-sm text-[#6B6B6B] leading-relaxed font-body">
                {row.typical}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
