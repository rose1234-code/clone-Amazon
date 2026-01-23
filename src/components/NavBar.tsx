'use client'

import React, {  useEffect,  useState } from 'react'
import { Heart, CircleUser  } from 'lucide-react'
import {Search,ShoppingBag ,ChevronDown} from 'lucide-react';
import { useStoreFavorite } from '@/store/favorite.store';
import Link from 'next/link';
import { Menu, MapPinPlus } from 'lucide-react';
import { useStoreCard } from '@/store/card.store';
import { useRouter } from 'next/navigation';
import { ModeToggle } from './ModeToggle';

import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'





export default function NavBar() {


  const {selectedCardIds}=useStoreCard()
  const {selectedFavoriteIds}=useStoreFavorite()

  //  recherche
  const [query,setQuery]=useState('')
  const router=useRouter()
  const handleSearch=(e:React.FormEvent)=>{
    e.preventDefault()

    if(!query)  return
    router.push(`/search?query=${query}`)

  }

  const [scrolled,setScrolled]=useState(false)

    useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50)
  }

  window.addEventListener("scroll", handleScroll)

  return () => {
    window.removeEventListener("scroll", handleScroll)
  }
}, [])

  return (
    <>
    <div className={`   fixed left-0 z-100 w-full`}>
    <div className= {`   fixed md:top-0 left-0 z-50 w-full transition-all duration-300 bg-background/80 backdrop-blur ${scrolled ? "top-3 h-16 rounded-md shadow-lg" : "h-20"}  flex   items-center justify-between w-full  b overflow-hidden bg-gray-700 dark:bg-[#0F172A] px-3  lg:px-10`}>
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
          <Search  onClick={handleSearch} className='cursor-pointer bg-[#ee6b91] h-[55px] w-[7.5%] lg:w-[7%] py-3  absolute right-0 lg:-right-6  rounded-r-md  z-50'   color="#413d40" />
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
            <Link href="/contact">  <CircleUser  color='white' size={30}/> </Link>
          <div>
            <ModeToggle/>
          </div>
      </div>

      {/* authentification */}

       <div className="hidden lg:flex items-center gap-3">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="px-2 py-1 rounded-full border border-white text-white hover:bg-white hover:text-black transition">
                Sign in
              </button>
            </SignInButton>
          
            <SignUpButton mode="modal">
              <button className="px-2 py-1 rounded-full bg-amber-600 text-white hover:bg-amber-700 transition">
                Sign up
              </button>
            </SignUpButton>
          </SignedOut>
          
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>

    </div>
    {/* uniquement sur mobile */}

    
      <form onSubmit={handleSearch} className='lg:hidden  bg-[#0F172A] pb-16 border px-3 h-12 text-xl w-full  cursor-pointer items-center '>
          <input onChange={(e)=>setQuery(e.target.value)} className=' bg-white h-14 w-[89%] outline-none pl-5 pr-20 py-2  text-xl  rounded-md  absolute top-24 left-5 rounded-r-md   text-black ' type="text" placeholder='entrer un truc' />
          <Search  onClick={handleSearch} className=' bg-yellow-500 h-[56px] py-2 w-[15%] absolute right-2 top-24  rounded-md  z-50'   color="red" />
      </form>    

  </div>
  <div className='w-full  lg:hidden px-5 flex items-center text-xl gap-1 bg-[#182541]  pt-40 py-4 text-white'> <MapPinPlus color='white' size={28} /> Deliver to cameroun <ChevronDown  size={28}/></div>
</>
  )               
}
                          