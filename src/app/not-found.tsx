

import NavBar from '@/components/NavBar'
import Link from 'next/link'
import React from 'react'

export default function notFound() {
  return (
    <div className='h-screen ' >
      <NavBar/>
      <div className='flex items-center justify-center pt-38 lg:pt-80  '>
        <div className='space-y-10  text-center'> 
          <h1 className='text-3xl font-bold text-[#bb3252]'>404</h1>
          <p className='font-bold  text-md  md:text-lg text-gray-700'>The page you are looking for cannot be found.</p>

          <button className="btn-container">
            <div className="btn-back"></div>
            <div className="btn-front">

              <Link href="/">back to homepage</Link>

              <svg width="24px" height="24px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">

                <g id="SVGRepoBgCarrier" strokeWidth="0"></g>
                <g id="SVGRepoTracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepoIconCarrier">
                  <g fill="#395d7a">
                    <path
                      d="M8 2.5a5.494 5.494 0 00-4.558 2.42.75.75 0 01-1.242-.84 7 7 0 110 7.841.75.75 0 111.242-.841A5.5 5.5 0 108 2.5z"
                    ></path>
                    <path
                      d="M7.245 4.695a.75.75 0 00-.05 1.06l1.36 1.495H1.75a.75.75 0 000 1.5h6.805l-1.36 1.495a.75.75 0 001.11 1.01l2.5-2.75a.75.75 0 000-1.01l-2.5-2.75a.75.75 0 00-1.06-.05z"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
