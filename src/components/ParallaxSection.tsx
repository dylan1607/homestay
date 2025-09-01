'use client';

import { useEffect, useState } from 'react';

interface ParallaxSectionProps {
  children: React.ReactNode;
  backgroundImage: string;
  speed?: number;
  className?: string;
}

export default function ParallaxSection({ 
  children, 
  backgroundImage, 
  speed = 0.5, 
  className = "" 
}: ParallaxSectionProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={`relative overflow-hidden ${className}`}>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          transform: `translateY(${scrollY * speed}px)`
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
}