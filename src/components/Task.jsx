import React from "react";

const Task = ({ title, description }) => {
  return (
    <>
      <div className="task-box">
        <div className="task">
          <p className="title">{title}</p>
          <p className="description">{description}</p>
          <button>Remove</button>
        </div>
      </div>
    </>
  );
};

export default Task;
