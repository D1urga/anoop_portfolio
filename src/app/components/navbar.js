import React from "react";
import styles from "./styles/navbar.module.css";
import {
  FaAlignLeft,
  FaGithub,
  FaInstagram,
  FaStarOfLife,
  FaTwitter,
} from "react-icons/fa";

export default function Navbar() {
  return (
    <div className={styles.outer_div}>
      <div className={styles.nav}>
        <p className={styles.head}>ANOOP CHAUDHARY</p>
        <div className={styles.icons}>
          <FaGithub className={styles.icon1} />
          <FaTwitter className={styles.icon1} />
          <FaInstagram className={styles.icon1} />
          <FaAlignLeft className={styles.icon2} />
        </div>
      </div>
    </div>
  );
}
