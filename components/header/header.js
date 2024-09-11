import styles from '@/components/Header/header.module.css'
import Link from 'next/link';

export default function Header( ) {
    return (
        <header>
            <nav>
                <ul className={styles. header}>
                    <li className={styles.link1}><Link href="/">Home</Link></li>
                    <li className={styles.link2}><Link href="/about">About</Link></li>
                    <li className={styles.link3}><Link href="/contato">Contato</Link></li>
                    <li className={styles.link4}><Link href="/useClickCounterPage">Click</Link></li>
                    <li className={styles.link5}><Link href="/usetoggle">Toggle</Link></li>
                    <li className={styles.link5}><Link href="/uselocalstorage">Storage</Link></li>
                    <li className={styles.link5}><Link href="/usetitle">Title</Link></li>
                </ul>
            </ nav>
        </header>
    );
}