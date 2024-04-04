import React from 'react'

function Rightabout({about}) {
  return (
   
    <div className='mx-1 flex  flex-col gap-7'>
   <h1 className='text-2xl'>My Name is <span className='text-2xl font-bold text-designColor'>{about.name},</span>  I am from {about.address}</h1>
   <p className='text-2xl'>{about.description}</p>
    </div>
  
    
  )
}

export default Rightabout
