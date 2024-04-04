import React from 'react'

function EducationSection({eduData}) {

        // Function to format date strings
        const formatDate = (dateString) => {
          const options = { year: 'numeric', month: 'long', day: 'numeric' };
          return new Date(dateString).toLocaleDateString(undefined, options);
        };

        function renderBulletPoints(bulletPoints) {
            if (!bulletPoints || bulletPoints.length === 0) return null; // Check if bulletPoints exist or if the array is empty
            return (
              <ul className="list-disc ml-5 text-gray-400 group-hover:text-gray-300 duration-300">
                {bulletPoints.map((point, index) => (
                  <li key={index}>{point}</li> // Render each bullet point
                ))}
              </ul>
            );
          }

  return (
    <div className="w-full h-full group flex">
    <div className="w-10 h-[6px] bgOpacity mt-16 relative">
      <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
        <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
      </span>
    </div>
    <div className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300  rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne">
      <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:items-center">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold group-hover:text-white duration-300">
            {eduData.company_name} 
          </h3>
          <p className="text-sm mt-2 text-gray-400 group-hover:text-white duration-300">
          {`${formatDate(eduData.startDate)} - ${formatDate(eduData.endDate)}`}
          </p>
        </div>
        <div className='flex flex-col gap-2'>
          <p className="px-4 py-2 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium">
            {eduData.jobLocation}
          </p>
          <p>{eduData.jobTitle}</p>
        </div>
      </div>
      <p className="text-sm md:text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300">
        {eduData.summary}
      </p>
      <p className="text-xs md:text-sm font-medium text-gray-400 group-hover:text-gray-300 duration-300">
      {renderBulletPoints(eduData.bulletPoints)}
      </p>
    </div>
  </div>
  )
}

export default EducationSection
