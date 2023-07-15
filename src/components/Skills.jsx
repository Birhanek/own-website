import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Skills = () => {
  return (
    <section id='about' className='flex flex-col items-center justify-start gap-2 p-2 mt-4 md:flex-row md:justify-between md:items-center'>
       <article className='flex flex-col items-start justify-center w-full gap-2 md:w-1/2'>
        <h2 className='italic font-bold text-gray-800'>My Skill Set</h2>
        <h3>Full stack developer, System Administrator & <br/> Information security Analyst</h3>
        <a href='#work' className='w-1/2 h-8 text-center rounded-full bg-gradient-to-r from-indigo-800 via-purple-500 to-purple-800 focus:outline-none hover:bg-green-700 hover:text-white'>Let us work together</a>
       </article>
       <p className='w-full font-normal md:w-1/2'>
       <p>A professional full stack developer with more than 6 months working experience in building eye
catching, user friendly,responsive web applications and 1+ year working experience as an information
security analyst. My experience in web development gives me an opportunity to learn Redux toolkit, SEO
and TypeScript.</p>
<p className='mt-2'>I am passionate about working with cross-functional teams , detail oriented and
delivering best solutions to maximize customer satisfaction.Currently working on web applications
development using ReactJs, Redux toolkit, TypeScript, React-router, Axios, Material UI and tailwind css.</p>
       </p>

    </section>
  )
}

export default Skills