import { Link } from "react-router-dom"
import styles from "./header.module.css"

function Header() {
    return (
        <nav className={styles.navbar}>
            <div>
                <h1 className={styles.heading}><Link to="/">Expenses Tracker</Link></h1>
                <ul className={styles.navLinks}>
                    <li className={styles.navLink}><Link to="/">Home</Link></li>
                    <li className={styles.navLink}><Link to="/about">About</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header