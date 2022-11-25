
import { useEffect,useState } from "react";
import axios from '@/lib/axios'

const BorrowerDetails = (props) => {

   
  return (
    <div className="max-w-7xl mx-auto  lg:px-8"> 
    <h2>Profile Summary</h2>   
    <div className=" bg-white border-b border-gray-200">
        <div id="borrower-details">
         <table >
          <tbody id="bTable">
            <tr id="bName">
                <td>Name</td>
                <td id="bdtail1">{props.Borrower?.name} {console.log("I Am redndering")}</td>
            </tr>
            <tr id="bEmail">
                <td>Email</td>
                <td id="bdtail">{props.Borrower?.email}</td>
            </tr>
            <tr id="bPhone">
                <td>Contact No.</td>
                <td id="bdtail2">{props.Borrower?.phone}</td>
            </tr>
            <tr id="bAddress">
                <td>Address</td>
                <td id="bdtail">{props.Borrower?.address}</td>
            </tr>
            <tr id="bAmount">
                <td>Amount Barrowed</td>
                <td id="bdtail">{props.Borrower?.AmountGiven}</td>
            </tr>
            <tr id="bPaid">
                <td>Paid </td>
                <td id="bdtail">{props.Borrower?.installmentAmount}</td>
            </tr>
            <tr id="bBalance">
                <td>Balance </td>
                <td id="bdtail">{props.Borrower?.AmountGiven}</td>
            </tr>
          </tbody>
         </table>       
        </div> 
        </div>
    </div>
  )
}

export default BorrowerDetails