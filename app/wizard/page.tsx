import { CurrencyComboBox } from '@/components/CurrencyComboBox';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { currentUser } from '@clerk/nextjs/server'
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react'

async function page() {

    const user = await currentUser();
    if (!user) {
        redirect('/sign-in');
    }

    return (
        <div className='container flex flex-col items-center justify-between gap-4 md:w-1/2 w-[85%]'>
            <div>
                <h1 className='tex-center text-3xl'>
                    Welcome, <span className='ml-2 font-bold'>{user.firstName}! 👋</span>
                </h1>

                <h2 className='mt-4 text-center text-base text-muted-foreground '>Let &apos;s get started by setting up your currency</h2>

                <h3 className='mt-2 text-center text-muted-foreground text-sm'>You can change these settings any time</h3>
            </div>
            <Separator />

            <Card className='w-full'>
                <CardHeader>
                    <CardTitle>Currency</CardTitle>
                    <CardDescription>Select your default currency for transactions</CardDescription>
                    <CardContent className='mt-2.5'>
                        <CurrencyComboBox/>
                    </CardContent>
                </CardHeader>
            </Card>

            <Separator/>
            <Button className='w-[80%]' asChild>
                <Link href={'/'}>I &apos;m done, take me to dashboard!</Link>
            </Button>


        </div>
    )
}

export default page
