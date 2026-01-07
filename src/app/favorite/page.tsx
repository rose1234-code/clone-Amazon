import Favorite from '@/components/Favorite'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import React from 'react'

export default function page() {


  return (
    <div>
        <NavBar/>
        <div className='my-14 px-14'>
            <Favorite/>
        </div>
        {/* <Footer/> */}
    </div>
  )
}
