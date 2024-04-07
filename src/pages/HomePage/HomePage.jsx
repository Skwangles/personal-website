import React from "react";

import GraphemeSplitter from "grapheme-splitter";
import { TypeAnimation } from "react-type-animation";

import IconLinks from "./components/IconLinks";
import styles from "./HomePage.module.css";
import Demos from "./components/DemoProjects";
import { Divide } from "react-feather";

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
            "Codes stuff and pats cats 🐈",
            5000,
            "Umpires hockey every week 🏑",
            2000,
            "Loves to explore nature 🌳",
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
      <hr style={{width: '15px', color: 'white', height:'1px', borderWidth:'0', backgroundColor:'white'}}/>
      <Demos />
      Fun projects
    </div>
  );
};

export default HomePage;
