import React from 'react';
import './taskItem.css';

const TaskItem = ({ task, index, removeTask, toggleTaskDone }) => {
  return (
    <li className="container__list">
      <button
        className={`js-done ${task.done ? 'done' : ''}`}
        onClick={() => toggleTaskDone(index)}
      />
      <span
        style={{
          textDecoration: task.done ? 'line-through' : 'none',
        }}
      >
        {task.content}
      </span>
      <button className="js-remove" onClick={() => removeTask(index)} />
      <hr />
    </li>
  );
};

export default TaskItem;