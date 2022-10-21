const DashboardReport =()=>{
    return (<>
    <h2>Reports</h2>
    <div>
        <div className="flex justify-left">
            <div className="block rounded-lg shadow-lg bg-white max-w-sm text-center">
                <div className="py-3 px-6 border-b border-gray-300">
                Today (2022-10-21)
                </div>
                <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2"> </h5>
                <p className="text-gray-700 text-base mb-4">
            
                    Collection Amount: Rs 10000 <br />
                    Collection Amount: Rs 9500
                </p>
                
                </div>
            
            </div>
        </div>
        <div className="flex justify-center">
            <div className="block rounded-lg shadow-lg bg-white max-w-sm text-center">
                <div className="py-3 px-6 border-b border-gray-300">
                Week (Mon-Sun)
                </div>
                <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2"> </h5>
                <p className="text-gray-700 text-base mb-4">
            
                    Collection Amount: Rs 10000 <br />
                    Collection Amount: Rs 9500
                </p>
                
                </div>
            
            </div>
        </div>
        <div className="flex justify-right">
            <div className="block rounded-lg shadow-lg bg-white max-w-sm text-center">
                <div className="py-3 px-6 border-b border-gray-300">
                Month (1st-31st)
                </div>
                <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2"> </h5>
                <p className="text-gray-700 text-base mb-4">
            
                    Collection Amount: Rs 10000 <br />
                    Collection Amount: Rs 9500
                </p>
                
                </div>
            
            </div>
        </div>
    </div>
    </>)
}

export default DashboardReport;