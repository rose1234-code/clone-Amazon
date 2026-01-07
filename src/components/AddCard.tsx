'use client'

import React, { useEffect, useState } from 'react'
import { X } from 'lucide-react';
import { useStoreCard } from '@/store/card.store';

type AddCardProps={
  id:number,
  image:string,
  price:number,
  name:string,
  onQtyChange:(id:number,qty:number)=>void
}

export default function AddCard ({id,image,price,name,onQtyChange}:AddCardProps) {

  const [count,setCount]=useState(1)
  const {toggleCardIcon}=useStoreCard()      

  useEffect(() => {
    onQtyChange(id, count)
  }, [count, id, onQtyChange])


  return (
    <div className='h-[250px] w-full px-14 mb-6 rounded-3xl'>
       

        <div className="flex h-full  px-3  items-center  justify-between gap-12 ring ring-gray-200 rounded-3xl">

          <div className='flex items-center gap-8 w-[30%] relative'>

            <div className='w-[64%] h-[221px] flex flex-col items-center justify-center  bg-gray-100 ring ring-gray-300 rounded-2xl' >
              <img className='w-[150px] h-[190px] object-cover ' src={image} alt="none" width={'100%'} />
            </div>

            <div className='absolute left-50  w-[250px]'>
              <h1 className='text-lg text-yellow-900 underline font-semibold flex flex-wrap font-bold w-full '>{name} </h1>
            </div>

          </div>
              
          <div className='flex items-center justify-between gap-3 ml-8  w-[10%]'>
            <span  onClick={()=>(count>1 && setCount(prev=>prev-1))} className=' cursor-pointer w-[31px] h-[31px] flex items-center  justify-center rounded-full ring ring-gray-300   text-2xl font-semibold'>-</span>
            <span  className='  text-2xl font-semibold '>{count}</span>
            <span onClick={()=>setCount(prev=>prev+1)}  className=' cursor-pointer w-[31px] h-[31px] flex items-center  justify-center rounded-full ring ring-gray-300   text-2xl font-semibold'>+</span>
          </div>

          <div className='font-bold text-3xl'>${(price*count).toFixed(2)}</div>

          <div onClick={()=>{toggleCardIcon(id)}} >
             <X color='orange' size={30}/>
          </div>

        </div>
      
    </div>
  )
}
