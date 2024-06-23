import React from "react";
import styles from "./styles/navbar.module.css";
import Link from "next/link";
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
          <Link
            href="https://www.instagram.com/anoopchaudhary1?igsh=dHZvdWVkeTRscmFw"
            target="blank"
          >
            <FaInstagram className={styles.icon1} />
          </Link>
          <FaAlignLeft className={styles.icon2} />
        </div>
      </div>
    </div>
  );
}
