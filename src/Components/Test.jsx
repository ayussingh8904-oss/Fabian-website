import React from 'react'
import Clients from './Clients'


const Test = () => {
  return (
    <>
     <section className='w-full min-h-100 bg-[#9e3ffd] '>
       <div className='max-w-[1900px] mx-auto grid grid-cols-1 h-100'>
          <h1 className='text-center font-bold font-inter text-white mt-5 text-3xl md:text-5xl lg:text-5xl'>Testimoniles</h1>      
        <h1 className='text-center font-bold font-inter text-white -mt-10 text-3xl md:text-5xl lg:text-5xl'>Use this space to share a testimonial quote about your business</h1>
        <p className='text-center font-bold text-white '>Fabian singh</p>
       </div>
     </section>
    <Clients/>
    </>
  )
}

export default Test