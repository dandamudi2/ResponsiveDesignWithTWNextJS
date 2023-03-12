import Image from 'next/image';

import { BsDot, BsThreeDotsVertical } from "react-icons/bs";
import { feedVideos } from "./util/data"



export default function Home() {
  return (
    <div className='flex flex-col px-8 py-4 md:flex-row flex-wrap gap-10 lg:gap-4 
     flex-1'>
          {feedVideos.map(video=>(
            <div key={video.title} className="flex flex-col gap-3    w-[280px] sm:w-[320px] md:w-[360px] ">
              <div className=''>
              <img  src={video.thumbnailUrl} 
              height={180} 
              width={340}
              alt='thumnail'
              className='rounded-lg'
              
              />
              </div>
              <div className='flex  gap-3' >

                <div>
                  <img src={video.channelImageUrl} className="rounded-lg" alt="user image" height={22} width={22} />
                </div>
                <div className="flex flex-col gap-2">
                  <div  className='flex justify-between '>
                  <span className='font-semibold text-white max-w-[80%]'>{video.title}</span>
                  <BsThreeDotsVertical />
                  </div>
                  <div className="text-sm text-zinc-300" >
                    <span>{video.channelName}</span>
                    <div  className='flex items-center'>
                      <span>{video.viewCount}</span>
                      <span><BsDot /></span>
                      <span>{video.createdAt.toDateString()}</span>
                    </div>
                  </div>
                </div>
              </div>
              </div>
          
          ))}
    </div>
  )
}
