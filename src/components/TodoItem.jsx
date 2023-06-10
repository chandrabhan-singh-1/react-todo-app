import React from "react";

const TodoItem = ({
  title,
  description,
  isCompleted,
  updateHandler,
  deleteHandler,
  id,
}) => {
  return (
    <div className="todo">
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div>
        <input
          type="checkbox"
          defaultChecked={isCompleted}
          onChange={() => updateHandler(id)}
        />
        <button onClick={() => deleteHandler(id)} className="btn">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
