"use client";

import React, { useState } from "react";
import Flower from "../../public/flower.jpg";
import { useLocale } from "@/contexts/LocaleContext";
import { FAQS } from "@/constants";

const FAQ = () => {
  const { locale, t } = useLocale();
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-center gap-8 px-5 sm:px-10 py-10">
      {/* Image Left */}
      <div className="w-full sm:w-1/2 max-w-[400px] aspect-[3/4] rounded-xl shadow-md flex-shrink-0">
        <img
          className="object-cover w-full h-full rounded-xl"
          src={Flower.src}
          alt="faq"
        />
      </div>

      {/* FAQ Items Right */}
      <div className="w-full sm:w-1/2 flex flex-col">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
          {t("faq.title")}
        </h2>

        <div className="flex flex-col">
          {FAQS.map((faq) => (
            <div key={faq.id} className="border-b border-gray-200">
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full py-4 flex items-center justify-between text-left cursor-pointer"
              >
                <span className="font-medium text-base sm:text-lg pr-4">
                  {faq.question[locale]}
                </span>
                <svg
                  className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                    openId === faq.id ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openId === faq.id ? "max-h-48 pb-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-600">{faq.answer[locale]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
