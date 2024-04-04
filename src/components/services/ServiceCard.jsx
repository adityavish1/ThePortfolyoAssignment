import React from 'react'

function ServiceCard({service}) {
  if (!service.enabled) return null;

  return (
    <div className="w-full p-4 xl:px-12 h-full xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <div className="w-full h-full">

        <div key={service._id} className="w-full h-full object-cover ">
          <img src={service.image.url} alt={service.name} className="w-full h-50 object-cover rounded-md mb-4 group-hover:scale-105 duration-300 cursor-pointer" />
          <div className=' flex justify-between '>
          <h2 className="text-xl font-semibold text-designColor mb-2">{service.name}</h2>
          <span className="bg-gray-700 rounded-md px-1 py-1">{service.charge}</span>
          </div>
         
          <p className="text-gray-200">{service.desc}</p>
          <div className="flex justify-end mt-4">
            
            <button className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600">Book Now</button>
          </div>
        </div>
      
    </div>
    </div>
  )
}

export default ServiceCard
