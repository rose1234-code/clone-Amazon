import Link from 'next/link'
import React from 'react'

interface props{
    image:string,
    title:string,
    price:number
}
export default function Search({image,title,price}:props) {
  return (
    <div>
      {/* Image */}
     <div className="bg-gray-100 flex items-center justify-center h-56">
       <img src={image} alt="none" className="h-full object-contain group-hover:scale-105 transition duration-300"/>
     </div>
     {/* Content */}
     <div className="p-4 flex flex-col gap-3">
       <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
         {title}
       </h2>
       <p className="text-xl font-bold text-red-500">
         ${price}
       </p>
       <Link href='/card' className="mt-auto text-center bg-red-500 hover:bg-red-600 text-white text-lg font-semibold py-2 rounded-xl transition">
         Commander
       </Link>
     </div>
    </div>
  )
}
