import React, { useEffect, useState } from "react";
import styles from "./ToDoList.module.css";

function ToDoList() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => setToDo(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    // 새로운 항목을 배열의 끝에 추가
    setToDos((prevToDos) => [...prevToDos, { text: toDo, isFinished: false }]);
    setToDo("");
  };

  const finishBtn = (index) => {
    setToDos((prevToDos) =>
      prevToDos.map((item, todoIndex) =>
        todoIndex === index ? { ...item, isFinished: true } : item
      )
    );
  };

  const deleteBtn = (index) => {
    setToDos((prevToDos) =>
      prevToDos.filter((item, todoIndex) => todoIndex !== index)
    );
  };

  console.log(toDos);

  return (
    <div className={styles.todo}>
      <div className={`${styles.list} ${styles.active}`}>
        <h3 className={styles.title}>ToDoList</h3>
        <form onSubmit={onSubmit}>
          <input
            className={(styles.listItems, styles.form, styles.input)}
            onChange={onChange}
            value={toDo}
            type="text"
            placeholder="Add ToDo..."
          />
          <button className={styles.todoBtn}>+</button>
        </form>
        <ul className={styles.ul}>
          {toDos.map((item, index) => (
            <li
              key={index}
              style={{
                textDecoration: item.isFinished ? "line-through" : "none",
                color: item.isFinished ? "#424242" : "black",
              }}
            >
              {item.text}
              <div className={styles.button}>
                {!item.isFinished && (
                  <button
                    onClick={() => finishBtn(index)}
                    style={{
                      background: "none",
                      border: "none",
                      outline: "none",
                      cursor: "pointer",
                      marginLeft: "10px",
                    }}
                  >
                    ✔
                  </button>
                )}
                <button
                  onClick={() => deleteBtn(index)}
                  style={{
                    background: "none",
                    border: "none",
                    outline: "none",
                    cursor: "pointer",
                    marginLeft: "10px",
                  }}
                >
                  ✘
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ToDoList;
