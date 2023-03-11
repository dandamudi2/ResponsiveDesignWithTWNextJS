'use client'
import { BsYoutube, BsMicFill, BsBell, BsCameraVideo } from "react-icons/bs";
import { HiOutlineMenu } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';

import Image from 'next/image';
import { useState } from 'react';

const TopNavigation = () =>{

    const [search,setSearch] = useState("");

    return (
        <div className='flex justify-between items-center  p-4'>
            <div className="flex items-center gap-6 ">
            <HiOutlineMenu size={26} />
            <div className='flex items-center gap-1'>
                <BsYoutube  size={30}  className="text-red-500" />
                <span className='text-xl font-semibold'>YoutTube</span>
                </div>
                </div>
            <div className="hidden md:flex gap-2  min-w-[300px] lg:w-[800px]">
                <div className='flex w-full'  >
                <input placeholder='search' className=' w-full  px-3 py-2
                 bg-zinc-900 border-[1px] border-zinc-700
                  placeholder:text-zinc-500
                   focus:bg-black rounded-tl-full 
                   rounded-bl-full focus:outline-none' 
                   value={search}
                   onChange={event => setSearch(event.target.value)}
                  />
                
              <div className='bg-zinc-700 px-5 py-3 rounded-tr-full rounded-br-full'>
                 <BiSearch />
              </div>
              </div>
              <div className='flex items-center bg-zinc-800 p-3  rounded-full
              hover:bg-zinc-500 cursor-pointer'>
                <BsMicFill />
              </div>
            </div>
            <div className="flex items-center gap-3">
            <div className='flex items-center  p-2  rounded-full
              hover:bg-zinc-700 cursor-pointer'>
                <BsCameraVideo size={22} />
              </div>
              <div className='flex items-center  p-2  rounded-full
              hover:bg-zinc-700 cursor-pointer'>
                <BsBell size={22}  />
              </div>
              <div>
              <Image className='rounded-full cursor-pointer'
               src={`https://cdn-icons-png.flaticon.com/512/149/149071.png`} alt="user image" height={43} width={43} />
              </div>
            </div>
        </div>
    )
}

export default TopNavigation;