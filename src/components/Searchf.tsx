'use client'

import { productState } from '@/components/MainSection'
import Search from '@/components/Search'
import { useStoreCard } from '@/store/card.store'
import axios from 'axios'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'


export default function Searchf() {
    const variable=useSearchParams().get('query')
    const [productCollection,setProductCollection]=useState<productState[]>([])
    const {toggleCardIcon}=useStoreCard()


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
   
        <div className="w-[95%] mx-auto px-4 mt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                { listProduct.length >0 ? listProduct.map(product => (
                    <div key={product.id} className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                        <Search image={product.thumbnail} price={product.price} addCard={()=>toggleCardIcon(product.id)} title={product.title}/>
                    </div>
                )): (<div>no product for your search</div>)}
            </div>
        </div>

    </>
  )
  
}
