import { useState,useEffect } from 'react'
import axios from '@/lib/axios'
import { useRouter } from 'next/router'
import NavLink from '@/components/NavLink'

const AddBrrower = ()=>{
    const elenames = ['name1','email','phone','address','AmountGiven','no_of_installment','intallmentType','installmentAmount','installmentStartDate']
    const [formdata,Setformdata] = useState({name1:""});
    const router = useRouter();
    
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

    return (<><button className='rounded-full p-3 bg-[#1e161600]'>Add New Borrower</button>
    <div>
          <form id='addnew'>
              <table>
                  <tbody>
                  <tr>
                      <td>name</td>
                      <td><input type="text" id='name1' name='name1' value={formdata.name1} onChange={handleChange}/></td>
                  </tr>
                  <tr>
                      <td>email</td>
                      <td><input type="text" id='email' name='email' value={formdata.email}   onChange={handleChange} /></td>
                  </tr>
                  <tr>
                      <td>phone</td>
                      <td><input type="text" id='phone' name='phone' value={formdata.phone}  onChange={handleChange} /></td>
                  </tr>
                  <tr>
                      <td>address</td>
                      <td><input type="text" id='address' name='address' value={formdata.address} onChange={handleChange} /></td>
                  </tr>
                  <tr>
                      <td>AmountGiven</td>
                      <td><input type="text" id='AmountGiven' name='AmountGiven' value={formdata.AmountGiven} onChange={handleChange} /></td>
                  </tr>
                  <tr>
                      <td>no of installment</td>
                      <td><input type="text" id='no_of_installment' name='no_of_installment' value={formdata.no_of_installment} onChange={handleChange} /></td>
                  </tr>
                  <tr>
                      <td>intallmentType</td>
                      <td><select id='intallmentType' name='intallmentType' onChange={handleChange} >
                          <option value={''}>--Select Installment Type</option>
                          <option value={'daily'}> Daily</option>
                          <option value={'monthly'}>Monthly</option>
                          </select></td>
                  </tr>
                  <tr>
                      <td>installmentAmount</td>
                      <td><input type="text" id='installmentAmount' name='installmentAmount' value={formdata.installmentAmount} onChange={handleChange} /></td>
                  </tr>
                  <tr>
                      <td>installmentStartDate</td>
                      <td><input type="text" id='installmentStartDate' name='installmentStartDate' value={formdata.installmentStartDate} onChange={handleChange} placeholder="YYYY-MM-DD" /></td>
                  </tr>
                  <tr>
                      <td colSpan={2}><input type={'button'} onClick={addBrrower} className="rounded-full p-3 bg-[#7B7471C4] hover:rounded-lg" value="Add New" /></td>
                  
                  </tr>
                  </tbody>
              </table>
          </form>
    </div></>)
}

export default AddBrrower;