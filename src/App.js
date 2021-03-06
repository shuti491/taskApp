import React, { useState, useEffect } from "react";
import "./styles.css";
import Group from "./group";
export default function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [completed, setCompleted] = useState([]);
  const handleclick = () => {
    let task = text;
    if (task.length > 0) {
      setList((prevList) => [...prevList, task]);
      setText("");
    }
  };

  const handleDelete = (index, type) => {
    if (type === "Completed") {
      setCompleted((prev) => {
        let temp = [...prev];
        temp.splice(index, 1);
        return [...temp];
      });
    } else {
      setList((prev) => {
        let temp = [...prev];
        temp.splice(index, 1);
        return [...temp];
      });
    }
  };

  const handleUpdate = () => {};

  const updateCompleted = (el) => {
    setCompleted((prev) => [...prev, el]);
    let valIndex = list.indexOf(el);
    list.splice(valIndex, 1);
    setList(list);
  };

  const upList = (el) => {
    setList((prev) => [...prev, el]);
    let valIndex = completed.indexOf(el);
    completed.splice(valIndex, 1);
    setCompleted(completed);
  };
  //let gList=[{ list:{list},type:"To Do",color:"#6FE5BC",update:{upList},delete:{handleDelete}},{list:{completed},type:"Completed",color:"#4FC5E5",update:{updateCompleted},delete:{handleDelete}}];

  console.log(list);

  return (
    <div className="App">
      <h1>What's plan for today</h1>
      <div className="inputTask">
        <input
          className="task"
          onChange={(event) => setText(event.target.value)}
          value={text}
          onKeyDown={(event) => {
            if (event.keyCode === 13) {
              handleclick();
            }
          }}
        ></input>
        <button className="addTask" onClick={handleclick}>
          Add
        </button>
      </div>
      <div className="tiles">
        <Group
          list={list}
          type="To Do"
          color="#6FE5BC"
          update={upList}
          delete={handleDelete}
        />
        <Group
          list={completed}
          type="Completed"
          color="#4FC5E5"
          update={updateCompleted}
          delete={handleDelete}
        />
      </div>
    </div>
  );
}
