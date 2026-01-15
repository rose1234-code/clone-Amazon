import React from 'react'

type  categoryProps={
    title:string, 
    onSelectedBrand:(brand:string)=>void
                  
}


export default function Category({title,onSelectedBrand}:categoryProps) {
  return (
    <>
        
        <div onClick={()=>onSelectedBrand(title)} className="flex items-center space-x-2 hover:bg-[#364463] hover:text-white my-2 hover:border px-2 py-1.5 hover:rounded-md group cursor-pointer">
            <input  type="radio" name="brand" className="appearance-none w-5 h-5 rounded-sm shadow border-4 bg-transparent
                border-gray-400
                checked:bg-blue-600
                checked:border-[#429bbd] group-hover:border-[#429bbd]  group-hover:bg-blue-50 "
            />
            <label>{title}</label>
        </div>
    </>
  )
}



