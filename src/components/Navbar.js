import styles from "./Navbar.module.css";
import Container from "./Container";
import { Link } from "react-router-dom";


function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                
                <ul className={styles.list}>
                    <li className={styles.iten}>
                        <Link to="/projeto">Projetos</Link>
                    </li>
                
                
                    <li className={styles.iten}>
                        <Link to="/">Home</Link>
                    </li>
              
               
                    <li className={styles.iten}>
                        <Link to="/curriculo">Curriculo</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar;