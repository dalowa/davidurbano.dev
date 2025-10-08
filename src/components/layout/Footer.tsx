'use client'

import { ExternalLink } from '../ui'
import { useIsBottomPageStore } from '@/src/store/useBottomPageStore';
import { cn } from '@/src/lib/utils';
import { FOOTER_LINKS, SITE_CONFIG } from '@/config/content';

export function Footer() {

    const isAtBottom = useIsBottomPageStore((state) => state.isAtBottom);

  return (
    <footer className={cn(`text-white w-full flex-col gap-3 items-center transition-all duration-500`,
      { 'opacity-0 transition-opacity duration-500': isAtBottom },
      {'opacity-100 transition-opacity duration-500': !isAtBottom}
    )} >
      <div 
        className={cn('vertical-mail bottom-0 right-7 font-bold',
          `md:gap-3 md:justify-center md:fixed md:flex md:flex-row-reverse md:items-center`
        )}>
        <a className="tracking-[0.2rem] md:tracking-[0.1rem] md:font-extrabold vertical-text md:text-red-dalowa hover:-translate-y-1 hover:text-white hover:transition duration-300" href="mailto:davidurbano.dev@gmail.com"> {SITE_CONFIG.social.email} </a>
        <div className="md:w-[2px] md:h-[7.5rem] md:bg-red-dalowa"></div>
      </div>
      <div 
        className={cn("md:fixed bottom-0 left-7 md:flex md:flex-col md:justify-center md:items-center")}
        >
        <ul className={cn('flex gap-3', "md:gap-5 py-3 md:flex-col md:justify-center md:items-center")}>
            {
              FOOTER_LINKS.map(({href, label, icon: IconComponent}) => (
                <li key={href} className=''>
                  <ExternalLink title={`To my ${label} account`} href={href}>
                    <IconComponent className='text-red-dalowa text-2xl hover:-translate-y-1 hover:text-white hover:transition duration-300' />
                  </ExternalLink>
                </li>
              ))
            }
        </ul>
        <div className={cn("md:w-[2px] md:h-[7.5rem] md:bg-red-dalowa")}></div>
      </div>
      <p className={cn(`text-sm text-white text-center `, {'py-2': !isAtBottom, 'hidden': isAtBottom})}>
        {`Built & designed by `}
        <strong className="text-red-dalowa font-extrabold">
        {`David Urbano`}
        </strong>
        {` - Lima, Perú`} 
      </p>
    </footer>
  )
}
