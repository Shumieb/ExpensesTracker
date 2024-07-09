import Hero from "../../components/hero/Hero"
import styles from "./about.module.css"

function About() {
    return (
        <main className={styles.about}>
            <Hero title='About' />
            <section className={styles.description}>
                <div className={styles.text}>
                    <h2>Expenses Tracker</h2>
                    <span><hr /></span>
                    <p>This is a Task App built by <span className={styles.skill}>Shumie</span>. <br />
                        The app was built to showcase her technical skills and knowledge of <br />
                        <span className={styles.skill}> React JS, </span>
                        <span className={styles.skill}>React Router,</span>
                        <span className={styles.skill}> Redux Toolkit, </span>
                        <span className={styles.skill}> JavaScript, </span>
                        <span className={styles.skill}> HTML </span> and
                        <span className={styles.skill}> CSS </span>.
                        <br />Checkout the rest of her project on her <a className={styles.skill} href="https://github.com/Shumieb"> GitHub </a> page.
                        <br />
                        Thank you for visiting this site.
                    </p>
                </div>
            </section>
            <div className={styles.placeholder}></div>
        </main>
    )
}

export default About