import React from 'react'

import { FaFacebook, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
function ContactLeft({about}) {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
    <img
    className='w-full h-full object-cover rounded-lg'
    src={about.alternateAvatars[0].url} alt="contactImg" />
    <div>
     <h3 className='text-3xl font-bold text-white'>{about.name}</h3>
     <p className='text-lg font-normal text-gray-400'>{about.title}</p>
     <p className='text-base text-gray-400 tracking-wide'>{about.subTitle}</p>
     <p className='text-base text-gray-400 flex items-center gap-2'>Phone: <span className='text-lightText'>{about.phoneNumber}</span></p>
     <p className='text-base text-gray-400 flex items-center gap-2'>
         Email:{" "}
         <span className='text-lightText'>{about.contactEmail}</span>
     </p>
     <p className='text-base text-gray-400 flex items-center gap-2'>Address: <span className='text-lightText'>{about.address}</span></p>
    </div>
    <div className='flex flex-col gap-4'>
     <h2 className='text-base uppercase font-titleFont mb-4'>Find me in</h2>
     <div className='flex gap-4'>
         <span className='bannerIcon'><FaFacebook/></span>
         <span className='bannerIcon'><FaTwitter/></span>
         <span className='bannerIcon'><FaLinkedinIn/></span>
     </div>
    </div>
   </div>
  )
}

export default ContactLeft
