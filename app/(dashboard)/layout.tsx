import React, { ReactNode } from 'react'
import Navbar from '@/components/Navbar'

function layout({children}: {children: ReactNode}) {
  return (
    <div>
      <Navbar/>
      {children}
    </div>
  )
}

export default layout
