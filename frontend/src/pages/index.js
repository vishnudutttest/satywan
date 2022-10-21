import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect,useState } from "react";

import { useAuth } from '@/hooks/auth'
import { useRouter } from 'next/router'

export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })
    const router = useRouter();
    useEffect(() => {
        if(!user){
            router.push('/login')
        }
      });
    return (
        <>
            <Head>
                <title>FMS-Finance Management System</title>
              
            </Head>

            <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                <div className="hidden fixed top-0 right-0 px-6 py-4 sm:block">
                    {user ?<>
                        <Link href="/dashboard">
                            <a className="ml-4 text-sm text-gray-700 underline">
                                Dashboard1
                            </a>
                        </Link>
                        <Link href="/addborrower">
                        <a className="ml-4 text-sm text-gray-700 underline">
                            Add Borrower
                        </a>
                        </Link></>
                        : 
                       ''
                    }
                </div>
            </div>
        </>
    )
}
