"use client";

import { useState } from "react";
import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";
import { MENUS } from "@/constants";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { locale, setLocale, t } = useLocale();
  const renderLocaleButton = () => (
    <div className="flex items-center gap-2 text-inherit">
      <button
        onClick={() => setLocale("en")}
        className={`px-3 py-1 rounded text-sm font-medium cursor-pointer ${
          locale === "en" && "bg-blue-500 text-white"
        }`}
      >
        🇺🇸 EN
      </button>
      <button
        onClick={() => setLocale("vi")}
        className={`px-3 py-1 rounded text-sm font-medium cursor-pointer ${
          locale === "vi" && "bg-red-500 text-white"
        }`}
      >
        🇻🇳 VI
      </button>
    </div>
  );

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-xl">
      <nav className="container px-4 py-4 sm:py-6 mx-auto rounded-xl duration-300 transition-all text-black">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-semibold">
            Cozy.
          </Link>

          <div className="hidden lg:flex items-center gap-5">
            {MENUS.map((menu, index) => (
              <Link
                key={index}
                href={menu.href}
                className="hover:text-blue-400"
              >
                {t(menu.locale)}
              </Link>
            ))}

            {renderLocaleButton()}
          </div>

          {/* Hamburger Menu */}
          <button
            className="lg:hidden flex flex-col space-y-1"
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
