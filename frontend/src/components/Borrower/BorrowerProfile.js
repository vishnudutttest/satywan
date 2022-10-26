import { useEffect,useState } from "react";
import axios from '@/lib/axios'

const BorrowerProfile = (props)=>{
     const [Borrower,SetBorrower] = useState([]);
     useEffect(()=>{
          axios.get("/api/borrower/"+props.id)
          .then(res=>{
              SetBorrower(res.data);
          }).catch(res=>{
              console.log("Error found in get borrower list");
          })
     },[props.id]);
     return ("Profile page")
}

export default BorrowerProfile;