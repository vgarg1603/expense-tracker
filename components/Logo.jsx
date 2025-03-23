import { Wallet2, Wallet, WalletCards } from 'lucide-react'
import React from 'react'

function Logo() {
  return (
    <a href="/" className='flex items-center gap-2'>
        <Wallet className='stroke h-10 w-10 stroke-amber-500 stroke-[1.5]' />
        <p className='bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent'>ExpenseEase</p>
    </a>
  )
}

export default Logo
