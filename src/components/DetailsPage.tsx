'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { Dot,Handbag,ClipboardPlus,Heart } from 'lucide-react';
import axios from 'axios';
import { productState } from './MainSection';

type Props={
  productId:number
}

export default function DetailsPage({productId}:Props) {

  const [activeImage,setActiveImage]=useState<string | null>(null)
    const [product,setProduct]=useState<productState | null>(null)

        
      const fetchProduct= async()=>{
          await axios.get(`https://dummyjson.com/products/${productId}`).then(result=>{
              console.log(result?.data)
              setProduct(result?.data)
              setActiveImage(result?.data.images[0])

          }).catch(error=>console.log(error))
      }
  
      useEffect(()=>{
          fetchProduct()  
      },[productId])
    

  return (
    <div className='mt-30 text-xl px-4 lg:px-14'>


      {/* first colone */}
      <div className='flex flex-col lg:flex-row justify-between gap-14'>
        {/* product by category :carousel*/}
        <div className='flex flex-col md:flex-row gap-4'>
          {/* carousel */}

          <div  className='hidden w-25  lg:h-130  space-x-2.5 space-y-4 lg:flex flex-row md:flex-col  items-center '>
            {
              product?.images.map((image,index)=>(
              <div onClick={()=>{setActiveImage(image)}} key={index}  className={` ${image===activeImage? ' ring-2 ring-yellow-400': ''}  ring ring-gray-300  w-25 shadow rounded-md`}>
                  <img className='w-full h-full object-contain' src={image} alt="none"  width={'100%'}/>
              </div>
             )) 
            }
          </div>

          {/* main section */}
          <div className='rounded-lg h-90 md:h-107 lg:h-150 ring w-full ring-gray-200 bg-gray-50  md:w-125 lg:w-200 flex items-center justify-center'>
            {activeImage && (
              <div  className='h-125 bg-transparent w-175  flex items-center justify-center'>
                <Image className='object-contain w-full h-full' src={activeImage} alt="non" width={750} height={950}/>
              </div>
            )}
          </div>

        </div>
        {/* description */}
        <div className='shadow h-150 rounded-md w-full lg:w-175 py-5 px-1.5 lg:px-10'>
            <h1 className='text-3xl font-bold line-clamp-1' >{product?.title}</h1>
            <div className='flex items-center gap-1 lg:gap-3 mt-3'>
                <div className='flex gap-2'>
                    <FaStar color='gold' size={18} />
                    <FaStar color='gold' size={18} />
                    <FaStar color='gold' size={18} />
                    <FaStar color='gold' size={18} /> 
                </div>
                <span className='text-amber-600'>4.5</span>
                <Dot />
                <Handbag color='gray' />
                <span className='text-gray-400 text-md '>154 orders</span>
            </div>

            <div className='mt-6'>
                <div className='space-x-14 mt-1 text-xl'>
                    <span className='text-gray-400'>Made In:</span>
                    <span className='font-semibold  px-2 '>Australia</span>
                </div>
                <div className='space-x-14 mt-2 text-xl'>
                    <span className='text-gray-400'>Design:</span>
                    <span className='font-semibold px-2 ml-3 '>Moderne</span>
                </div>
                <div className='space-x-14 mt-2 text-xl'>
                    <span className='text-gray-400'>Delivery:</span>
                    <span className='font-semibold px-2 ml-1 '>2 days delivery</span>
                </div>
            </div>

            <hr className='border text-gray-200 my-4' />

            <div>

                <h1 className='text-2xl mt-8 font-semibold'>Quantity</h1>
                <div className='space-x-5 mt-2'>
                   <span className='text-xl'>stocks: <span className='mx-4'>{product?.stock}</span></span>
                </div>

                <div className='mt-8'>
                    <h1 className='text-2xl text-gray-300 font-semibold mb-1.5'>Price</h1>
                    <span className='text-2xl font-bold'>${product?.price}</span>
                </div>

                <div className='space-x-3 flex flex-col lg:flex-row  lg:w-85 lg:items-center mt-7'>
                    <div className='flex  justify-between w-full  '>
                      <button className='flex gap-1 text-white bg-amber-500 items-center rounded-md px-1.5 lg:px-4 py-2 text-xl  lg:text-xl'>
                        <ClipboardPlus size={22} /> Add to cart
                      </button>
                      <button className='rounded-md bg-amber-100  text-amber-700 px-4 py-2 text-xl  lg:text-xl'>
                          buy now
                      </button>
                    </div>
                    <button className='rounded-md border w-[40px] mt-2 px-3 py-1             text-2xl'><Heart /></button>
                </div>
            </div>
        </div>
      </div>

      {/* second colone:comments  */}

      <div className='mt-10  '>
        <h1 className='text-2xl font-semibold underline'>comments</h1>

        <div className='text-xl ml-10  my-4'>
          {
            product?.reviews.map((review,index)=>(
              <h1 className='text-gray-600' key={review.rating}>{index}*{review.comment}</h1>
            ))
          }
        </div>
        
      </div>
    </div>
  )
}
