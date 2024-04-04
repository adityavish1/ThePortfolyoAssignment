import React from 'react'
import { useContext } from 'react';
import { motion } from 'framer-motion';
import { DataContext } from '../dataprovider/Dataprovider';
import EducationSection from './EducationSection';
import ExperienceSection from './ExperienceSection';
import Title from '../layouts/Title';
function Timeline() {
    const { data } = useContext(DataContext);

    if (!data || !data.timeline) return <p>Loading data...</p>;

      // Filter and sort the timeline for education, including a check for 'enabled'
  const education = data.timeline
  .filter(entry => entry.forEducation && entry.enabled)
  .sort((a, b) => a.sequence - b.sequence);

// Filter and sort the timeline for experience, including a check for 'enabled'
const experience = data.timeline
  .filter(entry => !entry.forEducation && entry.enabled)
  .sort((a, b) => a.sequence - b.sequence);

  return (
    <section id="timeline" className="w-full py-20 border-b-[1px] border-b-black">
            <div className="flex justify-center items-center text-center">
                <Title title="Education and Job Experience" des="Timeline" />
            </div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-80 sx:gap-60 md:gap-48 mdl1:gap-32 lgl:gap-20 overflow-auto scrollable-element"
    >
      {/* part one */}
      <div className='w-full'>
      <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4 mx-12">
          <h2 className="text-2xl md:text-3xl font-bold" >Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 mx-2">
        {education.map((eduData) => (
                    <EducationSection key={eduData._id} eduData={eduData} />
                ))}
        </div>
      </div>
      {/* part Two */}

      <div className='h-full w-full'>
      <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4 mx-12">
          <h2 className="text-2xl md:text-3xl font-bold" >Job Experience</h2>
        </div>
        <div className="mt-6 -mx-10 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        {experience.map((expData) => (
                    <ExperienceSection key={expData._id} expData={expData} />
                ))}
        </div>
      </div>
    </motion.div>
    </section>
  )
}

export default Timeline
