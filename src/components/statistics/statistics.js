import React from "react";
import styles from "./statistics.module.css"

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <h1 className={styles.statistics__title}> Statistics</h1>
      <div className={styles.results}>
        <p className={styles.results__item}>Good: {good}</p>
        <p className={styles.results__item}>Neutral:{neutral}</p>
        <p className={styles.results__item}>Bad: {bad}</p>
      </div>
      <p className={styles.total}> Total: {total}</p>
      <p className={styles.total}> Positive feedback: {positivePercentage} %</p>
    </>
  );
}

export default Statistics;
