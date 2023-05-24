import React, { useState } from "react";
import styles from './SignUpAll.module.css'
import Tabs, { TabsItem } from "../Tabs/Tabs";
import SignUp from "../SignUp/SignUp";

const SignUpAll: React.FC = () => {
  const [activeTab, setActiveTab] = useState("all");
  const handleTabClick = (tab: TabsItem) => {
    setActiveTab(tab.value);
  };
  const tabs: TabsItem[] = [
    { label: "Sign in", value: "SignIn" },
  ];
  return (
    <div className={styles.form}>
      <div className={styles.tabs}>
        <Tabs tabs={tabs} activeTab={""} onTabClick={handleTabClick} classname={styles.a1} classname2={styles.li2}></Tabs>
      </div>
      {activeTab === "SignUp" && <SignUp />}
      {activeTab === "SignIn" && <></>}
    </div>
  );
};

export default SignUpAll;
