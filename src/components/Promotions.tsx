"use client";

import { useLocale } from "@/contexts/LocaleContext";
import { useObserver } from "@/hooks";
import { useRef } from "react";

const promotions = [
  {
    id: 1,
    title: "Special Deal 🔥",
    discount: "30% OFF",
    description: "Book 2 days in advance and save big on your luxury stay",
    validUntil: "December 31, 2024",
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "from-blue-500 to-purple-600",
  },
  {
    id: 2,
    title: "Weekend Getaway",
    discount: "25% OFF",
    description: "Perfect for romantic escapes and family weekends",
    validUntil: "January 15, 2025",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "from-pink-500 to-rose-600",
  },
  {
    id: 3,
    title: "Extended Stay",
    discount: "40% OFF",
    description: "Stay 7+ nights and enjoy our best rates with exclusive perks",
    validUntil: "March 1, 2025",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "from-emerald-500 to-teal-600",
  },
];

export default function Promotions() {
  const { t } = useLocale();
  const ref = useRef<HTMLElement>(null!);
  const isEnteredViewport = useObserver(ref, { threshold: 0.5 });

  return (
    <section ref={ref} id="promotions" className="mb-14">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            {t("promotions.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t("promotions.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {promotions.map((promo) => (
            <div
              key={promo.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
            >
              <div className="relative h-80">
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${promo.color} opacity-80`}
                ></div>

                <div className="absolute top-4 right-4">
                  <div className="bg-white text-gray-800 px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                    {promo.discount}
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{promo.title}</h3>
                  <p className="text-white/90 mb-4 leading-relaxed">
                    {promo.description}
                  </p>
                  <button className="w-full cursor-pointer bg-white text-gray-800 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    {t("promotions.bookNow")}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-white px-8 py-4 rounded-full shadow-lg">
            <svg
              className="w-6 h-6 text-yellow-500 animate-pulse"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-gray-700 font-medium">
              {t("promotions.cta")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
