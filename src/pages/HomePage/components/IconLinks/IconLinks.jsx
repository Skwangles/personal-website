import React from "react";

import { GitHub, Linkedin } from "react-feather";

import styles from "./IconLinks.module.css";

const IconLinks = () => {
  return (
    <div className={styles.container}>
      <a
        className={styles.icon}
        href="https://www.linkedin.com/in/xanderstokes/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin color="#faf7f6" size={32} strokeWidth="0.9px" />
      </a>

      <a
        className={styles.icon}
        href="https://github.com/skwangles"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHub color="#faf7f6" size={32} strokeWidth="0.9px" />
      </a>
    </div>
  );
};

export default IconLinks;
