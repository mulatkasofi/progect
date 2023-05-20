
import React from "react";

import styles from './Subscribe.module.css'

interface SubscribeProps{
    title:string
}

const Subscribe:React.FC<SubscribeProps>=({title})=>{
 return(
    <div className={styles.subBlock}>
    <div className={styles.info}>
        <p className={styles.title}>{title}</p>
        <p className={styles.text}>Be the first to know about new IT books, upcoming releases, exclusive offers and more.</p>
     
        <div className={styles.sub}>
            <input type="email" name="" id="" placeholder="Your Email" className={styles.input}/>
            <button className={styles.subButton}>Subscribe</button>
        </div>
        </div>
    </div>
 )
}
export default Subscribe