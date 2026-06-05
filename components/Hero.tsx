// components/Hero.tsx

import React from "react";
import Milk_Hero_Image from "../public/Milk_Hero.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full h-[88vh] overflow-hidden bg-[#03a9db]">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[url('/bg-pattern.png')] bg-cover bg-center opacity-10" />

      <div className="relative z-10 max-w-350 mx-auto h-full flex items-center justify-between px-10">
        {/* Left Content */}
        <div className="max-w-137.5 text-white">
          <h2 className="text-6xl font-serif mb-6 leading-tight">
            Quality Milk
          </h2>

          <h1 className="text-5xl md:text-6xl font-condensed uppercase leading-tight tracking-wide font-bold">
            Effortlessly Delivered To Your Doorstep
          </h1>
        </div>

        {/* Right Image */}
        <div className="hidden lg:block relative">
          <Image
            src={Milk_Hero_Image}
            alt="milk"
            className="w-175 object-contain"
          />
        </div>
      </div>

      {/* Bottom Badge */}
      <div className="absolute bottom-6 right-6">
        <img src="/veg-badge.png" alt="veg" className="w-25" />
      </div>
    </section>
  );
};

export default Hero;
