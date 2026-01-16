'use client'

import AddCard from '@/components/AddCard'
import Footer from '@/components/Footer'
import { productState } from '@/components/MainSection'
import NavBar from '@/components/NavBar'
import { useStoreCard } from '@/store/card.store'
import axios from 'axios'
import { X } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function page() {

  const {selectedCardIds,clearAll}=useStoreCard()

  const [productCollection,setProductCollection]=useState<productState[]>([])

  const fetchProduct= async()=>{
      await axios.get('https://dummyjson.com/products').then(result=>{
          console.log(result?.data)
          setProductCollection(result?.data?.products)
      }).catch(error=>console.log(error))
  }
  
  useEffect(()=>{
      fetchProduct()
  },[])


  const [quantities, setQuantities] = useState<Record<number, number>>({})

  const updateQuantity = (id: number, qty: number) => {
    // Les crochets [ ] indiquent  une clé dynamique.
    setQuantities(prev => ({...prev,[id]: qty, }))
  }

  const listProductCard=productCollection.filter(product=>selectedCardIds.includes(product.id))
  const total = listProductCard.reduce((acc, product) => {
    const qty = quantities[product.id] || 1
    return acc + product.price * qty
  }, 0)

  const Discount:number=10

  

  return (
    <div>
        <NavBar/>                             

        {/* head of description */}
        
        <div className='flex flex-col lg:flex-row justify-between pt-34 lg:px-14  px-2'>

          {/* first contenair */}
          <div className=' w-full lg:w-[63%] ring ring-gray-200 py-2 rounded-3xl '>
            <div className='lg:px-14 px-3 flex my-7 items-center justify-between'>
              <h1 className='text-2xl lg:text-3xl font-bold '>Cart <span className='text-sm font-semibold '>({selectedCardIds.length} products)</span></h1>
              <button onClick={()=>{clearAll()}} className='px-lg lg:text-2xl  font-semibold flex items-center gap-1 text-amber-600'>  <X  size={22}/>clear all</button>
            </div>
            <div className='flex px-2 lg:px-14 items-center  mb-5 justify-between text-lg lg:text-2xl font-bold'>
              <p className='text-xl'>Product</p>
              <p className=' ml-20 lg:ml-54 text-xl'>Count</p>
              <p className='text-xl'>Price</p>
              <p></p>
            </div>
            {/* components card */}
            <div>
              {listProductCard.length >0 ?listProductCard.map((product,index)=>(
                <AddCard key={index} id={product.id} onQtyChange={updateQuantity}  image={product.thumbnail} name={product.title}  price={product.price}/> 
              )): (<p className='text-xl text-center mt-30'>Add product on Main Section please !</p>)}
            </div>
            
          </div>

          {/* second container */}

          <div className='w-full lg:w-[30%] p-5  rounded-3xl h-[450px] bg-gray-200'>
            <h1 className='text-2xl font-bold my-2'>Promo Code </h1>

            <div className='flex justify-between mt-5 px-1.5 py-1.5 mb-9 rounded-full w-full ring ring-gray-500'>
              <input className=' w-[80%] px-2 outline-none text-xl' placeholder='type here' type="text" />
              <button className='w-[28%] lg:w-[20%] py-1.5 px-3 rounded-full bg-black text-white text-center text-xl'>Applay</button>
            </div>

            <hr className='ring ring-gray-300 border-none mb-8' />
            <div className='flex text-gray-600 mb-4 text-xl items-center justify-between'>
              <p className=''>Subtotal</p>
              <span>${(total).toFixed(2)}</span>
            </div>
            <div className='flex text-gray-600 mb-4 text-xl items-center justify-between'>
              <p className=''>Discount</p>
              <span>$-{Discount}</span>
            </div>
            <div className='flex text-gray-600  mb-8 text-2xl items-center justify-between'>
              <p className='font-semibold'>Total</p>
              <span className='font-bold'>${total===0? total.toFixed(2): (total-Discount).toFixed(2)}</span>
            </div>

            <Link href="https://wa.me/message/X6HAVLNKAVBMO1"  target='_blank' className='rounded-2xl w-full block bg-black text-xl text-white text-center py-4 px-6'>Continue to checkout</Link>
          </div>
        </div>

        {/* last elements */}

        <div className='hidden rounded-3xl lg:flex  relative h-[200px] bg-gray-900 mt-3.5 w-[60%] overflow-hidden mx-14'>
          <img className='w-[10%] absolute left-50 z-10 h-[180px] -top-4 object-cover ' src="/watch.png" alt="none" width={'100%'} />
          <div className='h-[55px] w-[55px] -bottom-6 -left-6 border border-white rounded-full absolute'></div>
          <div className='h-[55px] w-[55px] top-6 left-54  border border-white rounded-full absolute'></div>
          <div className='h-[55px] w-[55px] -top-6 -right-6 border border-white rounded-full absolute'></div>
          <div className='h-[45px] w-[45px] bottom-5 right-54  border border-white rounded-full absolute'></div>

          <div className='text-white h-full py-8 w-[30%] absolute left-[450px] space-y-3  text-center'>
            <h1 className='text-center text-xl leading-5 font-semibold '>Check the newest <br /> Apple products</h1>
            <p className='text-sm   '>official  apple retalia</p>
            <button className='px-5 py-1.5 text-2xl ring ring-gray-200 rounded-xl'>Shop now</button>
          </div>
          <img className='w-[10%] h-[180px] absolute right-50 -bottom-3 object-cover ' src="/watch.png" alt="none" width={'100%'} />
        </div>
        

        <Footer/>
    </div>
  )
}
