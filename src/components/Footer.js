import {FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaDiscord} from "react-icons/fa";
import styles from "./Footer.module.css";
function Footer() {
    return(
        <footer className={styles.footer}>
            <ul className={styles.ul}>
                <li>
                    <a className={styles.li} href="https://www.facebook.com/bryan.nevesp/">
                        <FaFacebook />
                    </a>
                </li>
                <li>
                    <a className={styles.li} href="https://www.instagram.com/bryan.snows/">
                        <FaInstagram />
                    </a>
                </li>
                <li>
                    <a className={styles.li} href="https://www.linkedin.com/in/bryannevespinto/">
                        <FaLinkedin />
                    </a>
                </li>
                <li>
                    <a className={styles.li} href="https://github.com/BryanSnows">
                        <FaGithub />
                    </a>
                </li>
                <li>
                    <a className={styles.li} href="https://discord.com/channels/@me/">
                        <FaDiscord />
                    </a>
                </li>
                
            </ul>
            <p className={styles.p}><span className={styles.span}>BRYAN</span>&copy;2022</p>
        </footer>
    )
}
export default Footer