import React from "react";
import styles from "./styles/hackathoncard.module.css";

export default function Hackathoncard({ img, text, title, result }) {
  return (
    <div className={styles.outer_div}>
      <div className={styles.title}>
        <p>{title}</p>
      </div>
      <div className={styles.body} style={{ backgroundImage: `url(${img})` }}>
        <p className={styles.p2}>{text}</p>
      </div>{" "}
      <div className={styles.title1}>
        <p>{result}</p>
      </div>
    </div>
  );
}
