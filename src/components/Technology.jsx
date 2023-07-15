import React from 'react'

const Technology = () => {
  return (
    <section id='work' className='flex flex-col items-start justify-start gap-2 p-2 mt-4 md:flex-row md:justify-between md:items-start md:gap-2'>
        <article className='w-full md:w-1/2'>
            <h1 className='text-xl font-bold text-transparent bg-gradient-to-tr from-blue-400 via-blue-500 to-blue-950 bg-clip-text'>Technology</h1>
            <p className=' text-slate-700'>I have maintained, developed and launched multiple projects from scratch, carrying<br/> the development of its' back-end and front-end code bases.</p>
            <p className="mt-2 font-serif text-slate-700"><strong>Fast - </strong>Fast load times and lag free interaction, my highest priority.</p>
            <p className="font-serif text-slate-700"><strong>Responsive - </strong>work on any device, big or small.</p>
            <p className="font-serif text-slate-700"><strong>Dynamic - </strong>Websites don't have to be static, I love making pages come to life.</p>
            <p className="font-serif text-slate-700"><strong>Intuitive - </strong>Strong preference for easy to use, intuitive UX/UI.</p>
        </article>
        <article className='flex flex-col items-start justify-center w-full md:w-1/2'>
            <h2 className='text-xl font-bold text-slate-700'>Here are a list of tools, libraries and platforms I have had precious experience on.</h2>
            <section className='flex items-start justify-between gap-6 p-4'>
                <div className='float-left w-1/2'>
                    <h2 className='text-xl italic font-bold text-slate-700'>Framework</h2>
                    <ol className="list-disc text-slate-700" type="i">
                        <li>ReactJs</li>
                        <li>TypeScript</li>
                        <li>Tailwind css</li>
                        <li>Node Js/Express Js</li>
                        <li>Material Ui</li>
                    </ol>
                </div>
                <div className='float-right w-1/2'>
                    <h2 className='text-xl italic font-bold text-slate-700'>Tools</h2>
                    <ul className="list-disc text-slate-700">
                        <li>Redux Toolkit</li>
                        <li>MongoDB</li>
                        <li>MySQL</li>
                        <li>Git | GitHub</li>
                        <li>Netlify/Vercel</li>
                    </ul>
                </div>
            </section>
        </article>
    </section>
  )
}

export default Technology