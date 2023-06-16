
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
      <hr className={styles.line}></hr>
      <div className={styles.footer}>
        <p className={styles.text}>©2022 Bookstore</p>
        <p className={styles.text}>All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
