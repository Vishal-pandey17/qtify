import React, { Children } from "react";
import styles from "./Button.module.css"

const Button = ({children}) => {
    return (
        <>
         <button className={styles.button}>
            {children}
         </button> 
        </>
    ) 
}


export default Button;