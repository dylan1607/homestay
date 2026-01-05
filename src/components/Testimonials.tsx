"use client";

import { useRef, useState, useEffect } from "react";
import { TESTIMONIALS } from "@/constants";
import { useLocale } from "@/contexts/LocaleContext";

const CARD_WIDTH = 300;
const GAP = 16;

export default function Testimonials() {
  const { t } = useLocale();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = carousel;
      const newIndex = Math.round(scrollLeft / (CARD_WIDTH + GAP));
      setActiveIndex(Math.min(Math.max(0, newIndex), TESTIMONIALS.length - 1));

      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    };

    carousel.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state
    return () => carousel.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: index * (CARD_WIDTH + GAP),
        behavior: "smooth",
      });
    }
  };

  const scroll = (direction: "left" | "right") => {
    const newIndex =
      direction === "left"
        ? Math.max(0, activeIndex - 1)
        : Math.min(TESTIMONIALS.length - 1, activeIndex + 1);
    scrollToIndex(newIndex);
  };

  return (
    <section
      id="testimonials"
      className="relative py-10 px-4 sm:px-10 bg-[#F6F7F1] space-y-5"
    >
      <div className="text-center">
        <h3 className="text-3xl sm:text-4xl font-bold text-black mb-2">
          {t("testimonials.title")}
        </h3>
        <p className="text-gray-600">{t("testimonials.subtitle")}</p>
      </div>

      {/* Carousel */}
      <div
        ref={carouselRef}
        className="flex sm:justify-center gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 -mx-4 px-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {TESTIMONIALS.map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[300px] bg-white rounded-2xl p-6 shadow-sm snap-start
              border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-14 h-14 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-semibold text-black">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>

            <div className="flex mb-3">
              {[...Array(testimonial.rating)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>

            <p className="text-gray-600 leading-relaxed text-sm">
              {testimonial.text}
            </p>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="hidden sm:flex justify-center gap-2">
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className="w-10 h-10 rounded-full bg-white border border-gray-200 hover:bg-gray-50
              flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Previous"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className="w-10 h-10 rounded-full bg-white text-black hover:bg-gray-50
              flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Next"
        >
          <svg
            className="w-5 h-5"
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
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex sm:hidden justify-center gap-2 pt-2">
        {TESTIMONIALS.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === activeIndex ? "w-6 bg-black" : "w-2 bg-gray-300"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
