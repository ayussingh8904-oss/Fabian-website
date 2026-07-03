import React from 'react'
import CountUp from 'react-countup'
import About from './About'
const Numbers = () => {
    const num = [
        {
            id: 1,
            number: 56,
            para: "Years of Experience"

        },
        {
            id: 2,
            number: 36,
            para: "Qualified Experts"

        },
        {
            id: 3,
            number: 120,
            para: "Clients Every Year"

        },
    
            {
            id: 4,
            number: 9,
            para: "Intl. Partners"

        },
    ]
    console.log(num)
    return (
        <>
            <section className='w-full py-16 md:py-20 bg-black'>
                <h1 className='font-inter font-bold text-3xl md:text-5xl lg:text-4xl text-center text-white'>We are in the good number</h1>
                {/* Count */}
                <div className='mt-7 max-w-[1900px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center'>
                    {num.map((item) => (
                        <div key={item.id} className="text-center">
                            <h2 className="font-bold text-white text-7xl whitespace-nowrap">
                                 {item.number}
                            </h2>
                            <p className="mt-2 text-gray-300">
                                {item.para}
                            </p>
                        </div>
                    ))}
                </div>
                {/* Count end */}
            </section>
            <About/>
        </>
    )
}

export default Numbers