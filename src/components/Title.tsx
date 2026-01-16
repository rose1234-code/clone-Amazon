import React from 'react'
import { Menu } from 'lucide-react';

export default function Title() {
  return (
    <div className='hidden  bg-[#364463] h-[70px] lg:flex items-center text-[#566174]    font-bold text-center px-12'>
      <ul className={ `flex items-center gap-6  text-[20px]`}>
        <li className='px-1 rounded-md py-2 hover:border flex items-center gap-1 '><Menu size={26} color='white' /> Tous</li>
        <li className='px-1 rounded-md py-2 hover:border '>Les offres d'aujourd'huit</li>
        <li className='px-1 rounded-md py-2 hover:border '>Prime Video</li>
        <li className='px-1 rounded-md py-2 hover:border '>Register</li>
        <li className='px-1 rounded-md py-2 hover:border '>arte cadeau</li>
        <li className='px-1 rounded-md py-2 hover:border '>Service client</li>
        <li className='px-1 rounded-md py-2 hover:border '>Vendre</li>

      </ul>
    </div>
  )
}
