'use client'

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import ProductsSkeleton from './ProductsSkeleton.tsx'


export type Review = {
  rating: number
  comment: string
  date: string
  reviewerName: string
  reviewerEmail: string
}
export interface productState{
    id:number,
    stock:number,
    title:string,
    price:number,
    description:string,
    images:string[],
    thumbnail:string,  
    category:string,
    brand:string,
    reviews:Review[],
    comment:string
}

export default function MainSection() {
    const [productCollection,setProductCollection]=useState<productState[]>([])
    // etat du skeleton
    const [isLoading, setIsLoading]=useState(true)

    const fetchProduct= async()=>{
        await axios.get('https://dummyjson.com/products').then(result=>{
            console.log(result?.data)
            setProductCollection(result?.data?.products)
            setIsLoading(false)
        }).catch(error=>console.log(error))
    }

    useEffect(()=>{
        fetchProduct()
    },[])


    
  return (
    <div className='w-[80%] space-y-6 md:grid   md:grid-cols-2 lg:grid-cols-3 items-center  lg:pl-4 lg:py-4 md:ml-[50px]  ml-[25px] md:ml-[80px] lg:ml-[410px]  md:gap-20  gap-5 '>

        {isLoading? (<ProductsSkeleton />):
            (productCollection.map( product=>(
                <div key={product.id} className='w-80 lg:w-110 group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 lg:overflow-hidden'>
                    <ProductCard    product={product} />
                </div>
            )))
        }

       


    </div>
  )
}
