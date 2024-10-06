import React from 'react';
import { NavBar } from '../NavBar/NavBar';
import { getImageUrl } from '../../utils';
import styles from './about.module.css'

export const About = () => {
    return <section className={styles.container}>
        <h1> ABOUT </h1>
        <img src={getImageUrl('about/aboutImage.png')} alt='profile' className={styles.aboutImage}/>
        <ul> 
            <div>
                <img src={getImageUrl('about/digitalDesignicon.png')} alt='Digital Design icon'/>
                <h4> Digital Design</h4>
                <p> I have experience in creating efficient designs for applications such 
                    as digital clocks and processors for FPGA and Arduino projects. </p>
            </div>
            <div>
                <img src={getImageUrl('about/digitalDesignicon.png')} alt='Digital Design icon'/>
                <h4> Digital Design</h4>
                <p> I have experience in creating efficient designs for applications such 
                    as digital clocks and processors for FPGA and Arduino projects. </p>
            </div>
        </ul>
    </section>
}

/*export const About = () => {
    return <section className={styles.container}>
        <NavBar/>
        <h1> ABOUT </h1>
        <img src={getImageUrl('profile/profile.png')} alt='about me' className={styles.profileImg}/> 
        <ul> 
            <div>
                <img> </img>
                <p> </p>
            </div>
        </ul>
    </section>
}*/