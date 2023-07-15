import React from 'react'
import Header from '../components/Header'
import Skills from '../components/Skills'
import Technology from '../components/Technology'

const Home = () => {
  return (
    <div className='pl-3 mt-3'>
        <Header/>
        <Skills/>
        <Technology/>
    </div>
  )
}

export default Home