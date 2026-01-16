'use client'

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { productState } from './MainSection'
import { useStoreFavorite } from '@/store/favorite.store'
import { Trash } from 'lucide-react';

export default function Favorite() {

    const [productCollection,setProductCollection]=useState<productState[]>([])
    const [isLoading, setIsLoading]=useState(true)

    const {selectedFavoriteIds,toggleHeartIcon,clearAll}=useStoreFavorite()

    const fetchProduct= async()=>{
        await axios.get('https://dummyjson.com/products').then(result=>{
            console.log(result?.data)
            setProductCollection(result?.data?.products)
            setIsLoading(false)
        }).catch(error=>console.log(error))
    }

    const productFavorite=productCollection.filter(product=>(selectedFavoriteIds.includes(product.id)))

    useEffect(()=>{
        fetchProduct()
    },[])

  return (
    <>
        <div className='flex items-center justify-between '>
            <h1 className=' text-lg lg:text-2xl text-red-600 font-bold cursor-pointer'>My Favorites</h1>
            <div onClick={()=>{clearAll()}} className= 'text-sm md:text-xl cursor-pointer text-red-500 flex items-center gap-1 '><Trash size={20}/>Clear All</div>
        </div>
        <div className='  w-full mt-8  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  items-center gap-7'>
            {productFavorite.length>0 ? productFavorite.map(product=>(
                <div key={product.id} className=''>
                    <div className='mb-1  cursor-pointer w-full bg-gray-50 rounded-md'>
                      <img className='object-cover line-clamp-2' src={product.thumbnail} alt="none" width={"100%"} />
                    </div>
                    <button className="text-xl  cursor-pointer my-3 flex flex-wrap text-gray-600 dark:text-white w-full ">{product.title}</button>
                    <button onClick={()=>{toggleHeartIcon(product.id)}} className='text-white cursor-pointer rounded-md bg-red-600 text-2xl text-center w-full'>Remove</button>
                </div>
            )): (<p className='text-xl'>No product available in your favorite</p>)}
        </div>
    </>
  )
}

