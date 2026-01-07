'use client'

import React, { useEffect, useState } from 'react'
import Category from './Category'
import axios from 'axios'
import { productState } from './MainSection'
import Brand from './Brand'
import { FaStar } from 'react-icons/fa6'
import { Star } from 'lucide-react';
export default function SideBar() {   


  const [productCollection,setProductCollection]=useState<productState []>([])
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedBrand,setSelectBrand]=useState(null)
  
      const fetchProduct= async()=>{
          await axios.get('https://dummyjson.com/products').then(result=>{
              console.log(result?.data)
              setProductCollection(result?.data?.products)
          }).catch(error=>console.log(error))
      }
  
      useEffect(()=>{
          fetchProduct()
      },[])

      const categories = Array.from(                 
        new Set(productCollection.map(product => product.category))
      )


  return (
    <div className=' hidden lg:block shadow w-[20%] pl-10  pr-1 space-y-12 absolute -top-5 left-0  h-screen overflow-y-auto py-5 text-xl'>

      {/* department */}
      <div>
        <h1>Departement</h1>

        <div className="flex items-center space-x-2 hover:bg-green-900 hover:text-white my-2 hover:border px-2 py-1.5 hover:rounded-md group cursor-pointer">
            <input type="radio" name="category" className="appearance-none w-5 h-5 rounded-full shadow border-4
                border-gray-400
                bg-blue-600
                checked:border-[#429bbd]  "
            />
            <label >Tous</label>
        </div>

        {
          categories.map(category=>(
            <Category   key={category}  title={category} isSelected={selectedCategory === category}  onSelect={() => setSelectedCategory(category)}/>                          
          ))
        }
      </div>

      {/* brand */}

      <div>
        {/* marques */}
        <h1>Marques</h1>
        <div className="flex items-center space-x-2 hover:bg-green-900 hover:text-white my-2 hover:border px-2 py-1.5 hover:rounded-md group cursor-pointer">
            <input type="radio" name="category" className="appearance-none w-5 h-5 rounded-full shadow border-4
                border-gray-400
                bg-blue-600
                checked:border-[#429bbd]  "
            />
            <label >Tous</label>
        </div>              

        {
          productCollection.filter(product => product.brand && product.brand.trim() !== "").map(product => (
            <Brand key={product.id} title={product.brand} />
          ))

        }
      </div>

      {/* avis client */}

      <div>

        <h1 className='text-2xl '>Avis client</h1>


        <div className="flex items-center space-x-2 hover:bg-green-900 hover:text-white mt-2 hover:border px-2 py-1.5 hover:rounded-md group cursor-pointer">
          <input type="radio" name="category" className="appearance-none w-6 h-6 rounded-full shadow border-6
              border-gray-400
              bg-blue-600
              checked:border-[#429bbd]  "
          />
          <label >Tous</label>

        </div>

        <div className='flex items-center gap-2 px-2 hover:border  group hover:bg-green-900 hover:text-white hover:rounded-md'>

          <div className="flex items-center my-2  py-1.5  cursor-pointer">
            <input  type="radio" name="brand" className="appearance-none w-5 h-5 rounded-full shadow border-4 bg-transparent
                border-gray-400
                checked:bg-blue-600
                checked:border-[#429bbd] group-hover:border-[#429bbd]  group-hover:bg-blue-100 "
            />
          </div>

          <div className='flex items-center gap-0.5'>
            <FaStar color='#c10015' size={21} />
            <FaStar color='#c10015' size={21} />
            <FaStar color='#c10015' size={21} />
            <FaStar color='#c10015' size={21} /> 
            <Star color='#c10015' size={21} />
          </div>

          <div> & en haut</div>
        </div>

        <div className='space-y-3 mt-10'>
          <p className='font-semibold'>Prix</p>
          <p className='font-semibold'>0$ - 3 100$</p>
        </div>


        <div className='mt-8 relative '>
          <div className='bg-[#429bbd] w-60 ml-5 h-4 '></div>
          {/* left */}
          <div className='bg-white absolute border-4 -left-6 border-[#429bbd] w-12 -top-4 h-12 rounded-full'></div>
          <div className='bg-[#429bbd] absolute -left-4.5 w-9 -top-2.5 h-9 rounded-full'></div>
          <div className='bg-white absolute -left-2.5  w-5 -top-0.5 h-5 rounded-full'></div>
          {/* right */}
          <div className=' absolute right-0 bg-[#429bbd] w-10 -top-3 h-10 rounded-full'></div>
          <div className='bg-white absolute right-2.5  w-5 -top-0.5 h-5 rounded-full'></div>

        </div>

        <div className='space-y-4 mt-20'>
          <p className='font-semibold'>Rabais</p>
          <p className='font-semibold'>10% - 100$</p>
        </div>

        <div className='mt-8 relative '>
          <div className='bg-[#429bbd] w-60 ml-5  h-4 '></div>
          {/* left */}
          <div className=' absolute -left-4 bg-[#429bbd] w-10 -top-3 h-10 rounded-full'></div>
          <div className='bg-white absolute -left-1.5 w-5 -top-0.5 h-5 rounded-full'></div>

          {/* right */}
          <div className=' absolute right-0 bg-[#429bbd] w-10 -top-3 h-10 rounded-full'></div>
          <div className='bg-white absolute right-2.5  w-5 -top-0.5 h-5 rounded-full'></div>

        </div>

        <div className='mt-20'>
          <h1>Programmes exclusivity</h1>
          <div className='px-2 hover:border  group hover:bg-green-900 hover:text-white hover:rounded-md'>
            <div className="flex items-center gap-2 my-2  py-1.5  cursor-pointer">
              <input  type="radio" name="brand" className="appearance-none w-5 h-5 rounded-sm shadow border-4 bg-transparent
                  border-gray-400
                  checked:bg-blue-600
                  checked:border-[#429bbd] group-hover:border-[#429bbd]  group-hover:bg-blue-100 "
              />
              <label htmlFor="">Exclusivite Prime</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
          