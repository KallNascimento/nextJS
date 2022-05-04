import Link from "next/link";
import { useRouter } from "next/router";


const Profile = () => {
const router = useRouter()

const userId = router.query.profileid

    return (
        <div>
            <h1>
               My Profile Page of {userId}
             </h1>
             <p>Hi, I like go to the mall and ...<Link href={`/users/${userId}/description/2`}><a>Read more</a></Link></p>
        </div>
    )
}

export default Profile;