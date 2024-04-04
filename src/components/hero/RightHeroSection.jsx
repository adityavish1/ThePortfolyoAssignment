import React from 'react'

function RightHeroSection({about}) {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center lg:my-10 items-center relative">
    <img
      className="w-[300px] h-[350px] lgl:w-[400px] lgl:h-[450px] z-10"
      src={about.avatar.url}
      alt={about.name}
    />
    <div className="absolute bottom-0 w-[320px] h-[360px] lgl:w-[420px] lgl:h-[460px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
  </div>
  )
}

export default RightHeroSection
