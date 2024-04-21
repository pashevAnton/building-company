import React from 'react';
import styles from './Header.module.scss'



const Header = () => {
    return (
        <section className={styles.backcolor}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.left_side_header}>
                        <div>
                            <h1>О компании</h1>
                            <p>Строительная компания "Гармония" - это команда профессионалов, объединенных общей целью:
                                создавать красивые, функциональные и надежные строения, которые будут служить вам долгие
                                годы. Наша компания с гордостью предоставляет широкий спектр строительных услуг, которые
                                делают нас незаменимыми партнерами в реализации ваших строительных проектов.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Header;