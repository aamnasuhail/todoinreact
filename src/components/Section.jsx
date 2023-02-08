import React, { useState } from "react";
import Task from "./Task";
const Section = () => {
  const [task, setTask] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setTask([...task, { title, description }]);
  };
  return (
    <>
      <section>
        <form onSubmit={submitHandler} className="form">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <textarea
            name=""
            placeholder="Description"
            id=""
            cols="30"
            rows="10"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
          <button>Add Task</button>
        </form>
        {task.map((ele, idx) => {
          const addTask = (
            <Task key={idx} title={ele.title} description={ele.description} />
          );

          return addTask;
        })}
      </section>
    </>
  );
};

export default Section;
