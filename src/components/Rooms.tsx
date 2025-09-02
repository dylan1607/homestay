"use client";

import React from "react";
import { useLocale } from "@/contexts/LocaleContext";
import { ROOMS } from "@/constants";

const Rooms = () => {
  const { locale } = useLocale();
  const [activeId, setActiveId] = React.useState(ROOMS[0].id);
  const activeRoom = ROOMS.find((room) => room.id === activeId);

  return (
    <div
      id="rooms"
      className="flex flex-col sm:flex-row justify-center items-center sm:items-start mb-14 px-5 sm:px-10 gap-5 sm:gap-10"
    >
      {/* Image Left */}
      <div className="w-full max-w-[400px] aspect-[3/4] rounded-xl shadow-md">
        <img
          className="object-cover w-full h-full rounded-xl"
          src={activeRoom?.image}
          alt={activeRoom?.title}
        />
      </div>
      {/* Tabs & Details Right */}
      <div className="sm:w-1/2 flex flex-col items-start">
        {ROOMS.map((room) => (
          <div
            key={room.id}
            className="border-b-2 border-black/10 py-4 cursor-pointer w-full"
            onClick={() => setActiveId(room.id)}
          >
            <h2 className="text-lg font-semibold">{room.title}</h2>
            {activeRoom && activeRoom.id === room.id && (
              <p className="text-gray-700">{activeRoom.description[locale]}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
