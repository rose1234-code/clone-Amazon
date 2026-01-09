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
    <div className='w-[92%] md:grid  space-y-16  md:grid-cols-2 lg:grid-cols-3 items-center  lg:pl-4 lg:py-4 md:ml-[50px]  ml-[25px] lg:ml-[350px] lg:gap-4 '>

        {isLoading? (<ProductsSkeleton />):
            (productCollection.map( product=>(
                <ProductCard  key={product.id}  product={product} />
            )))
        }

       


    </div>
  )
}
