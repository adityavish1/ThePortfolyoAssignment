import React from 'react'
import { motion } from 'framer-motion';
function SkillCard({skills}) {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 2.0 } }}
    className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
  >
    <div className="w-full p-4 xl:px-12 h-full xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <div className="w-full h-full">

        <div key={skills._id} className="w-full h-full object-cover group-hover:scale-105 duration-300 cursor-pointer">
         
          <div className=' flex justify-between '>
          <img src={skills.image.url} alt={skills.name} className="w-[100px] h-[100px] object-cover rounded-md mb-4" />
          <h2 className="text-xl font-semibold text-designColor mb-2">{skills.name}</h2>
          </div>
        
          <div className="overflow-x-hidden flex flex-col gap-5">
          <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, doloribus.</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 3.0 }}
                className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">{skills.percentage}%</span>
              </motion.span>
            </span>
          </div>
        </div>
      
    </div>
    </div>
    </motion.div>
  )
}

export default SkillCard

