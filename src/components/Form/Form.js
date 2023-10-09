import React from "react";
import styles from "./Form.module.css";

export default function UserForm({ handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.title}>Hello! What's your name?</h2>
      <div className={styles.inputbox}>
        <input type="text" className={styles.input} onChange={handleChange} />
        <button
          type="button"
          className={styles.button}
          onClick={handleSubmit}
        ></button>
      </div>
    </form>
  );
}
