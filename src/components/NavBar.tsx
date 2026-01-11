'use client'

import React, {  useRef, useState } from 'react'
import { Heart } from 'lucide-react'
import {Search,ShoppingBag ,ChevronDown,ChevronUp} from 'lucide-react';
import { useStoreFavorite } from '@/store/favorite.store';
import Link from 'next/link';
import { Menu, MapPinPlus } from 'lucide-react';

import { useStoreCard } from '@/store/card.store';
import { useRouter } from 'next/navigation';





export default function NavBar() {


    // state of variables
    const [language,setLanguage]=useState("EN")
    const [visible,setVisible]=useState(true)
    const containRef=useRef<HTMLDivElement>(null)
    const [country,setCountry]=useState("canada")


    // definition of references

    const handleCountry=(state:string)=>{
        setCountry(state)
        setVisible(!visible)
    }
    const {selectedCardIds}=useStoreCard()
   const {selectedFavoriteIds,toggleHeartIcon,}=useStoreFavorite()

  //  recherche
  const [query,setQuery]=useState('')
  const router=useRouter()
  const handleSearch=(e:React.FormEvent)=>{
    e.preventDefault()

    if(!query)  return
    router.push(`/search?query=${query}`)

  }
  return (
    <>
    <div className='fixed left-0 z-100 w-full'>
    <div className=" flex   items-center justify-between w-full text-[rgb(255,255,255)] overflow-hidden bg-[#0F172A] px-3  lg:px-10">
      <div className='flex  items-center gap-1 py-3 lg:py-0 lg:w-[10%]'>
        <div className=' lg:hidden'>
         <Menu size={28} color='white' />               
        </div>
        {/* first part */}
        <Link href="/" className="h-16 lg:h-20 p-2 flex items-center cursor-pointer hover:rounded-md hover:ring hover:ring-gray-300 ">
          <img src="/logo.png" alt="logo" className="h-full object-contain"  width={'100%'}/>
        </Link >    
      </div>       
      
           

      {/* second part */}

        <form onSubmit={handleSearch} className='hidden relative shadow  w-[49%]  rounded-md cursor-pointer lg:flex items-center '>
          <button className=' p-3.5 cursor-pointer relative z-20 h-[55px] w-[9%] lg:w-[10%] text-gray-500 rounded-l-sm flex  items-center gap-1   font-semibold bg-gray-300 '>Tous <ChevronDown  size={25}/></button>
          <input onChange={(e)=>{setQuery(e.target.value)}} className=' cursor-pointer bg-white outline-none h-[55px] absolute rounded-r-md pr-10  text-black w-[87%] lg:w-[90%] left-20 lg:left-14 z-10 p-3.75 lg:py-2  lg:pl-9' type="text" placeholder='entrer un truc' />
          <Search  className='cursor-pointer bg-[#ee6b91] h-[55px] w-[7.5%] lg:w-[7%] py-3  absolute right-0 lg:-right-6  rounded-r-md  z-50'   color="#413d40" />
        </form>
        
                         
      {/* third part */}
      <div className='flex items-center gap-7 lg:gap-10 '>
            <Link  href='/favorite' className='relative'>
              <Heart color='pink' size={30} />
              <span  className='absolute  bg-[#EF4444]  text-white p-1 text-2xl -top-3  left-5 flex items-center justify-center w-6 h-6  rounded-full'>{selectedFavoriteIds.length}</span>             
            </Link>

            <Link href="/card" className='relative'>
              <ShoppingBag size={28}  color='pink' className='cursor-pointer relative' />
              <span className='absolute  text-white bg-[#EF4444] p-1 text-2xl  left-3 -top-3 flex items-center justify-center w-6 h-6 text-white rounded-full'>{selectedCardIds.length}</span>
            </Link>

          <div onClick={()=>{setLanguage(language==='EN' ? 'FR':'EN')}} className='border-2 cursor-pointer 
           border-[#364463] rounded-md px-0.5 text-white tex-2xl'>
            {language}
          </div>
          <div ref={containRef}  className='hidden lg:flex' >
            <div onClick={()=>{setVisible(prev=>!prev)}}  className='flex cursor-pointer items-center gap-1 font-bold text-xl'>{country}
                {visible===true?(<ChevronDown /> ):(<ChevronUp />)}
            </div>
            {!visible && ( <div className='absolute z-50 font-bold  -right-2  top-[75px] w-[130px] p-1 cursor-pointer  shadow '>
                <ul className='text-[#FFFFFF] bg-yellow-600 rounded-md text-semibold'>
                    <li onClick={()=>handleCountry('canada')} className='hover:bg-blue-600 hover:text-white p-2 rounded-md text-md font-semibold '>Canada</li>
                    <li onClick={()=>handleCountry('united states')} className='hover:bg-blue-600 hover:text-white p-2 rounded-md text-md font-semibold'>United states</li>
                </ul>
            </div> )}
          </div>
      </div>

    </div>
    {/* uniquement sur mobile */}

    
      <form onSubmit={handleSearch} className='lg:hidden  bg-[#0F172A] pb-16 border px-3 h-12 text-xl w-full  cursor-pointer items-center '>
          <input onChange={(e)=>setQuery(e.target.value)} className=' bg-white h-14 w-[89%] outline-none pl-5 pr-20 py-2  text-xl  rounded-md  absolute top-24 left-5 rounded-r-md   text-black ' type="text" placeholder='entrer un truc' />
          <Search  className=' bg-yellow-500 h-[56px] py-2 w-[15%] absolute right-2 top-24  rounded-md  z-50'   color="red" />
      </form>    

  </div>
      <div className='w-full  lg:hidden px-5 flex items-center text-xl gap-1 bg-[#182541]  pt-40 py-4 text-white'> <MapPinPlus color='white' size={28} /> Deliver to cameroun <ChevronDown  size={28}/></div>
</>
  )               
}
                          