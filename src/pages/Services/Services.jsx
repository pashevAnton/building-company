import React from 'react';
import styles from './Services.module.scss'
import photo1 from '../../images/Basa/basa1.jpg'
import photo2 from '../../images/Dirt/dirt1.jpg'
import photo3 from '../../images/Roof/roof2.jpg'
import photo4 from '../../images/Fasad/fasad1.jpg'
import photo5 from '../../images/Engineer/engineer4.jpg'
import photo6 from '../../images/services/service6.jpg'
import photo7 from '../../images/Walls/wall2.jpg'
import photo8 from '../../images/Special/special2.jpg'
import photo9 from '../../images/Monolit/mono1.jpg'
import photo10 from '../../images/Window/window1.jpg'
import {useDispatch} from "react-redux"
import {setCurrentService} from "../../redux/services/reducer"
import {useNavigate} from "react-router-dom";
import {SERVICE} from '../../util/const'
import Footer from '../../components/Footer/Footer'

const pricingData = [
    {
        title: 'Фундамент',
        img: photo1,
        description: 'Мы заботимся о прочности и надежности основания вашего строения. Наша команда профессионалов осуществляет строительство фундаментов с применением современных технологий, гарантируя стабильность вашего дома.'
    },
    {
        title: 'Земляные работы',
        img: photo2,
        description: 'Наша компания предоставляет полный спектр земельных работ, включая выемку, планировку участка, подготовку к строительству. Надежные машины и опытные специалисты обеспечат эффективное выполнение всех необходимых работ.'
    },
    {
        title: 'Кровля',
        img: photo3,
        description: 'Наша компания занимается проектированием и монтажом кровельных систем различных типов. Мы используем высококачественные материалы, гарантируя надежную защиту вашего дома от атмосферных воздействий.'
    },
    {
        title: 'Фасад',
        img: photo4,
        description: 'Наши специалисты гарантируют высококачественные работы по облицовке и утеплению фасадов зданий. Мы используем современные материалы, обеспечивая долговечность и привлекательный внешний вид вашего дома или офиса.'
    },
    {
        title: 'Инженерные сети',
        img: photo5,
        description: 'Наша компания предоставляет услуги по проектированию и монтажу инженерных сетей: от систем отопления и вентиляции до водоснабжения и канализации. Мы обеспечим надежную работу всех инженерных коммуникаций.'
    },
    {
        title: 'Благоустройство',
        img: photo6,
        description: 'Мы заботимся о создании уютного и красивого окружения вокруг вашего дома. Наши услуги включают благоустройство приусадебных территорий, озеленение, установку элементов ландшафтного дизайна.'
    },
    {
        title: 'Устройство кладки стен',
        img: photo7,
        description: 'Профессиональные мастера выполнят устройство кладки стен с использованием современных строительных материалов. Мы гарантируем прочность и эстетичность каждого слоя кладки.'
    },
    {
        title: 'Специальные работы',
        img: photo8,
        description: 'Мы осуществляем различные специальные строительные работы, такие как демонтаж, укрепление конструкций, антикоррозийная обработка, гарантируя безопасность и долговечность вашего объекта.'
    },
    {
        title: 'Монолитные работы',
        img: photo9,
        description: 'Наши специалисты осуществляют монолитные работы с применением передовых технологий. Мы обеспечим высокую прочность и устойчивость вашего строения.'
    },
    {
        title: 'Оконные конструкции',
        img: photo10,
        description: 'Современные и энергоэффективные оконные решения помогут создать комфорт в вашем доме. Мы предлагаем широкий выбор оконных конструкций различных форм и размеров, отвечающих всем требованиям стиля и функциональности.'
    },
];



const Services = () => {
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
                    <div className={styles.pricingCards}>
                        {pricingData.map((item, index) => (
                            <div onClick={() => handleClick(item)} key={index} className={styles.pricingCard}>
                                <h4>{item.title}</h4>
                                <div className={styles.imageWrapper}>
                                    <img src={item.img} alt={item.img}/>
                                </div>
                                <button onClick={() => handleClick(item)} >Подробнее</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer/>
        </section>
    );
};

export default Services;