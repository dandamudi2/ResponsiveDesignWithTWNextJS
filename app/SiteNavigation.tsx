"use client"

import { usePathname, useRouter } from "next/navigation";
import { IconType } from "react-icons";
import { AiOutlineYoutube } from "react-icons/ai";
import { BiPlayCircle } from "react-icons/bi";
import { BsCollectionPlay } from "react-icons/bs";
import { HiHome } from "react-icons/hi";
import { TfiYoutube } from "react-icons/tfi";



interface MenuItem{
    icon: IconType;
    text: string;
    pathname : string;
   }

   const MenuItems: Array<MenuItem> =[
    {
        icon:HiHome,
        text: "Home",
        pathname:'/'
    },
    {
        icon:TfiYoutube,
        text: "Shorts",
        pathname:'/shorts'
    },
    {
        icon:BsCollectionPlay,
        text: "Subscriptions",
        pathname:'/feed/subscriptions'
    },
    {
        icon:AiOutlineYoutube,
        text: "Originals",
        pathname:'/originals'
    },

    {
        icon:SiYoutubemusic,
        text: "Youtube Music",
        pathname:'/music'
    },



   ]

const SideNavigation = () =>{

   const pathname = usePathname();
    console.log('path name',pathname);

    const router = useRouter();

    const handleItemClick = (item:MenuItem) =>{
         router.push(item.pathname);
    }
    return (
        <div className='p-[4px] lg:w-[260px]'>
            {MenuItems.map(item => (
                <div key={item.text} className={`flex flex-col gap-1 lg:flex-row  lg:gap-6 p-4 lg:py-3
                items-center hover:bg-zinc-700 rounded-lg cursor-pointer 
                ${item.pathname  === pathname && 'bg-zinc-700 hover:bg-zinc-600'}`}
                onClick ={()=>handleItemClick(item)}
                >
                    <item.icon size={22} />
                    <span className="text-xs lg:text-base">{item.text}</span>
                </div>
            ))}
        </div>
    )
}

export default SideNavigation;