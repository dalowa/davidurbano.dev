'use client'

import { usePathname } from 'next/navigation'

import React from 'react'
import Link from 'next/link'
import { AboutIcon, BlogIcon, GalleryIcon, HomeIcon, WorkIcon } from '../icons';

/*  bg-gray-300/25 */

const linkClass:string = "px-[0.9rem] py-2 flex md:text-white-dalowa gap-1 justify-center items-center rounded-2xl border-[1px] border-gray-800/5  transition-colors duration-300 text-white-dalowa";

export default function Navbar() {

  const pathname = usePathname()

  return (
    <nav className='bg-gray-800/25 fixed top-7 p-1 border-[1px] md:top-7 md:bottom-auto border-gray-100/30 rounded-2xl z-50' >
      <ul className='flex gap-1' >
        <li>
          <Link href={"/"} prefetch={true} className={`${linkClass} ${pathname === '/' ? 'bg-red-dalowa/95 cursor-default' : 'hover:text-red-dalowa hover:border-red-dalowa hover:bg-gray-300/10 hover:cursor-pointer'}`}>
            <HomeIcon className='text-[1.4rem] ' />
            <p className='hidden md:inline' >Home</p>
          </Link>   
        </li>
        <li>
          <Link href={"/about"} prefetch={true} className={`${linkClass} ${pathname === '/about' ? 'bg-red-dalowa/95 cursor-default' : 'hover:text-red-dalowa hover:border-red-dalowa hover:bg-gray-300/10 hover:cursor-pointer'}`}>
            <AboutIcon className='text-[1.4rem] ' /> 
            <p className='hidden md:inline' >About</p>
          </Link>
        </li>
        <li>
          <Link href={"/work"} prefetch={true} className={`${linkClass} ${pathname === '/work' ? 'bg-red-dalowa/95 cursor-default' : 'hover:text-red-dalowa hover:border-red-dalowa hover:bg-gray-300/10 hover:cursor-pointer'}`}>
            <WorkIcon className='text-[1.4rem] ' /> 
            <p className='hidden md:inline' >Work</p>
          </Link>
          
        </li>
        <li >
          <Link href={"/blog"} prefetch={true} className={`${linkClass} ${pathname === '/blog' ? 'bg-red-dalowa/95 cursor-default' : 'hover:text-red-dalowa hover:border-red-dalowa hover:bg-gray-300/10 hover:cursor-pointer'}`}>
            <BlogIcon className='text-[1.4rem] ' /> 
            <p className='hidden md:inline' >Blog</p>
          </Link>
        </li>
        <li >
          <Link href={"/gallery"} prefetch={true} className={`${linkClass} ${pathname === '/gallery' ? 'bg-red-dalowa/95 cursor-default' : 'hover:text-red-dalowa hover:border-red-dalowa hover:bg-gray-300/10 hover:cursor-pointer'}`}>
            <GalleryIcon className='text-[1.4rem] ' /> 
            <p className='hidden md:inline' >Gallery</p>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
