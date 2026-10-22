import React from 'react'
import { SearchIcon } from "lucide-react";

const Search_filter = () => {
  return (
    <>
      <div className=' rounded-2xl bg-gray-900 p-5 '>
        <div className='flex gap-4 items-center bg-gray-800 overflow-hidden rounded-xl border transition focus-within:border-orange-400 p-3'>
          <SearchIcon className='w-4 h-4'/>
          <input type="text" placeholder='Search high-performance electronics by name or feature...' className=' text-white outline-none w-full bg-transparent'/>
        </div>
      </div>
    </>
    )
}

export default Search_filter