import React from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import Dashboard from '../components/Dashboard/Dashboard'

const Home = () => {
  return (
    <div>
      <Header/>
      <div className='flex '>
        <Sidebar />
        <Dashboard/>
      </div>
    </div>
  )
}

export default Home
