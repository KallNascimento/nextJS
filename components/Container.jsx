import Footer from "./Footer";
import Navbar from "./Navbar";
import styles from '../styles/Container.module.css'

const Container = ({ children }) => {
    return (<>
        <Navbar />
        <section className="container">
            {children}
        </section>
        <Footer/>
    </>)
}
export default Container