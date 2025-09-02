"use client";

import { useLocale } from "@/contexts/LocaleContext";
import { useScroll } from "@/hooks";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    rating: 5,
    text: "Absolutely stunning hotel! The service was impeccable and the views were breathtaking. Will definitely be returning.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Singapore",
    rating: 5,
    text: "The luxury suite exceeded all expectations. The attention to detail and personalized service made our anniversary unforgettable.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    location: "Madrid, Spain",
    rating: 5,
    text: "From the moment we arrived, we felt like royalty. The spa services and dining options were world-class.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
  },
];

export default function Testimonials() {
  const scrollY = useScroll();
  const { t } = useLocale();

  return (
    <section id="testimonials" className="relative mb-14">
      <video
        className="relative w-full object-cover object-center max-h-[512px]"
        muted
        autoPlay
        loop
        playsInline
        src="/beach.mp4"
      />

      <div className="px-4">
        <div className="text-center bg-white my-10">
          <h3 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            {t("testimonials.title")}
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t("testimonials.subtitle")}
          </p>
        </div>

        <div className="flex flex-wrap gap-5 justify-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="max-w-[400px] bg-black/60 text-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm">{testimonial.location}</p>
                  <div className="flex mt-1">
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
                </div>
              </div>
              <p className=" italic leading-relaxed">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
