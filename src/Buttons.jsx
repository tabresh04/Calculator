import styles from "./Buttons.module.css"

function Buttons({ buttons, handle }){
    return (
        <div className={styles.buttons}>
            {buttons.map ((item) =>(
             <button key={item} className={styles.button} onClick={handle}>{item}</button>
            ))}
        </div> 
    );
}

export default Buttons;
