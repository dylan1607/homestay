"use client";

import { useState } from "react";
import { useLocale } from "@/contexts/LocaleContext";
import { useScroll } from "@/hooks";
import BookingForm from "./BookingForm";
import heroBanner from "../../public/hero-banner.png";

export default function Hero() {
  const scrollY = useScroll();
  const [showBooking, setShowBooking] = useState(false);
  const { t } = useLocale();

  return (
    <section
      id="home"
      className="relative h-[calc(100vh-80px)] sm:h-screen overflow-hidden bg-white"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBanner.src})`,
          transform: `translateY(${scrollY * 0.35}px)`,
        }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className="absolute inset-0 -top-20 z-10 h-full flex items-center justify-center text-center text-black">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-7xl font-bold mb-6 animate-fade-in">
            {t("hero.title")}
          </h1>
          <p className="text-lg sm:text-2xl mb-8 max-w-2xl mx-auto">
            {t("hero.subtitle")}
          </p>
          <button
            onClick={() => setShowBooking(!showBooking)}
            className="bg-black cursor-pointer border-white text-white px-6 py-2 sm:py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-800 transition-colors"
          >
            {showBooking ? t("hero.hideBooking") : t("nav.bookNow")}
          </button>
        </div>
      </div>

      {/* <div className="absolute bottom-[15vh] left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div> */}

      <div
        className={`absolute bottom-0 left-0 right-0 bg-white backdrop-blur-sm p-6 transform transition-transform duration-500 ease-in-out z-20 ${
          showBooking ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="relative">
          <button
            onClick={() => setShowBooking(false)}
            className="absolute top-0 right-0 -mt-2 -mr-2 bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-700 transition-colors"
          >
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <BookingForm />
        </div>
      </div>
      <div className="absolute left-0 right-0 bottom-0 z-10 h-[40vw] sm:h-[15vw] bg-gradient-to-b from-background/0 from-20% via-white/20 to-white"></div>
    </section>
  );
}
