import styles from '@/styles/info.module.css';

function Info () {

    return (
        <div className={styles.info} >
            <div className={styles.bio}>
                    Hi, I go by Connor.<br />Thanks for taking the time to check out some of my work. I’m a creative technologist primarily interested in real-time 3D applications like augmented reality and visual communication for e-commerce. I believe in technology as a means of improving the human experience, not distracting from it.
            </div>
            <div className={styles.linkGroup}>
                <div className={styles.linkBox}><a href="mailto:connorwhitepdx@gmail.com" className={styles.linkout}>E-MAIL</a></div>
                <div className={styles.linkBox}><a href="https://www.github.com/connorwhite-online" target="_blank" rel="noopener noreferrer" className={styles.linkout}>GITHUB</a></div>
                <div className={styles.linkBox}><a href="https://www.linkedin.com/in/connorwhite-online/" target="_blank" rel="noopener noreferrer" className={styles.linkout}>LINKEDIN</a></div>
                <div className={styles.linkBox}><a href="https://www.instagram.com/connorwhite.online" target="_blank" rel="noopener noreferrer" className={styles.linkout}>INSTAGRAM</a></div>
                <div className={styles.linkBox}><a href="https://www.twitter.com/connor_online" target="_blank" rel="noopener noreferrer" className={styles.linkout}>TWITTER</a></div>
            </div>
        </div>
    );
}

export default Info;