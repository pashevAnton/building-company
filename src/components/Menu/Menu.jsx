import React from 'react';
import styles from './Menu.module.scss'
const Menu = ({items, active, setActive}) => {
    return (
        <div className={active ? `${styles.menu} ${styles.active}` : styles.menu} onClick={() => setActive(false)}>
            <div className={styles.blur}/>
            <div className={styles.menu_content} onClick={e => e.stopPropagation()}>
                <div className={styles.menu_header}>
                    <ul>
                        {items.map (item =>
                            <li key={item.value}>
                                <a href={item.href}>{item.value}</a>
                                <div></div>
                            </li>

                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Menu;