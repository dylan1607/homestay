import React from "react";

const Video = () => {
  return (
    <video
      className="relative w-full object-cover object-center max-h-[512px] py-10"
      muted
      autoPlay
      loop
      playsInline
      src="/beach.mp4"
    />
  );
};

export default Video;
