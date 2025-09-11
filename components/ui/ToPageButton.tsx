import Link from 'next/link'
import React from 'react'



export const ToPageButton = ({redirectTo, children}: {redirectTo: string, children: React.ReactNode}) => {
  return (

      <Link 
         href={redirectTo} 
         className="inline-flex items-center gap-2 bg-red-dalowa hover:bg-red-dalowa/50 hover:scale-105 border border-transparent hover:border-red-dalowa px-6 py-3 rounded-lg font-semibold transition-all"
      >
         {children}
         <span className="text-lg">→</span>
      </Link>
  )
}

