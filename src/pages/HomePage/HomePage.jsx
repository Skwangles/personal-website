import React from "react";

import GraphemeSplitter from "grapheme-splitter";
import { TypeAnimation } from "react-type-animation";

import IconLinks from "./components/IconLinks";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const splitter = new GraphemeSplitter();

  return (
    <div className={styles.homePage}>
      <a
        className={styles.homePageNameHeading}
        href="https://en.wikipedia.org/wiki/Cat"
        target="_blank"
        rel="noopener noreferrer"
      >
        Alexander Stokes
      </a>

      <div className={styles.typeContainer}>
        <TypeAnimation
          className={styles.type}
          splitter={(str) => splitter.splitGraphemes(str)}
          sequence={[
            "Can code features and pat cats 🐈",
            5000,
            "umpire hockey every week 🏑",
            2000,
            "and love to explore the local nature 🌳",
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

      <IconLinks />
    </div>
  );
};

export default HomePage;
