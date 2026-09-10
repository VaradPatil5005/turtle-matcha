"use client";

import React, { useState } from "react";
import Image from "next/image";

type Category = "Matcha" | "Hojicha" | "Seasonal" | "Sides";

interface MenuItem {
  name: string;
  desc: string;
  price: string;
  image?: string;
  notes?: string;
}

const MENU_DATA: Record<Category, MenuItem[]> = {
  Matcha: [
    {
      name: "Classic Whisk Matcha",
      desc: "Ceremonial matcha, hand-whisked, served over ice.",
      price: "₹280",
      image: "/images/menu/classic-whisk-matcha.jpg",
      notes: "Pure Tencha • Unsweetened",
    },
    {
      name: "Salted Maple Matcha",
      desc: "Stone-ground matcha rounded out with maple and sea salt.",
      price: "₹320",
      image: "/images/menu/salted-maple-matcha.jpg",
      notes: "Most Loved",
    },
    {
      name: "Strawberry Matcha",
      desc: "Layered strawberry and ceremonial matcha.",
      price: "₹310",
      image: "/images/menu/strawberry-matcha.jpg",
      notes: "Real Berry Compote",
    },
    {
      name: "Mont Blanc Matcha",
      desc: "Matcha with chestnut-cream notes, finished tableside.",
      price: "₹340",
      image: "/images/menu/mont-blanc-matcha.jpg",
      notes: "Signature Dessert Pour",
    },
    {
      name: "Raspberry Coconut Matcha",
      desc: "Matcha layered with raspberry and coconut milk.",
      price: "₹330",
      image: "/images/menu/raspberry-coconut-matcha.jpg",
      notes: "Dairy-Free Standard",
    },
    {
      name: "Toasted Cinnamon Matcha",
      desc: "Matcha warmed through with toasted cinnamon.",
      price: "₹300",
      image: "/images/menu/toasted-cinnamon-matcha.jpg",
      notes: "Warm or Iced",
    },
    {
      name: "White Coconut Pistachio Matcha",
      desc: "Matcha, coconut milk, and crushed pistachio.",
      price: "₹330",
      image: "/images/menu/white-coconut-pistachio-matcha.jpg",
      notes: "Nutty & Crisp",
    },
  ],
  Hojicha: [
    {
      name: "Dark Chocolate Hojicha",
      desc: "Roasted hojicha with rich dark chocolate.",
      price: "₹300",
      image: "/images/menu/dark-chocolate-hojicha.jpg",
      notes: "70% Cocoa Notes",
    },
    {
      name: "Hazelnut Hojicha",
      desc: "Roasted hojicha, steamed milk, hazelnut.",
      price: "₹300",
      image: "/images/menu/hazelnut-hojicha.jpg",
      notes: "Low Caffeine • Nutty",
    },
    {
      name: "Red Velvet Hojicha",
      desc: "Roasted hojicha with a red velvet twist.",
      price: "₹310",
      image: "/images/menu/red-velvet-hojicha.jpg",
      notes: "Smooth & Velvety",
    },
  ],
  Seasonal: [
    {
      name: "Seasonal Mango Cooler",
      desc: "Rotating seasonal fruit, ceremonial matcha base.",
      price: "₹320",
      image: "/images/menu/seasonal-mango-cooler.jpg",
      notes: "Alphonso Infused",
    },
    {
      name: "Winter Spiced Hojicha",
      desc: "Hojicha with warming winter spices and whole milk.",
      price: "₹300",
      image: "/images/menu/winter-spiced-hojicha.jpg",
      notes: "Star Anise & Clove",
    },
  ],
  Sides: [
    {
      name: "Matcha Cookie",
      desc: "House-baked, matcha-dusted soft centered.",
      price: "₹120",
      image: "/images/menu/matcha-cookie.jpg",
      notes: "Fresh Daily",
    },
    {
      name: "Butter Croissant",
      desc: "Baked fresh daily, flaky French-style laminated pastry.",
      price: "₹140",
      image: "/images/menu/butter-croissant.jpg",
      notes: "Warm from the Oven",
    },
  ],
};

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState<Category>("Matcha");
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const categories: Category[] = ["Matcha", "Hojicha", "Seasonal", "Sides"];

  return (
    <section
      id="menu"
      className="scroll-mt-16 sm:scroll-mt-24 bg-[#FFFFFF] text-[#000000] py-20 sm:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-2 h-2 bg-black inline-block" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#6B6B6B]">
              Full Offerings · Seasonal & Staples
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase leading-none tracking-tight">
              OUR MENU
            </h2>
            <p className="text-sm text-[#6B6B6B] max-w-md font-body">
              All drinks customizable with oat, almond, or whole milk. Available
              for dine-in at our Indiranagar cafe, takeaway, or direct order.
            </p>
          </div>
        </div>

        {/* Tab Navigation Buttons */}
        <div className="flex border-b border-black mb-8 overflow-x-auto scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeTab === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveTab(cat)}
                style={{
                  color: isActive ? "#FFFFFF" : "#000000",
                  backgroundColor: isActive ? "#000000" : "transparent",
                }}
                className="px-6 sm:px-10 py-4 font-bold text-sm sm:text-base uppercase tracking-wider transition-colors duration-150 relative whitespace-nowrap cursor-pointer hover:opacity-90"
              >
                {cat}
                <span
                  className="ml-2 font-mono text-xs"
                  style={{ opacity: isActive ? 0.85 : 0.55 }}
                >
                  ({MENU_DATA[cat].length})
                </span>
              </button>
            );
          })}
        </div>

        {/* Bordered List Layout */}
        <div className="border-t border-l border-r border-black">
          {MENU_DATA[activeTab].map((item, idx) => (
            <div
              key={item.name}
              className="border-b border-black p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors duration-150 hover:bg-[#F4F4F2] group"
            >
              <div className="flex items-center gap-4 sm:gap-6">
                {/* Product Thumbnail if available */}
                {item.image ? (
                  <div
                    onClick={() => setPreviewImage(item.image || null)}
                    className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 border border-black overflow-hidden bg-[#EDEDEA] cursor-zoom-in relative group/thumb"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover/thumb:scale-110 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 border border-dashed border-[#6B6B6B] flex items-center justify-center font-mono text-xs text-[#6B6B6B]">
                    0{idx + 1}
                  </div>
                )}

                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-bold text-base sm:text-lg uppercase tracking-wider text-black">
                      {item.name}
                    </h3>
                    {item.notes && (
                      <span className="hidden sm:inline-block text-[10px] font-mono uppercase tracking-widest text-[#6B6B6B] border border-[#E4E4E1] px-2 py-0.5">
                        {item.notes}
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-[#6B6B6B] mt-1 font-body">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Price & Action */}
              <div className="flex items-center justify-between sm:justify-end gap-6 sm:gap-8 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#E4E4E1]">
                {item.notes && (
                  <span className="sm:hidden text-[10px] font-mono uppercase tracking-widest text-[#6B6B6B] border border-[#E4E4E1] px-1.5 py-0.5">
                    {item.notes}
                  </span>
                )}
                <span className="font-display text-2xl sm:text-3xl text-black">
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Dietary & Customization Note */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#6B6B6B] font-mono uppercase tracking-wider border border-[#E4E4E1] p-4 bg-[#F4F4F2]">
          <span>• Plant-based milks available: Oat (+₹40), Almond (+₹40)</span>
          <span>• Pure ceremonial stone-ground whisking</span>
          <span>• 100% Cane sugar free upon request</span>
        </div>
      </div>

      {/* Lightbox / Image Preview Modal */}
      {previewImage && (
        <div
          className="fixed inset-0 z-100 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setPreviewImage(null)}
        >
          <div className="relative max-w-lg w-full bg-black border border-white p-4">
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute -top-10 right-0 text-white font-mono text-xs uppercase tracking-widest"
            >
              [CLOSE ×]
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={previewImage}
              alt="Preview"
              className="w-full h-auto object-contain max-h-[75vh]"
            />
          </div>
        </div>
      )}
    </section>
  );
}
