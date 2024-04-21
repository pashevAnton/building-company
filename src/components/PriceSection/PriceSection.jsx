import React from 'react';
import styles from "./PriceSection.module.scss";
import photo1 from '../../images/Dirt/dirt2.jpg'
import photo2 from '../../images/Basa/basa3.jpg'
import photo3 from '../../images/Monolit/mono2.jpg'
import {useDispatch} from "react-redux"
import {setCurrentService} from "../../redux/services/reducer"
import {useNavigate} from "react-router-dom";
import {SERVICE} from '../../util/const'

const pricingData = [
    {
        title: 'Земляные работы',
        img: photo1,
        description: 'Наша компания предоставляет полный спектр земельных работ, включая выемку, планировку участка, подготовку к строительству. Надежные машины и опытные специалисты обеспечат эффективное выполнение всех необходимых работ.'
    },
    {
        title: 'Фундамент',
        img: photo2,
        description: 'Мы заботимся о прочности и надежности основания вашего строения. Наша команда профессионалов осуществляет строительство фундаментов с применением современных технологий, гарантируя стабильность вашего дома.'
    },
    {
        title: 'Монолитные работы',
        img: photo3,
        description: 'Наши специалисты осуществляют монолитные работы с применением передовых технологий. Мы обеспечим высокую прочность и устойчивость вашего строения.'
    },
];
const PriceSection = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleClick = (item) => {
        dispatch(setCurrentService(item))
        const jsonString = JSON.stringify(item);
        localStorage.setItem('serviceStorage', jsonString);
        navigate(SERVICE)
    }

    return (
        <section className={styles.bg}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <h2>Услуги</h2>
                    <div className={styles.pricingCards}>
                        {pricingData.map((item, index) => (
                            <div onClick={() => handleClick(item)} key={index} className={styles.pricingCard}>
                                <h3>{item.title}</h3>
                                <div className={styles.imageWrapper}>
                                    <img src={item.img} alt={item.img}/>
                                </div>
                                <button>Подробнее</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PriceSection;