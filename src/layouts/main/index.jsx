import React from "react";
import Header from "../../components/header";
import styles from "./mainWrapper.module.css"

export default function MainWrapper({ children }) {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>{children}</div>
    </div>
  );
}
