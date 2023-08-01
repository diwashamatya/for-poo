import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import OfferPage from '../components/Announcement/OfferPage'
const Announcement = () => {
  return (
    <div>
        <Header/>
        <div className='flex'> 
        <Sidebar/>
        <OfferPage/>
        </div>
             

    </div>
  )
}

export default Announcement
