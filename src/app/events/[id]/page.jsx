import Navbar from '../../../components/nav-bar'
import Footer from '../../../components/footer'
import Image from 'next/image'

export default function EventsDetailPage({params}) {
  console.log(params)
  return (
    <div className='w-full flex items-center flex-col'>
      <Navbar />
      <section className='w-3/5 space-y-4 border-2 bg-white rounded-2xl p-4'>
        <h1 className='text-3xl font-bold'>ДУГУЙН ЗОГСООЛУУД БАЙРШУУЛЛАА</h1>
        <div className='flex text-xs '>
          <p className='font-medium'>Мэдээ</p>
          <p className='pl-8'> 16 MAY 2024</p>
        </div>
        <div className='space-y-4'>
          <p>Чингэлтэй дүүргийн “Тохижилт, нийтийн аж ахуйн хэлтэс “ “Бичил глобус” санхүүгийн байгууллага хамтран нийгмийн
            хариуцлагын хүрээнд дугуйн зогсоолууд байршууллаа.</p>
          <p> Улаанбаатар хотод дугуйгаар зорчигчдод тулгардаг томоохон асуудлын нэг унадаг дугуйн зогсоол хангалтгүй мөн
            чанарын шаардлага хангаагүйн улмаас дугуйн их бие зурагдах, хулгайд алдах зэрэг асуудлууд тулгардаг бол дараах
            байршлуудад стандартын шаардлага хангасан дугуйн зогсоолуудаа байршууллаа</p>
          <p> - ЧД Ялалтын талбай</p>
          <p>- 5-р сургууль</p>
          <p>- Соёл урлагийн их сургууль</p>
          <p>- Чингэлтэй дүүргийн эрүүл мэндийн төв</p>
          <p>- ЧД Эрүүл мэндийн төв</p>
          <p>- Өглөөний гудамж</p>
          <p>- Явуухулангийн цэцэрлэгт хүрээлэн</p>
          <p>- Баянбүрд орчим</p>
          <p>- 24-р сургууль</p>
          <p> - Компьютер ланд төв зэрэгт байршууллаа. Удахгүй танай гэрийн гадаа дугуйн зогсоол байршсан байх боломжтой юм.
          </p>
          <p>Нийт Аж ахуйн нэгжүүдийг эрүүл хөдөлгөөнт амьдралын хэв маягийг бодитоор дэмжин ажиллахыг уриалж байна.</p>
        </div>
        <div className='space-y-4'>
          <div className='relative aspect-video w-full'>
            <Image fill className='rounded-md'
                   src='https://chingeltei.gov.mn/images/took/2024/5_sar_/viber_image_2024-05-15_19-00-37-116.jpg'
                   alt='zurag' />
          </div>
          <div className='relative aspect-video w-full'>
            <Image fill className='rounded-md'
                   src='https://chingeltei.gov.mn/images/took/2024/5_sar_/viber_image_2024-05-15_19-00-37-116.jpg'
                   alt='zurag' />
          </div>
          <div className='relative aspect-video w-full'>
            <Image fill className='rounded-md'
                   src='https://chingeltei.gov.mn/images/took/2024/5_sar_/viber_image_2024-05-15_19-00-37-116.jpg'
                   alt='zurag' />
          </div>
          <div className='relative aspect-video w-full'>
            <Image fill className='rounded-md'
                   src='https://chingeltei.gov.mn/images/took/2024/5_sar_/viber_image_2024-05-15_19-00-37-116.jpg'
                   alt='zurag' />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}