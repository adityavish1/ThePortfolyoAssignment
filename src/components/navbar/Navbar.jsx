import React from 'react'
import { useState } from 'react'
import { MdClose } from "react-icons/md"
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa"
import { useContext } from 'react';
import { DataContext } from '../dataprovider/Dataprovider';
import {FiMenu} from "react-icons/fi"
import {navLinksdata} from '../../constants/Index'
import {Link} from "react-scroll"

function Navbar() {
  const {data} = useContext(DataContext);
  if (!data || !data.timeline) return <p>Loading data...</p>;

  const [showMenu, setShowMenu]=useState(false)
  return (
    <div className='w-full h-24 mx-auto sticky top-0  z-50 bg-bodyColor flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600  px-10'>
     <div className='-mx-12'>
    <img className='w-10 mx-3' src={data.testimonials[0].image.url} alt="logo" />
     </div>
     <div>
    <ul className='hidden lgl:inline-flex items-center gap-6 lg:gap-10 '>
        {navLinksdata.map(({_id,title,link})=>(
            <li
            className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300 overflow-hidden"
              key={_id}
            >
                <Link
                activeClass='active'
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                >
               
                <span className="w-full text-lg relative  duration-300 group cursor-pointer">
                {title}
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
                </Link>
                
            </li>
        ))}
       
    </ul>
   <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl lgl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer -mx-5"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
          <div className='flex flex-col gap-8 py-2 relative'>
          <div>
                <img className="w-10" src={data.testimonials[0].image.url} alt="logo" />
                <p className="text-sm text-gray-400 mt-2">
                "I am <span className='text-designColor font-bold'>{data.about.name}</span> from {data.about.address}" <br />" I am a {data.about.title}, {data.about.subTitle}".
                </p>
              </div>
              <ul className='flex flex-col gap-4 overflow-x-clip '>
                {
                  navLinksdata.map((item)=>(
                    <li 
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300 " >
                      <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                     <span className="w-full text-lg relative  duration-300 group cursor-pointer ">
                       {item.title}
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300 "></span>
            </span>
                    </Link>
                       
             </li>
                  ))
                }
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Find me in
                </h2>
                <div className="flex gap-4">
                  <span className="bannerIcon">
                    <FaFacebookF />
                  </span>
                  <span className="bannerIcon">
                    <FaTwitter />
                  </span>
                  <span className="bannerIcon">
                  <a href="https://www.linkedin.com/in/aditya-vishwakarma-851531250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" ><FaLinkedinIn /></a>
                  </span>
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
          </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
