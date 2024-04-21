import React, {useState} from 'react';
import styles from './Form.module.scss'

const Form = () => {

    const [isSuccessMessageVisible, setSuccessMessageVisible] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
    });

    const [formErrors, setFormErrors] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        let formattedValue = value;

        if (name === 'name') {
            formattedValue = value.charAt(0).toUpperCase() + value.slice(1);
        }
        if (name === 'message') {
            formattedValue = value.charAt(0).toUpperCase() + value.slice(1);
        }
        setFormData({ ...formData, [name]: formattedValue });
        setFormErrors({ ...formErrors, [name]: '' });
    };

    const validatePhone = (phone) => {
        const phoneRegex = /^(?:\+7|8)9\d{9}$/;
        return phoneRegex.test(phone);
    };

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
        return emailRegex.test(email)
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = {};

        if (!formData.name) {
            errors.name = 'Пожалуйста, заполните это поле.';
        }

        if (!formData.phone) {
            errors.phone = 'Пожалуйста, заполните это поле.';
        } else if (!validatePhone(formData.phone)) {
            errors.phone = 'Пожалуйста, введите корректный номер телефона.';
        }

        if (!formData.email) {
            errors.email = 'Пожалуйста, заполните это поле.';
        } else if (!validateEmail(formData.email)) {
            errors.email = 'Пожалуйста, введите корректный email.';
        }

        if (!formData.message) {
            errors.message = 'Пожалуйста, заполните это поле.';
        }

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
        } else {
            console.log('Отправлены данные:', formData);
            setSuccessMessageVisible(true)
            setFormData({ name: '', phone: '', email: '', message: '' });
            setFormErrors({ name: '', phone: '', email: '', message: '' });
        }
    };

    return (
        <form onSubmit={handleSubmit} noValidate>
            <div className={styles.form}>
                {isSuccessMessageVisible && (
                    <div className={styles.successMessage}>Сообщение успешно отправлено!</div>
                )}
                <div className={styles.formGroup}>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Имя"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                    {formErrors.name && <div className={styles.error}>{formErrors.name}</div>}
                </div>
                <div className={styles.formGroup}>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Телефон"
                        value={formData.phone}
                        onChange={handleInputChange}
                    />
                    {formErrors.phone && <div className={styles.error}>{formErrors.phone}</div>}
                </div>
                <div className={styles.formGroup}>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}

                    />
                    {formErrors.email && <div className={styles.error}>{formErrors.email}</div>}
                </div>
                <div className={styles.formGroup}>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Сообщение"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                />
                    {formErrors.message && <div className={styles.error}>{formErrors.message}</div>}
                </div>

                <button className={styles.send} type="submit">Отправить</button>
            </div>
        </form>
    );
};

export default Form;