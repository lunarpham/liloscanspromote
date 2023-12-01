"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {
  const [liloReader, setLiloReader] = useState([])
  
  useEffect(() => {
    const getLinks = async () => {
      try {
        const response = await fetch('/api/links');
        const result = await response.json();
        setLiloReader(result.items)
      } catch (error) {
        console.error("Fetch error: Cannot get URLs.", error);
      }
    };
    getLinks();

  }, [])

  return (
    <main className="flex flex-col min-h-screen items-center text-center justify-center p-24">
      <div className='flex flex-row flex-wrap items-center text-start'>
        <Image src='/avatar.jpg' width={200} height={200} alt='avatar' className='rounded-full m-3'></Image>
        <div className='flex-col m-5'>
          <h1 className='text-4xl font-bold'>Lilo Translation</h1>
          <h5 className='text-gray-400'><a href="https://www.facebook.com/LiloTranslation" target='blank'>@LiloTranslation</a> | <a href="https://www.facebook.com/LiloScans" target='blank'>@LiloScans</a></h5>
          <p className='my-4'>Low-tier Scanlation Group được lập nên <br></br> bởi đám tôn thờ Nakano Nino chứ không vì gì hết.</p>
        </div>
      </div>
      
      <hr class="w-48 h-1 mx-auto my-4 bg-gray-300 border-0 rounded md:my-5 dark:bg-gray-700"></hr>
      <p className='uppercase font-bold text-gray-400'>Các manga do nhóm thực hiện có thể đọc tại</p>
      <div className='flex flex-wrap m-2 items-center justify-center'>
        {liloReader && liloReader.map((readLink) => (
            <a
              key={readLink.id}
              href={readLink.webURL}
              target='blank'
              className='text-white bg-gray-900 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg px-8 py-5 m-1 dark:bg-gray-900 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
              >
                {readLink.webLabel}
            </a>
        ))}
      </div>
    </main>
  )
}
