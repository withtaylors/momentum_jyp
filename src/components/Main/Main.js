import React, { useEffect, useState } from "react";
import Clock from "../Clock/Clock";
import ToDoList from "../ToDoList/ToDoList";
import Form from "../Form/Form";
import Weather from "../Weather/Weather";
import styles from "./Main.module.css";
import Greetings from "../Greetings/Greetings";

function Main() {
  const [user, setUser] = useState();
  let value;

  const handleChange = (e) => {
    value = e.target.value;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(value);
    localStorage.setItem("user", value);
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) setUser(user);
  });
  return (
    <section className={styles.container}>
      <Weather />
      <ToDoList />
      <Clock />
      {!user ? (
        <Form handleSubmit={handleSubmit} handleChange={handleChange} />
      ) : (
        <Greetings user={user} />
      )}
    </section>
  );
}

export default Main;
