import styles from "./hero.module.css"

function Hero({ title }) {
    return (
        <section className={styles.heroContainer}>
            <div className={styles.text}>
                <h1>{title}</h1>
            </div>
        </section>
    )
}

export default Hero