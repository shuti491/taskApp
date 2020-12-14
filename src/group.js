import React, { useEffect, useState } from "react";
import "./styles.css";

export default function group(props) {
  const bg = props.color;
  console.log(props.list);
  let groupList = props.list;

  const dragStart = (event, id) => {
    console.log(id);
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("id", groupList[id]);
    event.dataTransfer.setDragImage(event.target, 0, 0);
  };

  const dragEnter = (event) => {
    event.preventDefault();
    return true;
  };
  const dragOver = (event) => {
    event.preventDefault();
    return false;
  };
  const dragDrop = (event) => {
    var src = event.dataTransfer.getData("id");
    // groupList.push(src);
    // event.target.appendChild(document.getElementById(src));
    props.update(src);
    event.stopPropagation();
    return false;
  };

  return (
    <div
      className="toDo"
      style={{ backgroundColor: bg }}
      onDragEnter={() => dragEnter(event)}
      onDrop={() => dragDrop(event)}
      onDragOver={() => dragOver(event)}
    >
      {props.type}

      {groupList.map((el, index) => (
        <div
          className="formGroup"
          id={index}
          key={index}
          draggable="true"
          onDragStart={() => dragStart(event, index)}
        >
          <h1 className="text">{el}</h1>
          <div className="box">
            <button className="update">Update</button>
            <button
              className="delete"
              onClick={() => props.delete(index, props.type)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
