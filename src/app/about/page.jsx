import Navbar from '../../components/nav-bar'
import Footer from '../../components/footer'
import Image from 'next/image'
export default function About() {
  return (
    <div className='w-full flex items-center flex-col'>
      <Navbar />
      <section className='w-4/5 '>
        <div className='text-2xl font-bold text-center '>Бидний тухай</div>
        <div className='md:flex'>
          <div className=' md:w-2/4 px-10 pt-4 text-base space-y-4'>
            <div className='space-y-4'>
              <p>“Гэрэгэ Системс” нь анх 2017 онд байгуулагдаж одоог хүртэл Төрийн болон хувийн хэвшлийн үйлчилгээг
                хялбар
                аргаар иргэдэд хүргэх зорилготойгоор үйл ажиллагаагаа явуулсаар байна.
              </p>
              <p> 2022 онд бид групп компанийн засаглал нэвтрүүлж “Гэрэгэ Kиоск” ХХК, “Гэрэгэ ПОС” ХХК, “Гэрэгэ Проперти
                Техноложис” ХХК, “Гэрэгэ Медтек” ХХК, “Гэрэгэ Эдтек” ХХК, “Вулкан Аналитикс” ХХК зэрэг нийт зургаан охин
                компанитай болж цар хүрээгээ өргөтгөсөн.</p>
              <p>Одоогоор 140+ ажилтан “Гэрэгэ Системс”-ийг бүрдүүлж байна. “Бид эх орныхоо Ирээдүйг өөрчилнө, хөтөлнө!”
                нэр
                дор байгууллагын зарчмыг баримтлан ажилтнуудынхаа ур чадварыг хөгжүүлэх, өрсөлдөхүйц цалин урамшуулал
                олгон
                ажиллахыг эрмэлздэг.</p>
              <p>“Гэрэгэ Платформ”-ийн киоск машинаар сард 200 мянган хүн үйлчлүүлж төрийн болон хувийн хэвшлийн
                үйлчилгээг
                иргэд түргэн шуурхай авч байна. Киоск машины нийт үйлчилгээний 70 хувь нь төрийн албаны үйлчилгээ
                эзэлдэг.
                Мөн кассын машиныг орлох “Гэрэгэ Пос”-оор шууд төлбөрийн үйлчилгээ болон дээрх үйлчилгээнүүдийг давхар
                авах
                боломжтой. Мөн эрүүл мэндийн асуудал тулгарсан үед та “Гэрэгэ Медтек” компаниар дамжуулан үйлчилгээ авах
                боломжтой.</p>
            </div>
          </div>
          <div className='md:w-2/4'>
            <div className="relative aspect-video w-full mt-4 ">
              <Image fill className="rounded-xl"
                     src="https://gerege.mn/wp-content/uploads/2023/11/DSC_62671-copy-21-1-2048x1100.png"
                     alt="gg" />
            </div>
          </div>
        </div>
        <div className="text-2xl font-bold pt-4 text-center">Удирдах зөвлөл</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 text-center">
          <div>
            <div className="relative  aspect-square w-full mt-8">
              <Image fill className="rounded-full"
                     src="https://back.sbd.gov.mn/storage/uploads/process/202405/file_1715216779568829_16614172612647831.jpg"
                     alt="gg" />
            </div>
            <p className='text-xl font-medium pt-4'>Э.Мөнх-Оргил</p>
            <p className='text-sm text-gray-400'>TУЗ-ийн дарга
              Гэрэгэ Системс ХХК</p>
          </div>
          <div>
            <div className="relative  aspect-square w-full mt-8">
              <Image fill className="rounded-full"
                     src="https://back.sbd.gov.mn/storage/uploads/process/202405/file_1715216779568829_16614172612647831.jpg"
                     alt="gg" />
            </div>
            <p className='text-xl font-medium pt-4'>Э.Мөнх-Оргил</p>
            <p className='text-sm text-gray-400'>TУЗ-ийн дарга
              Гэрэгэ Системс ХХК</p>
          </div>
          <div>
            <div className="relative  aspect-square w-full mt-8">
              <Image fill className="rounded-full"
                     src="https://back.sbd.gov.mn/storage/uploads/process/202405/file_1715216779568829_16614172612647831.jpg"
                     alt="gg" />
            </div>
            <p className='text-xl font-medium pt-4'>Э.Мөнх-Оргил</p>
            <p className='text-sm text-gray-400'>TУЗ-ийн дарга
              Гэрэгэ Системс ХХК</p>
          </div>
          <div>
            <div className="relative  aspect-square w-full mt-8">
              <Image fill className="rounded-full"
                     src="https://back.sbd.gov.mn/storage/uploads/process/202405/file_1715216779568829_16614172612647831.jpg"
                     alt="gg" />
            </div>
            <p className='text-xl font-medium pt-4'>Э.Мөнх-Оргил</p>
            <p className='text-sm text-gray-400'>TУЗ-ийн дарга
              Гэрэгэ Системс ХХК</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>

  );
}
