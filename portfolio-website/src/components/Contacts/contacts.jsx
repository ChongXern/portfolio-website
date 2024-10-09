import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./contacts.module.css"

export const Contacts = () => {
    return <footer id="contacts" className={styles.container}>
        <div className={styles.leftSide}> 
            {/*<img src={getImageUrl("contact/logo.png")} />*/}
            <div className={styles.text}>
                <p> Have a question? </p>
                <h2>Contact me!</h2>
            </div>
        </div>
        <ul className={styles.contactsList}>
            <li className={styles.contact}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon"/>
                <a href="hu.chongxern@u.nus.edu"> hu.chongxern@u.nus.edu </a>
            </li>
            <li className={styles.contact}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn Icon"/>
                <a href="https://www.linkedin.com/in/chongxern-hu"> linkedin.com/in/chongxern-hu </a>
            </li>
            <li className={styles.contact}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub Icon"/>
                <a href="https://www.github.com/ChongXern/"> github.com/ChongXern/ </a>
            </li>
        </ul>
    </footer>
}