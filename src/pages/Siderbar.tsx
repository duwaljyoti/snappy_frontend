import styles from './Sidebar.module.scss';
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

const Sidebar = () => {
    const navigate = useNavigate();
    const [currentlySelectedNav, setCurrentlySelectedNav] = useState('');

    useEffect(() => {
        const path = location.pathname.replace('/', '');
        setCurrentlySelectedNav(path || '');
    }, [currentlySelectedNav]);

    return (
        <div className={styles.sidebar}>
            <ul className="nav flex-column">
                <li
                    className={`${styles.navItem} ${currentlySelectedNav === '' ? styles.selectedNavItem : ''}`}
                    onClick={() => navigate('/')}>
                    <span className={styles.navSingleMenu}>Home</span>
                </li>
                <li
                    className={`${styles.navItem} ${currentlySelectedNav === 'settings' ? styles.selectedNavItem : ''}`}
                    onClick={() => navigate('/settings')}>
                    <span className={styles.navSingleMenu}>Settings</span>
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
