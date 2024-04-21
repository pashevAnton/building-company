import styles from './Modal.module.scss'

const Modal = ({ref2, isShow, refer, title, content}) => {
    return (
        <div>
            {isShow && (
                <div ref={refer} className={styles.modalOverlay}>
                    <div className={styles.wrapper}>
                        <div className={styles.crossContainer} onClick={() => isShow = false}>
                            <div className={`${styles.line} ${styles.line1}`}></div>
                            <div className={`${styles.line} ${styles.line2}`}></div>
                        </div>
                        <div className={styles.modal} onClick={event => {
                            isShow = true
                            event.stopPropagation()
                        }}>
                            <div className={styles.modalHeader}>
                                <h2>{title}</h2>
                            </div>
                            <div className={styles.modalContent}>{content}</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Modal;