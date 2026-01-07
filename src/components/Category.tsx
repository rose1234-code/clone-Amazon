import React from 'react'

type  categoryProps={
    title:string,
    isSelected: boolean,
    onSelect: () => void,
}


export default function Category({title, isSelected,onSelect,}:categoryProps) {
  return (
    <>
        
        <div className="flex items-center space-x-2 hover:bg-green-900 hover:text-white my-2 hover:border px-2 py-1.5 hover:rounded-md group cursor-pointer">
            <input onChange={onSelect} type="radio" name="category" className="appearance-none w-5 h-5 rounded-full shadow border-4 bg-transparent
                border-gray-400
                checked:bg-blue-600
                checked:border-[#429bbd] group-hover:border-[#429bbd]  group-hover:bg-blue-50 "
            />
            <label className={`${isSelected ? 'border-blue-600 bg-gray-200' : 'border-gray-300'}`}>{title}</label>
        </div>
    </>
  )
}



