import React from "react";

import styles from "./MainLayout.module.css";

interface MainLayoutProps {
  header: React.ReactNode;
  content: React.ReactNode;
  footer: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ header, content, footer }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>{header}</header>
      <div className={styles.wrapper}>
        <main className={styles.content}>{content}</main>
        <footer className={styles.footer}>{footer}</footer>
      </div>
    </div>
  );
};

export default MainLayout;
