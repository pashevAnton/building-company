import React from 'react';
import styles from './Footer.module.scss'
import {PRIVACY} from '../../util/const'
import logo from '../../images/logo4.svg'
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <footer className={styles.bg}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.footerContent}>
                        <div className={styles.footerLogo}>
                            <a href="/">
                                <img src={logo} alt="Логотип"/>
                            </a>
                        </div>
                        <div className={styles.footerContact}>
                            <p>Адрес: Ул. Арбат, д. 54</p>
                            <p>sk-harmony@mail.ru</p>
                            <p>+7 (918) 663-72-72</p>
                        </div>

                    </div>
                    <div className={styles.footerBottom}>
                        <p>&copy; {new Date().getFullYear()} Гармония. Все права защищены.</p>
                        <NavLink className={styles.links} to={PRIVACY}>Политика конфиденциальности и защиты информации</NavLink>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;