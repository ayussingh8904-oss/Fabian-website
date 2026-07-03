import React from 'react'
import Test from './Test'

const About = () => {
  return (
   <>
    <section className='w-full min-h-100 overflow-hidden'>
      <div className=' max-w-[1900px] mx-auto grid grid-cols-1 sm:grid-cols-2 relative'>
      <div className='p-5  h-100'>
             <h2 className='font-inter font-bold text-2xl md:text-3xl lg:text-4xl text-[#9e3ffd]'>About</h2>
        <h1 className='font-inter font-bold text-3xl md:text-5xl lg:text-6xl mt-23 capitalize'>Our Expert Are finest</h1>
        <p className='text-sm md:text-base lg:text-lg mt-8 capitalize'>This is a space to share more about your business. Explain who's behind it, what it does and what this site has to offer. It’s an opportunity to tell the story behind the business or describe a special service or product it offers. You can use this section to share your company's history or highlight a particular feature that sets it apart from competitors.</p>

        <p className='mt-12 text-sm md:text-base lg:text-lg capitalize'>Let the writing speak for itself. Keep a consistent tone and voice throughout the website to stay true to the brand image and give visitors a taste of the company’s values and personality.</p>
      </div>
      <div className='bg-[url(https://static.wixstatic.com/media/84770f_f634213a315e466dadaa08443ca8762d~mv2.jpg/v1/fill/w_844,h_1059,fp_0.43_0.43,q_85,usm_0.66_1.00_0.01,enc_auto/about_background.jpg)] w-full h-150 bg-no-repeat bg-cover bg-center'>
      </div>
      </div>
    </section>
    <Test/>
   </>
  )
}
export default About