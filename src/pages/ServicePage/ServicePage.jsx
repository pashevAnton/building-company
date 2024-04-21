import React, {useState, useEffect} from 'react';
import styles from './ServicePage.module.scss'
import { useSelector } from 'react-redux';
import Footer from '../../components/Footer/Footer'
import Modal from '../../components/Modal/Modal'
import Form from '../../components/Feedbackform/Form/Form'
import useOutside from '../../hooks/useOutsideAlerter'

const ServicePage = () => {
    const service = useSelector((state) => state.services.currentService);

    const [storedObject, setStoredObject] = useState(JSON.parse(localStorage.getItem('serviceStorage')));

    const {ref, isShow, setIsShow} = useOutside(false)

    const [isImageClicked, setIsImageClicked] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = () => {
        setIsImageClicked(true);
        setSelectedImage(storedObject.img);
    };

    const handleCloseImage = () => {
        setIsImageClicked(false);
        setSelectedImage(null);
    };

    const modalContent = (
        <Form/>
    );

    useEffect(() => {
        window.scrollTo(0, 0);

        return () => {
            window.scrollTo(0, 0);
        };
    }, []);

    return (
        <section className={styles.bg}>
            <div className={styles.container}>
                <h2>{storedObject.title}</h2>
                <div className={styles.wrapper}>
                    <div className={styles.image}>
                    <img
                        className={`${styles.image} ${
                            isImageClicked && selectedImage === styles.enlargedImage
                        }`}
                        onClick={handleImageClick}
                        src={storedObject.img}
                        alt={storedObject.img}/>
                    </div>
                    <div className={styles.description}>
                        <h4>Описание</h4>
                        <p>{storedObject.description}</p>
                        <div>{storedObject.price}</div>
                        <button onClick={() => setIsShow(!isShow)}>Оставить заявку</button>
                    </div>
                </div>
            </div>
            <Modal isShow={isShow} refer={ref} title="Свяжитесь с нами" content={modalContent} />
            <Footer/>
            {isImageClicked && (
                <div className={styles.overlay} onClick={handleCloseImage}>
                    <img
                        className={styles.enlargedImage}
                        src={storedObject.img}
                        alt={`Enlarged Slide ${selectedImage}`}
                    />
                </div>
            )}
        </section>
    );
};

export default ServicePage;