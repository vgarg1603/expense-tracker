import React, { ReactNode } from 'react'
import Logo from '@/components/Logo'



function layout({ children }: { children: ReactNode }) {
  return (
    <div className='relative mx-auto mt-12'>
      <div className='flex flex-col items-center justify-center gap-10'>
        <Logo />
        {children}

      </div>
    </div>
  )
}

export default layout
