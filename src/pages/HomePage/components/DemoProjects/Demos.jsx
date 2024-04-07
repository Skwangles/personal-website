import React from "react";

import { Triangle, Clipboard, Calendar } from "react-feather";

import styles from "./Demos.module.css";

const Demos = () => {
  return (
    <div className={styles.container}>
      <a
        className={styles.icon}
        href="https://umpires.xanderstokes.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Clipboard color="#faf7f6" size={32} strokeWidth="0.9px" />
      </a>

      <a
        className={styles.icon}
        href="https://sierpinski.skwangles.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Triangle color="#faf7f6" size={32} strokeWidth="0.9px" />
      </a>

      <a
        className={styles.icon}
        href="https://nzs3910.skwangles.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Calendar color="#faf7f6" size={32} strokeWidth="0.9px" />
      </a>
    </div>
  );
};

export default Demos;
