import { useState,useEffect } from 'react'
import AppLayout from '@/components/Layouts/AppLayout'
//import BorrowerList from "@components/Borrower/BorrowerList"
import BorrowerList from "@/components/Borrower/borrowerlist"
import Head from 'next/head'
import { useRouter } from 'next/router'
import axios from '@/lib/axios'
//import $ from "jquery";

const Borrower = () => {
    //console.log($)
    const elenames = ['name1','email','phone','address','AmountGiven','no_of_installment','intallmentType','installmentAmount','installmentStartDate']
   //console.log(elenames)
    const router = useRouter();
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

    


    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Borrower
                </h2>
            }>

            <Head>
                <title>Finace - Borrower</title>
            </Head>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                          
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
                          </div>
                          <BorrowerList ></BorrowerList>
                        </div>
                        
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Borrower;