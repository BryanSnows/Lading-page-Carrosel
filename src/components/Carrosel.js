import { Carousel } from 'react-bootstrap';
import jp from '../img/slide2.jpg';
import pizza from '../img/logo.png';
import ja from '../img/slide3.jpg';
import styles from "../components/Carrosel.module.css";


function Carrosel() {

    return (
        <div class={styles.car}>
            <Carousel>
                <Carousel.Item className={styles.iten}>
                    <img className={styles.img} src={pizza} alt="First slide" />
                    <Carousel.Caption className={styles.text}>
                        <h3>Sejam Bem-Vindos</h3>
                        <p><strong>Login page do Bryan não pode faltar pizza e muita diverssão.</strong></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={jp}  className={styles.img} alt="First slide" />
                    <Carousel.Caption className={styles.text}>
                        <h3>Mundo de Bryan</h3>
                        <p>Aqui você pode ver minha caminhas como desenvolvedor e meus projetos.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={ja}  className={styles.img} alt="First slide" />
                    <Carousel.Caption className={styles.text}>
                        <h3>Gostou do que viu ?</h3>
                        <p>Acesse meu curriculo e me conheça mais profissionalmente.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>




    )



}

export default Carrosel;



