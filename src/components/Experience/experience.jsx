import React from 'react';
import skills from '../../data/skills.json';
import history from '../../data/history.json'
import { getImageUrl } from '../../utils';
import styles from "./experience.module.css"

export const Experience = () => {
    // let 
    const handleMouseMove = (e) => {
        // el.style.zIndex = "100";
        const el = e.currentTarget; // get <li> 
        const rect = el.getBoundingClientRect(); //size and position relative to viewpoint

        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);

        el.style.setProperty("--tx", `${-dx * 0.03}px`);
        el.style.setProperty("--ty", `${-dy * 0.03}px`);
        el.style.setProperty("--skx", `${dx * 0.003}deg`);
        el.style.setProperty("--sky", `${dy * 0.003}deg`);
    };
    const handleMouseLeave = (e) => {
        const el = e.currentTarget;
        el.style.setProperty("--tx", "0px");
        el.style.setProperty("--ty", "0px");
        // el.style.setProperty("--skx", "0deg");
        // el.style.setProperty("--sky", "0deg");
    };

    return <section id='experience' className={styles.container}>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
        <h2 className={styles.title}> Experience </h2>
        <div className={styles.content}>
            <div className={styles.skills}>{
                skills.map((skill, id) => {
                    return <div key={id} className={styles.skillItem}>
                        <div className={styles.skillImgContainer}>
                            <img src={getImageUrl(skill.imgSrc)} alt={skill.title} className={styles.skillImg} />
                        </div>
                        <p> {skill.title}</p>
                    </div>
                })
            }</div>
            <ul className={styles.history}>{
                history.map((historyItem, id) => {
                    return <li key={id} className={styles.historyItem}
                        onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                        <div className={styles.historyItemBox}>
                            <div className={styles.historyItemHeader}>
                                <h3> {historyItem.role}</h3>
                                <h5> {historyItem.startDate} - {historyItem.endDate}</h5>
                            </div>
                            <div className={styles.historyItemContent}>
                                <div className={styles.historyAvatar}>
                                    {/* <h4> {historyItem.organisation}</h4> */}
                                    <img src={getImageUrl(historyItem.imgSrc)} alt={historyItem.organisation} />
                                </div>

                                <ul className={styles.historyItemDesc}> {
                                    historyItem.experiences.map((experience, id) => {
                                        return <li key={id} className={styles.historyItemExperience}> {experience} </li>
                                    })
                                }</ul>
                            </div>
                        </div>

                    </li>
                })
            }</ul>
        </div>
    </section>
}