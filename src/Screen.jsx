import styles from "./Screen.module.css"

function Screen({ content }) {
    return (
        <>
        <input type='text' className={styles.screen} value={content} readOnly></input>
        </>
    );
}

export default Screen;