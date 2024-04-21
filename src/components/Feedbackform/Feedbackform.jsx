import React from 'react';
import styles from './Feedbackform.module.scss'
import Form from './Form/Form'
const Feedbackform = () => {
    

    return (
        <section id="form" className={styles.bg}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <h2>Свяжитесь с нами</h2>
                    <Form/>
                </div>
            </div>
        </section>
    );
};

export default Feedbackform;