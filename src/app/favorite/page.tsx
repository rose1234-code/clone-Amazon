import Favorite from '@/components/Favorite'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import React from 'react'

export default function page() {


  return (
    <div>
        <NavBar/>
        <div className='pb-14 pt-30 px-8 lg:px-14 '>
            <Favorite/>
        </div>
        {/* <Footer/> */}
        <Footer/>
    </div>
  )
}
