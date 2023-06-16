import React from "react";
import styles from "./LoadMore.module.css";
export interface LoadMoreProps {
  setLoading: () => void;
  text: string;
}
const LoadMore: React.FC<LoadMoreProps> = ({ setLoading, text }) => {
  return (
    <div className={styles.div}>
      <button className={styles.loadMore} onClick={setLoading}>
        {text}
      </button>
    </div>
  );
};

export default LoadMore;
