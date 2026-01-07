import React from 'react'

export default function LastTitle() {
  return (
    <div className='h-[50px] hidden lg:flex items-center border-b  border-gray-300 px-14 w-full bg-gray-100'>
     
     <ul className='flex items-center gap-8 text-md'>
        <li>Les offres d'aujourd'hui</li>   
        <li>Coupons</li>
        <li>Offres renouvelées</li> 
        <li>Outlet</li>
        <li>Amazon Revente</li>
        <li>Offres d'épicerie </li>
     </ul>
    </div>
  )
}
