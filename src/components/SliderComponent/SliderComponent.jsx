import React from 'react';
import styles from './SliderComponent.module.scss'
import photo1 from '../../images/Monolit/mono1.jpg'
import photo2 from '../../images/Monolit/mono2.jpg'
import photo4 from '../../images/Window/window1.jpg'
import photo5 from '../../images/Window/window2.jpg'
import photo6 from '../../images/Special/special1.jpg'
import photo7 from '../../images/Special/special2.jpg'
import photo8 from '../../images/Walls/wall1.jpg'
import photo9 from '../../images/Walls/wall2.jpg'
import photo10 from '../../images/Walls/wall3.jpg'
import photo11 from '../../images/Engineer/engineer1.jpg'
import photo12 from '../../images/Engineer/engineer2.jpg'
import photo13 from '../../images/Engineer/engineer3.jpg'
import photo14 from '../../images/Engineer/engineer4.jpg'
import photo15 from '../../images/Fasad/fasad1.jpg'
import photo16 from '../../images/Fasad/fasad2.jpg'
import photo17 from '../../images/Roof/roof1.jpg'
import photo18 from '../../images/Roof/roof2.jpg'
import photo19 from '../../images/Dirt/dirt1.jpg'
import photo20 from '../../images/Dirt/dirt2.jpg'
import photo21 from '../../images/Basa/basa1.jpg'
import photo22 from '../../images/Basa/basa2.jpg'
import photo23 from '../../images/Basa/basa3.jpg'
import photo24 from '../../images/Basa/basa4.jpg'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderComponent = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const images = [photo1, photo2, photo4, photo5, photo6, photo7, photo8, photo9, photo10, photo11, photo12, photo13, photo14, photo15, photo16, photo17, photo18, photo19, photo20, photo21, photo22, photo23, photo24]

    return (
        <div>
            <style>
                {`.slick-prev:before, 
                  .slick-next:before {
                    font-size: 40px;
                  }
                  .slick-prev {
                    left: -44px;
                    top: 47%;
                  }
          
                  .slick-next {
                    right: -24px;
                    top: 47%;
                  }
                `}
            </style>
            <Slider {...settings}>
                {images.map((item, index) =>
                    <div className={styles.slide} key={index}>
                        <img
                            className={styles.image}
                            src={item}
                            alt={index}
                        />
                    </div>
                )}
            </Slider>
        </div>
    );
};

export default SliderComponent;