import React from 'react'
import Numbers from './Numbers'
const Service = () => {
  const Info = [
    {
      id: 1,
      src: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTcNWJNjbVF30TLM61d-BfEIjWlZ0yFaWzaPkvBEFaz0xqnlNif',
      title: 'Business Plans',
      para: 'Use this space to promote your business, its products or its services.'
    },
    {
      id: 2,
      src: 'https://5.imimg.com/data5/SELLER/Default/2025/5/512807279/QG/WN/KJ/27314959/target-sol-250x250.png',
      title: 'Accounting Services',
      para: 'Use this space to promote your business, its products or its services.'
    },
    {
      id: 3,
      src: 'https://5.imimg.com/data5/SELLER/Default/2024/10/456762836/LO/SY/SX/201784076/753-250x250.jpg',
      title: 'Finance Optimization',
      para: 'Use this space to promote your business, its products or its services.'
    }
  ]

  return (
  <>
    <section className='w-full py-16 md:py-20 overflow-hidden'>
      <div className='max-w-[1900px] mx-auto px-6 md:px-10 lg:px-16'>
        <h1  className='text-center font-bold text-3xl md:text-5xl lg:text-6xl text-[#9e3ffd]'>Services</h1>
        <h1  className='text-center font-bold text-3xl md:text-5xl lg:text-3xl mt-4'>Taking Your Business to the Next Level</h1>
        <div  className='mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center'>
          {Info.map((item) => (
            <div key={item.id} className='w-full max-w-70 overflow-hidden rounded-3xl'>
              <div className='h-36 overflow-hidden'>
                <img src={item.src} alt={item.title} className='h-full w-full object-cover' />
              </div>
              <div className='p-6 text-center'>
                <h2 className='text-xl font-semibold text-slate-800'>{item.title}</h2>
                <p className='mt-3 text-sm leading-6 text-slate-600'>{item.para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Numbers/>
  </>
  )
}

export default Service