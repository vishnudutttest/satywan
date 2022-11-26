import AppLayout from '@/components/Layouts/AppLayout'
import InstallmentList from "@/components/installment/InstallmentList"
import Head from 'next/head'



const Borrower = () => {
    return (
        <AppLayout
            header={
                <h1 >
                    Borrower
                </h1>
            }>
            <Head>
                <title>Finace - Add Borrower</title>
            </Head>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-0 bg-white border-b border-gray-200">
                          <InstallmentList ></InstallmentList>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Borrower;