import React, {useState} from 'react';
import styles from './PortfolioSection.module.scss'
import photo1 from '../../images/Special/special1.jpg'
import photo2 from '../../images/Fasad/fasad2.jpg'
import photo3 from '../../images/Window/window2.jpg'
import photo4 from '../../images/Walls/wall3.jpg'
import {useNavigate} from "react-router-dom";
import {PORTFOLIO} from '../../util/const'
const PortfolioSection = () => {
    const navigate = useNavigate()
    const handleClick = () => navigate(PORTFOLIO)
    const photos = [photo2, photo3, photo4, photo1]
    const [isImageClicked, setIsImageClicked] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (index) => {
        setIsImageClicked(true);
        setSelectedImage(index);
    };

    const handleCloseImage = () => {
        setIsImageClicked(false);
        setSelectedImage(null);
    };
    return (
        <section className={styles.bg}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.left_side}>
                        <h2>Портфолио</h2>
                        <p className={styles.subtitle}>В секции портфолио мы гордимся представить наши лучшие работы, каждая из которых — это уникальное творение, наполненное энергией, креативностью и стремлением к совершенству.</p>
                        <button onClick={handleClick} className={styles.btn}>
                            Проекты
                        </button>
                    </div>
                    <div className={styles.right_side}>
                        <div className={styles.images_wrapper}>
                            {photos.map((item, index) =>
                                <div className={styles.image_wrapper} key={index}>
                                    <img
                                        className={`${styles.image} ${isImageClicked && selectedImage === index && styles.enlargedImage}`}
                                        onClick={() => handleImageClick(index)}
                                        src={item}
                                        alt={index}/>
                                </div>

                            )}
                        </div>
                    </div>
                </div>
            </div>
            {isImageClicked && (
                <div className={styles.overlay} onClick={handleCloseImage}>
                    <img
                        className={styles.enlargedImage}
                        src={photos[selectedImage]}
                        alt={`Enlarged Slide ${selectedImage}`}
                    />
                </div>
            )}
        </section>
    );
};

export default PortfolioSection;