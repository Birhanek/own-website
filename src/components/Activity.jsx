import React from 'react'
import { projects } from '../data/data'
const Activity = () => {
 
  return (
    <section className='flex flex-col items-center justify-center gap-2 p-3 mt-4 mb-4 text-center '>
        <span className='p-2 mt-2 font-serif text-slate-700'>
          <h1 className='text-2xl '>My Works</h1>
          <p className='text-xl'>Here are my projects i have developed </p>
        </span>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-4 md:gap-4'>
            <article key={projects[0].projectId} className='relative w-full border rounded-md border-green-950'>
                  <img src='images/country-finder.jpg' alt={projects[0].projectName} className='object-cover w-full h-56 rounded-md cursor-pointer hover:transition hover:ease-in-out hover:border hover:border-l-gray-300'/>
                  <div className='absolute -top-0 bg-slate-600'>
                    <h1 className='text-xl font-semibold text-green-500 uppercase'>{projects[0].projectName}</h1>
                    <p className='mb-2 font-mono bg-white text-slate-800'>{projects[0].projectDescription.substring(0,80)}...</p>
                    <a className='w-1/2 px-6 py-1 mt-4 text-xl text-white rounded-full bg-slate-900 hover:bg-blue-700 hover:transition hover:translate-x-4' href={projects[0].projectLink}>View Project</a>
                  </div>
              </article>
              <article key={projects[1].projectId} className='relative w-full border rounded-md border-green-950'>
                  <img src='images/own-web.jpg' alt={projects[1].projectName} className='object-cover w-full h-56 rounded-md cursor-pointer hover:transition hover:ease-in-out hover:border hover:border-l-gray-300'/>
                  <div className='absolute -top-0 bg-slate-600'>
                    <h1 className='text-xl font-semibold text-green-500 uppercase'>{projects[1].projectName}</h1>
                    <p className='mb-2 font-mono bg-white text-slate-800'>{projects[1].projectDescription.substring(0,80)}...</p>
                    <a className='w-1/2 px-6 py-1 mt-4 text-xl text-white rounded-full bg-slate-900 hover:bg-blue-700 hover:transition hover:translate-x-4' href={projects[1].projectLink}>View Project</a>
                  </div>
              </article>
              <article key={projects[2].projectId} className='relative w-full border rounded-md border-green-950'>
                  <img src='images/calculator.jpg' alt={projects[2].projectName} className='object-cover w-full h-56 rounded-md cursor-pointer hover:transition hover:ease-in-out hover:border hover:border-l-gray-300'/>
                  <div className='absolute -top-0 bg-slate-600'>
                    <h1 className='text-xl font-semibold text-green-500 uppercase'>{projects[2].projectName}</h1>
                    <p className='mb-2 font-mono bg-white text-slate-800'>{projects[2].projectDescription.substring(0,80)}...</p>
                    <a className='w-1/2 px-6 py-1 mt-4 text-xl text-white rounded-full bg-slate-900 hover:bg-blue-700 hover:transition hover:translate-x-4' href={projects[2].projectLink}>View Project</a>
                  </div>
              </article>
        </div>
    </section>
  )
}

export default Activity