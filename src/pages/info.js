import styles from '@/styles/info.module.css'

function Info () {

    const infoRef = useRef();

    return (
        <div className={styles.info} ref={infoRef}>
            <div className={styles.bio}>
                <h1>
                    Hi, I go by Connor.<br />Thanks for taking the time to check out some of my work. I’m a creative technologist primarily interested in real-time 3D applications like augmented reality and visual communication for e-commerce. I believe in technology as a means of improving the human experience, not distracting from it.
                </h1>
            </div>
            <div className={styles.link-group}>
                <div className={styles.link-box}><a href="mailto:connorwhitepdx@gmail.com" className='link'>E-MAIL</a></div>
                <div className={styles.link-box}><a href="https://www.github.com/connorwhite-online" target="_blank" rel="noopener noreferrer" className={styles.link}>GITHUB</a></div>
                <div className={styles.link-box}><a href="https://www.linkedin.com/in/connorwhite-online/" target="_blank" rel="noopener noreferrer" className={styles.link}>LINKEDIN</a></div>
                <div className={styles.link-box}><a href="https://www.instagram.com/connorwhite.online" target="_blank" rel="noopener noreferrer" className={styles.link}>INSTAGRAM</a></div>
                <div className={styles.link-box}><a href="https://www.twitter.com/connor_online" target="_blank" rel="noopener noreferrer" className={styles.link}>TWITTER</a></div>
            </div>
        </div>
    );
}

export default Info;