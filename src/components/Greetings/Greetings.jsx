import React from "react";
import styles from "./Greetings.module.css";

export default function Greetings({ user }) {
  return <div className={styles.greeting}>Have a nice day {user} 🤍 </div>;
}
