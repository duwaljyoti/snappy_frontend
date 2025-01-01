import styles from './Sidebar.module.scss';

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <ul className="nav flex-column">
                <li className={styles.navItem}>
                    <span className={styles.navSingleMenu}>Home</span>
                </li>
                <li className={styles.navItem}>
                    <span className={styles.navSingleMenu}>About</span>
                </li>
                <li className={styles.navItem}>
                    <span className={styles.navSingleMenu}>Services</span>
                </li>
                <li className={styles.navItem}>
                    <span className={styles.navSingleMenu}>Contact</span>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
