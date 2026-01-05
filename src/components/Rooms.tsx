"use client";

import React, { useEffect, useRef, useState } from "react";
import { useLocale } from "@/contexts/LocaleContext";
import { ROOMS } from "@/constants";

const Rooms = () => {
  const { locale } = useLocale();
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerTop = containerRef.current.getBoundingClientRect().top;
      const containerHeight = containerRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;

      if (
        containerTop <= 0 &&
        containerTop > -containerHeight + viewportHeight
      ) {
        const scrollProgress = Math.abs(containerTop);
        const sectionHeight = (containerHeight - viewportHeight) / ROOMS.length;
        const newIndex = Math.min(
          Math.floor(scrollProgress / sectionHeight),
          ROOMS.length - 1
        );
        setActiveIndex(newIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="rooms"
      ref={containerRef}
      className="relative"
      style={{ height: `${(ROOMS.length + 1) * 100}vh` }}
    >
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen flex flex-col sm:flex-row items-center justify-center px-4 sm:px-10 gap-5 sm:gap-10 overflow-hidden">
        {/* Image Left - with parallax transition */}
        <div className="relative w-full max-w-[300px] sm:max-w-[400px] aspect-[3/4] rounded-xl shadow-lg overflow-hidden">
          {ROOMS.map((room, index) => (
            <img
              key={room.id}
              className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-500 ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
              src={room.image}
              alt={room.title}
            />
          ))}
        </div>

        {/* Content Right - with slide transition */}
        <div className="w-full sm:w-1/2 relative h-[100px] sm:h-[300px]">
          {ROOMS.map((room, index) => (
            <div
              key={room.id}
              ref={(el) => {
                sectionRefs.current[index] = el;
              }}
              className={`absolute inset-0 flex flex-col justify-center transition-all duration-500 ${
                index === activeIndex
                  ? "opacity-100 translate-y-0"
                  : index < activeIndex
                  ? "opacity-0 -translate-y-10"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h3 className="text-2xl sm:text-3xl font-semibold mb-3">
                {room.title}
              </h3>
              <p className="text-gray-600 text-base sm:text-lg">
                {room.description[locale]}
              </p>
            </div>
          ))}

          {/* Progress Indicators */}
          <div className="absolute bottom-0 left-0 flex gap-2">
            {ROOMS.map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "w-8 bg-black" : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
