import { useState,useEffect } from 'react'
import AppLayout from '@/components/Layouts/AppLayout'
//import BorrowerList from "@components/Borrower/BorrowerList"
import AddBrrower from "@/components/Borrower/AddBorrower"
import Head from 'next/head'
import { useRouter } from 'next/router'
import axios from '@/lib/axios'


const Borrower = () => {
    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Borrower
                </h2>
            }>

            <Head>
                <title>Finace - Add Borrower</title>
            </Head>
            
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                          <AddBrrower ></AddBrrower>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Borrower;