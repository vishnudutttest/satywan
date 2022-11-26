import { useState,useEffect } from 'react'
import axios from '@/lib/axios'
import { useRouter } from 'next/router'
import NavLink from '@/components/NavLink'


const InstallmentList = (props) => {

    
    const router = useRouter();
    const [Installments,SetInstallments] = useState([]);
    const [ajaxdata,Setajaxdata] = useState({ token: router.query.token,date: new Date()});
    //SetInstallments([1,2]);
    
  

    useEffect(() => {
        axios.post("/api/installmentlist",ajaxdata)
        .then(res=>{
            SetInstallments(res.data);
            console.log(res.data)
        }).catch(res=>{
            console.log("Error found in get list of installment");
        })
    },[ajaxdata]);

   const filterInstallment = ()=>{
      let dateele = document.getElementById("filterdate");
      let date = dateele.value;//('data-id');
      console.log(date);

      if(date==''){
          dateele.focus();
          alert("you clicked on empty id");
          return false;
      }
    // Setajaxdata({ token: router.query.token,installment_id: id});
      axios.post("/api/installmentlist",{token: router.query.token,date: date})
      .then(res=>{
          SetInstallments(res.data);
      }).catch(res=>{
          console.log("Error found in get list of installment");
      })
   }

    const changeStatus = (e)=>{
        let id = e.target.getAttribute('data-id');
        if(id==''){
            console.log("Date should not be empty");
            return false;
        }
        let dateele = document.getElementById("filterdate");
        let date = dateele.value;//('data-id');
        console.log()
       // Setajaxdata({ token: router.query.token,installment_id: id});
        axios.post("/api/installmentlist/status",{token: router.query.token,installment_id: id,date:date})
        .then(res=>{
            SetInstallments(res.data);
        }).catch(res=>{
            console.log("Error found in get list of installment");
        })

        
        
    }
    
    
    const thclass = "border-solid border-2 border-black-100 border-b dark:border-slate-100  font-black font-bold p-2 pl-5 pt-2 pb-3 text-black-400 dark:text-slate-400 text-left";
    const tdclass = "border-b border-slate-100 border-solid dark:border-slate-400 p-2 pl-6 text-black-500 dark:text-slate-400";
    const ftd = "border-b border-slate-100 dark:border-slate-400 p-0 pl-0 text-black-500 dark:text-slate-400";
    return (
    <>
    <div id='filterBox'>
        Date : <input type="text" id="filterdate"  placeholder="YYYY-mm-dd" place/>
        <button onClick={filterInstallment} id='FillterButton'>Filter Installment</button>
    </div>
    <h2>Installments List</h2>
    <div id='table'>
    <table className="border-collapse table-auto w-full text-sm" >
    <thead id='tableHead' >
      <tr>
        <th scope="col" className={thclass}>Check</th>
        <th scope="col" className={thclass}>Name</th>
        <th scope="col" className={thclass}>Amount</th>
        <th scope="col" className={thclass}>Date</th>
        <th scope="col"className={thclass} >Phone Number</th>
        <th scope="col"className={thclass} >Paid Status</th>
      </tr>
    </thead>
    <tbody id='tableBody'>
      {Installments.map(val=>( <tr key={val.id} className={(val.paidStatus)}>
        <th scope="row" className={ftd} id="tableRow">
            <input  id='checkBox' checked={(val.paidStatus)?"checked":""} data-id={val.id} onClick={changeStatus} type="checkbox" alt={'Click to update'} /> 
            
        </th>
        <td className={tdclass}>  <NavLink
            href={"/borrower/"+val.borrower.id}
            >{val.borrower.name}
            </NavLink></td>
        <td className={tdclass}>{val.installmentAmount}</td>
        <td className={tdclass}>{val.installmentDate}</td>
        <td className={tdclass}><a href={'tel:' + val.borrower.phone}>{val.borrower.phone}</a></td>
        <td className={tdclass}>{(val.paidStatus)?"Paid":"Unpaid"}</td>
      </tr>))}
    </tbody>
  </table>
  </div>
  </>)
}

export default InstallmentList