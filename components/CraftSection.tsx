"use client";

import React from "react";

const CRAFT_POINTS = [
  {
    num: "01",
    title: "Small-Batch Stone Milling",
    description:
      "Our tencha tea leaves are stone-ground slowly in small batches — never industrially pre-ground or stored in warehouses for months. This preserves fragile aromatics, natural sweetness, and vibrant chlorophyll.",
  },
  {
    num: "02",
    title: "Chasen Hand-Whisking",
    description:
      "Every order is prepared with a 100-prong Japanese bamboo chasen using brisk W-shaped wrist motions. No motorized frothers, no blenders. It creates micro-foam that sits light on the palate.",
  },
  {
    num: "03",
    title: "Single-Origin Japanese Farms",
    description:
      "Direct relationships with small generational growers in Uji and Shizuoka. Shade-grown under tana canopies for 21+ days to peak amino acids and deep umami.",
  },
  {
    num: "04",
    title: "Zero Masking Sugar",
    description:
      "Commercial cafes drown low-grade matcha in flavoured sugar syrups to hide bitterness. We dial back sweetness so the clean vegetal sweetness and creamy profile of the leaf speak for themselves.",
  },
];

export default function CraftSection() {
  return (
    <section
      id="craft"
      className="scroll-mt-16 sm:scroll-mt-24 bg-[#F4F4F2] text-[#000000] py-20 sm:py-28 border-b border-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Intro & Philosophy */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-2 h-2 bg-black inline-block" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#6B6B6B]">
                The Method · Zero Shortcuts
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-6xl uppercase leading-none tracking-tight mb-6">
              WHAT MAKES
              <br />
              OUR MATCHA
              <br />
              SPECIAL
            </h2>

            <p className="text-sm sm:text-base text-[#6B6B6B] leading-relaxed mb-6 font-body">
              Bengaluru has plenty of cafes serving green powder dissolved in hot
              water. Turtle Matcha was built on a different premise: authentic
              Japanese ceremonial tea craft made accessible, served cold or hot,
              in an unpretentious neighborhood house in Indiranagar.
            </p>

            <div className="p-5 border border-black bg-white inline-block">
              <span className="font-mono text-xs uppercase tracking-widest block text-[#6B6B6B] mb-1">
                Standard of Pour
              </span>
              <span className="font-display text-lg uppercase tracking-tight">
                100% Ceremonial Grade · No Corn Syrup · Whisked To Order
              </span>
            </div>
          </div>

          {/* Right Column: Numbered List (01-04 in Anton) */}
          <div className="lg:col-span-7 border-t border-black">
            {CRAFT_POINTS.map((point) => (
              <div
                key={point.num}
                className="border-b border-black py-8 sm:py-10 grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8 group"
              >
                <div className="sm:col-span-3">
                  <span className="font-display text-4xl sm:text-5xl text-black block leading-none">
                    {point.num}
                  </span>
                </div>
                <div className="sm:col-span-9">
                  <h3 className="font-bold text-lg sm:text-xl uppercase tracking-wider text-black mb-3">
                    {point.title}
                  </h3>
                  <p className="text-sm text-[#6B6B6B] leading-relaxed font-body">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
