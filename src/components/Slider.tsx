"use client";

import { cn } from "@/utils";
import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import React, { useState, useCallback, Children } from "react";

// Types
interface BreakpointOptions {
  slidesPerView?: number | "auto";
  spacing?: number;
}

interface SliderOptions {
  loop?: boolean;
  centered?: boolean;
  freeSnap?: boolean;
  slidesPerView?: number | "auto";
  spacing?: number;
  initialSlide?: number;
  breakpoints?: Record<string, BreakpointOptions>;
}

interface SliderControls {
  currentSlide: number;
  totalSlides: number;
  goToSlide: (index: number) => void;
  goNext: () => void;
  goPrev: () => void;
  canGoNext: boolean;
  canGoPrev: boolean;
  loaded: boolean;
}

// Auto-resize plugin for keen-slider
const ResizePlugin: KeenSliderPlugin = (slider) => {
  const observer = new ResizeObserver(() => {
    slider.update();
  });

  slider.on("created", () => {
    observer.observe(slider.container);
  });

  slider.on("destroyed", () => {
    observer.unobserve(slider.container);
  });
};

// Custom hook for slider functionality
function useSlider(totalSlides: number, options: SliderOptions = {}) {
  const {
    loop = true,
    centered = false,
    freeSnap = true,
    slidesPerView = "auto",
    spacing = 16,
    initialSlide = 0,
    breakpoints,
  } = options;

  const [currentSlide, setCurrentSlide] = useState(initialSlide);
  const [loaded, setLoaded] = useState(false);

  // Convert breakpoints to keen-slider format
  const keenBreakpoints = breakpoints
    ? Object.fromEntries(
        Object.entries(breakpoints).map(([query, bp]) => [
          query,
          {
            slides: {
              perView: bp.slidesPerView ?? slidesPerView,
              spacing: bp.spacing ?? spacing,
            },
          },
        ]),
      )
    : undefined;

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: initialSlide,
      loop,
      mode: freeSnap ? "free-snap" : "snap",
      slides: {
        perView: slidesPerView,
        spacing,
        origin: centered ? "center" : "auto",
      },
      breakpoints: keenBreakpoints,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [ResizePlugin],
  );

  const goToSlide = useCallback(
    (index: number) => {
      instanceRef.current?.moveToIdx(index);
    },
    [instanceRef],
  );

  const goNext = useCallback(() => {
    instanceRef.current?.next();
  }, [instanceRef]);

  const goPrev = useCallback(() => {
    instanceRef.current?.prev();
  }, [instanceRef]);

  const canGoNext = loop || currentSlide < totalSlides - 1;
  const canGoPrev = loop || currentSlide > 0;

  const controls: SliderControls = {
    currentSlide,
    totalSlides,
    goToSlide,
    goNext,
    goPrev,
    canGoNext,
    canGoPrev,
    loaded,
  };

  return { sliderRef, controls };
}

// Arrow Button Component
function SliderArrow({
  direction,
  onClick,
  disabled,
  className = "",
}: {
  direction: "left" | "right";
  onClick: () => void;
  disabled: boolean;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "absolute top-1/2 -translate-y-1/2 z-10",
        "w-10 h-10 flex items-center justify-center",
        "bg-white/90 hover:bg-white rounded-full shadow-lg",
        "transition-all duration-200",
        "disabled:opacity-30 disabled:cursor-not-allowed",
        direction === "left" ? "left-0" : "right-0",
        className,
      )}
      aria-label={direction === "left" ? "Previous slide" : "Next slide"}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={cn("w-5 h-5", direction === "left" ? "rotate-180" : "")}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </button>
  );
}

// Arrows wrapper component
function SliderArrows({
  controls,
  className = "",
}: {
  controls: SliderControls;
  className?: string;
}) {
  if (!controls.loaded || controls.totalSlides <= 1) return null;

  return (
    <>
      <SliderArrow
        direction="left"
        onClick={controls.goPrev}
        disabled={!controls.canGoPrev}
        className={className}
      />
      <SliderArrow
        direction="right"
        onClick={controls.goNext}
        disabled={!controls.canGoNext}
        className={className}
      />
    </>
  );
}

// Dot Indicator Component
function SliderDots({
  controls,
  className = "",
}: {
  controls: SliderControls;
  className?: string;
}) {
  if (!controls.loaded || controls.totalSlides <= 1) return null;

  return (
    <div className={cn("flex justify-center gap-2 mt-4", className)}>
      {Array.from({ length: controls.totalSlides }).map((_, idx) => (
        <button
          key={idx}
          onClick={() => controls.goToSlide(idx)}
          className={cn(
            "w-2.5 h-2.5 rounded-full transition-all duration-200",
            idx === controls.currentSlide
              ? "bg-primary w-6 bg-gray-800"
              : "bg-gray-300 hover:bg-gray-400",
          )}
          aria-label={`Go to slide ${idx + 1}`}
          aria-current={idx === controls.currentSlide ? "true" : "false"}
        />
      ))}
    </div>
  );
}

// Slide wrapper component
function SliderSlides({ children }: { children: React.ReactNode }) {
  return (
    <>
      {Children.toArray(children).map((child, index) => (
        <div key={index} className="keen-slider__slide">
          {child}
        </div>
      ))}
    </>
  );
}

export { useSlider, SliderArrows, SliderDots, SliderSlides };
export type { SliderOptions, SliderControls };
