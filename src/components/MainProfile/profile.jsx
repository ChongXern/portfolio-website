import React from 'react'
import { getImageUrl } from '../../utils'
import { TypeAnimation } from "react-type-animation";
import styles from './profile.module.css'

// import myResume from '../../../public/resume.pdf'

export const Profile = () => {
    const handlePdfView= () => {
        // const pdfUrl = `${process.env.PUBLIC_URL}/resume.pdf`;
        window.open('/portfolio-website/resume.pdf', '_blank', 'noopener,noreferrer');
    }
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
            <p className={styles.desc}> 
                I'm a final-year Computer Engineering undergraduate at NUS focused on data and systems engineering. 
                I work on building real-world pipelines and useable tools from ambiguous problem settings.
            </p>
           
            <div className={styles.buttonContainer}>
                 <a href='mailto: hu.chongxern@u.nus.edu' className={styles.customBtn}> Email Me </a>
                <a className={styles.customBtn} onClick={handlePdfView}> 
                    Resume
                </a>
            </div>
        </div>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
}
