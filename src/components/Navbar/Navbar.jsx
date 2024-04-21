import React, {useState} from 'react';
import logo from '../../images/logo3.svg'
import styles from './Navbar.module.scss'
import Menu from '../Menu/Menu'
import {NavLink} from "react-router-dom";
import {MAIN_PAGE, PORTFOLIO, SERVICES} from '../../util/const'
import useOutside from '../../hooks/useOutsideAlerter'
import Form from '../../components/Feedbackform/Form/Form'
import Modal from '../Modal/Modal'
const Navbar = () => {
    const [menuActive, setMenuActive] = useState(false)
    const items = [
        {value: 'Главная страница', href: '/'},
        {value: 'Портфолио', href: '/portfolio'},
        {value: 'Услуги', href: '/services'},
    ]


    const {ref, isShow, setIsShow} = useOutside(false)

    const modalContent = (
        <Form/>
    );

    return (
        <header className={styles.wrapper}>
            <div className={styles.container}>
            <div className={styles.image_wrapper}>
                <a href="/">
                    <img src={logo} alt="logo3.svg"/>
                </a>
            </div>
            <div className={styles.right_side_header}>
                <nav>
                    <ul>
                        <li><NavLink className={styles.links} to={MAIN_PAGE}>Главная страница</NavLink></li>
                        <li><NavLink className={styles.links} to={PORTFOLIO}>Портфолио</NavLink></li>
                        <li><NavLink className={`${styles.links} ${styles.lastLink}`} to={SERVICES}>Услуги</NavLink></li>
                    </ul>
                </nav>
            </div>
            <div className={styles.wrapper_contacts}>
                <a className={`${styles.links} ${styles.lastLink}`} href="mailto:sk-harmony@mail.ru">sk-harmony@mail.ru</a>
                <a className={`${styles.links} ${styles.lastLink}`} href="tel:+79186637272">+7 (918) 663-72-72</a>
            </div>
            <button onClick={() => setIsShow(!isShow)} className={styles.btn}>Нужен проект?</button>
            <nav>
                <div className={styles.burgerBtn} onClick={() => setMenuActive(!menuActive)}>
                    <input className={styles.menu_toggle} type="checkbox"/>
                    <label className={styles.menu_btn} htmlFor="menu_toggle">
                        <span/>
                    </label>
                </div>
                <Menu active={menuActive} setActive={setMenuActive} items={items}/>
            </nav>
            </div>
            <Modal isShow={isShow} refer={ref} title="Свяжитесь с нами" content={modalContent} />
        </header>
    );
};

export default Navbar;