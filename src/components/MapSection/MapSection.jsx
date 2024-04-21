import React, {useEffect, useRef} from 'react';
import styles from './MapSection.module.scss';
import {YMaps, Map, Placemark, FullscreenControl, GeolocationControl} from '@pbe/react-yandex-maps';

const MapSection = () => {

    const mapRef = useRef(null);

    useEffect(() => {
        const map = mapRef.current;

        const handleMapScroll = (e) => {
            if (e.get('type') === 'scroll') {
                e.preventDefault();
            }
        };

        if (map) {
            map.behaviors.disable('scrollZoom');
            map.events.add('wheel', handleMapScroll);

            return () => {
                map.events.remove('wheel', handleMapScroll);
            };
        }
    }, []);

    return (
        <section className={styles.bg}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <h2>Как к нам добраться?</h2>
                    <YMaps>
                        <div className={styles.map}>
                            <Map
                                width="100%"
                                height="100%"
                                defaultState={{
                                    center: [55.747713, 37.583463],
                                    zoom: 14,
                                    controls: [],
                                }}
                            >
                                <Placemark defaultGeometry={[55.747713, 37.583463]} />
                                <FullscreenControl/>
                                <GeolocationControl options={{ float: "left" }} />
                            </Map>
                        </div>
                    </YMaps>
                </div>
            </div>
        </section>
    );
};

export default MapSection;