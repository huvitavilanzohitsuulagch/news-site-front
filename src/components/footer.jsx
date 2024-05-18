import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion'
import Image from 'next/image'
import Link from 'next/link'
import { Facebook } from '../assets/facebook'
import { Instagram1 } from '../assets/instagram'

export default function Footer() {
return <>
  <section className="flex flex-col items-center py-16 text-center">
    <div className="max-w-[660px] space-y-12">
      <div className="space-y-3">
        <h2 className="font-bold text-2xl">FAQs</h2>
        <p className="text-body text-zinc-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam,
        </p>
      </div>

      <Accordion collapsible className="mb-0! space-y-3.5 text-left px-4" type="single">
        <AccordionItem className="rounded-xl bg-gray-200" value="item-1">
          <AccordionTrigger className="px-6 py-3 text-body font-bold">
            arun.mn гэж ямар зорилготой сайт вэ?
          </AccordionTrigger>
          <AccordionContent className="px-6 py-2">Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>

        <AccordionItem className="rounded-xl bg-gray-200" value="item-2">
          <AccordionTrigger className="px-6 py-3 text-body font-bold">
            Энэ сайт юуны төлөө бүтээгдсэн бэ
          </AccordionTrigger>
          <AccordionContent className="px-6 py-2">Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </section>
  <footer className="w-full space-y-12 p-2">
    <div className="flex flex-col justify-between space-y-5 sm:flex-row">
      <div className="flex space-x-6">
        <div className="relative h-[111px] w-[151px]">
          <Image fill alt="footer-logo" className="object-contain" src="/isEmpty.png" />
        </div>
        <div className='flex flex-col md:flex-row'>
          <div className="space-y-2">
            <button className="block text-left text-xl text-black font-bold">
              <Link href="/">Хаяг</Link>
            </button>
            <div className='max-w-[400px]'>
              Сүхбаатар дүүргийн Засаг даргын Тамгын газар Монгол Улс, Улаанбаатар хот-14192, Сүхбаатар дүүргийн 7-р
              хороо Денверийн гудамж, Иргэдэд үйлчлэх төв байр
            </div>
          </div>
          <div className="space-y-2 mt-4 md:mt-0 md:ml-4">
            <button className="block text-left text-black font-bold text-xl">
              <Link href="/">Холбоо барих</Link>
            </button>
            <div>
              <div>
                <b>Утас:</b>70070109
              </div>
              <div>
                <b>Факс:</b>976-70070113
              </div>
              <div>
                <b>И-Мэйл:</b>info@sbd.gov.mn
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="flex flex-col items-center justify-center space-y-5 md:flex-row md:space-y-0">
      <p className="text-sm font-bold text-black">
        © {new Date().getFullYear()} Зохиогчийн эрх хуулиар хамгаалагдсан
      </p>
    </div>
  </footer>
</>
}