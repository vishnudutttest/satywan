import React from 'react'
import Head from 'next/head'
import AppLayout from '@/components/Layouts/AppLayout'
import BorrowerDetails from "@/components/Borrower/BorrowerDetails"
import InstallmentsDetails from "@/components/Borrower/InstallmentsDetails"
import { useEffect,useState } from "react";
import axios from '@/lib/axios'




const BorrowerProfile = (props)=>{
  const [Installments,SetInstallments] = useState([]);
  const [Borrower,SetBorrower] = useState([]);
  useEffect(()=>{ 
      // use effect hook - used for sideeffects like getting the data from api
      //axios 
      //GET PUT POST OPTION DELETE (HTTP methods)
        axios.get("/api/borrower/"+props.id)
        .then(res=>{
          SetInstallments(res.data.installments);
          SetBorrower(res.data.borrower);
        }).catch(res=>{
            console.log("Error found in get borrower list");
        })
   },[props.id]);

     return ( 
        
            
        
        <AppLayout>
        <Head>
            <title>Finance-Summary</title>
        </Head>
        <BorrowerDetails Borrower={Borrower} ></BorrowerDetails>
        <InstallmentsDetails Installments={Installments}></InstallmentsDetails>
               
               
                
                
      </AppLayout>
        
    ) 
}


export default BorrowerProfile;