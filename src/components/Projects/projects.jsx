import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './Projects.module.css';
import projects from "../../data/projects.json";
import Masonry from 'react-masonry-css';

export const Projects =() => {
    return <section id="projects" className={styles.container}>
        <h1 className={styles.title}> PROJECTS </h1>
            <div className={styles.projectItems}>
            <Masonry
                breakpointCols={{ default: 3, 950: 2, 800: 1 }} // Adjust breakpoints as needed
                className={styles.masonryGrid}
                columnClassName={styles.masonryGridColumn}>{
                projects.map((project, id) => {
                    return <ul className={styles.projectsList}>
                        <li key={id} className={styles.projectBox}>
                            <h1> {project.title} </h1>
                            <img src={getImageUrl(project.image)}/>
                            <p> {project.desc} </p>
                            <ul className={styles.projectSkills}> {
                                project.skills.map((skill, id2) => {
                                    return <li key={id2} className={styles.projectSkill}> {skill} </li>
                                })
                            }</ul>
                            <a href={project.github} className={styles.githubButton}> {project.github ? "Source" : "Ongoing"} </a>
                            
                        </li> 
                    </ul>
                })
            }</Masonry>
            </div>
    </section>
}
