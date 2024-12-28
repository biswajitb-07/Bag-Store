import React from 'react';
import about from '../../api/about.json';
import teammember from '../../api/teammember.json'
import { FaFacebook, FaLinkedin, FaPinterest, FaTwitter } from 'react-icons/fa';
import { ScrollToTop } from '../component/Layout/ScrollToTop.jsx';

export const About = () => {
  return (
    <div className='bg-[#F0F1F3]'>
      <ScrollToTop />
      <div className='pt-8 max-w-[78rem] mx-auto px-6 min-h-[75rem]'>
        <h1 className='text-2xl md:text-4xl font-black grid place-items-center'>ABOUT US</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center pt-20">
          {about.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-center gap-5">
              <div className="flex items-center justify-center w-16 h-16 bg-[#FFCD05] rounded-full">
                <img src={item.icon} alt="" className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold">{item.title}</h2>
              <p className="text-lg text-gray-600 text-center px-4">{item.description}</p>
            </div>
          ))}
        </div>

        {/* second */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-x-3 gap-y-5 pt-28 pb-5">
          {teammember.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-center gap-5">
              <div className="w-full">
                <img src={item.image} alt="" className="object-cover h-[25rem] md:h-full w-full" />
              </div>

              <div className='flex flex-col items-center justify-center gap-1'>
                <h2 className='font-bold text-2xl'>{item.name}</h2>
                <p className='text-gray-600 font-semibold'>{item.role}</p>
              </div>

              <div className='flex flex-col items-center justify-center gap-5'>
                <p className='text-gray-600 text-center px-4'>{item.description}</p>

                <div className='flex gap-5 items-center justify-center'>
                  <FaFacebook className='text-lg cursor-pointer' />
                  <FaTwitter className='text-lg cursor-pointer' />
                  <FaPinterest className='text-lg cursor-pointer' />
                  <FaLinkedin className='text-lg cursor-pointer' />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
