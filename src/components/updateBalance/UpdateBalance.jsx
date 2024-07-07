import { useEffect, useState } from "react"
import styles from "./updateBalance.module.css"

function UpdateBalance({ showHideModal, currentBalance, updateCurrentBalance }) {

    // variables
    const [updatedBalance, setUpdatedBalance] = useState(0);
    const [error, setError] = useState("");
    const [displayError, setDisplayError] = useState(false);

    // use effect
    useEffect(() => {
        setUpdatedBalance(currentBalance);
    }, [currentBalance])

    // functions
    const handleSubmit = (e) => {
        e.preventDefault();
        if (updatedBalance == 0) {
            setError("please enter a value greater than 0");
            setDisplayError(true);
        } else {
            updateCurrentBalance(updatedBalance);
            showHideModal("updateBalanceModal", false)
        }
    }

    return (
        <section className={styles.modal}>
            <form
                className={styles.modalContent}
                onSubmit={(e) => handleSubmit(e)}
            >
                <span
                    className={styles.close}
                    onClick={() => showHideModal("updateBalanceModal", false)}
                >&times;</span>
                <h2 className={styles.header}>Update Balance</h2>
                <span className={styles.hr}><hr /></span>
                <input
                    type="number"
                    name="updatedBalance"
                    id="updatedBalance"
                    min={0}
                    className={styles.modalInput}
                    value={updatedBalance}
                    onChange={(e) => setUpdatedBalance(e.target.value)}
                    onFocus={() => setDisplayError(false)}
                />
                <input
                    type="submit"
                    value="Update"
                    className={styles.updateBtn}
                />
                {
                    displayError && <p className={styles.errorMsg}>{error}</p>
                }
            </form>
        </section>
    )
}

export default UpdateBalance