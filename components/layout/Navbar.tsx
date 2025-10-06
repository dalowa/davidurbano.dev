'use client'

import { usePathname } from 'next/navigation'

import React from 'react'
import Link from 'next/link'
import { AboutIcon, BlogIcon, HomeIcon, LetterIcon, WorkIcon, LabIcon } from '../icons';
import { NAVIGATION_ITEMS } from '@/lib/constants/navigation';

// Mapeo de iconos
const iconMap = {
  HomeIcon,
  AboutIcon,
  ProjectsIcon: WorkIcon, // Usando WorkIcon para ProjectsIcon
  LabIcon, // Ya importado correctamente
  BlogIcon,
  LetterIcon
} as const;

/*  bg-gray-300/25 */

const linkClass:string = "px-[0.9rem] py-2 flex md:text-white-dalowa gap-1 justify-center items-center rounded-2xl border-[1px] border-gray-800/5  transition-colors duration-300 text-white-dalowa";

export default function Navbar() {

  const pathname = usePathname()

  return (
    <nav className='bg-gray-800/25 fixed top-7 p-1 border-[1px] md:top-7 md:bottom-auto border-gray-100/30 rounded-2xl z-[100]' >
      <ul className='flex gap-1' >
        {NAVIGATION_ITEMS.map((item) => {
          const IconComponent = iconMap[item.icon as keyof typeof iconMap];
          const isActive = pathname === item.href;
          
          return (
            <li key={item.href} className='flex justify-center items-center' >
              <Link 
                href={item.href} 
                prefetch={true} 
                className={`${linkClass} ${
                  isActive 
                    ? 'bg-red-dalowa/95 cursor-default' 
                    : 'hover:text-red-dalowa hover:border-red-dalowa hover:bg-gray-300/10 hover:cursor-pointer'
                }`}
              >
                <IconComponent className='text-[1.4rem]' />
                <p className='hidden md:inline'>{item.label}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  )
}
