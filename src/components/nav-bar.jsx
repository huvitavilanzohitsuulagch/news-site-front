'use client'
import Logo from '../assets/logo'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"
import { ListBulletIcon } from '@radix-ui/react-icons'

export default function Navbar ()  {
  const pathname = usePathname()
  return (
    <div className="w-4/5 p-4  rounded-2xl m-5 bg-white drop-shadow-md ">
      <div className=" flex items-center justify-between ">
        <div className='flex items-center'>
          <Link href='/'>
            <Logo className='cursor-pointer' />
          </Link>
          <div className='text-sm hidden sm:flex justify-around pl-2'>
            <Link href="/">
              <p className={`p-2 cursor-pointer hover:bg-gray-200 rounded-md ${pathname === '/' &&  'font-bold '}`}>Нүүр хуудас</p>
            </Link>
            <Link href="/content">
              <p className={`p-2 cursor-pointer hover:bg-gray-200 rounded-md ${pathname === '/content' &&  'font-bold '}`}>Мэдээ</p>
            </Link>
            <Link href="/events">
              <p className={`p-2 cursor-pointer hover:bg-gray-200 rounded-md ${pathname === `/events` &&  'font-bold '}`}>Үйл ажилгаа</p>
            </Link>
            <Link href="/about">
              <p className={`p-2 cursor-pointer hover:bg-gray-200 rounded-md ${pathname === '/about' &&  'font-bold '}`}>Бидний тухай</p>
            </Link>

          </div>
        </div>
        <Link href='/login'>
          <button className="hidden sm:block bg-black text-white shadow-inner rounded-xl p-2 px-4">
            Нэвтрэх
          </button>
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger className="sm:hidden block"><ListBulletIcon /></DropdownMenuTrigger>
          <DropdownMenuContent className='bg-white p-3 sm:hidden block'>
            <Link href='/'>
              <DropdownMenuItem className={`p-2 hover:bg-slate-200 cursor-pointer rounded-lg ${pathname === '/' &&  'font-bold '} `}>Нүүр хуудас</DropdownMenuItem>
            </Link>
            <Link href='/content'>
              <DropdownMenuItem className={`p-2 hover:bg-slate-200 cursor-pointer rounded-lg ${pathname === '/content' &&  'font-bold '} `}>Мэдээ</DropdownMenuItem>
            </Link>
            <Link href='/about'>
              <DropdownMenuItem className={`p-2 hover:bg-slate-200 cursor-pointer rounded-lg ${pathname === '/about' &&  'font-bold '} `}>Бидний тухай</DropdownMenuItem>
            </Link>
            <Link href='/' >
              <DropdownMenuItem className='p-2 bg-black rounded-lg cursor-pointer text-white mt-2 flex items-center justify-center'>Нэвтрэх</DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
