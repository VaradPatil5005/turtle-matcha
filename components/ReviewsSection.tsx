"use client";

import React from "react";

const REVIEWS = [
  {
    theme: "Variety & Balance",
    text: "Having worked through nearly the entire beverage board, the Salted Maple Matcha and Strawberry Matcha remain absolute standouts. Unquestionably the cleanest and most authentic matcha in Bengaluru.",
    author: "Regular Patron",
    meta: "Verified Google Review • Local Guide",
    drink: "Salted Maple Matcha",
  },
  {
    theme: "Purity of Pour",
    text: "Remarkably smooth and balanced without the chalky bitterness you encounter elsewhere. The staff knows the origin of each leaf and whisks with genuine care. A warm, unhurried afternoon experience.",
    author: "Coffee & Tea Enthusiast",
    meta: "Verified Google Review",
    drink: "Classic Whisk Matcha",
  },
  {
    theme: "Atmosphere & Heritage",
    text: "Tucked inside a repurposed Indiranagar home, the peaceful courtyard vibe sets it apart from every loud commercial cafe in the city. If you care about real Japanese tea craft, this is your place.",
    author: "Neighborhood Resident",
    meta: "Verified Google Review",
    drink: "Mont Blanc Matcha",
  },
];

export default function ReviewsSection() {
  return (
    <section className="bg-[#F4F4F2] text-[#000000] py-20 sm:py-28 border-b border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="mb-14 sm:mb-18">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-2 h-2 bg-black inline-block" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#6B6B6B]">
              Google Verified Feedback
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-4 mb-2">
                <span className="font-display text-5xl sm:text-7xl uppercase leading-none tracking-tight">
                  4.6★
                </span>
                <div className="border-l border-black pl-4 py-1">
                  <span className="block font-bold text-base sm:text-lg uppercase tracking-wider">
                    298 Google Reviews
                  </span>
                  <span className="block text-xs font-mono text-[#6B6B6B] uppercase tracking-widest">
                    Indiranagar • Bengaluru
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#6B6B6B] max-w-lg leading-relaxed font-body">
              Guests consistently highlight the variety and balance of the
              matcha and hojicha, the salted maple and strawberry flavors
              specifically, the cozy residential courtyard atmosphere, and
              thoughtful recommendations by the baristas.
            </p>
          </div>
        </div>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-black">
          {REVIEWS.map((review, idx) => (
            <div
              key={idx}
              className="border-r border-b border-black p-6 sm:p-8 bg-white flex flex-col justify-between hover:bg-[#FDFDFD] transition-colors"
            >
              <div>
                {/* Rating & Tag */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E4E4E1]">
                  <span className="font-mono text-xs tracking-widest text-black">
                    ★★★★★
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#6B6B6B] border border-[#E4E4E1] px-2 py-0.5">
                    {review.theme}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-sm sm:text-base text-black leading-relaxed italic mb-8 font-body">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              {/* Reviewer Meta */}
              <div className="pt-4 border-t border-[#E4E4E1]">
                <div className="font-bold text-xs uppercase tracking-wider text-black">
                  {review.author}
                </div>
                <div className="flex items-center justify-between mt-1 text-[11px] text-[#6B6B6B] font-mono">
                  <span>{review.meta}</span>
                  <span className="text-black font-semibold">
                    {review.drink}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
