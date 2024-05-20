import Navbar from '../components/nav-bar'
import Footer from '../components/footer'
import Link from 'next/link'
import Image from 'next/image'
import ImageSlider from '../components/image-slider'

export default function Home() {
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
  ]
  return (
    <div className='w-full flex items-center flex-col'>
      <Navbar />
      <section className='w-4/5 md:flex justify-between'>
        <div className='rounded-md w-full md:w-3/5'>
          <ImageSlider />
        </div>
        <div className='w-full mt-8 md:w-2/5  border-2 md:mx-4 rounded-2xl p-4'>
          <div>ХАРЬЯА ГАЗРУУД</div>
          <hr className='w-full' />
          <div className="grid grid-cols-2 gap-16 p-8">
            <Link target='_blank' href="https://www.facebook.com/profile.php?id=100064590553605">
              <div className="cursor-pointer flex flex-col justify-center items-center">
                <div className="relative w-[100px] aspect-square">
                  <Image fill src="https://chingeltei.gov.mn/images/site/harya_gazruud/ulsiin_bvrtgel.png"
                         alt="gg" />
                </div>
                <p className="text-xs text-center">
                  Чингэлтэй дүүргийн Татварын хэлтэс
                </p>
              </div>
            </Link>
            <Link target='_blank' href="https://www.facebook.com/profile.php?id=100064590553605">
              <div className="cursor-pointer flex flex-col justify-center items-center">
                <div className="relative w-[100px] aspect-square">
                  <Image fill src="https://chingeltei.gov.mn/images/site/harya_gazruud/ulsiin_bvrtgel.png"
                         alt="gg" />
                </div>
                <p className="text-xs text-center">
                  Чингэлтэй дүүргийн Татварын хэлтэс
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section className="w-4/5 p-8">
        <div className="flex justify-between">
          <p className="text-2xl font-bold">Мэдээ</p>
          <Link href="/content" target="_blank">
            <button className="py-2 px-4 rounded-full border-2">Бүх мэдээг үзэх</button>
          </Link>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4'>
          {data.map((datas) => (
            <Link target='_blank' key={datas.id} href={`/content/${datas.id}`}>
              <div className='rounded-lg border-2 cursor-pointer'>
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
      <section className='w-4/5 p-8'>
        <div className="flex justify-between">
          <p className='text-2xl font-bold'>Үйл ажилгаа</p>
          <Link href="/events" target="_blank">
            <button className="py-2 px-4 rounded-full border-2">Бүх үйл ажилгааг үзэх</button>
          </Link>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4'>
          {data.map((datas) => (
            <Link target='_blank' key={datas.id} href={`/events/${datas.id}`}>
              <div className='rounded-lg border-2 cursor-pointer'>
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
