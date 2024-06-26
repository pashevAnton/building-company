import React from 'react';
import styles from './BelieveSection.module.scss'
const BelieveSection = () => {
    return (
        <section className={styles.bg}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <h2>Почему нам доверяют?</h2>
                    <div className={styles.reasons}>
                        <div className={styles.card}>
                            <h4>Профессионализм и опыт</h4>
                            <p>Наша команда состоит из опытных специалистов, обладающих богатым опытом в сфере строительства. Мы знаем, как создавать проекты, которые соответствуют самым высоким стандартам качества.</p>
                        </div>
                        <div className={styles.card}>
                            <h4>Индивидуальный подход</h4>
                            <p>Мы понимаем, что каждый проект уникален. Мы работаем с вами, чтобы понять ваши потребности и цели, и разрабатываем решения, которые идеально соответствуют вашим ожиданиям.</p>
                        </div>
                        <div className={styles.card}>
                            <h4>Высокое качество</h4>
                            <p>Мы используем только лучшие материалы и передовые технологии, чтобы обеспечить долговечность и надежность ваших строительных объектов.</p>
                        </div>
                        <div className={styles.card}>
                            <h4>Соблюдение сроков</h4>
                            <p>Мы строго соблюдаем сроки выполнения работ, чтобы вы могли вовремя воспользоваться вашим новым объектом.</p>
                        </div>
                        <div className={styles.card}>
                            <h4>Комплексный подход</h4>
                            <p>Мы ценим доверие наших клиентов и всегда работаем честно, предоставляя прозрачную информацию о проекте и бюджете.</p>
                        </div>
                        <div className={styles.card}>
                            <h4>Прозрачность и честность</h4>
                            <p>Мы ценим доверие наших клиентов и всегда работаем честно, предоставляя прозрачную информацию о проекте и бюджете.</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default BelieveSection;