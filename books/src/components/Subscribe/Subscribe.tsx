
import React, { useState } from "react";

import styles from './Subscribe.module.css'

interface SubscribeProps{
    title:string
}

const Subscribe:React.FC<SubscribeProps>=({title})=>{
//  const handleCLick=()=>{
//   const input=  document.getElementById('1')
//    if(input?.textContent!=''){
//     alert('You subscribe')
//    }else{
//     alert('Write your email')
//    }
//     console.log(input);
//  }
const [message, setMessage] = useState("");

const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
  setMessage(event.target.value);
};
const handleClick = () => {
  if(message!=''){alert('You subscribe!') }
  else{alert('Enter your email!')}

};
 
 return(
    <div className={styles.subBlock}>
    <div className={styles.info}>
        <p className={styles.title}>{title}</p>
        <p className={styles.text}>Be the first to know about new IT books, upcoming releases, exclusive offers and more.</p>
     
        <div className={styles.sub}>
            <input type="email" name="" id='1' placeholder="Your Email" className={styles.input} onChange={handleChange} value={message}/>
            <button className={styles.subButton} type="submit" onClick={handleClick}>Subscribe</button>
        </div>
        </div>
    </div>
 )
}
export default Subscribe