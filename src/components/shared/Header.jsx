import React from 'react'
import { BsSearch } from "react-icons/bs";
import { HiOutlineBell, HiOutlineChatAlt } from 'react-icons/hi';

const Header = () => {
  return (
    <div className='bg-white h-16 px-4 flex justify-between items-center border-b border-gray-200'>
        <div className='relative'>
            <BsSearch fontSize={22} className='text-gray-400 absolute top-2 left-2'/>
            <input type='text' placeholder='Search...' className='text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-300 rounded-sm px-10'/>
            </div>

        <div className='flex gap-4 items-center mr-2'>
            <HiOutlineChatAlt fontSize={24}/>
            <HiOutlineBell fontSize={24}/>
        </div>
    </div>
  )
}

export default Header