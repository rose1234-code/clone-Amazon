// import Herosection from '@/components/Herosection'
import Footer from '@/components/Footer'
import LastTitle from '@/components/LastTitle'
import MainSection from '@/components/MainSection'
import NavBar from '@/components/NavBar'
import ProductCarousel from '@/components/ProductCarrousel'
import SideBar from '@/components/SideBar'
// import ProductCarousel from '@/components/ProductCarrousel'
import Title from '@/components/Title'
import { FaStar } from "react-icons/fa6";
import React from 'react'
import Squeleton from '@/components/ProductsSkeleton.tsx'

export default function Page() {
  return (
    <div className=' w-full'>
      
      <NavBar/>

      <Title/>
      <LastTitle/>
      
      <div className='h-14 '>
        <ProductCarousel/>
      </div>

      <div className="flex mt-10 relative">
        <SideBar/>
        <MainSection/>
      </div>

      <div className=''>
        <Footer/>
      </div>



      {/* <main className="min-h-screen flex items-center justify-center p-10">
      <ImageCarousel />
     </main> */}

      {/* <Herosection/> */}
    </div>
  )
}
