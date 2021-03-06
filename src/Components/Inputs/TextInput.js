import React from "react";
import styles from "../Inputs/TextInput.module.css";

const TextInput = props => {

    return (
        <div className={styles.div}>
            <input id={props.id} className={`${props.className} ${styles.input}`} name={props.name} value={props.value} onChange={props.onChange} onBlur={props.onBlur} type="text" />
            <label className={styles.label} htmlFor={props.name}>{props.label}</label>            
        </div>
    )
}

export default TextInput;