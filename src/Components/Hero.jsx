import React from 'react'
import Service from './Service'

const Hero = () => {
  
  return (
    <>
     <section className='w-full h-200 bg-emerald-500 overflow-hidden bg-[url(https://static.wixstatic.com/media/467b46_9b7981a77b474cdd8d95480cb1b799c4~mv2.jpg/v1/fill/w_1351,h_725,fp_0.61_0.78,q_85,usm_0.66_1.00_0.01,enc_auto/bg.jpg)] bg-no-repeat bg-cover bg-center bg-fixed'>
      <div className='max-w-[1900px] mx-auto  px-4 md:px-8 lg:px-16 h-screen p-50 '> 
          <h1  className='text-3xl md:text-5xl lg:text-8xl capitalize text-[#16163f] font-bold'>the Power <br/> of  good advice</h1>
          <p  className=' font-inter capitalize p-1 text-sm md:text-base lg:text-lg text-[#16163f] font-semibold'>This is a space to welcome visitors <br/> to your site.</p>
          <button   className='px-12 py-2 rounded-3xl shadow-lg  bg-[#9e3ffd] hover:-translate-y-2 transition duration-500 mt-4 '>Learn More</button>
      </div>
     </section>
     <Service/>
    </>
    
  )
}

export default Hero