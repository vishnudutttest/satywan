import AppLayout from '@/components/Layouts/AppLayout'
import DashboardReport from '@/components/Report/DashboardReport'
import Head from 'next/head'

const Dashboard = () => {
    return (
        <AppLayout 
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }>

            <Head>
                
                <title>Finace - Dashboard</title>
            </Head>

            
                <div className="max-w-7xl mx-auto  lg:px-8">
                    
                        <div className=" bg-white border-b border-gray-200">
                           <DashboardReport></DashboardReport>
                        </div>
                
                </div>
            
        </AppLayout>
    )
}

export default Dashboard
