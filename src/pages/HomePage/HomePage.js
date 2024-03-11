import React from "react";

import GraphemeSplitter from "grapheme-splitter";
import { TypeAnimation } from "react-type-animation";

import styles from "./HomePage.module.css";

const HomePage = () => {
  const splitter = new GraphemeSplitter();

  return (
    <div className={styles.homePage}>
      <div className={styles.homePageNameHeading}>Bhavit Wadhwa</div>

      <div className={styles.typeContainer}>
        <TypeAnimation
          className={styles.type}
          splitter={(str) => splitter.splitGraphemes(str)}
          sequence={[
            "I can turn caffeine ☕ into code.",
            5000,
            "I like 🏂 snowboarding...",
            2000,
            "I like 🥾 hiking trails.",
            5000,
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={30}
          style={{
            fontSize: "1.5rem",
            display: "inline-block",
            lineHeight: "2rem",
          }}
          repeat={Infinity}
        />
      </div>
    </div>
  );
};

export default HomePage;
