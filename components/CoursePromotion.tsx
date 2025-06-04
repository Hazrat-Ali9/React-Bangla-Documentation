import React from "react";
import styles from "./course-promotion.module.css";

const CoursePromotion: React.FC = () => {
  return (
    <div className={styles.courseContainer}>
      <div className={styles.courseCard}>
        <h2 className={styles.courseTitle}>💡</h2>
        <p className={styles.courseText}>
         {" "}
          <strong className={styles.courseHighlight}>
           
          </strong>{" "}
          
        </p>
        <p className={styles.courseText}>
          {" "}
          <span className={styles.courseHighlight + " " + styles.greenText}>
            
          </span>{" "}
           <span className="courseHighlight blueText"></span>{" "}
          
        </p>
        <p className="courseText">
          {" "}
          <span className={styles.courseHighlight + " " + styles.redText}>
            
          </span>
          {" "}
          <span className={styles.courseHighlight + " " + styles.purpleText}>
            
          </span>{" "}
        
        </p>
        <a
          href="https://wa.me/01788262433"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.courseButton}
        >
          
        </a>
      </div>
    </div>
  );
};

export default CoursePromotion;
