import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/navbar.js";
import Skills from "./skills/page.js";
import Service from "./service/page.js";
import Contact from "./contact/page.js";
import Link from "next/link";

export default function Home() {
  const aboutme = `I am a dedicated software developer and competitive coder with a wealth of experience in various domains of software development. My journey has been marked by significant achievements, including winning four national-level hackathons, showcasing my ability to solve complex problems and innovate under pressure.

With a robust background in Android development, web development, backend development, and artificial intelligence/machine learning, I have developed a diverse skill set. My proficiency with modern technologies such as Flutter, Next.js, React.js, Express.js, and Node.js allows me to create seamless, efficient, and scalable applications. Additionally, my deep understanding of machine learning
 and deep learning enables me to build intelligent systems and predictive models that drive impactful results.
I am passionate about learning and constantly seeking to expand my knowledge. This curiosity drives me to stay updated with the latest advancements in technology and apply them to real-world projects. I thrive on taking up challenging projects and enjoy working on large-scale, impactful developments.`;
  return (
    <div>
      <Navbar />
      <div>
        <div className={styles.outer_div}>
          <div className={styles.div1}>
            {/* <p>ANOOP</p>
          <p>CHAUDHARY</p> */}
          </div>
          <div className={styles.div2}>
            <p className={styles.p1}>ANOOP</p>
            <p className={styles.p2}>CHAUDHARY</p>
            <div className={styles.title1}>
              <p className={styles.p3}>Developer</p>
              <p className={styles.p4}>Competitive Coder</p>
            </div>
            <div className={styles.btns}>
              <button className={styles.btn1}>Resume</button>
              <button className={styles.btn2}>Portfolio</button>
            </div>
            <Link href="https://github.com/D1urga" target="blank">
              <button className={styles.btn3}>Github</button>
            </Link>
          </div>
        </div>{" "}
        <div className={styles.title} style={{ zIndex: "4" }}>
          <p>About</p>
          <div className={styles.line}></div>
        </div>
        <div className={styles.outer_div1}>
          <div className={styles.div3}>
            <p className={styles.p6}>{aboutme}</p>
          </div>
          <div className={styles.div4}>
            <div className={styles.shade}></div>
            <img src="/img1.jpg" className={styles.img}></img>
          </div>
        </div>
      </div>
      <Skills />
      <Service />
      <Contact />
    </div>
  );
}
