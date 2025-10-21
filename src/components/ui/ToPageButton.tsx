import { ToPageButtonProps } from '@/src/types/components'
import Link from 'next/link'

export const ToPageButton = ({redirectTo, children}: ToPageButtonProps) => {
  return (
      <Link
         href={redirectTo} 
         className="inline-flex w-fit items-center gap-2 bg-red-dalowa hover:bg-red-dalowa/75 hover:scale-105 border border-transparent hover:border-red-dalowa px-6 py-3 rounded-lg font-semibold transition-all"
      >
         {children}
         <span className="text-lg">→</span>
      </Link>
  )
}

