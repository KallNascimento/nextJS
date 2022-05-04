import styles from '../styles/Footer.module.css'
const Footer = (props) =>{

    let today = new Date();
    let currentYear = today.getFullYear();

return (
    <footer className={styles.footer}>
        <span>
          Kauê Nascimento & Carina  &copy; {currentYear}
        </span>
    </footer>
)
}

export default Footer