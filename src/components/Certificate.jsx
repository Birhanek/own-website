import React from 'react'
import { certificates } from '../data/data'
const Certificate = () => {
    
  return (
    <section className='flex flex-col items-center justify-center gap-2 p-3 mt-4 mb-4 text-center '>
        <span className='p-2 mt-2 font-serif text-slate-700'>
          <h1 className='text-2xl '>My Certifications</h1>
          <p className='text-xl'>Here are my certificates I have earned </p>
        </span>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-4 md:gap-4'>
           <article key={certificates[0].id} className='relative w-full border rounded-md border-green-950'>
                  <a href={certificates[0].certificateLink} className='flex flex-col items-center justify-center w-full hover:cursor-pointer'>
                    <img src='pdf/Certificate1.jpg' alt={certificates[0].certificateIssuer}/> 
                    <i className='w-1/2 p-2 mt-2 mb-2 text-white rounded-full bg-slate-950 hover:transition hover:translate-x-4 hover:bg-blue-800'>View</i>
                 </a>
              </article>
        </div>
    </section>
  )
}

export default Certificate