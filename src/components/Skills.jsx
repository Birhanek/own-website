import React from 'react'

const Skills = () => {
  return (
    <section id='about' className='flex flex-col items-center justify-start gap-2 p-2 mt-4 md:flex-row md:justify-between md:items-center'>
       <article className='flex flex-col items-start justify-center w-full gap-2 md:w-1/2'>
        <h2 className='italic font-bold text-gray-800'>My Skill Set</h2>
        <h3>Full stack developer, Salesforce Administrator & <br/> Information security Analyst</h3>
        <a href='#work' className='w-1/2 h-8 text-center rounded-full bg-gradient-to-r from-indigo-800 via-purple-500 to-purple-800 focus:outline-none hover:bg-green-700 hover:text-white'>Let us work together</a>
       </article>
       <p className='w-full font-italic md:w-1/2'>
       <p>Passionate and enthusiastic IT
professional with a knack for
problem-solving and analytical
thinking. Detail-oriented and fast
learner, adept at grasping complex
concepts swiftly. Sociable and a
natural communicator, excels in
collaborating with diverse teams to
achieve shared goals. Thrives in
environments that foster
collaboration and teamwork,
leveraging strong interpersonal skills
to build rapport with colleagues and
clients alike. Enjoys the challenge of
tackling intricate IT issues and finds
fulfillment in delivering effective
solutions. Eager to contribute
expertise and enthusiasm to dynamic
projects that involve working closely
with people.
.</p>
<p className='mt-2'>I am passionate, motivated and eager about working with cross-functional teams , detail oriented and
delivering best solutions to maximize customer satisfaction.Currently working on web applications
development using Python, ReactJs, Redux toolkit, TypeScript, React-router, Axios, Material UI and tailwind css.</p>
       </p>

    </section>
  )
}

export default Skills