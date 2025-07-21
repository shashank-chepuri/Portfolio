import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import languages from "../../data/languages.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        {/* LEFT SIDE */}
        <div className={styles.leftColumn}>
          {/* Skills Section */}
          <div className={styles.skillsSection}>
            <h3 className={styles.subheading}>Skills</h3>
            <div className={styles.skills}>
              {skills.map((skill, id) => (
                <div key={id} className={styles.skill}>
                  <div className={styles.skillImageContainer}>
                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                  </div>
                  <p>{skill.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Languages Section */}
          <div className={styles.languagesSection}>
            <h3 className={styles.subheading}>Languages</h3>
            <div className={styles.languages}>
              {languages.map((language, id) => (
                <div key={id} className={styles.language}>
                  <div className={styles.languageImageContainer}>
                    <img src={getImageUrl(language.imageSrc)} alt={language.title} />
                  </div>
                  <p>{language.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <ul className={styles.history}>
          {history.map((historyItem, id) => (
            <li key={id} className={styles.historyItem}>
              <img
                src={getImageUrl(historyItem.imageSrc)}
                alt={`${historyItem.organisation} Logo`}
              />
              <div className={styles.historyItemDetails}>
                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                <ul>
                  {historyItem.experiences.map((experience, idx) => (
                    <li key={idx}>{experience}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
