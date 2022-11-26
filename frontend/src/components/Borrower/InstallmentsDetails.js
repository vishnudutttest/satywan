

const InstallmentsDetails = (props) => {
    let TotalPaid =0
 


    const thclass = "border-solid border-2 border-black-100 border-b dark:border-slate-100  font-black font-bold p-3 pl-5 pt-3 pb-3 text-black-400 dark:text-slate-400 text-left";
    const tdclass = "border-b border-slate-100 border-solid dark:border-slate-700 p-2 pl-8 text-black-500 dark:text-slate-400";
   
  return (
    <div id="insalist"> 
                   <h2>Installments List</h2>
                   <div id='tablePersonal'>
                    <table className="border-collapse table-auto w-full text-sm" >
                         <thead id='tableHead' >
                          <tr>
                          <th scope="col" className={thclass} >Sr.No.</th>
                          <th scope="col" className={thclass}>Amount</th>
                          <th scope="col" className={thclass}>Date</th>
                          <th scope="col" className={thclass} >Paid Status</th>
                          </tr>
                         </thead>
                         <tbody id='tableBody'>
                         {props.Installments.map (function(val){
                          if(val.paidStatus===1)
                          TotalPaid = TotalPaid + Number(val.installmentAmount)
                          return(<tr>
                            <td className={tdclass}>{val.instalmentNumber}</td>
                            <td className={tdclass}>{val.installmentAmount}</td>
                            <td className={tdclass}>{val.installmentDate}</td>
                            <td className={tdclass}>{val.paidStatus?"Paid":"Unpaid"}</td>
                            </tr>
                          )
                         }) 
                         }
                         {console.log(TotalPaid)}
                     </tbody>
                    </table>
                  </div>
                </div>
   
  )
}

export default InstallmentsDetails