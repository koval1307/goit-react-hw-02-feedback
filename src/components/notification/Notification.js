import React from "react";
import styles from "./notification.module.css"

function Notification({ message }) {
  return <h2 className={styles.notification}>{message}</h2>;
}

export default Notification;
