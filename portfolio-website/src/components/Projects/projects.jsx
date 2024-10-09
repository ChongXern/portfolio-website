import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './Projects.module.css';
import projects from "../../data/projects.json"

export const Projects =() => {
    return <section className={styles.container}>
        <h1 className={styles.title}> PROJECTS </h1>
            <ul className={styles.content}/*className={styles.projectItem}*/>{
                projects.map((project, id) => {
                    return <li key={id} className={styles.projectBox}>
                        <h1> {project.title} </h1>
                        <img src={getImageUrl(project.image)}/>
                        <p> {project.desc} </p>
                        <ul className={styles.projectSkills}> {
                            project.skills.map((skill, id2) => {
                                return <li key={id2} className={styles.projectSkill}> {skill} </li>
                            })
                        }</ul>
                        <a href={project.github} className={styles.githubButton}> Source </a>
                    </li> 
                })
            }</ul>
    </section>
}