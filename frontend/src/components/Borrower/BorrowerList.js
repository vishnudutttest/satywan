import { useState,useEffect } from 'react'
import axios from '@/lib/axios'
import { useRouter } from 'next/router'
import NavLink from '@/components/NavLink'




const BorrowerList = (props) => {
    
    const router = useRouter();
    const [ajaxdata,Setajaxdata] = useState({ token: router.query.token,borroweradded:props.borroweradded});
    const [Borrowers,SetBorrowers] = useState([]);

    useEffect(() => {
        axios.post("/api/borrower",ajaxdata)

        .then(res=>{
            SetBorrowers(res.data);
            console.log(res.data);
        }).catch(res=>{
            console.log("Error found in get borrower list");
        })
    },[ajaxdata]);

    const [formdata,Setformdata] = useState({name1:""});

    
    
    const addBrrower = (e)=>{
        let ajaxdata = {token:router.query.token}
       // console.log(formdata)
        elenames.forEach((elename)=>{
            var val = document.getElementById(elename).value;
            console.log(val)
            if(val==""){
                //document.getElementById(elename).focus();
                document.getElementById(elename).classList.add("border-2");
                document.getElementById(elename).classList.add("border-rose-600");
               return false;
            }else{
                document.getElementById(elename).classList.remove("border-2");
                document.getElementById(elename).classList.remove("border-rose-600");
            }
        })
        ajaxdata = {...ajaxdata,...formdata}
        axios.post("/api/addnew-brrower",ajaxdata)
        .then(res=>{
            console.log(res.status)
            if(res.status==200){
                alert("Added Successfully");
                router.push('/borrower')
            }
            //SetBorrowers(res.data);
        }).catch(error => {
            if (error.response.status=422) {
                alert(error.response.data.message)
                console.log(error.response.data.errors);
                //error.response.data.errors.forEach(item => {console.log(item)})
            }
          });
    }

    const handleChange = (e)=>{
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        Setformdata({ 
            ...formdata,
                [name]: value           
      });
    }
    
    const thclass = "border-solid border-2 border-black-100 border-b dark:border-slate-100  font-black font-bold p-3 pl-5 pt-3 pb-3 text-black-400 dark:text-slate-400 text-left";
    const tdclass = "border-b border-slate-100 border-solid dark:border-slate-700 p-2 pl-8 text-black-500 dark:text-slate-400";
    const ftd = "border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-black-500 dark:text-slate-400";

    return (
    <>    
    
    <h2 className='p-8 inline-block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200'>Borrower List</h2>
    <NavLink id='FillterButton'
     href="/addborrower" 
     >Add New Borrower</NavLink>
    
    <div id='table'>
    <table className="border-collapse table-auto w-full text-sm"  >
    <thead id='tableHead'>
      <tr>
        <th scope="col" className={thclass}>
           Name
        </th>
        <th scope="col" className={thclass}>Email</th>
        <th scope="col" className={thclass}>Phone</th>
        <th scope="col"className={thclass} >Address</th>
        <th scope="col"className={thclass} >AmountGiven</th>
        <th scope="col"className={thclass} >Installment Start Date</th>
      </tr>
    </thead>
    <tbody className=''>
      {Borrowers.map(val=>( <tr key={val.id} >
       
        <td className={tdclass}><NavLink
            href={"/borrower/"+val.id }
            >{val.name}
            </NavLink>
        </td>
        <td className={tdclass}>{val.email}</td>
        <td className={tdclass}>{val.phone}</td>
        <td className={tdclass}>{val.address}</td>
        <td className={tdclass}>{val.AmountGiven}</td>
        <td className={tdclass}>{val.installmentStartDate}</td>
      </tr>))}
    </tbody>
  </table>
  </div>
  </>
    )
}

export default BorrowerList;