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
          {
            projects.map((project)=>{
              return <article key={project.projectId} className='relative w-full border rounded-md border-green-950'>
                  <img src={project.projectImage} alt={project.projectName} className='object-cover w-full h-56 rounded-md cursor-pointer hover:transition hover:ease-in-out hover:border hover:border-l-gray-300'/>
                  <div className='absolute -top-0 bg-slate-600'>
                    <h1 className='text-xl font-semibold text-green-500 uppercase'>{project.projectName}</h1>
                    <p className='mb-2 font-mono bg-white text-slate-800'>{project.projectDescription.substring(0,80)}...</p>
                    <a className='w-1/2 px-6 py-1 mt-4 text-xl text-white rounded-full bg-slate-900 hover:bg-blue-700 hover:transition hover:translate-x-4' href={project.projectLink}>View Project</a>
                  </div>
              </article>
            })
          }
        </div>
    </section>
  )
}

export default Activity