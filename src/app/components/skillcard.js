import React from "react";
import styles from "./styles/skillcard.module.css";

export default function Skillcard({ img, text, title, stars }) {
  return (
    <div className={styles.outer_div}>
      <div className={styles.title}>
        <p>{title}</p>
      </div>
      <div className={styles.body} style={{ backgroundImage: `url(${img})` }}>
        <p className={styles.p2}>{text}</p>
      </div>{" "}
      <div className={styles.title1}>
        <p>{stars}</p>
      </div>
    </div>
  );
}
