import React from 'react';
import { NavBar } from '../NavBar/NavBar';
import { getImageUrl } from '../../utils';
import styles from './about.module.css'

export const About = () => {
    return <section className={styles.container} id='about'>
        <h2 className={styles.title}> ABOUT </h2>
        <div className={styles.content}>
        <img src={getImageUrl('about/aboutImage.png')} alt='About me' className={styles.aboutImage}/>
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
            <img src={getImageUrl('about/softwareEngIcon.png')} alt='Digital Design icon' className={styles.skillImage}/>
                <div className={styles.aboutItemText}>
                    <h4> Software Engineering</h4>
                    <p> I'm a software engineer with a strong foundation in Object-Oriented Programming and 
                        can creatively utilise Data Structures for more efficient programs. </p>
                </div>
            </li> 
            <li className={styles.aboutItem}>
            <img src={getImageUrl('about/machineLearningIcon.png')} alt='Digital Design icon' className={styles.skillImage} />
                <div className={styles.aboutItemText}>
                    <h4> Machine Learning</h4>
                    <p> I have created several machine learning applications and have successfully worked on 
                        projects involving NLP, CV and image recognition to improve my understanding of 
                        Machine Learning applications</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
            <img src={getImageUrl('about/digitalDesignicon.png')} alt='Digital Design icon' className={styles.skillImage} />
                <div className={styles.aboutItemText}>
                    <h4> Digital Design</h4>
                    <p> I have experience in creating efficient designs for applications such 
                        as digital clocks and processors for FPGA and Arduino projects. </p>
                </div>
            </li>
        </ul>
        </div>
    </section>
}
