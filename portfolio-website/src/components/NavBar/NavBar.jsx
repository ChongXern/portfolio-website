import React, { useState } from 'react';

import styles from './NavBar.module.css';
import { getImageUrl } from '../../utils';

export const NavBar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false); // set false so it's closed by default
    return <nav className={styles.navBar}>
        <a className={styles.title} href="/">Portfolio</a>
        <div className={styles.menu}>
            <img 
                className={styles.menuBtn} 
                src={isMenuOpen ? getImageUrl('profile/closeIcon.png') : getImageUrl("navbar/menuIcon.png")}
                alt="Menu Icon" 
                onClick={() => setMenuOpen(!isMenuOpen)}
            />
            <ul 
            className={`${styles.menuItems} 
            ${isMenuOpen && styles.isMenuOpen}`}
            onClick={() => setMenuOpen(false)}>
                <li>
                    <a href='#about' className={styles.menuItem}>About</a>
                </li>
                <li>
                    <a href='#experience' className={styles.menuItem}>Experience</a>
                </li>
                <li>
                    <a href='#projects' className={styles.menuItem}> Projects </a>
                </li>
                <li>
                    <a href='#contacts' className={styles.menuItem}>Contacts</a>
                </li>
            </ul>
        </div>
    </nav>

};
