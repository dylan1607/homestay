"use client";

import { TESTIMONIALS } from "@/constants";
import { useLocale } from "@/contexts/LocaleContext";
import { useSlider, SliderArrows, SliderDots, SliderSlides } from "./Slider";

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof TESTIMONIALS)[0];
}) {
  return (
    <div className="bg-white rounded-2xl p-6 transition-shadow h-full">
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
  );
}

export default function Testimonials() {
  const { t } = useLocale();
  const { sliderRef, controls } = useSlider(TESTIMONIALS.length, {
    slidesPerView: 1,
    spacing: 16,
    loop: false,
    breakpoints: {
      "(min-width: 640px)": { slidesPerView: 2 },
      "(min-width: 1024px)": { slidesPerView: 3 },
      "(min-width: 1280px)": { slidesPerView: 4 },
    },
  });

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

      <div className="relative sm:px-14">
        <div
          ref={sliderRef}
          className="keen-slider flex items-stretch [&_.keen-slider__slide]:flex [&_.keen-slider__slide]:flex-col"
        >
          <SliderSlides>
            {TESTIMONIALS.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </SliderSlides>
        </div>

        <SliderArrows controls={controls} className="hidden sm:flex" />
        <SliderDots controls={controls} className="sm:hidden" />
      </div>
    </section>
  );
}
