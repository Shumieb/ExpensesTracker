import styles from "./footer.module.css"

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.text}>
                <p>&copy; 2024</p>
                <p>Created by Shumie</p>
            </div>

        </footer>
    )
}

export default Footer