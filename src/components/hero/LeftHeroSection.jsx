import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";


const LeftHeroSection = ({about}) => {
    
    const [text] = useTypewriter({
      words: [about.title],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col  gap-12">
      <div className="flex flex-col gap-10">
        
        <h4 className=" text-lg  font-normal">"{about.quote}"</h4>
      
      
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">{about.name}</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-2xl font-bodyFont leading-6 tracking-wide">
        {about.subTitle}
        </p>
      </div>
     
    </div>

/* <h1>{heroData.name}</h1>
<h2>{heroData.title}</h2>
<h3>{heroData.subTitle}</h3>
<p>{heroData.description}</p>
<img src={heroData.avatar.url} alt={heroData.name} style={{ maxWidth: '200px', borderRadius: '10px' }} /> */
  );
}

export default LeftHeroSection