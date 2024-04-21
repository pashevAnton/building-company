import React, {useEffect} from 'react';
import Header from "../../components/Header/Header";
import PortfolioSection from "../../components/PortfolioSection/PortfolioSection";
import PriceSection from "../../components/PriceSection/PriceSection";
import BelieveSection from '../../components/BelieveSection/BelieveSection'
import MapSection from '../../components/MapSection/MapSection'
import Feedbackform from '../../components/Feedbackform/Feedbackform'
import Footer from '../../components/Footer/Footer'

const MainPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);

        return () => {
            window.scrollTo(0, 0);
        };
    }, []);

    return (
        <div>
            <Header/>
            <PortfolioSection/>
            <PriceSection/>
            <BelieveSection/>
            <MapSection/>
            <Feedbackform/>
            <Footer/>
        </div>

    );
};

export default MainPage;