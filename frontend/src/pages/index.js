import Head from 'next/head'
import React from 'react'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'


export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })
    console.log('hjghjhgg')
    return (
        <>
            <Head>
                <title>Laravel</title>
            </Head>

            <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                <div className="hidden fixed top-0 right-0 px-10 py-4 sm:block">
                    {user ? (
                        <Link
                            href="/dashboard"
                            className="ml-4 text-sm text-gray-700 underline">
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href="/login"
                                className="text-sm text-gray-700 underline">
                                Login
                            </Link>

                            <Link
                                href="/register"
                                className="ml-4 text-sm text-gray-700 underline">
                                Register
                            </Link>
                        </>
                    )}
                </div>

                <div className="max-w-7xl mx-0 sm:px-6 lg:px-1">
                    <div className="flex justify-center pt-0 sm:justify-start sm:pt-0">
                        <img src={require("../components/Logo/LocalFinancer.jpg")}
                        alt=""
                          className="h-16 w-auto text-gray-700 sm:h-20">
                        </img>
                    </div>

                    <div className="mt-4 bg-white h-8xl dark:bg-gray-800 overflow-hidden shadow sm:rounded-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="p-6">
                                <div className="flex items-center">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        className="w-8 h-8 text-gray-500">
                                        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>

                                    <div className="ml-4 text-lg leading-7 font-semibold">
                                        <a
                                            href="https://laravel.com/docs"
                                            className="underline text-gray-900 dark:text-white">
                                            Borrower 
                                        </a>
                                    </div>
                                </div>

                                <div className="ml-12">
                                    <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                        LocalFinancer provides the  facility of add boroower and after that you can manage all the status of borrower 
                                         
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 border-t border-gray-200 dark:border-gray-700 md:border-t-0 md:border-l">
                                <div className="flex items-center">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        className="w-8 h-8 text-gray-500">
                                        <path d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                        <path d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>

                                    <div className="ml-4 text-lg leading-7 font-semibold">
                                        <a
                                            href="https://laracasts.com"
                                            className="underline text-gray-900 dark:text-white">
                                            Installments 
                                        </a>
                                    </div>
                                </div>

                                <div className="ml-12">
                                    <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                        LocalFinancer provides you the facility regarding 
                                        the Installments status and it provides the reacord of all 
                                        installments status  : Paid or Unpaid (with respectively dates )
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                                <div className="flex items-center">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        className="w-8 h-8 text-gray-500">
                                        <path d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                    </svg>

                                    <div className="ml-4 text-lg leading-7 font-semibold">
                                        <a
                                            href="https://laravel-news.com/"
                                            className="underline text-gray-900 dark:text-white">
                                            Laravel News
                                        </a>
                                    </div>
                                </div>

                                <div className="ml-12">
                                    <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                        Laravel News is a community driven
                                        portal and newsletter aggregating all of
                                        the latest and most important news in
                                        the Laravel ecosystem, including new
                                        package releases and tutorials.
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 border-t border-gray-200 dark:border-gray-700 md:border-l">
                                <div className="flex items-center">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        className="w-8 h-8 text-gray-500">
                                        <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <div className="ml-4 text-lg leading-7 font-semibold text-gray-900 dark:text-white">
                                        Vibrant Ecosystem
                                    </div>
                                </div>

                                <div className="ml-12">
                                    <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                        Laravel's robust library of first-party
                                        tools and libraries, such as{' '}
                                        <a
                                            href="https://forge.laravel.com"
                                            className="underline">
                                            Forge
                                        </a>
                                        ,{' '}
                                        <a
                                            href="https://vapor.laravel.com"
                                            className="underline">
                                            Vapor
                                        </a>
                                        ,{' '}
                                        <a
                                            href="https://nova.laravel.com"
                                            className="underline">
                                            Nova
                                        </a>
                                        , and{' '}
                                        <a
                                            href="https://envoyer.io"
                                            className="underline">
                                            Envoyer
                                        </a>{' '}
                                        help you take your projects to the next
                                        level. Pair them with powerful open
                                        source libraries like{' '}
                                        <a
                                            href="https://laravel.com/docs/billing"
                                            className="underline">
                                            Cashier
                                        </a>
                                        ,{' '}
                                        <a
                                            href="https://laravel.com/docs/dusk"
                                            className="underline">
                                            Dusk
                                        </a>
                                        ,{' '}
                                        <a
                                            href="https://laravel.com/docs/broadcasting"
                                            className="underline">
                                            Echo
                                        </a>
                                        ,{' '}
                                        <a
                                            href="https://laravel.com/docs/horizon"
                                            className="underline">
                                            Horizon
                                        </a>
                                        ,{' '}
                                        <a
                                            href="https://laravel.com/docs/sanctum"
                                            className="underline">
                                            Sanctum
                                        </a>
                                        ,{' '}
                                        <a
                                            href="https://laravel.com/docs/telescope"
                                            className="underline">
                                            Telescope
                                        </a>
                                        , and more.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center mt-4 sm:items-center sm:justify-between">
                        <div className="text-center text-sm text-gray-500 sm:text-left">
                            <div className="flex items-center">
                                <svg
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="-mt-px w-5 h-5 text-gray-400">
                                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>

                                <a
                                    href="https://laravel.bigcartel.com"
                                    className="ml-1 underline">
                                    Shop
                                </a>

                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    className="ml-4 -mt-px w-5 h-5 text-gray-400">
                                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>

                                <a
                                    href="https://github.com/sponsors/taylorotwell"
                                    className="ml-1 underline">
                                    Sponsor
                                </a>
                            </div>
                        </div>

                        <div className="ml-4 text-center text-sm text-gray-500 sm:text-right sm:ml-0">
                            Laravel Breeze + Next.js template
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}