import React from 'react'

const Activity = () => {
  const projects =[
    {
      projectId:1,
      projectName:"Country finder",
      projectDescription:`A list of country with information related population, 
      area, country code searching, adding to favorite, deleting from favorite`,
      projectLink:'https://int-fs7-frontend-project.vercel.app/',
      projectImage:'images/country-finder.jpg'
    },
    {
      projectId:2,
      projectName:"Library Management system",
      projectDescription:`A system that manages users, books and authors`,
      projectLink:`https://birhane-kahsay-own-website.vercel.app/`,
      projectImage:'images/own-web.jpg'
    },
    {
      projectId:3,
      projectName:"Araho",
      projectDescription:`A mobile product selling company`,
      projectLink:'https://int-fs7-frontend-project.vercel.app/',
      projectImage:'images/country-finder.jpg '
    },
    {
      projectId:4,
      projectName:"Birhane.kahsay",
      projectDescription:`A private blog site`,
      projectLink:`https://birhane-kahsay-own-website.vercel.app/`,
      projectImage:'images/own-web.jpg'
    },
  ]
  
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
                  <div className='absolute bottom-1/3 left-10'>
                    <h1 className='text-xl font-semibold text-green-500 uppercase'>{project.projectName}</h1>
                    <p className='mb-2 font-mono bg-white text-slate-800'>{project.projectDescription.substring(0,80)}...</p>
                    <a className='w-1/2 px-6 py-1 mt-2 text-xl text-white bg-black rounded-full hover:bg-blue-700 hover:transition hover:translate-x-4' href={project.projectLink}>View Project</a>
                  </div>
              </article>
            })
          }
        </div>
    </section>
  )
}

export default Activity