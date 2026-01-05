"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";
import { MENUS } from "@/constants";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLocaleOpen, setIsLocaleOpen] = useState(false);
  const localeRef = useRef<HTMLDivElement>(null);
  const { locale, setLocale, t } = useLocale();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 64);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        localeRef.current &&
        !localeRef.current.contains(event.target as Node)
      ) {
        setIsLocaleOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const renderLocaleButton = () => (
    <div className="relative" ref={localeRef}>
      <button
        onClick={() => setIsLocaleOpen(!isLocaleOpen)}
        className="flex items-center gap-1 px-2 py-1 rounded font-medium cursor-pointer hover:bg-white/10"
      >
        {locale === "en" ? "🇺🇸" : "🇻🇳"}
        <svg
          className={`w-3 h-3 transition-transform ${
            isLocaleOpen ? "rotate-180" : ""
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
      {isLocaleOpen && (
        <div className="absolute top-full right-0 mt-1 bg-white rounded-lg shadow-lg overflow-hidden min-w-[80px]">
          <button
            onClick={() => {
              setLocale("en");
              setIsLocaleOpen(false);
              setIsMenuOpen(false);
            }}
            className={`w-full px-3 py-2 text-sm text-left hover:bg-gray-100 flex items-center gap-2 ${
              locale === "en" ? "bg-gray-100 text-blue-600" : "text-gray-700"
            }`}
          >
            🇺🇸 EN
          </button>
          <button
            onClick={() => {
              setLocale("vi");
              setIsLocaleOpen(false);
              setIsMenuOpen(false);
            }}
            className={`w-full px-3 py-2 text-sm text-left hover:bg-gray-100 flex items-center gap-2 ${
              locale === "vi" ? "bg-gray-100 text-red-600" : "text-gray-700"
            }`}
          >
            🇻🇳 VI
          </button>
        </div>
      )}
    </div>
  );

  return (
    <header
      className={`fixed top-0 left-0 w-full z-20 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="w-full px-6 py-3 sm:py-4 rounded-xl duration-300 transition-all text-black">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-semibold">
            Cozy.
          </Link>

          <div className="hidden sm:flex items-center gap-5 rounded-full bg-white ring-1 ring-gray-300 py-2 px-6">
            {MENUS.map((menu, index) => (
              <Link
                key={index}
                href={menu.href}
                className="hover:text-gray-500"
              >
                {t(menu.locale)}
              </Link>
            ))}

            {renderLocaleButton()}
          </div>

          <Link
            href="#bookNow"
            className="hidden sm:block bg-black cursor-pointer text-white px-6 py-2 rounded-full font-semibold"
          >
            {t("nav.bookNow")}
          </Link>

          {/* Hamburger Menu */}
          <button
            className="sm:hidden flex flex-col space-y-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span
              className={`w-6 h-0.5 bg-black transition-all ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-black transition-all ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-black transition-all ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>
        </div>

        {isMenuOpen && (
          <div className="mt-4 py-4 h-screen">
            <div className="flex flex-col items-end gap-6 text-right">
              {MENUS.map((menu, index) => (
                <Link
                  key={index}
                  href={menu.href}
                  className="text-xl hover:text-blue-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(menu.locale)}
                </Link>
              ))}

              {renderLocaleButton()}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
