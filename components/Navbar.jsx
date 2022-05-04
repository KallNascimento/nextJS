import Link from "next/link"
import styles from '../styles/Navbar.module.css'

const Navbar = (props) => {
    return (
        <ul className={styles.ul}>
            <li className={styles.link}>
                <Link  exact href="/"><a>Home</a></Link>
            </li>
            <li className={styles.link}>
                <Link href="/contact"><a>Contact</a></Link>
            </li>
            <li className={styles.link}>
                <Link href="/users"><a>Users</a></Link>
            </li>
            <li className={styles.link}>
                <Link href="/about"><a>About Us</a></Link>
            </li>
        </ul>
    )
}

export default Navbar