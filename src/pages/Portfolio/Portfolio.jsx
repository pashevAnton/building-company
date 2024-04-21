import React, {useEffect} from 'react';
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import styles from './Portfolio.module.scss'
import Footer from '../../components/Footer/Footer'
const Portfolio = () => {

    useEffect(() => {
        window.scrollTo(0, 0);

        return () => {
            window.scrollTo(0, 0);
        };
    }, []);

    return (
        <section className={styles.bg}>
            <div className={styles.container}>
                <SliderComponent/>
            </div>
            <Footer/>
        </section>
    );
};

export default Portfolio;