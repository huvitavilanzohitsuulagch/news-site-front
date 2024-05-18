'use client'
import Navbar from '../../components/nav-bar'
import Footer from '../../components/footer'
import Image from 'next/image'
import Link from 'next/link'

export default function Content() {
  const data = [
    {
      "id": 1,
      "image": {
        "url": "https://back.sbd.gov.mn/storage/uploads/process/202405/file_1715216779568829_16614172612647831.jpg",
      },
      "description": "This is the first news article.This is the first news article.This is the first news articleThis iThis This This This is This is the first news article. first news article.is the first news article.is the first news article.is the first news article.s the first news article..",
      "date": "2023-05-15",
      "title": "News Headline 1",
      "author": "John Doe"
    },
    {
      "id": 2,
      "image": {
        "url": "https://back.sbd.gov.mn/storage/uploads/process/202405/file_1715216779568829_16614172612647831.jpg",
      },
      "description": "This is the second news article.",
      "date": "2023-05-14",
      "title": "News Headline 2",
      "author": "Jane Doe"
    },
    {
      "id": 3,
      "image": {
        "url": "https://back.sbd.gov.mn/storage/uploads/process/202405/file_1715216779568829_16614172612647831.jpg",
      },
      "description": "This is the second news article.",
      "date": "2023-05-14",
      "title": "News Headline 2",
      "author": "Jane Doe"
    },
    {
      "id": 4,
      "image": {
        "url": "https://back.sbd.gov.mn/storage/uploads/process/202405/file_1715216779568829_16614172612647831.jpg",
      },
      "description": "This is the second news article.",
      "date": "2023-05-14",
      "title": "News Headline 2",
      "author": "Jane Doe"
    },
    {
      "id": 5,
      "image": {
        "url": "https://back.sbd.gov.mn/storage/uploads/process/202405/file_1715216779568829_16614172612647831.jpg",
      },
      "description": "This is the second news article.",
      "date": "2023-05-14",
      "title": "News Headline 2",
      "author": "Jane Doe"
    },
  ]
  return (
    <div className='w-full flex items-center flex-col'>
      <Navbar />
      <section className='p-8 px-16 w-full'>
        <div className='text-2xl font-bold'>Бүх мэдээ</div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4' >
          {data.map((datas) => (
            <Link target='_blank' key={datas.id} href={`/content/${datas.id}`}>
              <div  className='rounded-lg border-2 cursor-pointer'>
                <div className='relative aspect-video w-full hover:scale-100'>
                  <Image fill alt={datas.title} className="rounded-t-lg object-cover" src={datas.image.url} />
                </div>
                <div className='p-4 space-y-2'>
                  <div className='text-xl font-bold'>{datas.title}</div>
                  <div className='text-xs'>{datas.date}</div>
                  <div className='line-clamp-3'>{datas.description}</div>
                </div>
              </div>
            </Link>

          ))}
        </div>
      </section>
      <Footer />
    </div>

  );
}
