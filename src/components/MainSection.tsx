'use client'

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import ProductsSkeleton from './ProductsSkeleton.tsx'

interface MainSectionProps{
    selectedTitle:string|null ,
}


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



export default function MainSection({selectedTitle}:MainSectionProps) {

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

    // filter product by categories
    const filterProductByCategories=selectedTitle ?
        productCollection.filter(product=>product.category.toLowerCase().includes(selectedTitle.toLowerCase())):productCollection
    

    
  return ( 
    <div className='grid grid-cols-1 md:grid-cols-2 gap-7 lg:grid-cols-3 mx-auto '>

        {isLoading? (<ProductsSkeleton />):
            (filterProductByCategories.map( product=>(
                <div key={product.id} className=' group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 lg:overflow-hidden'>
                    <ProductCard    product={product} />
                </div>
            )))
        }

    </div>
  )
}
