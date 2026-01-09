import Link from 'next/link'
import React from 'react'
import { FaHeart } from "react-icons/fa6"
import { productState } from './MainSection'
import { useStoreFavorite } from '@/store/favorite.store'
import { useStoreCard } from '@/store/card.store'

interface ProductCardProps{
  product:productState
}

export default function ProductCard({product}:ProductCardProps) {

  const {toggleCardIcon,selectedCardIds} =useStoreCard()
  const {toggleHeartIcon,selectedFavoriteIds}=useStoreFavorite()

  return (                  
    <div className='transition transform duration-300 hover:scale-110  w-[95%] lg:w-75  h-120 rounded-md  relative '>

      <div onClick={()=>{toggleHeartIcon(product.id)}} className={`absolute z-50  left-2 top-2 w-10 h-10 p-2 rounded-full shadow ${selectedFavoriteIds.includes(product.id)&& 'bg-gray-300'} ` }>
        <FaHeart size={40} color='#EF4444' className={`w-full h-full ` }/>
      </div>

      {/* image */}
      <div className='bg-gray-50 h-90 rounded-md lg:h-75'>
        <Link  href={`/details/${product.id}`} className='mb-1  relative '>
          <img className='object-cover h-full' src={product.thumbnail} alt="none" width={"100%"} />
      </Link>             
      </div>

      <span  onClick={()=>{toggleCardIcon(product.id)}}  
        className={`${selectedCardIds.includes(product.id) ? 'bg-[#474b53] text-white' :' bg-[#ffd631] '}  text-[34px] text-gray-900 font-semi-bold justify-center  w-10  h-10 absolute bottom-45 right-3 rounded-full flex items-center`}>
          +
      </span>

        
      {/* text */}           
      <div className=''>

        <div className='flex  items-center gap-2'>
          <button className='hidden lg:flex text-[14px] w-22 text-white bg-[rgb(204,12,57)] font-semibold shadow rounded-md py-1.5  px-2.5'>42% off</button>
          <h1 className='text-[rgb(204,12,57)]  text-[17px] font-bold flex flex-wrap'>{product.title}</h1>
        </div>

        <div className='flex items-center gap-3 my-3'>
          <p className='text-gray-900 '> <span className='text-gray-600 '>$</span> <span className='text-xl font-bold'>74</span>  <span className='text-gray-600'>²²</span> </p>
          <p className='text-gray-600 line-through '>List {product.price}</p> 
        </div>

        <p className='text-lg font-normal text-gray-700'>BISSELL Little Green Mini <br /> Portable Carpet and Upholster…</p>

        <p className='text-lg text-[#1c89e3]'>Shop Bissell deals</p>

      </div>
    </div>
  )
}
