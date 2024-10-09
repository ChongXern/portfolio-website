import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './about.module.css'
import about from '../../data/about.json'
import { useEffect, useRef, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

export const About = () => {
    const [inView, setInView] = useState(false);
    const ref = useRef(null);

    const handleScroll = () => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                setInView(true);
                window.removeEventListener('scroll', handleScroll); // Remove listener after first trigger
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return <section className={styles.container} id='about'>
        <h2 className={styles.title}> ABOUT </h2>
        <div className={styles.content}>
            <img src={getImageUrl('about/aboutImage.png')} alt='About me' className={styles.aboutImage} />
            <div>{
                    about.map((aboutItem, id) => {
                        return <ul key={id} className={styles.aboutItems}>
                            <li className={styles.aboutItem}>
                            <img src={getImageUrl(aboutItem.image)} alt={aboutItem.imageAlt} className={styles.skillImage} />
                                <div className={styles.aboutItemText}>
                                    <h4> {aboutItem.title} </h4>
                                    <div ref={ref} className={styles.animatedText}> {
                                        inView && <TypeAnimation sequence={[aboutItem.desc, 200]}
                                            wrapper='span'
                                            cursor='true'
                                            speed={75}
                                            repeat={0}/>
                                    }</div>
                                </div>
                            </li>
                        </ul>
                    })
                }
            </div>
        </div>
    </section>
}
