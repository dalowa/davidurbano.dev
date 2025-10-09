'use client'

import { useCenterTag } from '@/src/hooks'
import { cn } from '@/src/lib/utils'
import { DalowaBlackIcon, GithubIcon, LinkedinIcon, TwitterIcon } from '@/src/components/icons'

export const HomeContactMe = () => {
  const { elementRef, isInViewport } = useCenterTag()
  return (
    <section 
      className={cn(`w-screen h-[100vh] min-h-[600px] flex flex-col gap-6 lg:flex-row items-center bg-white text-white justify-center transition-all duration-700`, 
        {'opacity-100': isInViewport},
        {'opacity-75': !isInViewport}
      )}
      ref={elementRef}
    >
      <div className={`text-center lg:text-start lg:h-[600px] bg-violetd-500 xl:max-w-xl lg:flex lg:flex-col lg:gap-4 lg:w-[40vw] text-black-dalowa `}>
        <h4 className='text-3xl font-extrabold lg:text-4xl xl:text-5xl select-none'>{`Let's build something together`}</h4>
        <p className='hidden lg:inline text-black-dalowa/75 2xl:text-lg select-none'>{`I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions`}</p>
        <DalowaBlackIcon className='hidden xl:w-80 lg:inline w-64 aspect-square mx-auto mt-4'/>
      </div>

      <div className='w-full max-w-xs lg:w-[40vw] lg:h-[600px] bg-amberd-400 xl:max-w-xl lg:max-w-none flex flex-col lg:items-end lg:gap-3 text-black-dalowa px-4'>
        <h5 className='hidden max-w-xs lg:text-3xl xl:text-4xl xl:max-w-md w-full lg:inline text-2xl font-bold'>{`Send a message`}</h5>
        <form className={cn('max-w-xs xl:max-w-md w-full flex flex-col  lg:text-black-dalowa/65',
          `[&>label]:flex [&>label]:flex-col [&>label]:py-2 [&>label]:text-md [&>label]:font-light [&>label]:gap-3`,
        )}>
          <label className="">
            <span className='font-bold lg:font-medium'>Full Name</span>
            <input className='placeholder:text-black-dalowa/65 focus:border-black-dalowa outline-none border border-gray-700/25 p-2 rounded' type="text" placeholder="Your Name" />
          </label>
          <label className="">
            <span className='font-bold lg:font-medium'>Email</span>
            <input className='placeholder:text-black-dalowa/65 focus:border-black-dalowa outline-none border border-gray-700/25 p-2 rounded' type="email" placeholder="you@example.com" />
          </label>
          <label className="">
            <span className='font-bold lg:font-medium'>Subject</span>
            <input className='placeholder:text-black-dalowa/65 focus:border-black-dalowa outline-none border border-gray-700/25 p-2 rounded' type="text" placeholder="Regarding..." />
          </label>
          <label className="">
            <span className='font-bold lg:font-medium'>Message</span>
            <textarea className='placeholder:text-black-dalowa/65 focus:border-black-dalowa outline-none border border-gray-700/25 p-2 rounded' placeholder="Your message..."></textarea>
          </label>
          <button className='bg-black-dalowa hover:bg-red-dalowa hover:cursor-pointer text-white py-2 px-4 rounded' type="submit">Send</button>
        </form>
        <div className='hidden lg:flex xl:max-w-md max-w-xs w-full flex-col lg:mt-2'>
          <h6 className='font-semibold'>{`Or Follow Me`}</h6>
          <ul className='flex gap-4 mt-2 items-center'>
            <li>
              <a title='David Urbano LinkedIn' href='https://www.linkedin.com/in/davidurbano/' target='_blank' rel='noreferrer noopener'>
                <LinkedinIcon className='text-black-dalowa hover:text-red-dalowa text-3xl'/>
              </a>
            </li>
            <li>
              <a title='David Urbano LinkedIn' href='https://www.linkedin.com/in/davidurbano/' target='_blank' rel='noreferrer noopener'>
                <TwitterIcon className='text-black-dalowa hover:text-red-dalowa text-3xl'/>
              </a>
            </li>
            <li>
              <a title='David Urbano LinkedIn' href='https://www.linkedin.com/in/davidurbano/' target='_blank' rel='noreferrer noopener'>
                <GithubIcon className='text-black-dalowa hover:text-red-dalowa text-3xl'/>
              </a>
            </li>
          </ul>
        </div>
      </div>
      
    </section>
  )
}
