import { Carousel } from 'react-bootstrap';
import jp from '../img/fund.jpeg'
import styles from "../components/Carrosel.module.css";


function Carrosel() {

    return (
        <div class={styles.car}>
            <Carousel>
                <Carousel.Item>
                    <img class={styles.img} src={jp} alt="First slide" />
                    <Carousel.Caption className={styles.text}>
                        <h3>vain</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img class={styles.img} src={jp} alt="First slide" />

                    <Carousel.Caption className={styles.text}>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img class={styles.img} src={jp} alt="First slide" />

                    <Carousel.Caption className={styles.text}>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>




    )



}

export default Carrosel;



