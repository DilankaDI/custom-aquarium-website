"use client";

import React from "react";

const HeroVideo: React.FC = () => {
  return (
    <section
      className="relative w-full h-[80vh] overflow-hidden flex items-center justify-center text-center text-white"
      aria-label="Custom aquariums and aquarium services introduction"
    >
      {/* --- Background Video --- */}
      <video
        src="/videos/aquarium.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* --- Overlay for readability --- */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* --- SEO Text Content --- */}
      <div className="relative z-10 px-6 max-w-4xl">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Stunning Custom Aquariums & Professional Maintenance Services
        </h2>

        <p className="text-lg md:text-2xl">
          Creating breathtaking aquariums, supplying premium fish, and providing expert maintenance for homes and businesses.
        </p>
      </div>
    </section>
  );
};

export default HeroVideo;
