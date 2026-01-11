'use client'

import { productState } from '@/components/MainSection'
import NavBar from '@/components/NavBar'
import axios from 'axios'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function page() {
    const variable=useSearchParams().get('query')
    const [productCollection,setProductCollection]=useState<productState[]>([])

    const fetchProduct= async()=>{
        await axios.get('https://dummyjson.com/products').then(result=>{
            console.log(result?.data)
            setProductCollection(result?.data?.products)
        }).catch(error=>console.log(error))
    }

    useEffect(()=>{
        fetchProduct()
    },[])

    
    const listProduct=productCollection.filter(product=>(product.title.toLowerCase().includes(variable?.toLowerCase() || '')))
  return (
    <>
        <NavBar/>
   
        <div className="w-[95%] mx-auto px-4 mt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {listProduct.map(product => (
                    <div key={product.id} className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                        {/* Image */}
                        <div className="bg-gray-100 flex items-center justify-center h-56">
                          <img src={product.thumbnail} alt={product.title} className="h-full object-contain group-hover:scale-105 transition duration-300"/>
                        </div>
                
                        {/* Content */}
                        <div className="p-4 flex flex-col gap-3">
                          <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
                            {product.title}
                          </h2>
                
                          <p className="text-xl font-bold text-red-500">
                            ${product.price}
                          </p>
                
                          <Link href='/card' className="mt-auto text-center bg-red-500 hover:bg-red-600 text-white text-lg font-semibold py-2 rounded-xl transition">
                            Commander
                          </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    </>
  )
  
}
