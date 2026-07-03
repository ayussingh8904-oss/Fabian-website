import React from 'react'
import Contact from './Contact'
const Clients = () => {
    const images = [
          
        {
             id:1,
            src:"https://www.svgrepo.com/show/201393/bar-gaming.svg"
        },
         {
              id:2,
            src:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR7m1HYaa5pX-rP2dpV3e6X6gDLME8rlUa6gsrsTJ3qd_3raaae"
        },
         {
              id:3,
            src:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSoNtjVcP1NAk_vQ2udcgB0r9JHRn4TlAZhlBeLZD1OLmRoM2jf"
        },
         {
              id:4,
            src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjcYjC40VB4XmJheDPaW7I93y0ONpLgul1iGaVYMVjPOJyBIyy"
        },
         {
              id:5,
            src:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTdwUIUXM-sND2HSZxzy6-NHzS3Nj_iB3eozZaJIdQbHmQgpHCZ"
        },
    ]
  return (
   <>
    <section className='w-full h-143 bg-[#b9b9c5] overflow-hidden'>
     <div className='max-w-[1900px] mx-auto bg-[#f8f0ff] h-155 flex flex-col items-center pt-5 relative'>
      <h1 className='font-semibold text-2xl md:text-3xl lg:text-4xl text-[#16163f] absolute '>Our Happy Clients</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-16 h-70 items-center justify-center'>
       {/* Cards */} 
           {images.map((images)=>{
             return(
                <div key={images.id} className=' shadow-md  w-60 h-20  flex align-middle justify-center '>
                  <img
                   src={images.src}
                   className='h-full w-full object-cover '
                  />
                </div>
             )
           })}
     {/* Cards */}
      </div>    
     </div>
    </section>
    <Contact/>
   </>
  )
}

export default Clients