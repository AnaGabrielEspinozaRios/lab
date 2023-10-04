import Link from 'next/link';
import styles from './styles.module.css';
const Navbar = () => {
    return (
        <nav className={styles.nav}>
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/post">Posts</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
        </ul>
        </nav>
    );
};
export default Navbar;