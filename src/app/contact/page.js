import React from "react";
import styles from "./contact.module.css";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import Link from "next/link";

export default function Contact() {
  return (
    <div className={styles.outer_div}>
      {" "}
      <div className={styles.title}>
        <p>Contact Us</p>
        <div className={styles.line}></div>
      </div>
      <div className={styles.main}>
        <div className={styles.div1}>
          <div className={styles.part1}>
            <p className={styles.p1}>Name</p>
            <input
              className={styles.input}
              placeholder="Enter your name"
            ></input>
            <p className={styles.p1}>Mobile</p>
            <input
              className={styles.input}
              placeholder="Enter Mobile no"
            ></input>
            <p className={styles.p1}>Email</p>
            <input
              className={styles.input}
              placeholder="Enter email id"
            ></input>
          </div>
          <div className={styles.part2}>
            {" "}
            <p className={styles.p1}>Message</p>
            <textarea
              className={styles.input1}
              placeholder="Enter your message here .."
            ></textarea>
            <br></br>
            <button className={styles.btn}>Post</button>
          </div>
        </div>
        <div className={styles.div2}>
          <p className={styles.p2}>Email</p>
          <p className={styles.p3}>Anupchaudhary1021@gmail.com</p>
          <p className={styles.p2}>Mobile</p>
          <p className={styles.p3}>+91 6396937375</p>
          <p className={styles.p2}>Address</p>
          <p className={styles.p3}> Mathura ,Uttar Pradesh</p>
          <p className={styles.p2}>Availabity</p>
          <p className={styles.p3}>
            Available for calls and massages 7 days week
          </p>
        </div>
      </div>
      <div className={styles.icons}>
        <FaTwitter className={styles.icon} />
        <Link
          href="https://www.instagram.com/anoopchaudhary1?igsh=dHZvdWVkeTRscmFw"
          target="blank"
        >
          <FaInstagram className={styles.icon} />
        </Link>
        <FaGoogle className={styles.icon} />
        <FaFacebook className={styles.icon} />
        <FaGithub className={styles.icon} />
      </div>
      <p className={styles.dev}>This website is developed by anoop chaudhary</p>
    </div>
  );
}
