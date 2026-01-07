'use client'

import DetailsPage from '@/components/DetailsPage'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import { useParams } from 'next/navigation'
import React from 'react'



export default function page() {
    const params=useParams()
    const productIdUrl =Number(params.id)
    
  return (
    <div>
      <NavBar/>
      <DetailsPage  productId={productIdUrl}/>
      <Footer/>
    </div>
  )
}
