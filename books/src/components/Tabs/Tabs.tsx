import React from "react";
import styles from "./Tabs.module.css";
import cn from "classnames";

export interface TabsItem {
  label: string;
  value: string;
  disabled?: boolean;
}
interface TabsProps {
  tabs: TabsItem[];
  activeTab: TabsItem["value"];
  onTabClick: (tab: TabsItem) => void;
  classname: string;
  classname2: string;
}

const Tabs: React.FC<TabsProps> = ({
  tabs,
  onTabClick,
  classname,
  classname2,
}) => {
  return (
    <div className={styles.all}>
      <ul className={cn(styles.tabs, styles.ul)}>
        {tabs.map((tab) => {
          return (
            <li key={tab.value} className={classname2}>
              <button
                className={classname}
                disabled={tab.disabled}
                onClick={() => {
                  onTabClick(tab);
                }}
              >
                {tab.label}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Tabs;
