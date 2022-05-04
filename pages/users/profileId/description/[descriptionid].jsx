import Link from "next/link";
import { useRouter } from "next/router";


const Description = () => {
const router = useRouter()
const userDescription = router.query.description
const userId = router.query.profileid

    return (
        <div>
          
             <p>Hi, I like go to the mall and I prefer dogs than cats</p>
        </div>
    )
}

export default Description;