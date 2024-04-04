import React, { useState } from 'react';
import SkillCard from './SkillCard';
import { useContext } from 'react';
import { DataContext } from '../dataprovider/Dataprovider';
import Title from '../layouts/Title';

function Skills() {
  const { data } = useContext(DataContext);
  const initialShowCount = 3; // Initial number of skills to show
  const [showCount, setShowCount] = useState(initialShowCount);

  if (!data || !data.skills) return <p>Loading data...</p>;

  // Sort skills based on sequence and filter enabled skills
  const sortedSkills = data.skills.filter(skill => skill.enabled).sort((a, b) => a.sequence - b.sequence);

  const viewMore = () => {
    setShowCount(sortedSkills.length); // Show all skills
  };

  return (
    <section id="skills" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="VISIT MY SKILLS AND KEEP YOUR FEEDBACK" des="Skills" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 gap-6 lgl:gap-14 my-10">
        {sortedSkills.slice(0, showCount).map((skill) => (
          <SkillCard key={skill._id} skills={skill} />
        ))}
      </div>
      {showCount < sortedSkills.length && (
        <div className="flex justify-center">
          <button
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={viewMore}
          >
            View More
          </button>
        </div>
      )}
    </section>
  );
}

export default Skills;
