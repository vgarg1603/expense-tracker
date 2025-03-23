'use client'
import React, { useEffect, useState } from 'react'
import Logo from './Logo'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button, buttonVariants } from './ui/button'
import { ThemeSwitcherBtn } from './ThemeSwitcherBtn'
import { UserButton } from '@clerk/nextjs'
import { Menu, Wallet } from 'lucide-react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'

function Navbar() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);
    return (
        <>
            <DesktopNavbar />
            <MobileNavbar />
        </>
    )
}

const items = [
    { label: 'Dashboard', link: '/' },
    { label: 'Transactions', link: '/transactions' },
    { label: 'Manage', link: '/manage' },
]

function MobileNavbar() {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <div className='border-separate border-b bg-background md:hidden'>
            <nav className='container flex items-center justify-between px-8'>
                <Sheet open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
                    <SheetTrigger asChild>
                        <Button variant={'ghost'}>
                            <Menu />
                        </Button>
                    </SheetTrigger>

                    <SheetContent className='w-[400px] sm:w-[540px] px-6 py-4' side='left'>
                        <SheetHeader className='hidden'>
                            <SheetTitle></SheetTitle>
                            <SheetDescription>
                            </SheetDescription>
                        </SheetHeader>
                        <div className="logo">
                            <a href="/" className='flex items-center gap-2'>
                                <Wallet className='stroke h-6 w-6 stroke-amber-500 stroke-[1.5]' />
                                <p className='bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-xl font-bold leading-tight tracking-tighter text-transparent'>ExpenseEase</p>
                            </a>
                        </div>

                        <div className="flex flex-col gap-2 pt-4">
                            {items.map(item => <NavbarItem key={item.label} label={item.label} link={item.link} onclick={() => setIsOpen(!isOpen)} />)}
                        </div>
                    </SheetContent>

                </Sheet>

                <div className='flex h-[60px] items-center gap-x-4'>
                    <a href="/" className='flex items-center gap-2'>
                        <Wallet className='stroke h-6 w-6 stroke-amber-500 stroke-[1.5]' />
                        <p className='bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-xl font-bold leading-tight tracking-tighter text-transparent'>ExpenseEase</p>
                    </a>
                </div>

                <div className='flex items-center gap-3'>
                    <ThemeSwitcherBtn />
                    <UserButton></UserButton>
                </div>
            </nav>
        </div>
    )
}

function DesktopNavbar() {
    return (
        <div className='hidden border-separate border-b bg-background md:block'>
            <nav className='container flex items-center justify-between px-8'>
                <div className="flex h-[80px] min-h-[60px] items-center gap-5">
                    <Logo />
                    <div className="flex h-full">
                        {items.map(item => {
                            return (
                                <NavbarItem key={item.label} link={item.link} label={item.label} />
                            )
                        })}
                    </div>
                </div>

                <div className='flex items-center gap-5'>
                    <ThemeSwitcherBtn />
                    <UserButton />
                </div>

            </nav>
        </div>
    )
}

function NavbarItem({ link, label, onclick }: {
    link: string,
    label: string,
    onclick?: () => void
}) {
    const pathname = usePathname();
    const isActive = pathname === link;

    return (
        <div className='relative flex items-center'>
            <Link href={link} className={cn(
                buttonVariants({ variant: 'ghost' }),
                "w-full justify-start text-lg text-muted-foreground hover:text-foreground",
                isActive && 'text-foreground'
            )}
                onClick={() => {
                    if (onclick) {
                        onclick();
                    }
                }}
            >
                {label}
            </Link>
            {
                isActive && (
                    <div className='absolute -bottom-[2px] left-1/2 hidden h-[2px] w-[80%] -translate-x-1/2 rounded-xl bg-foreground md:block'></div>
                )
            }
        </div>
    )
}

export default Navbar
