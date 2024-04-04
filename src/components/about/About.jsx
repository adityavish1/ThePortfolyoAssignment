import React, { useContext } from 'react';
import { DataContext } from '../dataprovider/Dataprovider';

// import RightAbout from './RightAbout';
import Title from '../layouts/Title';

import Rightabout from './Rightabout';
import LeftAbout from './LeftAbout';

function About() {
  const { data } = useContext(DataContext);

  // Check if data or data.about is null/undefined
  if (!data || !data.about) return <p>Loading data...</p>;

  return (
    <section id='about' className='w-full h-[800]px pb-20 flex border-b-[1px] border-b-black'>
      <div className='flex flex-col gap-10'>
        <div>
          <Title title="About" des="What I Do" />
        </div>
        <div className='flex flex-col lgl:flex-row justify-center items-center gap-10'>
          <div className='w-full lgl:w-1/2'>
          <LeftAbout about={data.about} />
          </div>
        <div className='w-full lgl:w-75%'>
        <Rightabout about={data.about} />
        </div>
         
        </div>
      </div>
    </section>
  );
}

export default About;
