import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Header = () => {
  return (
    <section id='home' className='flex flex-col items-center justify-start gap-2 mt-4 md:flex-row md:justify-between md:items-start'>
        <article className='flex flex-col items-start justify-center gap-2'>
            <p className='italic font-bold text-blue-950'>Hello, I'm </p>
            <h1 className='text-2xl font-semibold text-transparent bg-gradient-to-r from-indigo-800 via-purple-500 to-pink-800 bg-clip-text'>Birhane Kahsay.</h1>
            <p className='text-gray-600'>I am a freelancer specializing in Web development with 2+ years of <br/>experience in software design, development and deployment.</p>
            <a href='#work' className='w-1/2 h-8 text-center rounded-full bg-gradient-to-r from-indigo-800 via-purple-500 to-purple-800 focus:outline-none hover:bg-green-700 hover:text-white'>View My Work <FontAwesomeIcon className='hover:rotate-90' icon={faArrowRight}/></a>
        </article>
        <img className='object-cover w-full rounded h-72 md:w-1/2' src='images/develope-make.jpg' alt='developer'/>
    </section>
  )
}

export default Header