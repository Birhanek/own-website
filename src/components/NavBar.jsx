import { faBars, faFile, faLightbulb, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const NavBar = () => {
    const [isExpanded,setIsExpanded] = useState(false)
  return (
    <div className='sticky top-0 left-0 z-50 flex items-center justify-between gap-1 bg-gray-200 shadow-2xl '>
        <FontAwesomeIcon onClick={()=>setIsExpanded(!isExpanded)} className='absolute block mt-2 transition ease-in-out -translate-y-1/2 cursor-pointer top-1/2 md:hidden' icon={isExpanded ? faXmark : faBars}/>
        <span className='w-10 h-5 pl-2 mt-2 font-serif text-xl font-bold text-blue-500'><a className='font-mono italic font-extrabold ' href='#home'>Birhane.Kahsay</a></span>
        <ul className={isExpanded? 'flex absolute w-full bg-slate-900 top-16 left-0 z-10 flex-col h-min':'hidden md:flex md:justify-between md:gap-4 md:items-center md:p-4'}>
                <li className='p-2 text-white md:text-gray-800'><a className='p-2 hover:font-bold hover:text-amber-900 hover:italic' onClick={()=>setIsExpanded(false)} href='#home'>Home</a></li>
                <li className='p-2 text-white md:text-gray-800'><a className='p-2 hover:font-bold hover:text-amber-900 hover:italic' onClick={()=>setIsExpanded(false)} href='#about'>About</a></li>
                <li className='p-2 text-white md:text-gray-800'><a className='p-2 hover:font-bold hover:text-amber-900 hover:italic' onClick={()=>setIsExpanded(false)} href='#work'>Work</a></li>
                <li className='p-2 text-white md:text-gray-800'><a className='p-2 hover:font-bold hover:text-amber-900 hover:italic' onClick={()=>setIsExpanded(false)} href='#contact'>Contact me</a></li>
        </ul>
        <ul className='flex items-center justify-between gap-4 p-4'>
            <li className='p-1 bg-blue-600 rounded-md'><a className='text-white' href='https://mail.google.com/mail/u/0/?tab=km#inbox?compose=new'>Let's talk</a></li>
            <li><a href='images/Birhane_Kahsay_Master CV.pdf'><FontAwesomeIcon className='text-blue-800' icon={faFile}/></a></li>
            <li><button><FontAwesomeIcon icon={faLightbulb}/></button></li>
        </ul>

    </div>
  )
}

export default NavBar