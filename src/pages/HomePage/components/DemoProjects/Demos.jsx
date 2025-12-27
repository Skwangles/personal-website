import React from "react";

import { Triangle, Clipboard, Calendar, Grid } from "react-feather";

import styles from "./Demos.module.css";
import umpireAssignerImage from "../../../../assets/umpireassigner.png";
import sierpinskiImage from "../../../../assets/sierpinski.png";
import nzs3910Image from "../../../../assets/nzs3910.png";
import perlinNoiseImage from "../../../../assets/perlinnoise.png";

const Demos = () => {
  const projects = [
    {
      name: "Umpire Assigner",
      href: "https://umpires.xanderstokes.com/",
      icon: Clipboard,
      image: umpireAssignerImage,
      description: "Factoring in availability restrictions",
    },
    {
      name: "Sierpinski Triangles",
      href: "https://sierpinski.skwangles.com/",
      icon: Triangle,
      image: sierpinskiImage,
      description:
        "Demo of the sierpinski triangles, where a triangle is replaced with 3 triangles every level",
    },
    {
      name: "NZS3910",
      href: "https://nzs3910.skwangles.com/",
      icon: Calendar,
      image: nzs3910Image,
      description:
        "Contractor Claims Key Dates Calculator for NZS3910 standard",
    },
    {
      name: "Perlin Noise Visualisations",
      href: "https://perlinnoise.skwangles.com/",
      icon: Grid,
      image: perlinNoiseImage,
      description:
        "Interactive visualisations of Perlin noise with various rendering modes",
    },
  ];

  return (
    <div className={styles.container}>
      {projects.map((project) => {
        const IconComponent = project.icon;
        return (
          <a
            key={project.name}
            className={styles.card}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.imageContainer}>
              <img
                src={project.image}
                alt={project.name}
                className={styles.previewImage}
              />
              <div className={styles.iconOverlay}>
                <IconComponent color="#faf7f6" size={32} strokeWidth="0.9px" />
              </div>
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{project.name}</h3>
              <p className={styles.cardDescription}>{project.description}</p>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default Demos;
