import React from "react";

import styles from  "./feedback-options.module.css"
function FeedbackOptions({ options }) {
  return (
    <>
      <button className={styles.btn} name="good" onClick={options}>
        Good
      </button>
      <button className={styles.btn} name="neutral" onClick={options}>
        Neutral
      </button>
      <button className={styles.btn} name="bad" onClick={options}>
        Bad
      </button>
    </>
  );
}

export default FeedbackOptions;
