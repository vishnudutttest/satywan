const DashboardReport =()=>{
    return (<>
    <h2>Reports</h2>
    <div>
        <div class="flex justify-left">
            <div class="block rounded-lg shadow-lg bg-white max-w-sm text-center">
                <div class="py-3 px-6 border-b border-gray-300">
                Today (2022-10-21)
                </div>
                <div class="p-6">
                <h5 class="text-gray-900 text-xl font-medium mb-2"> </h5>
                <p class="text-gray-700 text-base mb-4">
            
                    Collection Amount: Rs 10000 <br />
                    Collection Amount: Rs 9500
                </p>
                
                </div>
            
            </div>
        </div>
        <div class="flex justify-center">
            <div class="block rounded-lg shadow-lg bg-white max-w-sm text-center">
                <div class="py-3 px-6 border-b border-gray-300">
                Week (Mon-Sun)
                </div>
                <div class="p-6">
                <h5 class="text-gray-900 text-xl font-medium mb-2"> </h5>
                <p class="text-gray-700 text-base mb-4">
            
                    Collection Amount: Rs 10000 <br />
                    Collection Amount: Rs 9500
                </p>
                
                </div>
            
            </div>
        </div>
        <div class="flex justify-right">
            <div class="block rounded-lg shadow-lg bg-white max-w-sm text-center">
                <div class="py-3 px-6 border-b border-gray-300">
                Month (1st-31st)
                </div>
                <div class="p-6">
                <h5 class="text-gray-900 text-xl font-medium mb-2"> </h5>
                <p class="text-gray-700 text-base mb-4">
            
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