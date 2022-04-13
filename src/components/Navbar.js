import styles from "./Navbar.module.css";
import Container from "./Container";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";


function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link className={styles.list} to="/">
                    <img className={styles.logo} src={logo} alt="img" />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.iten}>
                        <Link to="/projeto">Projetos</Link>
                    </li>
                    <li className={styles.iten}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.iten}>
                        <a href="https://drive.google.com/file/d/1JxxAr-Rs_5ou-Bm4PqOuq_XmkgwVAptS/view?usp=sharing">Curriculo</a>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar;