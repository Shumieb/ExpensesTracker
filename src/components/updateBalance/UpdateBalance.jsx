import styles from "./updateBalance.module.css"

function UpdateBalance() {
    return (
        <section className={styles.modal}>
            <form className={styles.modalContent}>
                <span className={styles.close} >&times;</span>
                <h2 className={styles.header}>Update Balance</h2>
                <span className={styles.hr}><hr /></span>
                <input type="number" name="updatedBalance" id="updatedBalance" min={0} className={styles.modalInput} />
                <input type="submit" value="Update" className={styles.updateBtn} />
            </form>
        </section>
    )
}

export default UpdateBalance