import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage2.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/Fullstack1.png")} alt="Web icon" />
            <div className={styles.aboutItemText}>
              <h3>Full Stack Developer</h3>
              <p>
                I can Design and Build complete web applications from frontend interfaces to backend systems.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/Mobile.png")} alt="Mobile icon" />
            <div className={styles.aboutItemText}>
              <h3>Mobile App Developer</h3>
              <p>
               I have experience in creating intuitive, cross-platform mobile applications with seamless user experiences and performance.


              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/Robot.png")} alt="Robot icon" />
            <div className={styles.aboutItemText}>
              <h3>Robotics and AI Engineer</h3>
              <p>
                Hands-on experience developing Robotics and AI systems for automation and control.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
