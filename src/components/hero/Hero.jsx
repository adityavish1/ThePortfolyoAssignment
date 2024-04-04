// Hero.js
import React from 'react';
import { useContext } from 'react';
import { DataContext } from '../dataprovider/Dataprovider';
import LeftHeroSection from './LeftHeroSection';
import RightHeroSection from './RightHeroSection';

function Hero() {
  const { data } = useContext(DataContext);

  // Check if data or data.about is null/undefined
  if (!data || !data.about) return <p>Loading data...</p>;

  return (
    <section id='hero' className="w-full h-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black">
      <LeftHeroSection about={data.about} />
      <RightHeroSection about={data.about} />
    </section>
  );
}

export default Hero;
