"use client";

import HeroFirst from './HeroFirst';
import HeroSecond from './HeroSecond';

const Hero = () => {
  return (
    <div className="bg-blue-100 flex flex-col lg:flex-row  mx-auto mt-4 gap-6 px-4 lg:px-10">
      <div className="w-full lg:w-2/3">
        <HeroFirst />
      </div>
      <div className="w-full lg:w-1/3">
        <HeroSecond />
      </div>
    </div>
  );
};

export default Hero;
