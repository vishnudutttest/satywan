import BorrowerProfile from "@/components/Borrower/BorrowerProfile"
import { useRouter } from 'next/router'

const Borrowerprofile =()=>{
    const router = useRouter()
    const { bid } = router.query

    return (<>
  
    <div>
        <BorrowerProfile id={bid}></BorrowerProfile>

  </div>
    </>)
}

export default Borrowerprofile;