import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './profile.module.css'

export const Profile = () => {
    return <section className={styles.container}>
        <img src={getImageUrl('profile/profile.png')} alt='profile' className={styles.profileImg}/> 
        <div className={styles.content}>
            <h1 className={styles.title}> Hi, I'm Chong Xern! </h1>
            <p className={styles.desc}> I'm a Year 3 Computer Engineering student 
                from the National University of Singapore, and 
                I have a strong foundation in Software Engineering 
                and Machine Learning! 
            </p>
            <a href='mailto: hu.chongxern@u.nus.edu' className={styles.contactBtn}> Email Me </a>
        </div>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
}