"use client";

import React from "react";

interface PopularItem {
  name: string;
  sub: string;
  image: string;
  price: string;
  tag: string;
}

const POPULAR_ITEMS: PopularItem[] = [
  {
    name: "Salted Maple Matcha",
    sub: "Stone-ground ceremonial matcha rounded out with pure maple and flake sea salt.",
    image: "/images/menu/salted-maple-matcha.jpg",
    price: "₹320",
    tag: "Crowd Favorite",
  },
  {
    name: "Strawberry Matcha",
    sub: "Slow-poured ceremonial matcha over house strawberry compote and cold whole milk.",
    image: "/images/menu/strawberry-matcha.jpg",
    price: "₹310",
    tag: "Reviewers' Pick",
  },
  {
    name: "Classic Whisk Matcha",
    sub: "Hand-whisked chasen ceremonial grade poured over crystal ice. Pure, unadorned.",
    image: "/images/menu/classic-whisk-matcha.jpg",
    price: "₹280",
    tag: "Traditional",
  },
  {
    name: "Mont Blanc Matcha",
    sub: "Matcha layered with velvety chestnut-cream notes, finished fresh tableside.",
    image: "/images/menu/mont-blanc-matcha.jpg",
    price: "₹340",
    tag: "Signature",
  },
];

export default function PopularSection() {
  return (
    <section
      id="popular"
      className="scroll-mt-16 sm:scroll-mt-24 bg-[#FFFFFF] text-[#000000] border-t border-b border-black py-20 sm:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="mb-14 sm:mb-20">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-2 h-2 bg-black inline-block" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#6B6B6B]">
              Customer Staples · Top Signals
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase leading-none tracking-tight">
              FOUR CUPS EVERYONE
              <br />
              ORDERS TWICE
            </h2>
            <p className="text-sm sm:text-base text-[#6B6B6B] max-w-md leading-relaxed font-body">
              Pulled straight from customer reviews and cafe counter tallies.
              Stone-ground in small batches, poured with zero shortcuts.
            </p>
          </div>
        </div>

        {/* 4-Column Bordered Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-l border-black">
          {POPULAR_ITEMS.map((item, idx) => (
            <div
              key={item.name}
              className="border-r border-b border-black p-4 sm:p-6 flex flex-col justify-between group transition-colors duration-200 hover:bg-[#F4F4F2]"
            >
              {/* Top metadata */}
              <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-[#6B6B6B] mb-4">
                <span>0{idx + 1}</span>
                <span className="border border-black px-1.5 py-0.5 text-black">
                  {item.tag}
                </span>
              </div>

              {/* Product Photo */}
              <div className="relative aspect-square w-full my-4 overflow-hidden bg-white border border-[#E4E4E1] flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              {/* Card Details */}
              <div className="mt-4 pt-4 border-t border-[#E4E4E1] flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-bold text-sm sm:text-base uppercase tracking-wider text-black leading-snug">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#6B6B6B] mt-1.5 line-clamp-2 leading-relaxed">
                    {item.sub}
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between pt-2">
                  <span className="font-display text-xl sm:text-2xl text-black">
                    {item.price}
                  </span>
                  <a
                    href="#menu"
                    className="text-xs font-semibold uppercase tracking-wider underline underline-offset-4 opacity-80 group-hover:opacity-100"
                  >
                    View in Menu
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
