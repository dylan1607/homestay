"use client";

import { cn } from "@/utils";
import { useRef } from "react";

const Slider = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      className={cn(
        "flex items-center group overflow-hidden relative",
        className
      )}
    >
      <div
        ref={sliderRef}
        className={cn(
          "snap-x no-scrollbar grid auto-cols-[calc(100%/2)] grid-flow-col overflow-x-auto overflow-y-hidden px-[4%] py-0 duration-500 ease-in-out gap-2 sm:gap-x-4",
          // Responsive breakpoints for different screen sizes
          "sm:auto-cols-[calc(100%/3)]",
          "sm:auto-cols-[25%]",
          "lg:auto-cols-[20%]",
          "xl:auto-cols-[calc(100%/6)]",
          "2xl:px-[60px]",
          // Enable touch scrolling on mobile
          "sm:touch-pan-y",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Slider;
