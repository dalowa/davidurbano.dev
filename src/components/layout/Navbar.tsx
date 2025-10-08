'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/src/lib/utils';
import { useIsBottomPageStore } from '@/src/store/useBottomPageStore';
import { useDisappearLayoutEffect} from '@/src/hooks';
import { NAVIGATION_ITEMS } from '@/config/content';

const linkClass:string = "px-[0.9rem] py-2 flex md:text-white-dalowa gap-1 justify-center items-center rounded-2xl border-[1px] border-gray-800/5  transition-colors duration-300 text-white-dalowa";

export function Navbar() {
  const pathname = usePathname()
  useDisappearLayoutEffect() 

  const isAtBottom = useIsBottomPageStore((state) => state.isAtBottom);
  return (
    <nav className={cn(`top-7 bg-gray-800/25 fixed p-1 border-[1px] md:top-7 md:bottom-auto border-gray-100/30 rounded-2xl z-[100]`,
      { 'opacity-0 transition-opacity duration-500': isAtBottom },
      {'opacity-100 transition-opacity duration-500': !isAtBottom}
    )} >
      <ul className='flex gap-1' >
        {NAVIGATION_ITEMS.map(({href, icon: IconComponent, label}) => {
          ;
          const isActive = pathname === href;
          
          return (
            <li key={href} className='flex justify-center items-center' >
              <Link 
                href={href} 
                prefetch={true} 
                className={`${cn(linkClass, {
                  'bg-red-dalowa/95 cursor-default': isActive,
                  'hover:text-red-dalowa hover:border-red-dalowa hover:bg-gray-300/10 hover:cursor-pointer': !isActive
                })}`}
              >
                <IconComponent className='text-[1.4rem]' />
                <p className='hidden md:inline'>{label}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  )
}
