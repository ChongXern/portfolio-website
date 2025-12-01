import React from 'react'
import { getImageUrl } from '../../utils'
import { TypeAnimation } from "react-type-animation";
import styles from './profile.module.css'

export const Profile = () => {
    return <section className={styles.container}>
        <img src={getImageUrl('profile/profile.png')} alt='profile' className={styles.profileImg}/> 
        <div className={styles.content}>
            <div className={styles.title}>
                {<TypeAnimation 
                    sequence={[
                        "Hi, I'm Chong Xern!", 
                        1000,
                        () => {
                        console.log("Sequence completed");
                        },
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={0}
                />}
            </div>
            <p className={styles.desc}> I'm a Year 4 Computer Engineering student 
                from the National University of Singapore, and 
                I have a strong foundation in Software Engineering 
                and Machine Learning.
            </p>
            <a href='mailto: hu.chongxern@u.nus.edu' className={styles.contactBtn}> Email Me </a>
        </div>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
}
