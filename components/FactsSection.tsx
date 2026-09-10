"use client";

import React from "react";

const FACTS = [
  {
    num: "137X",
    label: "Antioxidant Density",
    detail:
      "Because you ingest the whole leaf rather than an infusion, ceremonial matcha delivers up to 137 times more EGCG polyphenols than regular steeped green tea.",
  },
  {
    num: "1 HR",
    label: "Milling per 30 Grams",
    detail:
      "Precision granite stone mills turn at a deliberate pace so friction heat never scorches the fragile shade-grown tencha leaves.",
  },
  {
    num: "4-6H",
    label: "Sustained Calm Focus",
    detail:
      "The combination of natural caffeine and high-dose L-Theanine stimulates alpha brain waves, creating prolonged alertness without caffeine jitters or crashes.",
  },
  {
    num: "800 AD",
    label: "Heritage Lineage",
    detail:
      "Whisked tea originated over a millennium ago when Zen masters carried tea seeds from China to Uji, founding the ceremonial chado tradition.",
  },
];

export default function FactsSection() {
  return (
    <section className="bg-[#FFFFFF] text-[#000000] py-20 sm:py-28 border-b border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="mb-14 sm:mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-2 h-2 bg-black inline-block" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#6B6B6B]">
              Botanical & Historical Facts
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl uppercase leading-none tracking-tight">
            THE ANATOMY OF REAL MATCHA
          </h2>
        </div>

        {/* 4-Column Bordered Stat Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-black">
          {FACTS.map((fact) => (
            <div
              key={fact.num}
              className="border-r border-b border-black p-6 sm:p-8 flex flex-col justify-between hover:bg-[#F4F4F2] transition-colors"
            >
              <div>
                <span className="font-display text-5xl sm:text-6xl lg:text-7xl text-black block mb-4 tracking-tighter">
                  {fact.num}
                </span>
                <h3 className="font-bold text-sm sm:text-base uppercase tracking-wider text-black mb-2">
                  {fact.label}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed mt-4 pt-4 border-t border-[#E4E4E1] font-body">
                {fact.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
