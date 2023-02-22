import styles from '@/styles/menu.module.css'
import Link from 'next/link';

function Menu () {

    return (
        <div className={styles.menu}>
            <div className={styles.marquee}>
                <div className={styles.ticker}>
                    CONNOR WHITE
                </div>
            </div>
            <div className={styles.nav}>
                <div>
                    <Link href="/" className={styles.navLink}>work</Link>
                </div>
                <div>
                    <Link href="/info" className={styles.navLink}>info</Link>
                </div>
            </div>
        </div>
    );
}

export default Menu;