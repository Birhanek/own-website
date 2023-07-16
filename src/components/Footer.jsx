import { faFaceSmileWink, faGrinTongue, faIndustry, faMessage, faTowerCell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
  return (
    <div id='contact' className='flex flex-col items-start justify-center gap-2 p-2 md:flex-row md:justify-between md:items-center'>
      <section className='flex items-center justify-start gap-2'>
        <img className='object-cover w-16 h-16 rounded-full' src='images/birhane_kahsay.jpg' alt='Birhane kahsay profile'/>
        <span className='p-1 text-sm italic'>Birhane Kahsay <h2 className='font-bold text-gray-600'>Full stack developer, System Administrator & <br/> Information security Analyst</h2></span>
      </section>
      <section>
          <p>Designed and Developed by me &copy;{new Date().getFullYear()} <br/> Made with <a className='italic text-blue-600' href='https://react.dev/learn'>ReactJs</a> & <a className='italic text-blue-600' href='https://tailwindcss.com/'>Tailwind css</a></p>
      </section>
      <section>
        <h3 className='text-xl font-bold text-gray-500 '>Let us work together & contact</h3>
        <ul className='grid grid-cols-1 p-2 md:grid-cols-2'>
          <li className='flex items-center justify-center gap-2 p-1 rounded-md shadow-lg cursor-pointer shadow-indigo-500/40 md:hover:transition md:hover:transform md:hover:translate-x-4'><FontAwesomeIcon className='text-gray-400' icon={faGrinTongue}/><a href='https://github.com/Birhanek'>Github</a></li>
          <li className='flex items-center justify-center gap-2 p-1 rounded-md shadow-lg cursor-pointer shadow-indigo-500/40 md:hover:transition md:hover:transform md:hover:translate-x-4'><FontAwesomeIcon className='text-blue-700' icon={faTowerCell}/><a href='https://github.com/Birhanek'>Twitter</a></li>
          <li className='flex items-center justify-center gap-2 p-1 rounded-md shadow-lg cursor-pointer shadow-indigo-500/40 md:hover:transition md:hover:transform md:hover:translate-x-4'><FontAwesomeIcon className='text-green-700' icon={faMessage}/><a href='https://github.com/Birhanek'>Compose</a></li>
          <li className='flex items-center justify-center gap-2 p-1 rounded-md shadow-lg cursor-pointer shadow-indigo-500/40 md:hover:transition md:hover:transform md:hover:translate-x-4'><FontAwesomeIcon className='text-red-500' icon={faIndustry}/><a href='https://github.com/Birhanek'>Instagram</a></li>
          <li className='flex items-center justify-center gap-2 p-1 rounded-md shadow-lg cursor-pointer shadow-indigo-500/40 md:hover:transition md:hover:transform md:hover:translate-x-4'><FontAwesomeIcon className='text-blue-800' icon={faFaceSmileWink}/><a href='https://www.linkedin.com/in/birhane-kahsay/'>LinkedIn</a></li>
        </ul>
      </section>
    </div>
  )
}

export default Footer