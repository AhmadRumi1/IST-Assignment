import React from "react";
import styles from "./header.module.css";
import { LinkedinOutlined } from "@ant-design/icons";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <img className={styles.logo} src="/imgs/ist-logo.png" />
        <h1 className={styles.assignmentText}>Assignment</h1>
        <h6 className={styles.subtext}>By Ahmad Rumi</h6>
      </div>

      <a href="https://www.linkedin.com/in/ahmad-rumi/" target="_blank">
        <LinkedinOutlined className={styles.linkedinIcon} />
      </a>
    </div>
  );
}
