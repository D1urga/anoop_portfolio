import React from "react";
import styles from "./skills.module.css";
import Skillcard from "../components/skillcard";
import Hackathoncard from "../components/hackathoncard.js";

export default function Skills() {
  const hack = `Participated in a hackathon where our team utilized technologies like Flutter, Next.js, Node.js for backend development, and machine learning and deep learning to solve various challenges. We created a responsive mobile app with Flutter and a dynamic, SEO-friendly web app using Next.js, ensuring seamless cross-platform user experiences. Our backend, built with Node.js and Express.js, featured secure, scalable RESTful APIs handling real-time data efficiently. Leveraging TensorFlow and PyTorch, we developed high-accuracy models for image recognition and predictive analytics. Despite integration and optimization challenges, our team’s constant communication and thorough testing ensured smooth functionality. Our comprehensive approach and innovative solutions impressed the judges, highlighting the practical applicability of our project. The intuitive design, efficient backend, and precise machine learning models showcased our technical expertise, leading to our victory in the hackathon. This experience underscored the importance of teamwork and effective communication in achieving success.`;
  const text12 =
    "JavaScript is a versatile programming language used primarily for building interactive web pages and web applications. It's essential for frontend development with frameworks like React, Angular, and Vue.js, and increasingly used in backend development with Node.js. JavaScript also powers mobile app development, server-side scripting, and game development.";
  const text11 =
    "TypeScript is a superset of JavaScript that adds static typing and other features to enhance JavaScript development. It's used for building large-scale applications, especially in frontend development with frameworks like Angular and React, as well as in backend with Node.js. TypeScript improves code quality, scalability, and developer productivity.";
  const text10 =
    "Python is a versatile programming language known for its simplicity and readability, widely used in web development, scientific computing, data analysis, artificial intelligence, and automation. Its rich ecosystem of libraries like NumPy, pandas, and TensorFlow makes it suitable for a wide range of applications, from scripting to large-scale software development.";
  const text9 =
    "C++ is a powerful programming language favored in competitive coding for its speed and extensive standard library. Proficiency involves mastery of data structures, algorithms, and efficient memory management. C++'s features like pointers, templates, and STL containers enable fast and scalable solutions to complex problems in competitive programming.";
  const text8 =
    "Java is a versatile programming language used widely in competitive coding for its performance and cross-platform capabilities. Proficiency involves understanding data structures, algorithms, and efficient problem-solving techniques. Java's strong typing, libraries like Collections Framework, and tools for debugging and testing make it suitable for competitive programming challenges.";
  const text7 =
    "Deep learning is a subset of machine learning focused on artificial neural networks with multiple layers. Proficiency in deep learning involves mastering architectures like convolutional neural networks (CNNs) for image recognition, recurrent neural networks (RNNs) for sequence modeling, and techniques like transfer learning and reinforcement learning for solving complex tasks in AI applications.";
  const text6 =
    "Machine learning is a field of artificial intelligence where algorithms learn patterns from data to make predictions or decisions. Being proficient in machine learning involves expertise in algorithms like regression, classification, and deep learning, alongside data preprocessing, feature engineering, model evaluation, and deployment for practical applications in various domains.";
  const text2 =
    "Next.js is a React framework for building server-rendered React applications. It simplifies React development with features like server-side rendering, automatic code splitting, and simplified routing. Proficiency in React.js includes understanding component-based architecture and state management, which are foundational for leveraging Next.js' capabilities effectively in building scalable web applications.";
  const text3 = `React.js is a JavaScript library used for building user interfaces in web applications. It utilizes a component-based architecture, enabling developers to create reusable UI elements. Being proficient in React.js involves expertise in managing state, handling props, implementing lifecycle methods, and optimizing performance for scalable applications.`;
  const text1 =
    "Flutter is an open-source UI toolkit by Google for building natively compiled applications across mobile, web, and desktop from a single codebase. Proficiency in Flutter includes mastery of Dart language, widget-based UI development, state management, platform-specific integrations, and leveraging Flutter's rich set of libraries and tools for creating expressive and responsive applications.";
  const text5 =
    "Node.js is a runtime environment that allows running JavaScript code outside the browser, enabling server-side scripting and building scalable network applications. Proficiency in Node.js involves expertise in asynchronous programming, handling requests, building APIs, using frameworks like Express.js, and deploying applications to production environments, supporting backend development for various web applications";
  const text4 =
    "Express.js is a minimalist and flexible web application framework for Node.js, providing a robust set of features for building web and mobile applications. Proficiency in Express.js involves mastering routing, middleware integration, handling HTTP requests and responses, security practices, and integrating with databases to create scalable and efficient server-side applications.";
  return (
    <div className={styles.outer_div}>
      <div className={styles.title}>
        <p>Skills</p>
        <div className={styles.line}></div>
      </div>
      <div className={styles.grid}>
        {" "}
        <Skillcard img="/i1.jpg" text={text1} title="Flutter" />
        <Skillcard img="/i1.jpg" text={text2} title="Next JS" />{" "}
        <Skillcard img="/i1.jpg" text={text3} title="React JS" />{" "}
        <Skillcard img="/i1.jpg" text={text5} title="Node JS" />{" "}
        <Skillcard img="/i1.jpg" text={text4} title="Express JS" />{" "}
        <Skillcard img="/i1.jpg" text={text6} title="Machine Learning" />{" "}
        <Skillcard img="/i1.jpg" text={text7} title="Deep Learning" />
        <Skillcard img="/i1.jpg" text={text8} title="Java" />
        <Skillcard img="/i1.jpg" text={text9} title="C++" />
        <Skillcard img="/i1.jpg" text={text10} title="Python" />
        <Skillcard img="/i1.jpg" text={text11} title="TypScript" />
        <Skillcard img="/i1.jpg" text={text12} title="JavaScript" />
      </div>
      <div className={styles.title}>
        <p>Achievements</p>
        <div className={styles.line}></div>
      </div>
      <div className={styles.grid1}>
        <Hackathoncard
          text={hack}
          title="IIEC National Hackthon"
          result="Winner"
        />
        <Hackathoncard
          text={hack}
          title="GDSC Solution Challange"
          result="Winner"
        />
        <Hackathoncard text={hack} title="WED-DEV Hackthon" result="Winner" />
        <Hackathoncard
          text={hack}
          title="HackDay Hackathon"
          result="3rd Winner"
        />
      </div>
    </div>
  );
}
