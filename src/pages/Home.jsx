import React from 'react'
import Header from '../components/Header'
import Skills from '../components/Skills'
import Technology from '../components/Technology'
import Activity from '../components/Activity'



const Home = () => {
  return (
    <div className='pl-3 mt-3'>
        <Header/>
        <Skills/>
        <Technology/>
        <Activity/>
    </div>
  )
}

export default Home