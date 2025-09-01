"use client";

import React from "react";
// import guestRoom from "../../public/guest-room.jpg";
import Bedroom1 from "../../public/bedroom-1.jpg";
import Bedroom2 from "../../public/bedroom-2.jpg";
import Livingroom1 from "../../public/livingroom-1.jpg";
import Livingroom2 from "../../public/livingroom-2.jpg";

const data = [
  {
    id: 1,
    title: "Living Room",
    description: "A cozy room with a comfortable bed and modern amenities.",
    image: Livingroom1.src,
  },
  {
    id: 2,
    title: "Bed Room",
    description:
      "Spacious room with a king-size bed, seating area, and premium facilities.",
    image: Bedroom1.src,
  },
  {
    id: 3,
    title: "Living Room",
    description: "A cozy room with a comfortable bed and modern amenities.",
    image: Livingroom2.src,
  },
  {
    id: 4,
    title: "Delux Room",
    description:
      "Spacious room with a king-size bed, seating area, and premium facilities.",
    image: Bedroom2.src,
  },
];
const Rooms = () => {
  const [activeId, setActiveId] = React.useState(data[0].id);
  const activeRoom = data.find((room) => room.id === activeId);

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start px-5 py-10 sm:p-10 gap-5 sm:gap-10">
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
        {data.map((room) => (
          <div
            key={room.id}
            className="border-b-2 border-black/10 py-4 cursor-pointer w-full"
            onClick={() => setActiveId(room.id)}
          >
            <h2 className="text-lg font-semibold">{room.title}</h2>
            {activeRoom && activeRoom.id === room.id && (
              <p className="text-gray-700">{activeRoom.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
