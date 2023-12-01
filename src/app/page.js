import Image from 'next/image';

export default function Home() {
  let websiteURLs = [
    {
      "id": 1,
      "webLabel": "Blogtruyen",
      "webURL": "https://blogtruyenmoi.com/nhom-dich/lilo-translation-2321"
    },
    {
      "id": 2,
      "webLabel": "Cuutruyen",
      "webURL": "https://cuutruyen.net/mangas/835"
    },
    {
      "id": 3,
      "webLabel": "Otakusan",
      "webURL": "https://otakusan.net/lilo-translation"
    },
    {
      "id": 4,
      "webLabel": "MangaDex",
      "webURL": "https://mangadex.org/group/2bfddeb9-7b47-400b-b806-a6245753b47b/lilo-translation"
    },
  ];

  return (
    <main className="flex flex-col min-h-screen items-center text-center justify-center md:p-24 p-5">
      <div className='flex flex-col md:flex-row items-center md:text-start text-center'>
        <Image src='/avatar.jpg' width={200} height={200} alt='avatar' className='rounded-full m-3'></Image>
        <div className='flex-col m-5'>
          <h1 className='text-4xl font-bold'>Lilo Translation</h1>
          <h5 className='text-gray-400'><a href="https://www.facebook.com/LiloTranslation" target='blank'>@LiloTranslation</a> | <a href="https://www.facebook.com/LiloScans" target='blank'>@LiloScans</a></h5>
          <p className='my-4 whitespace-normal lg:whitespace-pre-wrap'>Low-tier Scanlation Group được lập nên <br />bởi đám tôn thờ Nakano Nino chứ không vì gì hết.</p>
        </div>
      </div>

      <hr className="w-48 h-1 mx-auto my-4 bg-gray-300 border-0 rounded md:my-5 dark:bg-gray-700"></hr>
      <p className='uppercase font-bold text-gray-400 px-8 md:px-0'>Các manga do nhóm thực hiện có thể đọc tại</p>
      <div className='flex flex-col md:flex-row m-2 items-center justify-center w-full px-5'>
        {websiteURLs && websiteURLs.map((readLink) => (
          <a
            key={readLink.id}
            href={readLink.webURL}
            target='blank'
            className='text-white bg-gray-900 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg px-8 py-5 m-1 w-full md:w-auto dark:bg-gray-900 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
          >
            {readLink.webLabel}
          </a>
        ))}
      </div>
    </main>
  );
}
