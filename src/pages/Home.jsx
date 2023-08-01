import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Dashboard from '../components/Dashboard/Dashboard'

const Home = () => {
  return (
    <div>
      <Header/>
      <div className='flex '>
        <Sidebar/>
        <Dashboard/>
      </div>
    </div>
  )
}

export default Home
