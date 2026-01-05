'use client';

import { useLocale } from "@/contexts/LocaleContext";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const FloatingButton = () => {
  const { t } = useLocale();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const roomsSection = document.getElementById("rooms");

      // Hide in hero section (first viewport)
      const isPastHero = window.scrollY > window.innerHeight;

      // Hide in rooms section
      let isInRoomsSection = false;
      if (roomsSection) {
        const rect = roomsSection.getBoundingClientRect();
        isInRoomsSection = rect.top <= 0 && rect.bottom > window.innerHeight;
      }

      setIsVisible(isPastHero && !isInRoomsSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sm:hidden fixed bottom-0 left-0 right-0 z-50 p-3 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full pointer-events-none"
      }`}
    >
      <Link
        href="#bookNow"
        className="group flex items-center justify-between w-full p-4
          bg-black text-white rounded-full
          shadow-2xl shadow-black/50
          active:scale-[0.98] transition-all duration-200
          cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-6 h-6 bg-white rounded-full">
            <svg
              className="w-5 h-5 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </span>
          <div className="flex flex-col items-start">
            <span className="font-semibold">{t("promotions.bookNow")}</span>
          </div>
        </div>

        <span className="flex items-center justify-center w-6 h-6 bg-white/10 rounded-full group-active:bg-white/20 transition-colors">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      </Link>
    </div>
  );
};

export default FloatingButton;
