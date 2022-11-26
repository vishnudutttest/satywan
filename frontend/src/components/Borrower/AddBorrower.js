import { useState,useEffect } from 'react'
import axios from '@/lib/axios'
import { useRouter } from 'next/router'


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

    return (<> <h2 id='addNewBorrow'>Add New Borrower </h2>
    <div>
          <form id='addnew'>
              <table>
                  <tbody>
                  <tr id='form1'>
                      <td>Name</td>
                      <td><input type="text" id='name1' name='name1' value={formdata.name1} onChange={handleChange}/></td>
                  </tr>
                  <tr>
                      <td>Email</td>
                      <td><input type="text" id='email1' name='email' value={formdata.email}   onChange={handleChange} /></td>
                  </tr>
                  <tr id='form3'>
                      <td>Contact No.</td>
                      <td><input type="text" id='phone' name='phone' value={formdata.phone}  onChange={handleChange} /></td>
                  </tr>
                  <tr id='form4'>
                      <td>Address</td>
                      <td><input type="text" id='address' name='address' value={formdata.address} onChange={handleChange} /></td>
                  </tr>
                  <tr>
                      <td>AmountGiven</td>
                      <td><input type="text" id='AmountGiven' name='AmountGiven' value={formdata.AmountGiven} onChange={handleChange} /></td>
                  </tr>
                  <tr>
                      <td>No. of Installment</td>
                      <td><input type="text" id='no_of_installment' name='no_of_installment' value={formdata.no_of_installment} onChange={handleChange} /></td>
                  </tr>
                  <tr id='form5'>
                      <td>Intallment Type</td>
                      <td><select id='intallmentType' name='intallmentType' onChange={handleChange} >
                          <option value={''}>  --Select--</option>
                          <option value={'daily'}> Daily</option>
                          <option value={'monthly'}>Monthly</option>
                          </select></td>
                  </tr>
                  <tr id='form6'>
                      <td>Installment Amount</td>
                      <td><input type="text" id='installmentAmount' name='installmentAmount' value={formdata.installmentAmount} onChange={handleChange} /></td>
                  </tr>
                  <tr>
                      <td >Installment Start Date</td>
                      <td><input type="text" id='installmentStartDate' name='installmentStartDate' value={formdata.installmentStartDate} onChange={handleChange} placeholder="YYYY-MM-DD" /></td>
                  </tr>
                  <tr>
                      <td colSpan={2}><input type={'button'} onClick={addBrrower} id='addButton'  value="Add New" /></td>
                  
                  </tr>
                  </tbody>
              </table>
          </form>
    </div></>)
}

export default AddBrrower;