
import React, { useState } from "react";

import styles from "./LoadMore.module.css";
import { Books, BooksAll } from "../../store/books/books.types";
export interface LoadMoreProps{
setLoading:()=>void,
text:string
}
const LoadMore:React.FC<LoadMoreProps>= ({setLoading,text}) => {

   return (
     <div className={styles.div}>
       <button className={styles.loadMore} onClick={setLoading}>{text}</button>
     </div>
   );
};

export default LoadMore;




