import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const Contact = () => {
    return (
        <>
            <section className='w-full h-150 bg-[url(https://static.wixstatic.com/media/11062b_1ded70b46c314e9abb099123a0d1dbe3~mv2.png/v1/fill/w_1336,h_448,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01,enc_auto/Black%20And%20White%20Grid.png)] '>
                <div className='max-w-[1900px] mx-auto w-full flex items-center justify-center'>
                    <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-4 items-center justify-center'>
                        <div className='h-130  text-white font-bold p-7'>
                            <h1 className='text-3xl md:text-5xl lg:text-2xl text-[#9e3ffd]'>Contact</h1>
                            <h2 className='text-3xl md:text-5xl lg:text-4xl mt-9 text-[#16163f]'>Let's Work Together</h2>
                            <p className='text-sm md:text-base lg:text-lg mt-9 text-[#797990]'>500 Terry Francine St. San Francisco, CA 94159<br />info@mysite.com<br />Tel: 123-456-7890</p>
                            <div className='flex mt-9 gap-9 text-2xl'>
                                <p className='text-black text-sm md:text-base lg:text-xl'><FaFacebook /></p>
                                <p className='text-black text-sm md:text-base lg:text-xl'><RiTwitterXFill /></p>
                            </div>
                        </div>
                        <div className='h-150  p-8'>
                            <form className='h-full flex flex-col justify-center gap-4'>
                                <div>
                                    <label className='block text-sm font-semibold text-slate-900 mb-2'>Name</label>
                                    <input className='w-full rounded-lg border border-slate-300 px-3 py-2' placeholder='Your Name' />
                                </div>
                                <div>
                                    <label className='block text-sm font-semibold text-slate-900 mb-2'>Email</label>
                                    <input className='w-full rounded-lg border border-slate-300 px-3 py-2' placeholder='you@example.com' type='email' />
                                </div>
                                <div>
                                    <label className='block text-sm font-semibold text-slate-900 mb-2'>Message</label>
                                    <textarea className='w-full rounded-lg border border-slate-300 px-3 py-2 min-h-[120px]' placeholder='Write your message...' />
                                </div>
                                <button className='mt-2 rounded-lg bg-slate-900 text-white px-4 py-2 hover:bg-slate-800'>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact