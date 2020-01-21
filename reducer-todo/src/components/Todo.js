import React from 'react';
import '../App.css';

const Todo = (props) => {
const handleToggle = (id) => {
    props.dispatch({ type: "COMPLETED", id: id })
}
  return (
    <div className={`todo${props.item.completed ? " completed" : ""}`} onClick={() => handleToggle(props.item.id)} key={props.item.id}>
        <h1>{props.item.todo}</h1>
    </div>
  );
}

export default Todo;
