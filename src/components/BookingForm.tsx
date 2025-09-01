"use client";

import { useState } from "react";
import { useLocale } from "@/contexts/LocaleContext";

export default function BookingForm() {
  const { t } = useLocale();
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    guests: "2",
    roomType: "standard",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking data:", formData);
    alert("Booking request submitted! We will contact you shortly.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  const getMinCheckOutDate = () => {
    if (!formData.checkIn) return getTodayDate();
    const checkInDate = new Date(formData.checkIn);
    checkInDate.setDate(checkInDate.getDate() + 1);
    return checkInDate.toISOString().split("T")[0];
  };

  return (
    <div className="max-w-4xl mx-auto text-black">
      <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
        {t("booking.title")}
      </h3>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 sm:grid-cols-5 gap-4"
      >
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t("booking.checkIn")}
          </label>
          <div className="relative">
            <input
              type="date"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleChange}
              // min={getTodayDate()}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t("booking.checkOut")}
          </label>
          <div className="relative">
            <input
              type="date"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
              min={getMinCheckOutDate()}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>
          {formData.checkOut && (
            <p className="text-xs text-gray-600 mt-1">
              {formatDate(formData.checkOut)}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t("booking.guests")}
          </label>
          <select
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="1">1 {t("booking.guest")}</option>
            <option value="2">2 {t("booking.guests.multiple")}</option>
            <option value="3">3 {t("booking.guests.multiple")}</option>
            <option value="4">4 {t("booking.guests.multiple")}</option>
            <option value="5+">5+ {t("booking.guests.multiple")}</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t("booking.roomType")}
          </label>
          <select
            name="roomType"
            value={formData.roomType}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="standard">{t("booking.roomTypes.standard")}</option>
            <option value="deluxe">{t("booking.roomTypes.deluxe")}</option>
            <option value="suite">{t("booking.roomTypes.suite")}</option>
            <option value="presidential">
              {t("booking.roomTypes.presidential")}
            </option>
          </select>
        </div>

        <div className="flex items-end">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
          >
            <span className="flex items-center justify-center space-x-2">
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
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>{t("booking.checkAvailability")}</span>
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
