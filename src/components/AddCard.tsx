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
    <div className='h-[250px] w-full lg:pt-0  lg:px-14  lg:mb-6 rounded-3xl'>
       

        <div className="flex  h-full px-2 lg:px-8  gap-3 items-center  justify-between lg:gap-12 ring ring-gray-200 rounded-3xl">

          <div className='lg:flex  gap-8 w-[53%] relative mt-0 lg:mt-4 '>

            <div className='w-[64%] h-[221px] lg:flex flex-col items-center justify-center  bg-gray-100 ring ring-gray-300 rounded-2xl' >
              <img className='w-[150px] h-[190px] object-contain ' src={image} alt="none" width={'100%'} />
            </div>

            <div className=' hidden absolute left-50 lg:flex w-[250px]'>
              <h1 className='text-lg text-yellow-900 dark:text-gray-600 underline font-semibold flex flex-wrap font-bold w-full '>{name} </h1>
            </div>

          </div>
              
          <div className=' flex items-center justify-between text-2xl  gap-2 lg:gap-3 -ml-22  w-[22%] md:w-[20%] md:-ml-34'>
            <span  onClick={()=>(count>1 && setCount(prev=>prev-1))} className=' cursor-pointer w-[31px] h-[31px] rounded-sm flex items-center  justify-center lg:rounded-full ring ring-gray-300 font-semibold'>-</span>
            <span  className='  text-2xl font-semibold '>{count}</span>
            <span onClick={()=>setCount(prev=>prev+1)}  className=' cursor-pointer w-[31px] h-[31px] flex items-center  justify-center rounded-sm lg:rounded-full ring ring-gray-300   font-semibold'>+</span>
          </div>

          <div className='font-bold text-xl -ml-8 lg:ml-0 lg:text-3xl w-[9%]'>${(price*count).toFixed(2)}</div>

          <div className='  w-[9%]' onClick={()=>{toggleCardIcon(id)}} >
             <X color='orange' size={25}/>
          </div>

        </div>
      
    </div>
  )
}
