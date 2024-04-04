import React from 'react'

function LeftAbout({about}) {
  return (
    <div className="w-full lgl:w-full flex justify-center lg:my-10 items-center relative">
    <img
      className="w-[300px] h-[350px] lgl:w-[300px] lgl:h-[450px] z-10"
      src={about.alternateAvatars[0].url}
      alt={about.name}
    />
    <div className="absolute bottom-0 w-[320px] h-[360px] lgl:w-[320px] lgl:h-[460px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
  </div>
  )
}

export default LeftAbout
