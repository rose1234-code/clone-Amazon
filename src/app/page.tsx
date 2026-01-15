'use client'


import Footer from '@/components/Footer'
import LastTitle from '@/components/LastTitle'
import MainSection from '@/components/MainSection'
import NavBar from '@/components/NavBar'
import ProductCarousel from '@/components/ProductCarrousel'
import SideBar from '@/components/SideBar'
import Title from '@/components/Title'
import React, { useState } from 'react'

export default function Page() {

  const [selectedTitle,setSelectedTitle]=useState<string | null>(null)
  return (
    <div className=' w-full'>
      
      <NavBar/>

      <Title/>
      <LastTitle/>
      
      <div className='h-14 '>
        <ProductCarousel/>
      </div>

      {/* filter of product  with state lifting*/}
      <div className="flex  min-h-screen">

        <aside className="hidden mt-6 lg:block w-[280px] shrink-0">
          {/* envoie du titre clique */}
          <SideBar onSelectedTitle={setSelectedTitle} />
        </aside>

        <main className="flex-1 px-6 py-6">
          {/* affiche les produits filtre */}
          <MainSection selectedTitle={selectedTitle} />
        </main>

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
